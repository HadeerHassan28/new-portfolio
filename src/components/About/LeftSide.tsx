"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function LeftSide() {
  return (
    <motion.div
      className="w-full max-w-md border border-primary/20 rounded-lg p-3 bg-zinc-900/50"
      id="left-side-container"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Image
        alt="my image"
        width={500}
        height={500}
        className="w-full h-auto rounded-lg border border-primary/10"
        src={"/about.jpeg"}
      />
    </motion.div>
  );
}