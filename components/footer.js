import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function Footer() {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    }

    return (
        <div>
            <div class="bg-indigo-500 flex flex-col px-4 py-8 md:py-12 lg:py-16 md:p-8 md:justify-center items-center w-full">
                <h2 class=" text-xl md:text-2xl text-white font-bold">Like this tool?</h2>
                <p class="text-indigo-200 text-sm mt-2">Subscribe with your email to be notified of new features! </p>
                <form action="https://formsubmit.co/jmont96@gmail.com" method="POST" class="mt-6 w-full flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
                    <input
                        type="emails"
                        placeholder="johndoe@email.com"
                        class="w-full md:max-w-sm bg-indigo-400 text-white text-md rounded-md p-3 placeholder-indigo-200 outline-none"
                        onChange={handleChange}>
                    </input>
                    <button type="submit" name="button" class="bg-indigo-700 text-white rounded-md text-sm p-3 hover:bg-indigo-600 transition duration-200 min-w-full md:min-w-min">Subscribe!</button>
                </form>
            </div>
            <div class="bg-gray-800 md:hidden flex flex-row px-2 md:px-8 py-2 md:py-2 lg:py-4 md:justify-center items-center w-full space-x-2">
                <div class="flex items-center justify-center w-full space-x-4">
                    <Link href="/about"><p class="text-sm  rounded-md text-gray-300 hover:bg-gray-700 transition duration-200 px-3 py-2">About</p></Link>
                    <Link href="/about"><p class="text-sm  rounded-md text-gray-300 hover:bg-gray-700 transition duration-200 px-3 py-2">Support this project</p></Link>

                </div>
            </div>

            <div class="bg-gray-900 flex flex-row px-2 md:px-8 py-2 md:py-2 lg:py-4 md:justify-center items-center w-full space-x-2">
                <Link href="/" class="hidden sm:block">
                    <img class="cursor-pointer hidden sm:block sm:h-18 sm:w-36" src="/images/ts_logo_dark.png"></img>
                </Link>
                <Link href="/">
                    <img class="cursor-pointer sm:hidden h-8 w-8" src="/images/ts_logo_dark_simple.png"></img>
                </Link>
                <span class="flex-grow"></span>
                <div class="md:flex hidden items-center justify-center space-x-2">
                    <Link href="/about"><p class="text-xs  rounded-md text-gray-300 hover:bg-gray-700 transition duration-200 px-3 py-2">About</p></Link>
                    <Link href="/about"><p class="text-xs  rounded-md text-gray-300 hover:bg-gray-700 transition duration-200 px-3 py-2">Support this project</p></Link>

                </div>
                <p class="text-gray-500 text-xs">Project by Jake Montgomery</p>


                <button class=" p-2 flex items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700 transition duration-200"><i class='bx bxl-twitter text-white'></i></button>

                <button class=" p-2 flex items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700 transition duration-200"><i class='bx bxl-linkedin text-white'></i></button>

                <a href="https://www.buymeacoffee.com/jakemontgomery" target="_blank" class="hidden md:flex hover:no-underline">
                    <button class="hover:no-underline  text-white text-xs font-md flex cursor-pointer py-2 px-2 sm:px-3 hover:bg-gray-700 bg-gray-800 transition duration-200 rounded-md items-center space-x-2 justify-center">
                        <span class="font-medium ">Buy me a coffee</span>
                        <i class='bx bx-coffee bx-xs'></i>
                    </button>
                </a>

            </div>
        </div >
    )
}