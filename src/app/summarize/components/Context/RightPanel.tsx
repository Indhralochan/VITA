import type { MessageType } from '@axflow/models/shared';

export default function ChatBox({ messages }: { messages: MessageType[] }) {
  return (
    <div className=" pl-10 w-[90%] h-full flex flex-col gap-2 rounded-lg bg-gray-600/25 p-2 overflow-auto whitespace-pre-line">
      {messages &&
        messages.map((message) => {
          return (
            <div
              key={message.id}
              className={
                message.role === 'user'
                  ? 'self-start text-black bg-white p-3 rounded-2xl mr-32'
                  : 'self-end text-black rounded-2xl bg-[#17C4E1] p-3 rounded ml-25 mr-10'
              }
            >
              {message.content}
            </div>
          );
        })}
    </div>
  );
}