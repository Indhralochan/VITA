import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import send from '@/assets/send.svg'
import ReactMarkdown from 'react-markdown';
import '@/app/style.css';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import axios from 'axios';
import { useDataContext } from '@/app/context';
import Mermaid from '@/components/Mermaid';
const RightPanel = () => {
  const [data ,setData]=useState({answer:"",imagesUrls:""})
  const [format, setFormat] = useState('');
  const [image , setImage] = useState('');
  const [marks ,setMarks] = useState('');
  const [question , setQuestion] = useState('');
  const [loading ,setLoading] = useState(false);
  const { text ,summarizedText, setSummarizedText , selectedValues} = useDataContext();
  const handleFormatChange = async (e: string) => {
    setFormat(e)
  }
  const handleMarksChange = async (e: string) => {
    setMarks(e)
  }

  const handleAddtoStorage = async () =>{

  }
  const handleGenerateAnswer = async () => {
      if(question){
        setLoading(true);
        try {
          const context = text+selectedValues;
            const response = await axios.post('http://localhost:4000/answergenerate', {
               context:context,
               query:question,
                format:format,
                marks:marks,
                images:"1"
            });
            setData(response.data);
            setImage(response.data.imagesUrls);
            handleAddtoStorage();
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
      }
  }

  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <div className='w-full h-full bg-[#212121] rounded-xl flex flex-col'>
      <div className="border-2 border-gray-300/30 h-full w-[100%] rounded-xl mx-auto">
      <div className="rounded-2xl border-2 border-gray-300/30 w-[85%] mx-auto mt-5">
      <div className="flex flex-row border-2 justify-center align-center">
        <div className="mt-3">
          <div className="flex gap-4 w-full justify-between">
            <input
              value={question}
              onChange={(e)=>{setQuestion(e.target.value)}}
              className="p-4 border h-12 text-white border-white w-full rounded-lg font-normal text-sm min-w-[550px]"
              placeholder="generate answer"
            />
            <button
              className="px-6 py-2 text-white rounded-lg hover:bg-slate-600 border-[#ffffff]/60 border-2"
              type="submit"
              onClick={handleGenerateAnswer}
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
        </div>
      </div>
      <div className="flex flex-row justify-center mt-3 mb-3 gap-3">
        <Select defaultValue="para" onValueChange={(e) => { handleFormatChange(e) }} >
          <SelectTrigger className="w-[180px] border-white">
            <SelectValue placeholder="Format" />
          </SelectTrigger>
          <SelectContent  >
            <SelectItem value="points" >Points</SelectItem>
            <SelectItem value="para">Para</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="10 marks" onValueChange={(e) => { handleMarksChange(e) }} >
          <SelectTrigger className="w-[180px] border-white">
            <SelectValue placeholder="Marks" />
          </SelectTrigger>
          <SelectContent  >
            <SelectItem value="15 marks">15 marks</SelectItem>
            <SelectItem value="10 marks" >10 marks</SelectItem>
            <SelectItem value="5 marks">5 marks</SelectItem>
            <SelectItem value="3 marks">3 marks</SelectItem>
            <SelectItem value="2 marks">2 marks</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Checkbox id="diagrams" />
          <label
            htmlFor="diagrams"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 rounded-lg"
          >
            diagrams
          </label>
        </div>
      </div>
      </div>
      <div className="flex flex-col text-lg text-white/70 font-normal mt-10 w-[80%] text-justify justify-center ml-20 max-h-[90%]">
      {/* <TextGenerateEffect words={data}/> */}
      {data && {answer:"",imagesUrls:""} &&
      <ScrollArea>
      <ReactMarkdown>{data?.answer}</ReactMarkdown>
      <Mermaid chart={image}/>
      </ScrollArea>
}
    </div>
    </div>
    </div>
  )
}

export default RightPanel