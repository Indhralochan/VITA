import React from 'react'
import axios from 'axios'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { useDataContext } from '@/app/context/index';
const Feature = ({ url }:{url:string}) => {
    const [data, setData] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const { text , summarizedText, setSummarizedText} = useDataContext();
    const [length , setLength] = React.useState('short');
    const [points , setPoints] = React.useState('para');
    
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/summarize', {
                url: url,
                text: text,
                length: length,
                points: points
            });
            setData(response.data.summary);
            setSummarizedText(response.data.summary)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        console.log(summarizedText)
        if(summarizedText===""){
            fetchData(); 
        }else{
            setData(summarizedText);
        }
    }, [url]);
    
    const handleLengthChange = (e:string) => {
        console.log(e)
            setLength(e);
    }
    const handlePointsChange = (e:string) => {
        console.log(e)
        setPoints(e);
    }

    return (
        <>
            <div className="flex flex-row justify-center ">
                <Select defaultValue="short" onValueChange={(e) => { handleLengthChange(e) }}>
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
                    <Select defaultValue="para" onValueChange={(e) => { handlePointsChange(e) }} >
                        <SelectTrigger className="w-[130px] bg-black">
                            <SelectValue  placeholder="Points" />
                        </SelectTrigger>
                        <SelectContent  >
                            <SelectItem  value="points" >Points</SelectItem>
                            <SelectItem value="para">Para</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button variant="secondary" className='text-center ml-10 bg-black p-3 w-[130px] cursor-pointer' onClick={()=>{fetchData()}}>
                    Re-Summarize
                </Button>
            </div>
            <div className="w-full rounded-sm bg-gray-600/25 p-2 ring-1 ring-inset ring-gray-700/10 lg:p-4 justify-center mt-10 text-lg font-thin" style={{ minHeight: "300px" }}>
                {loading ? "Loading..." : (
                    data ? (
                        <>
                            <h1>{data}</h1>
                        </>
                    ) : "Data not available"
                )}
            </div>
        </>
    );
};

export default Feature;
