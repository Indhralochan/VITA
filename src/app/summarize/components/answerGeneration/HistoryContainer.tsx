import SingleHistory from "./SingleHistory";
import { useMemo } from "react";

// In HistoryContainer.tsx
type ContainerProps = {
  searchQuery: string;
  filteredChats: { id: string; title: string }[]; // Ensure that this prop receives the correct type
};

function HistoryContainer({searchQuery, filteredChats }: ContainerProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-col gap-2 rounded-[12px]">
        {filteredChats.map((chat) => (
          <SingleHistory key={chat.id} id={chat.id} text={chat.title} />
        ))}
      </div>
    </div>
  );
}

export default HistoryContainer;
