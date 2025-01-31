"use client"

import React from 'react'
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent_80% md:text-7xl"
        >
          <h1 className='font-b' style={{ fontFamily: 'Stalinist One, sans-serif' }}>About App</h1>
          <p className='py-10 text-xl text-center'>
            This is a simple app that uses machine learning to detect skin diseases
          </p>
        </motion.h1>
      </LampContainer>
  )
}
