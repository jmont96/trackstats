import styles from "./layout.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";
import Button from "./button/button";
import Input from "./input";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./footer";

export function spotifyAuth() {
  var client_id = "7ffb6f23d0a94683afe067e223039a15"; // Your client id
  var client_secret = "c9a9312404e84e4c8ef7f1e3358f2d9f"; // Your secret
  var redirect_uri = "http://localhost:3000/posts/first-post"; // Your redirect uri
  var scopes = "user-read-private user-read-email";
}

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div class="">
        {/*************  NAVBAR START  *************/}
        <div class="flex items-center m-4 md:m-8 lg:m-12 xl:m-16 justify-center relative max-w-2xl md:max-w-full">
          {/** Logo Image **/}
          <Link href="/" class="hidden sm:block">
            <img class="cursor-pointer hidden sm:block sm:h-18 sm:w-36 lg:h-24 lg:w-48" src="/images/ts_logo_horizontal.png"></img>
          </Link>
          <Link href="/">
            <img class="cursor-pointer sm:hidden h-12 w-12" src="/images/ts_logo.png"></img>
          </Link>

          <span class="flex-grow"></span>

          {/** Links **/}
          <Link href="/about" class="hidden md:flex">
            <div class="hidden md:flex text-xs font-medium text-gray-500 cursor-pointer py-2 px-3 hover:bg-gray-100 transition duration-200 rounded-md">About</div>
          </Link>
          <a href="https://www.buymeacoffee.com/jakemontgomery" target="_blank" class="hover:no-underline">
            <button class="hover:no-underline sm:ml-4 text-white text-xs font-md flex cursor-pointer py-2 px-2 sm:px-3 hover:bg-indigo-400 bg-indigo-500 transition duration-200 rounded-md items-center space-x-2 justify-center">
              <span class="font-medium ">Buy me a coffee</span>
              <i class='bx bx-coffee bx-xs'></i>
            </button>
          </a>

          {/** Floating Input **/}
          <div class="max-w-2xl absolute w-full mt-24 md:mt-36 lg:mt-0 lg:w-1/2">
            <Input placeholder="Search for any track" icon="bx-search"></Input>
          </div>

        </div>
        {/*************  NAVBAR END  *************/}


        <div class="max-w-2xl mt-20 md:mt-32 lg:mt-12 mx-auto p-4"> {children} </div>

        <div class="mt-12"><Footer></Footer></div>
      </div>
    </div>
  );
}
