'use client';
import { motion } from 'framer-motion';
import { FeatureBentoGrid } from './_components/FeatureBentoGrid';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import { IconClipboardCopy } from '@tabler/icons-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative my-10 flex flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="px-4 py-12 md:py-20 lg:py-24">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-100">
          {"🩺 MedAgent: Your AI-Powered Healthcare Companion"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: 'easeInOut',
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="relative z-10 mx-auto max-w-xl py-6 text-center text-base md:text-lg font-normal text-gray-600 dark:text-gray-400"
        >
          Discover personalized health insights, schedule appointments, and interact with our AI voice agent for seamless medical guidance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            className="w-48 rounded-lg bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Get Started with MedAgent"
          >
            <a href="/sign-in">Get Started</a>
          </Button>
          <Button
            variant="outline"
            className="w-48 rounded-lg border-teal-500 text-teal-500 hover:bg-teal-100 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/20 font-medium transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Learn More about MedAgent"
          >
            <a href="/about">Learn More</a>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="relative z-10 mt-12 rounded-2xl border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-gray-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <div
              className="aspect-[16/9] h-auto w-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center"
              aria-label="Medical Dashboard Preview"
            >
              <IconClipboardCopy className="h-16 w-16 text-white" />
            </div>
          </div>
        </motion.div>
      </div>
      <FeatureBentoGrid />
    </div>
  );
}

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-200 px-6 py-3 dark:border-neutral-800 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center gap-2">
        {/* Logo Section */}
             <div className="flex items-center gap-2">
               <Image src="/logo.svg" alt="DiagnoAi Logo" width={40} height={40} className="object-contain" />
               <span className="text-xl font-semibold tracking-tight">
                 Diagno<span className="text-red-500">A</span>i
               </span>
             </div>
      </div>
      {!user ? (
        <Button
          className="w-24 rounded-lg bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
          aria-label="Login to MedAgent"
        >
          <a href="/sign-in">Login</a>
        </Button>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            className="w-28 rounded-lg bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Go to Dashboard"
          >
            <a href="/dashboard">Dashboard</a>
          </Button>
          <UserButton />
        </div>
      )}
    </nav>
  );
};
