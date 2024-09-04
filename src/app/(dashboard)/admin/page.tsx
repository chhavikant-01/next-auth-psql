import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Page = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);

    if(session?.user){
        return (
            <div>
                <h1 className="text-2xl">Welcome to admin {session?.user.username} </h1>
            </div>
        );
    }
    return (
        <div>
            <h1 className="text-2xl">Please login to see this admin page </h1>
        </div>
    );
};    

export default Page;