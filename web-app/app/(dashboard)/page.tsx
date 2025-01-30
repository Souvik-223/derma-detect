"use client";

import { gsap } from "gsap";
import React, { useState } from "react";
import Navbar from "./_components/navbar";
import { FileUpload } from "@/components/ui/file-upload";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900">
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>

      {/* About Section  */}

      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          About App
        </motion.h1>
      </LampContainer>

      {/* Upload Section */}
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
      {/* <div
            id="upload"
            className="w-full max-w-4xl mx-auto min-h-96 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg"
          >
            <FileUpload onChange={handleFileUpload} />
          </div> */}
    </div>
  );
}
