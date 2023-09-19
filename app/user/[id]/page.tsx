import { MultipleRowsWrapper } from "@/app/(components)/FormWrapper"
import { LogOutForm } from "@/app/(components)/LogoutForm"
import { getUserInfo } from "@/app/(mongodb)/user"
import { supabaseCredentials } from "@/app/(supabase)/global"
import {  createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"
import { UserInfoComponent } from "./UserInfoComponent"
import { ProfileCreationForm } from "./ProfileCreationForm"
import { ErrorSection } from "@/app/(components)/ErrorSection"

export const dynamic = 'force-dynamic'


export const generateMetadata = ({params}:{params:{id:string}}) =>  {

  return {
    title:params.id
  }
}

const UserProfile = async (
  {params,searchParams}
  :{
    params:{
      id:string
    },
    searchParams:{
      error?:string;
    }
  }
) => {


  const supabase = createServerComponentClient({cookies},supabaseCredentials);
  
  
  let signedUserEmail;
  let signedUserId;


  await supabase.auth.getUser()
    .then(({data})=>{
        signedUserEmail = data.user?.email;
        signedUserId = data.user?.id;
  })
  // params.id
  const userInfo = await getUserInfo({username:String(params.id)});

  const ownsProfile = signedUserEmail == userInfo?.email;
  

  return (
    <MultipleRowsWrapper>

      {searchParams.error&&
        <ErrorSection path={`/user/${params.id}`}>{searchParams.error}</ErrorSection>}
      {
      userInfo 
      ? 
        <>
        <UserInfoComponent 
          ownsProfile={ownsProfile}
          userInfo={userInfo}/>
          {
            (userInfo.email == signedUserEmail) 
            && <AccountOptions/>
          }
        </>
          
      : 
        
        ownsProfile?<>
          <section className="text-center">

          You have successfully registered your account.
          <br/>Now you can choose a username to start socializing!
          <br/>(no pun intended)


          <ProfileCreationForm email={String(signedUserEmail)}/>

          </section>
          <AccountOptions/>
        </>
          


        :<section>
          the user you are looking for doesn&apos;t exist
        </section>
        }

       
        </MultipleRowsWrapper>

  )
}



const AccountOptions = () => (
  <aside className="w-fit self-center">
    <section className="flex flex-col gap-y-2 items-center">
      <LogOutForm/>
      <Link
        tabIndex={0}
        className="capitalize"
        href={'/account/delete'}>delete account</Link>


    </section>
  </aside>
)




export default UserProfile;