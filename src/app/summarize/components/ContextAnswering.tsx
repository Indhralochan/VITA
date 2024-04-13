// app/page.tsx
'use client';
import { useChat } from '@axflow/models/react';
import ChatBox from './Context/RightPanel';
import Form from './Context/LeftPanel';
import { useDataContext } from '@/app/context';
import { motion } from "framer-motion";
import { LampContainer } from '@/components/ui/lamp';
export default function Home() {
  const {text, selectedValues}= useDataContext();
  const { input, messages, onChange, onSubmit } = useChat({
    url: '/api/chat',
    body: {
      context: text+selectedValues,
    },
  });
  return (
    <div className="flex flex-col mt-2 justify-center align-center">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="py-4 w-[1000px] bg-clip-text text-center font-medium tracking-tight text-transparent"
      >
        <div className="flex flex-col items-center w-full mt-10 h-screen pr-5 justify-center gap-4 mt-10">
      <ChatBox messages={messages} />
      <Form input={input} onChange={onChange} onSubmit={onSubmit} />
    </div>
      </motion.h1>
    </LampContainer>
    </div>
  );
}