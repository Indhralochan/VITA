import React, { useEffect, useState } from "react";
import Image from "next/image";
import send from "@/assets/send.svg";
import ReactMarkdown from "react-markdown";
import { doc, setDoc , collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../../../../firebase";
import 'firebase/auth';
import "@/app/style.css";
import * as crypto from 'crypto'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import axios from "axios";
import { useDataContext } from "@/app/context";
import Mermaid from "@/components/Mermaid";
import { useAnswerContext } from "@/app/context/answerContext";
const RightPanel = () => {
  const [data, setData] = useState("");
  const [format, setFormat] = useState("");
  const [image, setImage] = useState("");
  const [marks, setMarks] = useState("");
  const [isImageRequired , setImageRequired] = useState(false);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const { text, summarizedText, setSummarizedText, selectedValues } =
    useDataContext();
  const {setHasAnswers , hasAnswers , answerId ,setAnswerId , documents} = useAnswerContext();
  const handleFormatChange = async (e: string) => {
    setFormat(e);
  };
  const handleMarksChange = async (e: string) => {
    setMarks(e);
  };

  const handleAddtoStorage = async (answer:string , image:string) => {
    try {
      // Assuming data, image, and question are defined elsewhere in your code
      const response = await addDoc(collection(db, "answers"), {
        answer: answer,
        imagesUrls: image,
        query: question,
        userId: userId // Assuming userId is defined elsewhere in your code
      });
      console.log("Document successfully written with ID: ", response.id);
      return response.id!;
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleGenerateAnswer = async () => {
    if (question) {
      setLoading(true);
      try {
        const context = text + selectedValues;
        const response = await axios.post(
          "http://localhost:4000/answergenerate",
          {
            context: context,
            query: question,
            format: format,
            marks: marks,
            images: isImageRequired,
          }
        );
        console.log(response.data);
        setData(response.data.answer);
        // const finalImage = response.data.imagesUrls.substring(1, response.data.imagesUrls.length - 1)
        // setImage(finalImage);
        // localStorage.setItem('img',response.data.imagesUrls);
        setImage(response.data.imagesUrls);
        const docid = await handleAddtoStorage(response.data.answer ,response.data.imagesUrls);
        // setId(docid!);
        // setAnswer(response.data.answer);
        // setImagesUrls(response.data.imagesUrls);
        // setQuery(question);
        // setId(userId);
        // const newData = {
        //   id:docid,
        //   answer:response.data.answer,
        //   imagesUrls:response.data.imagesUrls,
        //   userId:userId,
        //   query:question
        // }
        // setAnswers((prevAnswers: any) => [...prevAnswers, newData]);
        console.log(response.data);
        setHasAnswers(!hasAnswers)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId('');
      }
    });
    return () => unsubscribe();
  }, []);

 useEffect(()=>{
  if(documents.length>0){
  setData(documents[0].data.answer);
  setImage(documents[0].data.imagesUrls);
  console.log(documents)
  }
  else{
    setData('');
    setImage("");
  }
 },[documents])

 const handleCheckBox = () => {
  const newValue = !isImageRequired; // Toggle the value
  setImageRequired(newValue); // Update the state
  console.log(newValue); // Log the updated value
  return newValue; // Return the updated value
};


  return (
    <div className="w-full h-full bg-black rounded-xl flex flex-col">
      <div className="border-2 border-gray-300/30 h-full w-[100%] rounded-xl mx-auto">
       { answerId.length===0 ? 
       <>
        <div className="rounded-2xl border-2 border-gray-300/30 w-[90%] mx-auto mt-5">
          <div className="flex flex-row justify-center align-center">
            <div className="mt-3 ml-5 flex justify-start align-center ">
              <div className="flex gap-4  justify-between">
                <input
                  value={question}
                  onChange={(e) => {
                    setQuestion(e.target.value);
                  }}
                  className="p-4 border h-12 text-white border-white w-full rounded-lg font-normal text-sm min-w-[500px]"
                  placeholder="generate answer"
                />
                <div
                  className="mr-3 min-w-[60px]  h-12 text-white rounded-lg hover:bg-slate-600 border-[#ffffff]/60 border-2 cursor-pointer flex items-center justify-center"
                  onClick={handleGenerateAnswer}
                >
                  <div className="w-full flex justify-center">
                    <Image src={send} alt="send" width={30} height={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-3 mb-3 gap-3">
            <Select
              defaultValue="para"
              onValueChange={(e) => {
                handleFormatChange(e);
              }}
            >
              <SelectTrigger className="w-[180px] border-white">
                <SelectValue placeholder="Format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="points">Points</SelectItem>
                <SelectItem value="para">Para</SelectItem>
              </SelectContent>
            </Select>
            <Select
              defaultValue="10 marks"
              onValueChange={(e) => {
                handleMarksChange(e);
              }}
            >
              <SelectTrigger className="w-[180px] border-white">
                <SelectValue placeholder="Marks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15 marks">15 marks</SelectItem>
                <SelectItem value="10 marks">10 marks</SelectItem>
                <SelectItem value="5 marks">5 marks</SelectItem>
                <SelectItem value="3 marks">3 marks</SelectItem>
                <SelectItem value="2 marks">2 marks</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Checkbox id="diagrams" onCheckedChange={handleCheckBox}/>
              <label
                htmlFor="diagrams"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 rounded-lg"
              >
                diagrams
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col  text-lg text-white/70 font-normal pt-5 w-full max-h-[640px] overflow-y-auto">
          <div className="mx-10">
            <ReactMarkdown>{data}</ReactMarkdown>
            <div className="flex mx-auto align-center justify-center">
              { image && image.length > 0 && <Mermaid mermaidCode={image} />}
            </div>
          </div>
        </div>
        </> :
        <>
        <div className="flex flex-col  text-lg text-white/70 font-normal pt-5 w-full max-h-[800px] overflow-y-auto">
          <div className="mx-10">
            <ReactMarkdown>{data}</ReactMarkdown>
            <div className="flex mx-auto align-center justify-center">
              {image && image.length > 0 && <Mermaid mermaidCode={image} />}
            </div>
          </div>
        </div>

        </>
        }
      </div>
    </div>
  );
};

export default RightPanel;
