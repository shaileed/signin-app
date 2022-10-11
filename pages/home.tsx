import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/hooks";

const Home = () => {
    const loginUser = useAppSelector(state=>state.users.logedInUser);
    const route = useRouter();
    //if loginuser is empty go to default page
    useEffect(()=>{
        if(loginUser.name == "" || loginUser.name == null) {
            route.push("/");
        }
    },[loginUser]);
    

    return(
        <div>
            <h1>hello {loginUser.name}!</h1>
        </div>
    );
}

export default Home;