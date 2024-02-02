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
const Feature = ({ url }) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const { text , setSummarizedText} = useDataContext();
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
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
        setSummarizedText(text);
    };

    React.useEffect(() => {
        fetchData();
    }, [url]);
    React.useEffect(() => {
        text
    } , [text])

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
            <div className="flex flex-row justify-center">
                <Select defaultValue="short" onValueChange={(e) => { handleLengthChange(e) }}>
                    <SelectTrigger className="w-[180px]">
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
                        <SelectTrigger className="w-[180px]">
                            <SelectValue  placeholder="Points" />
                        </SelectTrigger>
                        <SelectContent  >
                            <SelectItem  value="points" >Points</SelectItem>
                            <SelectItem value="para">Para</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="w-full rounded-xl bg-gray-600/25 p-2 ring-1 ring-inset ring-gray-700/10  lg:rounded-2xl lg:p-4 justify-center mt-10" style={{ minHeight: "300px" }}>
                {loading ? "Loading..." : (
                    data ? (
                        <>
                            <h1>{data}</h1>
                        </>
                    ) : "Data not available"
                )}
            </div>
            <div className="mx-auto justify-center ">
                <Button variant="secondary" className='text-center py-5 mt-10' onClick={fetchData}>
                    Re-Summarize
                </Button>
            </div>
        </>
    );
};

export default Feature;
