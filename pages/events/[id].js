import { useRouter } from "next/router";
function DetalEventPage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      {/* get the id value */}
      <h1>{router.query.id}</h1>
      <button onClick={() => router.push("/")}>Redirect Home page</button>
    </div>
  );
}

export default DetalEventPage;
