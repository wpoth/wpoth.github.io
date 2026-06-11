'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Container } from '@/components/Container';
import { navItems } from '@/lib/navigation';

const drawerVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 25,
    },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.2 },
  },
} as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  const navRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const lastScrollY = useRef(0);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = 'hero';

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && scrollPosition >= section.offsetTop) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeButton = navRefs.current[activeSection];
    const parent = activeButton?.parentElement;

    if (!activeButton || !parent) return;

    const parentRect = parent.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();

    setUnderline({
      left: buttonRect.left - parentRect.left,
      width: buttonRect.width,
    });
  }, [activeSection]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const velocity = latest - lastScrollY.current;

    if (velocity > 10 && latest > 150) {
      setHidden(true);
    } else if (velocity < -10) {
      setHidden(false);
    }

    lastScrollY.current = latest;
  });

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-orange-500"
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md"
      >
        <Container className="relative flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavigate('hero')}
            className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-2xl font-light text-transparent"
          >
            Portfolio
          </button>

          <div className="relative hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                ref={(element) => {
                  navRefs.current[item.id] = element;
                }}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={() => handleNavigate(item.id)}
                className={`relative font-light transition-colors ${activeSection === item.id ? 'text-orange-500' : 'text-black'
                  }`}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.div
              className="absolute bottom-0 h-[2px] bg-orange-500"
              animate={underline}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="flex flex-col gap-1 md:hidden"
          >
            <span className="h-[2px] w-6 bg-black" />
            <span className="h-[2px] w-6 bg-black" />
            <span className="h-[2px] w-6 bg-black" />
          </button>
        </Container>
      </motion.nav>

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
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-6 p-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigate(item.id)}
                    className="text-left text-lg font-light"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}