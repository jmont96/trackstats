import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";
import getAccessToken from "../lib/spotify";
import React, { useState, useEffect } from "react";
import Tracklist from "../components/tracklist";


function Index({ returnable }) {
  // useEffect(() => {
  //  
  // }, []);

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <div class="space-y-8 mb-24">
        <h1 class="text-gray-900 font-bold text-lg md:text-xl">Check out these random tracks</h1>
        <Tracklist tracks={returnable.tracks.items}></Tracklist>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { access_token } = await getAccessToken();
  //make a variable with some search queries and put it in an array. (you can create more search queries.
  const getRandomSongsArray = [
    "%25a%25",
    "a%25",
    "%25e%25",
    "e%25",
    "%25i%25",
    "i%25",
    "%25o%25",
    "o%25",
  ];

  //This will get a random result out of the array above
  const getRandomSongs =
    getRandomSongsArray[Math.floor(Math.random() * getRandomSongsArray.length)];

  //This will get a random offset number between 1 and 1000. So you get a random track. (you can change the numbers btw)
  const getRandomOffset = Math.floor(Math.random() * 1000);

  const releases = await fetch(
    `https://api.spotify.com/v1/search?query=${getRandomSongs}&offset=${getRandomOffset}&limit=10&type=track&market=US`,
    { headers: { Authorization: "Bearer " + access_token } }
  );

  const releases_json = await releases.json();
  const returnable = releases_json;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      returnable,
    },
  };
}



export default Index;
