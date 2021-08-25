import Link from "next/link";
import Image from "next/image";

export default function Tracklist({ tracks }) {

    return (
        <div class="space-y-2">
            {
                tracks.map((el) => {
                    return (
                        <Link href={"/track/" + el.id.toString()}>
                            <div class="p-2 md:p-6 rounded-xl grid grid-cols-10 gap-3 md:gap-4 hover:bg-gray-100 cursor-pointer transition duration-200">
                                <div class="flex col-span-2">
                                    <img
                                        class="rounded-md w-full max-w-xl"
                                        src={el.album.images[0].url}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div class="flex flex-col items-start justify-start m-auto col-span-6 md:col-span-5 text-left w-full">
                                    <h4 class="font-bold text-xs sm:text-sm md:text-md no-wrap truncate max-w-full">{el.name}</h4>
                                    <div class="flex">
                                        <p class="text-xs text-gray-400 flex">
                                            {el.artists[0].name}
                                        </p>
                                        {el.artists[1] && (
                                            <p class=" text-xs text-gray-400 flex">
                                                , {el.artists[1].name}
                                            </p>
                                        )}
                                    </div>
                                    <p class="text-xs text-gray-400">
                                        {
                                            Math.round(el.duration_ms % 60000 / 1000).toString().length == 2
                                                ?
                                                Math.floor(el.duration_ms / 60000) + ":" + Math.round(el.duration_ms % 60000 / 1000).toString()
                                                :
                                                Math.floor(el.duration_ms / 60000) + ":0" + Math.round(el.duration_ms % 60000 / 1000).toString()
                                        }
                                    </p>
                                </div>


                                {/* <span class="flex-grow"></span> */}
                                <div class="col-span-2 md:col-span-3 flex md:items-center items-end w-full md:justify-center justify-end">
                                    <Link href={el.uri}>
                                        <button class="cursor-pointer my-auto flex items-center justify-center px-2  py-2 bg-gray-50 rounded-md md:space-x-2 hover:bg-green-100 transition duration-200">
                                            <span class="text-gray-900 text-xs font-medium hidden md:flex">Open Spotify</span>
                                            <i class='bx bxl-spotify'></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    );
}