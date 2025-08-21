
'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconBoxAlignRightFilled,
} from '@tabler/icons-react';

const items = [
  {
    title: 'Symptom Analysis',
    description: (
      <span className="text-sm">
        Analyze symptoms with AI for instant insights and recommendations.
      </span>
    ),
    header: (
      <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 flex-col items-center justify-center p-4"
        aria-label="Symptom Analysis Preview"
      >
        <IconClipboardCopy className="h-12 w-12 text-white" />
        <p className="text-xs text-white font-medium mt-2">AI Symptom Checker</p>
      </div>
    ),
    className: 'md:col-span-1',
    icon: <IconClipboardCopy className="h-5 w-5 text-teal-500" />,
  },
  {
    title: 'Consultation Scheduling',
    description: (
      <span className="text-sm">
        Schedule virtual consultations with specialists seamlessly.
      </span>
    ),
    header: (
      <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 flex-col items-center justify-center p-4"
        aria-label="Consultation Scheduling Preview"
      >
        <IconFileBroken className="h-12 w-12 text-white" />
        <p className="text-xs text-white font-medium mt-2">Book Appointments</p>
      </div>
    ),
    className: 'md:col-span-1',
    icon: <IconFileBroken className="h-5 w-5 text-teal-500" />,
  },
  {
    title: 'AI-Driven Diagnostics',
    description: (
      <span className="text-sm">
        Get fast and accurate preliminary diagnostics with AI.
      </span>
    ),
    header: (
      <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 flex-col items-center justify-center p-4"
        aria-label="AI Diagnostics Preview"
      >
        <IconSignature className="h-12 w-12 text-white" />
        <p className="text-xs text-white font-medium mt-2">Smart Diagnostics</p>
      </div>
    ),
    className: 'md:col-span-1',
    icon: <IconSignature className="h-5 w-5 text-teal-500" />,
  },
  {
    title: 'Voice Interaction',
    description: (
      <span className="text-sm">
        Interact with our AI voice agent for medical queries.
      </span>
    ),
    header: (
      <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 flex-row items-center justify-center gap-4 p-4"
        aria-label="Voice Interaction Preview"
      >
        <div className="flex flex-col items-center">
          <IconTableColumn className="h-10 w-10 text-white" />
          <p className="text-xs text-white font-medium mt-2">"Describe symptoms"</p>
        </div>
        <div className="flex flex-col items-center">
          <IconTableColumn className="h-10 w-10 text-white" />
          <p className="text-xs text-white font-medium mt-2">"Possible diagnosis"</p>
        </div>
      </div>
    ),
    className: 'md:col-span-2',
    icon: <IconTableColumn className="h-5 w-5 text-teal-500" />,
  },
  {
    title: 'Medical Report Summarization',
    description: (
      <span className="text-sm">
        Summarize complex medical reports into clear, concise insights.
      </span>
    ),
    header: (
      <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 flex-col items-center justify-center p-4"
        aria-label="Medical Report Summarization Preview"
      >
        <IconBoxAlignRightFilled className="h-12 w-12 text-white" />
        <p className="text-xs text-white font-medium mt-2">Report Summary</p>
      </div>
    ),
    className: 'md:col-span-1',
    icon: <IconBoxAlignRightFilled className="h-5 w-5 text-teal-500" />,
  },
];

export function FeatureBentoGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto md:auto-rows-[20rem] gap-6 p-4"
    >
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(
              'bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300',
              item.className
            )}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </motion.div>
  );
}
