import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

export default function Input({ icon, placeholder }) {

  const [value, setValue] = useState("");
  const icon_bool = icon;
  const router = useRouter();
  var submitted = 0;
 
  const callback = useCallback(() => {
    if(value != ""){
      changeRoute()
    }
  }, [changeRoute])

  function changeRoute() {
    if(value != ""){
      router.push('/search/' + value);
    }
  }

  const handleChange = (e)  => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    submitted = 1;
    e.preventDefault();
    callback();
  }



  return (
    <div class="w-full relative">
      <form class="relative" onSubmit={handleSubmit}>
      <input
       type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className="w-full flex rounded-lg ring-2 ring-gray-200 focus:ring-indigo-500 font-medium text-xs sm:text-sm p-2 md:p-4 focus:outline-none transition duration-200"
      ></input>
      
      {icon && submitted==0 && <button type="submit" class="absolute right-2 top-1.5 md:right-4 md:top-2.5"><i class={"bx pl-2 bx-search  md:text-2xl text-gray-300 cursor-pointer hover:text-indigo-500 transition duration-200"} icon_bool={true}></i></button>}

      </form>
    </div>
  );
}
