import getAccessToken from "../../lib/spotify";
import Layout from "../../components/layout";
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Tracklist from "../../components/tracklist";

const Search = ({ query_result, search_string }) => {
  
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <Layout>
    <div class="space-y-8">
    <h1 class="text-gray-900 font-bold text-lg md:text-xl">Results for "{search_string}"</h1>

        <Tracklist tracks={query_result.tracks.items}></Tracklist>
            
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {

    const { access_token } = await getAccessToken();
  
    const search_results = await fetch(
      `https://api.spotify.com/v1/search?query=${params.keyword}&limit=10&type=track&market=US`,
      { headers: { Authorization: "Bearer " + access_token } }
    );
  
    const releases_json = await search_results.json();
    const query_result = releases_json;
    const search_string = params.keyword;
    
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        query_result,
        search_string
      },
    };
}

export async function getStaticPaths() {
  var arr = ["1"];

  // Get the paths we want to pre-render based on posts
  const paths = arr.map((track) => ({
    params: { keyword: track },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export default Search;
