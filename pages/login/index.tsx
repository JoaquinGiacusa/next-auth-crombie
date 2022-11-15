import { Login } from "components/login";
import { getSession } from "next-auth/react";
import Link from "next/link";
// import { getSession, signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <Login></Login>
      <br />
      <br />
      <Link href="/">Ir al inicio</Link>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
