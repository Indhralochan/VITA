// app/page.tsx

'use client';
import { useChat } from '@axflow/models/react';
import ChatBox from './Context/RightPanel';
import Form from './Context/LeftPanel';
import MainLeftPanel from './Context/MainLeftPanel';

export default function Home() {
  const { input, messages, onChange, onSubmit } = useChat({
    url: '/api/chat',
  });
  return (
    <div className="flex flex-row mt-2">
      <div className="w-[30%]"> <MainLeftPanel/></div>
    <main className="flex flex-col items-end w-full h-screen pr-5 justify-center gap-4">
      <ChatBox messages={messages} />
      <Form input={input} onChange={onChange} onSubmit={onSubmit} />
    </main>
    </div>
  );
}