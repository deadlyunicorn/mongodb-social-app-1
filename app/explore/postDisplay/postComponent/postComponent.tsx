import Link from "next/link"
import Image from "next/image"
import { formatDate, formatHours } from "../../../(lib)/formatDate"
import { userPost } from "../../../(mongodb)/getPosts"
import { LikeComponent } from "./likeComponent"
import { userDetailsClient } from "../../page"

export type userPostWithAvatar = userPost & { avatarURL: string }

export const PostComponent = ({ post, userDetails }: { post: userPostWithAvatar,userDetails:userDetailsClient|null }) => {

  const postDate = new Date(post.created_at);

  return (

    <li
      key={postDate.getTime()}
      className="px-2 my-4">


      <div className="
        mt-1 mr-2
        bg-sky-100 rounded-2xl
        flex justify-between">



        <div className="
        flex  gap-x-2
        flex-row-reverse justify-end 
        ">

          <Link
            className="self-end peer"
            tabIndex={0} href={`user/${post.created_by}`}>

            <p >@{String(post.created_by)}</p>

          </Link>

          <Link
            className="peer hover:brightness-110 peer-hover:brightness-110  "
            href={`user/${post.created_by}`}>
            <Image
              className="rounded-r-full "
              width={50}
              height={50}
              src={post.avatarURL || '/favicon.svg'}
              alt={`${post.created_by}'s avatar`} />

          </Link>


        </div>

        <time className="flex justify-end gap-x-2 py-1 px-2 ">
          <p>{formatDate(postDate)}</p>
          <p>{formatHours(postDate)}</p>
        </time>

      </div>




      <article
        className="
        flex flex-col gap-y-4
        rounded-b-lg
        bg-sky-100 
        pl-4 py-4 mr-6 " tabIndex={0}>

        {(post.content.imageURL && post.content.imageURL.length > 0) &&
          <Image
            className="aspect-square place-self-center"
            src={post.content.imageURL}
            alt="No post image description provided"
            width={200}
            height={200}
          />}

        <p>{post.content?.textContent}</p>

   



      </article>

    </li>
  )
} 



const CommentComponent = () => (
  <div>Comments</div> 
)