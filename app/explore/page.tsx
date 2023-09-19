import { MultipleRowsWrapper } from "../(components)/FormWrapper";
import { ErrorSection } from "../(components)/ErrorSection";
import Link from "next/link";
import { PostSection } from "./postsSection";
import { getPosts, userPost } from "../(mongodb)/getPosts";
import { getPostsPageLimit } from "../(lib)/postLimit";
import { CreatePostSection } from "./postCreationForm";

const ExplorePage = async ({ searchParams }: { searchParams: { error?: string } }) => {

  const firstPagePosts = PostsToClient(await getPosts({ page: 1 }));

  const maxPages = await getPostsPageLimit() || 0;

  return (


    <MultipleRowsWrapper>

      {searchParams.error &&
        <ErrorSection path="/explore">

          {searchParams.error}
        </ErrorSection>
      }


      <CreatePostSection />

      <PostSection
        key={1}
        maxPages={maxPages}
        // @ts-ignore (we can't pass Date to client.)
        firstPagePosts={firstPagePosts} />


    </MultipleRowsWrapper>

  )
}





export default ExplorePage;

const PostsToClient = (userPostArray:userPost[]|null) => {

  return userPostArray?.map(post => (
    {
      comments: post.comments,
      likers: post.likers,
      content: post.content,
      created_by: post.created_by,
      created_at: post.created_at.getTime()
    }

  ))

}