import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/admin" className={buttonVariants()}>
        Open Admin Page
      </Link>

      <h2>
        Client Session
      </h2>
      <User />
      <h2>Server Session</h2>
      {JSON.stringify(session)}

    </div>
  );
}
