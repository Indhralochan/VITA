import React, { useEffect } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useDataContext } from "@/app/context/index";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";

const Feature = ({ url }: { url: string }) => {
  const { text, setText, summarizedText, setSummarizedText,selectedValues } = useDataContext();
  const [data, setData] = React.useState(text);
  const [loading, setLoading] = React.useState(false);
  const [length, setLength] = React.useState(null); // Changed initial state to null
  const [points, setPoints] = React.useState(null); // Changed initial state to null

  const fetchData = async () => {
    setLoading(true);
    try {
      console.log(text);
      const response = await axios.post("http://localhost:4000/summarize", {
        text: text+selectedValues,
        length: length,
        points: points,
      });
      setData(response.data.summary);
      setSummarizedText(response.data.summary);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (length !== null && points !== null) {
      fetchData();
    }
  }, [length, points]);

  React.useEffect(() => {
    console.log(summarizedText);
  }, [summarizedText]);

  const handleLengthChange = (e: any) => {
    setLength(e);
  };

  const handlePointsChange = (e: any) => {
    setPoints(e);
  };

  useEffect(()=>{
    console.log(points);
  },[points])

  return (
    <>
      <div className="flex flex-row justify-center ">
        <Select
          defaultValue="short"
          onValueChange={(e) => {
            handleLengthChange(e);
          }}
        >
          <SelectTrigger className="w-[130px] bg-black">
            <SelectValue placeholder="Short" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="short">Short</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="lengthy">In Detail</SelectItem>
          </SelectContent>
        </Select>
        <div className="pl-10">
          <Select
            defaultValue="para"
            onValueChange={(e) => {
              handlePointsChange(e);
            }}
          >
            <SelectTrigger className="w-[130px] bg-black">
              <SelectValue placeholder="Points" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="points">Points</SelectItem>
              <SelectItem value="para">Para</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div
        className="w-full rounded-sm bg-gray-600/25 p-2 ring-1 ring-inset ring-gray-700/10 lg:p-4 justify-center mt-10 text-lg font-thin overflow-y-scroll max-h-[300px]"
        style={{ minHeight: "300px" }}
      >
        <ScrollArea>
          {loading ? (
            "Loading..."
          ) : data ? (
            <>
              {points === "points" ? (
                
                <ul>
                  {data.split('-').map((d, index) => (
                    <li key={index}>{d.trim()}</li>
                  ))}
                </ul>
              ) : (
                <ul>{data}</ul>
              )}
            </>
          ) : (
            "Data not available"
          )}
        </ScrollArea>
      </div>
    </>
  );
};

export default Feature;
