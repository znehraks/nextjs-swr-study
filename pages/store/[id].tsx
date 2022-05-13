import { useRouter } from "next/router";

const Store = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <div>{router.pathname}</div>
      <div>{router.query.id}</div>
    </div>
  );
};

export default Store;
