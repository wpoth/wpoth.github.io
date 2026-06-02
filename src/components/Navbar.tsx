"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Container } from "./Container";

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const lastScrollY = useRef(0);

  const { scrollY, scrollYProgress } = useScroll();

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  // ---------------------------
  // ACTIVE SECTION TRACKING
  // ---------------------------
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight / 3;

      let current = "hero";

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        if (scrollPosition >= el.offsetTop) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------------------
  // NAV HIDE ON SCROLL VELOCITY
  // ---------------------------
  useMotionValueEvent(scrollY, "change", (latest) => {
    const velocity = latest - lastScrollY.current;

    if (velocity > 10 && latest > 150) {
      setHidden(true);
    } else if (velocity < -10) {
      setHidden(false);
    }

    lastScrollY.current = latest;
  });

  // ---------------------------
  // UNDERLINE POSITIONING
  // ---------------------------
  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const el = navRefs.current[activeSection];
    const parent = el?.parentElement;

    if (!el || !parent) return;

    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    setUnderline({
      left: elRect.left - parentRect.left,
      width: elRect.width,
    });
  }, [activeSection]);

  // ---------------------------
  // SCROLL TO SECTION
  // ---------------------------
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMobileOpen(false);
  };

  // ---------------------------
  // DRAWER ANIMATION
  // ---------------------------
  const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
      },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.2 },
    },
  } as const;

  return (
    <>
      {/* --------------------------- */}
      {/* SCROLL PROGRESS BAR */}
      {/* --------------------------- */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-orange-500"
      />

      {/* --------------------------- */}
      {/* NAVBAR */}
      {/* --------------------------- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md"
      >
        <Container className="relative flex h-16 items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-2xl font-light text-transparent"
          >
            Portfolio
          </div>

          {/* DESKTOP NAV */}
          <div className="relative hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                ref={(el) => {
                  navRefs.current[item.id] = el;
                }}
                whileHover={{ y: -2 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-light transition-colors ${
                  activeSection === item.id
                    ? "text-orange-500"
                    : "text-black"
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            {/* UNDERLINE */}
            <motion.div
              className="absolute bottom-0 h-[2px] bg-orange-500"
              animate={{
                left: underline.left,
                width: underline.width,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <span className="h-[2px] w-6 bg-black" />
            <span className="h-[2px] w-6 bg-black" />
            <span className="h-[2px] w-6 bg-black" />
          </button>
        </Container>
      </motion.nav>

      {/* --------------------------- */}
      {/* MOBILE DRAWER */}
      {/* --------------------------- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-[75%] max-w-sm bg-white shadow-xl"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between border-b p-6">
                <span className="text-lg font-light">Menu</span>
                <button onClick={() => setMobileOpen(false)}>
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-6 p-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() =>
                      scrollToSection(item.id)
                    }
                    className="text-left text-lg font-light"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};