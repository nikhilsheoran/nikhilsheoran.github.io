import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-start w-full h-screen">
      <div className="flex flex-row w-full justify-around py-2 px-4 my-8">
        <Link href="/">
          <div className="text-center text-5xl font-bold font-sans hover:cursor-pointer text-[#3BC97C]">
            Home
          </div>
        </Link>
        <Link href="/about">
          <div className="text-center text-5xl font-bold font-sans hover:cursor-pointer text-[#09C3F2]">
            About Me
          </div>
        </Link>
        <Link href="/">
          <div className="text-center text-5xl font-bold font-sans hover:cursor-pointer">
            Watch on
            <div className=" relative inline">
            <Image src={require("../public/images/yt-icon.svg")} layout="responsive" objectFit="contain" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-row w-full justify-between py-2 px-4 my-8">
        <div className="flex flex-col ">
          <div>
            <h2 className="font-sans">Hi! I am</h2>
            <h1 className="font-sans text-[#FF6B6C]">Nikhil Sheoran</h1>
          </div>
          <div className="font-serif text-[#FFC145]">I try to learn new skills every day and document the learning process.</div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
