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
  url: '',
  setUrl: () => {},
  text: '',
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
