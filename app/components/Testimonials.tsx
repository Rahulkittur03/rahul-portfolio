"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { fadeInUp, stagger } from "./variants";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  relation: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Senior Developer",
    company: "Tech Company",
    avatar: "PS",
    quote:
      "Rahul is an exceptional developer who consistently delivers clean, well-structured code. His attention to detail and passion for performance optimization made a real difference in our project. He's the kind of developer every team wants.",
    relation: "Colleague",
  },
  {
    name: "Arjun Mehta",
    role: "Project Manager",
    company: "Startup",
    avatar: "AM",
    quote:
      "Working with Rahul was a great experience. He understood requirements quickly, communicated proactively, and delivered the React dashboard ahead of schedule. His knowledge of both frontend and Android development is impressive.",
    relation: "Client",
  },
  {
    name: "Sneha Patel",
    role: "UI/UX Designer",
    company: "Design Studio",
    avatar: "SP",
    quote:
      "Rahul has a rare ability to translate designs into pixel-perfect implementations. He asks the right questions, respects design intent, and always finds elegant solutions to complex UI challenges. A true frontend craftsman.",
    relation: "Collaborator",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-[#0a0a14]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              What people say
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
              <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Kind words from colleagues, clients, and collaborators I&apos;ve
              had the pleasure of working with.
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="glass rounded-3xl p-8 sm:p-12 overflow-hidden min-h-[280px] flex flex-col justify-between">
              {/* Quote icon */}
              <Quote
                size={48}
                className="text-indigo-500/20 absolute top-8 right-8"
                fill="currentColor"
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        {testimonials[current].name}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {testimonials[current].role} at{" "}
                        {testimonials[current].company}
                      </p>
                    </div>
                    <span className="ml-auto px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-medium">
                      {testimonials[current].relation}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <motion.button
                onClick={prev}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`rounded-full transition-all ${
                      i === current
                        ? "w-6 h-2 bg-indigo-500"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* LinkedIn note */}
          <motion.p
            variants={fadeInUp}
            className="text-center text-slate-500 text-sm mt-8"
          >
            More recommendations on{" "}
            <a
              href="https://linkedin.com/in/rahulkittur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
            >
              LinkedIn
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
