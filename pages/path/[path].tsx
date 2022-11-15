import { Form } from "components/form";
import Link from "next/link";
import { useRouter } from "next/router";

const PathPage = () => {
  const router = useRouter();
  //   console.log(router.query.path);
  const { path } = router.query;

  return (
    <div>
      <Link href="/">Ir al inicio</Link>
      <h2>{path}</h2>
      <Form></Form>
    </div>
  );
};

export default PathPage;
