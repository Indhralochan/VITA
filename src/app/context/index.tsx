"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextType {
  url: string;
  setUrl: (url: string) => void;
  text: string;
  setText: (text: string) => void;
  summarizedText: string;
  setSummarizedText: (summarizedText: string) => void;
  selectedValues: string; // Adjusted to string type
  setSelectedValues: (selectedValues: string) => void; // Adjusted to string type
  selectedPromptValues: any[]; // Change 'any' to the appropriate type
  setSelectedPromptValues: (selectedPrompts: any[]) => void; // Change 'any' to the appropriate type
}

const defaultValue: DataContextType = {
  url: 'asdfadsf',
  setUrl: () => {},
  text: `On Air Indias first-ever A350 flight from Bengaluru to Mumbai, the author experienced the new Premium Economy class. Despite bitter coffee, the brand new aircraft impressed with its aesthetics. The uniforms by Manish Malhotra stood out, as did the luxurious business class suites. The author settled into the all-new Premium Economy and enjoyed a refreshing towel and canned orange juice. The in-flight meal was well-plated, featuring fresh fruits, delicious Khuasa, and excellent spinach-stuffed omelettes with sausage. The author eagerly anticipates part 2, where they hope to receive leftover veg breakfast.`,
  setText: () => {},
  summarizedText: '',
  setSummarizedText: () => {},
  selectedValues: '', // Adjusted to string type
  setSelectedValues: () => {}, // Adjusted to string type
  selectedPromptValues: [],
 setSelectedPromptValues: () => {}
};

export const DataContext = createContext<DataContextType>(defaultValue);

interface DataContextProviderProps {
  children: ReactNode;
}

export const DataContextProvider = ({ children }: DataContextProviderProps): JSX.Element => {
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [summarizedText, setSummarizedText] = useState('');
  const [selectedValues, setSelectedValues] = useState<string>(''); // Adjusted to string type
  const [selectedPromptValues, setSelectedPromptValues] = useState<any[]>([]); // Change 'any' to the appropriate type

  return (
    <DataContext.Provider value={{ 
      url, setUrl,
      text, setText,
      summarizedText, setSummarizedText,
      selectedValues, setSelectedValues,
      selectedPromptValues, setSelectedPromptValues
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextType => useContext(DataContext);
