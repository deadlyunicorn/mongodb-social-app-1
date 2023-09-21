"use server"
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import { postLimit } from "../(lib)/postLimit";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version




export const getPosts = async (
  query: {
    page: number,
    postsToMatch? : ObjectId[]
  })
  : Promise<userPost[] | null> => {


    const postsToMatch = query.postsToMatch || [];

    const pipeline =[
      {$match:{
        verified:true, 
        _id:postsToMatch.length>0?{$in:postsToMatch}:{$exists:true},
      }},
      {$sort:{"created_at":-1}},
      {$skip:(query.page-1)*postLimit},
      {$limit:postLimit}]


  const client = new MongoClient(process.env.MONGODB_URI!, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });


  try {
    await client.connect();

    const posts = client.db('the-amazing-social-app').collection('posts');


    // return await 
    const pipelineResult= posts.aggregate(pipeline);
    const userPosts = [];

    for await (const post of pipelineResult){
      userPosts.push(post);
    }

    return userPosts as unknown as userPost[];
      
      // .then(res=>{
      //   console.log(res);
      //   return res as unknown as userPost[];
      // });

    


  } 
  finally {

    await client.close();

  }
}





export type userPost = {
  _id:ObjectId,
  created_by:ObjectId,
  content: {
    textContent:string,
    imageURL?:string
  },
  likers: ObjectId[], //username array
  comments: comment[],
  verified: boolean,
  created_at: Date
}

type comment = {
  _id:ObjectId,
  author: ObjectId, //username
  comment: string,
  created_at: Date,
  verified: boolean,
}


