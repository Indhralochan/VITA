// app/form.tsx

import React from 'react';
import send from '@/assets/send.svg';
import Image from 'next/image'
type FormProps = {
  input: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ input, onChange, onSubmit }: FormProps) {
  return (
    <div className="w-[90%]">
      <form onSubmit={onSubmit}>
        <div className="flex bg-black gap-4 w-full justify-between border-2 rounded-lg border-white">
          <input
            value={input}
            onChange={onChange}
            className="p-4 bg-black  w-full rounded-lg"
            placeholder="Ask the assistant anything"
          />
          <button
            className="px-6 py-2 text-black rounded-lg "
            type="submit"
          >
            <Image src={send} alt="send" />
          </button>
        </div>
      </form>
    </div>
  );
}