"use client" //force use client even if it was child of a server component
import { userPostWithAvatar } from "../../../(mongodb)/getPosts"
import { LikeComponent } from "./likeComponent"
import { userDetailsClient } from "../../../../page"
import { CommentComponent } from "./comments/commentComponent"
import { ImageComponent } from "./imageComponent"
import { PosterDetails } from "./posterDetails"
import { DeletePostComponent } from "./deleteComponent"


export const PostComponent = ({ post, userDetails }: { post: userPostWithAvatar, userDetails: userDetailsClient | null }) => {

  const postId = post._id;


  const imageURL = post.content.imageURL;

  return (

    <li
      key={postId}
      className="px-2 my-4 ">


      <PosterDetails post={post}/>


      <article
        className="
        border-x border-black border-dashed
        drop-shadow-md
        flex flex-col gap-y-4
        rounded-b
        bg-gradient-to-b from-slate-50 to-slate-200 
        px-4 py-4 mr-6 " tabIndex={0}>

        {userDetails?.username}
        {post.created_by}

        { userDetails?.username == post.created_by &&
            
          <DeletePostComponent/>
            
        }


        {(imageURL && imageURL.length > 0) &&
          <ImageComponent imageURL={imageURL} postId={postId}/>
        }

        <p>{post.content?.textContent}</p>

        <aside className="flex flex-col">
          <LikeComponent userDetails={userDetails} post={post} />
          <CommentComponent userDetails={userDetails} post={post}/>


        </aside>



      </article>

    </li>
  )
}




export const MockPostComponent = () => {

  const random = Math.random();

  return (

    <div
      style={{ height: random * 100 * 3 }}
      className="
      px-2 my-4
      min-h-[100px]
      mx-8
      bg-slate-200 rounded-2xl
      flex justify-between"/>

  )
}

