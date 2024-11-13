//react
import React from "react";

//components
import Layout from "../components/Layout/Layout";
import Results from "../components/Results/Results";

//utils
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <Layout title="Hulu Clone" description="Hulu Clone">
      <Results results={results} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3${
        requests[genre]?.url || requests.fetchTrending.url
      }`
    );

    const data = await response.json();

    return {
      props: {
        results: data.results || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data from the API:", error);

    return {
      props: {
        results: [],
      },
    };
  }
}
