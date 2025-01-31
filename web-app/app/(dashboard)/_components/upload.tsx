"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Output } from "./ouput";
import { Boxes } from "@/components/ui/background-boxes";

export default function Upload() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="h-[50rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="flex flex-row w-full justify-around container my-9">
        <div className="flex flex-col items-center justify-start w-[30vw] relative z-20">
          <p className="text-4xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Upload the image
          </p>
          <div
            id="upload"
            className="w-full py-5 max-w-4xl mx-auto min-h-96 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg bg-slate-800/50 backdrop-blur-2xl"
          >
            <FileUpload onChange={handleFileUpload} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-start w-[30vw] relative z-20">
          <p className="text-4xl text-center sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Output
          </p>
          <div>
            <Output />
          </div>
        </div>
      </div>
    </div>
  );
}
