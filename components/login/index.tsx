import { getSession, signIn, signOut, useSession } from "next-auth/react";

export const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Cerrar Secion</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Iniciar sesion</button>
    </>
  );
};
