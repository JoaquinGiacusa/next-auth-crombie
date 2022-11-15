import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Login } from "components/login";
import { Form } from "components/form";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/profile">Ir al perfil</Link>
      <br />
      <br />
      <br />
      <Login></Login>
      <Form></Form>
    </div>
  );
}
