"use client";
import React from "react";
import { motion } from "framer-motion";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function AboutContaier() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full max-w-6xl mx-auto justify-center items-center lg:items-start text-primary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Left Side */}
      <motion.section className="w-full lg:w-1/2 flex justify-center" variants={itemVariants}>
        <LeftSide />
      </motion.section>
      
      {/* Right Side */}
      <motion.section className="w-full lg:w-1/2" variants={itemVariants}>
        <RightSide />
      </motion.section>
    </motion.div>
  );
}