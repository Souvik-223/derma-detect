import { gsap } from "gsap";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2"> 
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
    </div>
      <div className="About">
        About
      </div>
      <div className="upload">
        Upload a file
      </div>
    </div>
  );
}
