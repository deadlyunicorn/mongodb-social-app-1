import { MongoClient, ServerApiVersion } from "mongodb";

export const postLimit = 10;

export const getPostsPageLimit = async () => {

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

    const postIterator = await posts.aggregate([
      // { $match: {  } }, 
      { $count: "Visible Posts" }])
    let verifiedPostsCount;

    for await (const verifiedPostsCount of postIterator) {
      return Math.ceil(verifiedPostsCount["Visible Posts"]/postLimit)+1;
    }


  } finally {

    await client.close();

    // Ensures that the client will close when you finish/error

  }
}