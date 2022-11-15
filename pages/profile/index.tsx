import { Login } from "components/login";
import { getSession, useSession } from "next-auth/react";
import { AppContext } from "next/app";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data: session, status } = useSession({ required: true });

  return (
    <div className="profile-container">
      <h1>Tu perfil</h1>
      <div>
        Sesión iniciada con el mail:{"   "}
        <span style={{ fontWeight: "bold" }}>{session?.user?.email}</span>
      </div>
      <div>
        Nombre:{"   "}
        <span style={{ fontWeight: "bold" }}>{session?.user?.name}</span>
      </div>
      <br />
      <Link href="/">Ir al inicio</Link>
      <Login></Login>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
