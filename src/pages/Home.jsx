import React from "react";
import Aside from "../components/Aside";
import Layout from "../components/Layout";
import PostSection from "../components/PostSection";

const Home = () => {
  return (
    <Layout>
      <section id="_home-section">
        {/* Post */}
        <PostSection />

        {/* Aside */}
        <Aside />
      </section>
    </Layout>
  );
};

export default Home;
