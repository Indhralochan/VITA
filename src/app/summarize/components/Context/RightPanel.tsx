import type { MessageType } from '@axflow/models/shared';

export default function ChatBox({ messages }: { messages: MessageType[] }) {
  return (
    <div className=" pl-10 w-[90%] h-3/4 flex flex-col gap-2 rounded-lg bg-black p-2 overflow-auto whitespace-pre-line">
      {messages &&
        messages.map((message) => {
          return (
            <div
              key={message.id}
              className={
                message.role === 'user'
                  ? 'self-start text-white bg-zinc-700 p-2 rounded-md mr-32'
                  : 'self-end text-white bg-cyan-800 p-2 rounded-md ml-32'
              }
            >
              {message.content}
            </div>
          );
        })}
    </div>
  );
}