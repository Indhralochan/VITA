"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface AnswerContextType {
  hasAnswers: boolean;
  setHasAnswers: (hasAnswers: boolean) => void;
  answerId: string;
  setAnswerId: (answerId: string) => void;
  documents: any;
  setDocuments: (documnets:any)=> void;
}

const defaultHasAnswers: boolean = false;
const defaultAnswerId: string = '';
const defaultDocuments : any={};
export const AnswerContext = createContext<AnswerContextType>({
  hasAnswers: defaultHasAnswers,
  setHasAnswers: () => {},
  answerId: defaultAnswerId,
  setAnswerId: () => {},
  documents: defaultDocuments,
  setDocuments: ()=>{},
});

interface AnswerContextProviderProps {
  children: ReactNode;
}

export const AnswerContextProvider = ({ children }: AnswerContextProviderProps): JSX.Element => {
  const [hasAnswers, setHasAnswers] = useState<boolean>(defaultHasAnswers);
  const [answerId, setAnswerId] = useState<string>(defaultAnswerId);
  const [documents , setDocuments] = useState<any>(defaultDocuments);

  return (
    <AnswerContext.Provider value={{ hasAnswers, setHasAnswers, answerId, setAnswerId , documents ,setDocuments }}>
      {children}
    </AnswerContext.Provider>
  );
};

export const useAnswerContext = (): AnswerContextType => useContext(AnswerContext);
