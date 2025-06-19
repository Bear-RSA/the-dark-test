// src/context/AnswersContext.tsx
import { createContext, ReactNode, useContext, useState } from 'react'
import { Archetype } from '@/data/questions'

interface AnswersContextType {
  answers: Record<number, Archetype>
  setAnswer: (id: number, archetype: Archetype) => void
}

const AnswersContext = createContext<AnswersContextType | undefined>(undefined)

export function AnswersProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<number, Archetype>>({})

  function setAnswer(id: number, archetype: Archetype) {
    setAnswers(prev => ({ ...prev, [id]: archetype }))
  }

  return (
    <AnswersContext.Provider value={{ answers, setAnswer }}>
      {children}
    </AnswersContext.Provider>
  )
}

export function useAnswers() {
  const ctx = useContext(AnswersContext)
  if (!ctx) throw new Error('useAnswers must be used within AnswersProvider')
  return ctx
}
