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
  text: `With just one click, you can shop online, make online bank transfers, like a post on Instagram and much more. As convenient and exciting as it sounds, have you ever wondered how unsafe it could be to live in this digital era? Is our data well protected? Well, no! To help us tackle this issue, we have cybersecurity to our rescue. Cybersecurity is the art of protecting our networks and devices from unauthorized access. When I say unauthorized access here, it would refer to a small or big cyberattack or a cyberthreat. There are various types of cyberattacks that you can fall prey to, phishing, malware attack, DDOS attack, password attack, and many more. A few ways to implement cybersecurity are defining clear boundaries, using network security control devices like firewalls and IDS, and carrying out security testing. At any point in time, the CIA that is confidentiality, integrity, and availability are being implemented in an organization to ensure that our information is secure. There is a great demand for professionals like ethical hackers, CISOs, and many more cybersecurity experts who can implement cybersecurity and safeguard an organization's data. So what are you waiting for? Get certified with Simply Learn and begin your lucrative cybersecurity career. This was cybersecurity in short. If you enjoyed this video, give it a thumbs up and hit the subscribe button. I'll be back with more exciting videos, so watch out for them. Until then, keep learning and stay tuned to Simply Learn.`,
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
