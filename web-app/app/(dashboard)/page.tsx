"use client";

import React from "react";
import Navbar from "./_components/navbar";
import About from "./_components/about";
import Upload from "./_components/upload";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900">
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>

      {/* About Section  */}
      <About />

      {/* Upload Section */}
      <Upload/>
    </div>
  );
}
