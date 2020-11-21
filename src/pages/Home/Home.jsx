import React from "react";
import Gallery from "../../components/Gallery";
import { useAsyncData } from "../../hooks/useAsyncData";

import "./Home.css";

const Home = () => {
  const { data, status } = useAsyncData("/v2/list?page=2&limit=10");

  console.log(data);
  return (
    <main>
      <div className="container">
        {status === "pending" && <p>Loading..</p>}
        {status === "success" && <Gallery items={data} />}
      </div>
    </main>
  );
};

export default Home;
