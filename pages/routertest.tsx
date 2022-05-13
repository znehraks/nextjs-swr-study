import { useRouter } from "next/router";

const RouterTest = () => {
  const router = useRouter();

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "10vw" }}>
      Router Test
      <button
        onClick={() => {
          router.push({ pathname: "/store/[id]", query: { id: 3 } });
        }}
      >
        Go to Store by router.push (뒤로가기 가능)
      </button>
      <button
        onClick={() => {
          router.replace({ pathname: "/store/[id]", query: { id: 3 } });
        }}
      >
        Go to Store by router.replace (뒤로가기 불가능)
      </button>
    </div>
  );
};
export default RouterTest;
