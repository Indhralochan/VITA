// import React, { useEffect, useState } from 'react'
// import { db } from '../../../../../firebase';
// import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore'
// const LeftPanel = () => { 
//   useEffect(()=>{
//     async function FetchDocs(){
//       const questionList: { id: string; data: DocumentData; }[] = []
//       const id = localStorage.getItem('userid');
//       const q = query(collection(db, 'questions'));
//       const docsSnapshot = await getDocs(q);
      
//       docsSnapshot.forEach((doc)=>{
//         if(doc.id === id){
//           questionList.push({id:doc.id,data:doc.data()})
//         }
//       })
//       console.log(questionList)
//     setData(questionList);
//   }
//   FetchDocs()
//   },[])
//   return (
//     <div className='w-full h-full bg-[#171717] text-white rounded-xl'>
//         <ul>
//           {data.map((item, index) => (
//             <>
//             <li key={item.id} className=''>
//               <div className='text-white text-xl text-center'>{item.data.title}</div>
//             </li>
//              <div className="border-b border-white w-[80%] flex justify-center align-center ml-5"></div>
//              </>
//           ))}
//         </ul>
//     </div>
//   )
// }

// export default LeftPanel

"use client";
import History from "@/util/icons/History";
import Minimize from "@/util/icons/Minimize";
import { Input } from "@/components/ui/input";
import Search from "@/util/icons/Search";
import HistoryContainer from "./HistoryContainer";
import NewChatButton from "./NewChatButton";
import { SetStateAction, useEffect, useState } from "react";
import { auth, db } from '../../../../../firebase';
import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore'
import { useAnswerContext } from "@/app/context/answerContext";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatHistory = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<{ id: string; data: DocumentData; }[]>([]);
  const { hasAnswers , answerId , setDocuments , setAnswerId , setHasAnswers} = useAnswerContext();

  useEffect(() => {
    async function FetchDocs() {
      console.log("asdfasdf")
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        const questionList: SetStateAction<{ id: string; data: DocumentData; }[]> = [];
        const q = query(collection(db, 'answers'));
        const docsSnapshot = await getDocs(q);
        docsSnapshot.forEach((doc) => {
          if (doc.data().userId === user.uid) {
            questionList.push({ id: doc.id, data: doc.data() });
          }
        });
        console.log(questionList);
        setData(questionList);
      } else {
        console.log('No user signed in.');
      }
    }
    FetchDocs();
  }, [hasAnswers]);

  useEffect(()=>{
   const finalDocument = data.filter((data)=>data.id === answerId);
   setDocuments(finalDocument);
  },[answerId])

  const handleCleanUp = async ()=>{
    setAnswerId("");
    setDocuments([]);
  }  
  
  return (
    <div className="relative flex flex-col gap-4 px-4 py-5 font-medium text-white h-full overflow-y-auto rounded-xl border-2 border-gray-300/20 overflow-x-hidden bg-black">
      <div
        className="absolute inset-0 bg-black opacity-90"
        style={{ zIndex: 1 }}
      />
      <div className="absolute chatsonic-history-bg inset-0" />
      <div className="z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10 text-lg ml-1">
            <History />
            History
           <button onClick={handleCleanUp}><NewChatButton /></button>
          </div>
        </div>
        <div className="mt-[-10px] flex items-center justify-between rounded-[8px] search-border w-full px-4 py-2 bg-[#27272A]">
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-none w-[85%] p-0 h-6 text-white placeholder:text-white bg-[#27272A]"
          />
          <Search />
        </div>
        <div className="flex flex-col gap-8">
          <ScrollArea>
          <HistoryContainer searchQuery={searchQuery} filteredChats={data.map(({ id, data }) => ({ id, title: data.query }))} />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;