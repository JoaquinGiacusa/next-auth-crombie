import { useRouter } from "next/router";

export const Form = () => {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.path.value);

    router.push(`/path/${e.target.path.value}`);
  };

  return (
    <form action="submit" onSubmit={handleSubmit} className={"form-path"}>
      <input type="text" name="path" />
      <button type="submit" className="form-btn">
        Enviar al path
      </button>
    </form>
  );
};
