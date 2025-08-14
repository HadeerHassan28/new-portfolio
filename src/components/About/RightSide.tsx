"use client";
import { myData } from "@/data/myData";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function RightSide() {
  return (
    <motion.div
      className="flex flex-col gap-6 text-white "
      id="right-side-container"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="flex gap-4 flex-col items-start justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Title */}
        <p className="text-lg font-normal text-primary/80">Nice to meet you</p>
        <h2 className="text-2xl lg:text-3xl font-bold text-primary leading-relaxed">
          I&apos;m a Front-End Developer who crafts amazing digital experiences!
        </h2>
        <p className="text-lg font-medium text-primary/90">
          Front-End Developer | ITI Graduated | AAST
        </p>
      </motion.div>

      <hr className="border-primary/30" />

      {/* Personal info */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <span className="font-medium text-primary/80">
          Name: <span className="font-bold text-primary">{myData.myName}</span>
        </span>
        <span className="font-medium text-primary/80">
          Email:{" "}
          <span className="font-bold text-primary">{myData.myEmail}</span>
        </span>
        <span className="font-medium text-primary/80">
          Location:{" "}
          <span className="font-bold text-primary">{myData.myLocation}</span>
        </span>
        <span className="font-medium text-primary/80">
          Availability:{" "}
          <span className="font-bold text-primary">{myData.Availability}</span>
        </span>
      </motion.div>

      {/* Btn CV */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Link
          href={
            "https://drive.google.com/file/d/1Loi6EdxV_2AUy5soby91K3CUE-l3I3vz/view?usp=sharing"
          }
          className="inline-block px-8 py-3 bg-black text-white border border-white font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:text-black "
        >
          Download Resume
        </Link>
      </motion.div>
    </motion.div>
  );
}
