import { Button } from "@/components/ui/button"
import ChatPlus from "@/util/icons/ChatPlus";

function NewChatButton() {
  return (
    <Button
      onClick={()=>{console.log('pressed')}}
      className="my-2 flex justify-between rounded-[12px] gray-border px-5 py-3 bg-[#00000080]"
    >
      <ChatPlus />
    </Button>
  );
}

export default NewChatButton;