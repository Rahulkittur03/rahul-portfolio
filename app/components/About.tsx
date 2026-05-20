"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Zap, Target, Heart } from "lucide-react";
import { fadeInUp, stagger } from "./variants";

const highlights = [
  {
    icon: Zap,
    title: "Performance First",
    desc: "I obsess over Lighthouse scores, bundle sizes, and render performance.",
  },
  {
    icon: Target,
    title: "Clean Code",
    desc: "Readable, maintainable, and well-structured code is non-negotiable.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    desc: "Every pixel and interaction is designed with the end user in mind.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              Get to know me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo / Avatar */}
            <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Decorative rings */}
                <motion.div
                  className="absolute -inset-4 rounded-2xl border border-indigo-500/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -inset-8 rounded-2xl border border-violet-500/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                {/* Profile image placeholder */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-violet-600/20 border border-indigo-500/20 flex items-center justify-center">
                  {/* Replace with <Image src="/profile.jpg" alt="Rahul Kittur" fill className="object-cover" /> */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-4">
                      <User size={40} className="text-white" />
                    </div>
                    <p className="text-slate-400 text-sm">Add your photo</p>
                    <p className="text-slate-500 text-xs mt-1">
                      public/profile.jpg
                    </p>
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    className="absolute bottom-4 right-4 bg-[#1a1a2e] border border-indigo-500/20 rounded-xl px-3 py-2 text-xs font-medium text-indigo-400"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🎓 MCA Graduate
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={stagger} className="space-y-6">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hey there! I&apos;m{" "}
                  <span className="gradient-text">Rahul Kittur</span>
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I&apos;m an MCA graduate and passionate software developer
                  focused on{" "}
                  <span className="text-indigo-400 font-medium">
                    Frontend Development
                  </span>
                  ,{" "}
                  <span className="text-violet-400 font-medium">
                    Android Development
                  </span>
                  , and Java technologies. I enjoy building modern, scalable,
                  and user-friendly applications that solve real-world problems.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-slate-400 leading-relaxed">
                  My primary expertise lies in{" "}
                  <span className="text-white font-medium">
                    React.js, Next.js, JavaScript, and TypeScript
                  </span>
                  , along with strong knowledge of Android development using
                  Java and Android Studio. I&apos;ve built both web and mobile
                  applications — from productivity tools to automation-focused
                  solutions.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-slate-400 leading-relaxed">
                  I&apos;m passionate about continuously learning new
                  technologies, improving user experiences, and building
                  high-quality applications with clean and efficient code. My
                  goal is to grow as a software engineer while contributing to
                  innovative and impactful projects.
                </p>
              </motion.div>

              {/* Quick facts */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-3 pt-2"
              >
                {[
                  "📍 India",
                  "🎓 MCA Graduate",
                  "💼 Open to Work",
                  "🚀 React & Next.js",
                  "📱 Android Dev",
                ].map((fact) => (
                  <span
                    key={fact}
                    className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm text-indigo-300"
                  >
                    {fact}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Philosophy Cards */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-3 gap-6 mt-16"
          >
            {highlights.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 group hover:border-indigo-500/30 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-600/20 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:from-indigo-500/30 group-hover:to-violet-600/30 transition-all">
                  <Icon size={22} className="text-indigo-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
