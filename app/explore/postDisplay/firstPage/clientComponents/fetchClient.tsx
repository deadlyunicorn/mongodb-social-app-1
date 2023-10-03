'use client'
import { PostComponent } from "./postComponent/postComponent";
import { userDetailsClient } from "../../../page";
import { useEffect, useState } from "react";
import { userPostWithAvatar } from "../../(mongodb)/getPosts";

export const FetchPostsClient = ({ 
  page, userDetails,
  setCanLoadNext, viewY,
  setError,error }: { 
    
  page: number, userDetails: userDetailsClient | null,
  setCanLoadNext:any, viewY: number, 
  setError:any,error:boolean }) => {

  const [posts, setPosts] = useState<null | userPostWithAvatar[]>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {

    if ( !hasMounted){
      setHasMounted(true)
      setCanLoadNext(false);
      (async () => {
        try{

        await fetch(`/explore/${page}`, { method: "GET" })
          .then( async(res) => await res.json()
          .then( posts => {
            
            setPosts(posts)
          }))
          .finally(()=>{
            setCanLoadNext(true) 
          })
        }
        catch(err){
          setError(true);
        }

      }
      )()
    }


  }, [])


  return (

    <>
      {
        (posts && posts.length > 0 && !error) &&
        <ul>
          {
            posts.map(
              (post) => (
                <PostComponent
                  viewY={viewY}
                  userDetails={userDetails}
                  key={new Date(post.created_at).getTime()}
                  post={post} />
              )
            )
          }
        </ul>
      }
     
    </>
  )
}

