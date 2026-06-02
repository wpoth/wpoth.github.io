"use client";

import React from "react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
export const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      setHidden(latest > previous && latest > 150);
    }
  });
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];
  const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
        staggerChildren: 0.08,
      },
    },
    exit: { x: "100%", transition: { duration: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      {" "}
      {/* NAVBAR */}{" "}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md"
      >
        {" "}
        <Container className="flex h-16 items-center justify-between">
          {" "}
          {/* Logo */}{" "}
          <div
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-2xl font-light tracking-tight text-transparent"
          >
            {" "}
            Portfolio{" "}
          </div>{" "}
          {/* Desktop Nav */}{" "}
          <div className="hidden items-center gap-10 md:flex">
            {" "}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative font-light text-black"
              >
                {" "}
                {item.label}{" "}
                <span className="absolute bottom-[-4px] left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500 transition-transform group-hover:scale-x-100" />{" "}
              </button>
            ))}{" "}
          </div>{" "}
          {/* Mobile Hamburger */}{" "}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMobileOpen(true)}
          >
            {" "}
            <span className="h-[2px] w-6 bg-black" />{" "}
            <span className="h-[2px] w-6 bg-black" />{" "}
            <span className="h-[2px] w-6 bg-black" />{" "}
          </button>{" "}
        </Container>{" "}
      </motion.nav>{" "}
      {/* MOBILE DRAWER */}{" "}
      <AnimatePresence>
        {" "}
        {mobileOpen && (
          <>
            {" "}
            {/* Backdrop */}{" "}
            <motion.div
              className="fixed inset-0 z-50 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />{" "}
            {/* Drawer */}{" "}
            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-[75%] max-w-sm bg-white shadow-xl"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {" "}
              <div className="flex items-center justify-between border-b p-6">
                {" "}
                <span className="text-lg font-light">Menu</span>{" "}
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-xl"
                >
                  {" "}
                  ✕{" "}
                </button>{" "}
              </div>{" "}
              <div className="flex flex-col gap-6 p-6">
                {" "}
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg font-light text-black"
                  >
                    {" "}
                    {item.label}{" "}
                  </motion.button>
                ))}{" "}
              </div>{" "}
            </motion.div>{" "}
          </>
        )}{" "}
      </AnimatePresence>{" "}
    </>
  );
};
