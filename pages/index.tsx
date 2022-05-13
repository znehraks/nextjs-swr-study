import type { GetServerSideProps, NextPage } from "next";
import useSWR, { SWRConfig, SWRConfiguration } from "swr";
import { fetcher, IStore } from "../api";
import HomeLayout from "../layout/Home";

const Home: NextPage = ({ fallback }: SWRConfiguration) => {
  // console.log(data);
  const { data, error } = useSWR<IStore[]>("/stores", fetcher, {});
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <SWRConfig value={{ fallback }}>
      <HomeLayout>
        {data.map((elem) => (
          <div className="title" key={elem.id}>
            <div>{elem.id}</div>
            <div>{elem.thumb}</div>
          </div>
        ))}
      </HomeLayout>
    </SWRConfig>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const data = await fetcher("/stores"); // 그냥 axios fetch
  const data = await fetcher("/stores");
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      fallback: {
        "/stores": data,
      },
    },
  };
};

export default Home;
