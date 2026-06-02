"use client";

import React from "react";
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "./Container";
export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      setHidden(latest > previous && latest > 150);
    }
  });
  const navVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md"
    >
      {" "}
      <Container className="flex h-16 items-center justify-between">
        {" "}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-2xl font-light tracking-tight text-transparent"
          onClick={() => scrollToSection("hero")}
        >
          {" "}
          Portfolio{" "}
        </motion.div>{" "}
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-10 md:flex"
        >
          {" "}
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className="group relative font-light text-black"
            >
              {" "}
              {item.label}{" "}
              <motion.span
                className="absolute bottom-[-4px] left-0 h-[2px] w-full origin-left bg-orange-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />{" "}
            </motion.button>
          ))}{" "}
        </motion.div>{" "}
      </Container>{" "}
    </motion.nav>
  );
};
