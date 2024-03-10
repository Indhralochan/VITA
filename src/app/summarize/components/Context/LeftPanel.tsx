// app/form.tsx

import React from 'react';
import Image from 'next/image';
import send from '@/assets/send.svg'
type FormProps = {
  input: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ input, onChange, onSubmit }: FormProps) {
  return (
    <div className="w-[90%] p-10">
      <form onSubmit={onSubmit}>
        <div className="flex gap-4 w-full justify-between">
          <input
            value={input}
            onChange={onChange}
            className="p-4 bg-slate-950 border text-white border-white w-full rounded-lg"
            placeholder="Ask the assistant anything"
          />
          <button
            className="px-6 py-2 bg-slate-950 text-white rounded-lg hover:bg-slate-600"
            type="submit"
          >
            <div className="">
            <Image
                          src={send}
                          alt="send"
                          width={30}
                          height={30}
                          className="object-cover"
                        />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}