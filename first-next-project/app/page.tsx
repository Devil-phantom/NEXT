import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/navigation";



export default function Home() {
  return (
   <main>
    <Navigation/>
    <div className="ml-7">
    <div className="flex">
      <div className="w-2/3 overflow-hidden">
        <h1 className="text-9xl mt-48 font-mono">Hello world!</h1>
      <div className="font-mono text-xl w-4/5 mt-9">
      <p>
        This is the first next.js project that I have created starting with little to no knowledge about TailwindCss, react and next.js itself.
      </p>
      <hr className="mt-3"></hr>
      <p className="mt-2">
       To view some data fetching form jsonplaceholder.typicode.com & Cat API.com:
      </p>
      <div className="mt-3">
      <Link href='/APIcalls' className="p-2 hover:bg-white hover:text-black rounded">CLICK HERE.</Link>
      </div>
      
    
      </div>
      </div>
      <div className="bg-white rounded-full w-40 h-40 mt-60 ml-10 overflow-hidden border items-center flex justify-center animate-[spin_2.5s_linear_infinite]">
      <div className="bg-zinc-950 rounded-full w-32 h-32 ">
      <div className=" bg-zinc-950 rotate-90  w-20 h-20 -mt-5 -ml-5"></div>
      </div>
      </div>
      <div className="bg-white rounded-full w-60 h-60 mt-96 ml-10 overflow-hidden border items-center flex justify-center animate-[spin_5s_linear_infinite]">
      <div className="bg-zinc-950 rounded-full w-48 h-48 ">
      <div className=" bg-zinc-950 rotate-90  w-28 h-28 -mt-6 -ml-6"></div>
      </div>
      </div>
 
    </div>

    </div>
   </main>
   
  );
}
