"use server"

import { getMongoClient } from "@/app/lib/mongoClient";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { commentServer } from "./getComments";
import { getSessionDetails } from "@/app/api/mongodb/user";

export const commentPost = async (postId: string, commentContent: string) => {


  const client = getMongoClient();

  const user = await getSessionDetails();
  if (!user) { redirect('/login?error=Network error, check if you are logged in'); }

  const session = client.startSession();


  try {

    session.startTransaction();

    const posts = client.db('the-amazing-social-app').collection('posts');
    const comments = client.db('the-amazing-social-app').collection('comments');


    const commentId = new ObjectId()

    const comment:commentServer = {
      _id: commentId,
      postId: new ObjectId(postId),
      content: commentContent,
      created_by: user._id,
      created_at: new Date()
    }

    const createComment = await comments.insertOne(comment);


    const insertCommentToPosts = await posts.updateOne({ _id: new ObjectId(postId)},{$push:{comments:commentId}});
    await session.commitTransaction();

    return createComment;

  }
  catch (err) {
    redirect(`/explore?error=${err}`);
  }
  finally {

    await client.close();

  }


}
