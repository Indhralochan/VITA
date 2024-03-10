import React, { useEffect, useState } from 'react'
import { db } from '../../../../../firebase';
import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore'
const LeftPanel = () => {
  const [data, setData] = useState<{ id: string; data: DocumentData; }[]>([]); 
  useEffect(()=>{
    async function FetchDocs(){
      const questionList: { id: string; data: DocumentData; }[] = []
      const id = localStorage.getItem('userid');
      const q = query(collection(db, 'questions'));
      const docsSnapshot = await getDocs(q);
      
      docsSnapshot.forEach((doc)=>{
          questionList.push({id:doc.id,data:doc.data()})
      })
      console.log(questionList)
    setData(questionList);
  }
  FetchDocs()
  },[])
  return (
    <div className='w-full h-full bg-[#171717] text-white rounded-xl'>
        <ul>
          {data.map((item, index) => (
            <>
            <li key={item.id} className=''>
              <div className='text-white text-xl text-center'>{item.data.title}</div>
            </li>
             <div className="border-b border-white w-[80%] flex justify-center align-center ml-5"></div>
             </>
          ))}
        </ul>
    </div>
  )
}

export default LeftPanel