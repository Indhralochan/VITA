import { useAnswerContext } from "@/app/context/answerContext";
import Message from "@/util/icons/Message";

function SingleHistory({ text, id }: { text: string; id: string }) {
  const {setAnswerId} = useAnswerContext();
  return (
    <div
      onClick={() =>{setAnswerId(id)}}
      className="flex items-center gap-4 pr-4 pl-[.625rem] py-1.5 history-hover cursor-pointer rounded-[8px] transition-colors duration-200 border border-transparent"
    >
      <Message />
      <span className="text-sm max-w-[130px]">{text}</span>
    </div>
  );
}

export default SingleHistory;