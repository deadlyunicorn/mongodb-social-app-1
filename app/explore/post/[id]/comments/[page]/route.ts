import { NextResponse } from "next/server";
import { commentGet } from "../getComments";
import { getUserInfo } from "@/app/(mongodb)/user";

export const GET = async (request:Request,context:{params:{id:string,page:string}}) =>{

  const postId = context.params.id;
  const page = + context.params.page;

  const comments = await commentGet(postId,page-1)
  .then(async(res)=>{
    if (res){
      return await Promise.all(res.map(
        async(comment)=>{
          const creator = await getUserInfo({_id:comment.created_by});
          return {
            ...comment,
            _id:comment._id.toString(),
            postId:postId.toString(),
            created_by: {
              username: creator?.username,
              avatarSrc: creator?.avatarSrc
            }
          }

        }
      ))
    }
    else{
      return res;
    }
  })


  return NextResponse.json( comments||[] );


}