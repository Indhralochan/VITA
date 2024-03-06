import type { MessageType } from '@axflow/models/shared';

export default function ChatBox({ messages }: { messages: MessageType[] }) {
  return (
    <div className=" pl-10 w-[90%] h-3/4 flex flex-col gap-2 rounded-lg bg-gray-600/25 p-2 overflow-auto whitespace-pre-line">
      {messages &&
        messages.map((message) => {
          return (
            <div
              key={message.id}
              className={
                message.role === 'user'
                  ? 'self-start text-black bg-white p-2 rounded mr-32'
                  : 'self-end text-black bg-emerald-200 p-2 rounded ml-32'
              }
            >
              {message.content}
            </div>
          );
        })}
    </div>
  );
}