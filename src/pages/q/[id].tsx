// src/pages/q/[id].tsx
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { questions, Archetype } from '@/data/questions'
import { useAnswers } from '@/context/AnswersContext'
import { computeArchetype } from '@/utils/computeArchetype'

export default function QuestionPage() {
  console.log('🚧 QuestionPage loaded')
  const router = useRouter()
  const { id } = router.query
  const questionId = parseInt(
    Array.isArray(id) ? id[0] : id ?? '',
    10
  )
  const question = questions.find((q) => q.id === questionId)
  const { answers, setAnswer } = useAnswers()

  useEffect(() => {
    if (!router.isReady) return
    if (!question) router.replace('/')
  }, [router.isReady, question, router])

  if (!question) return null

  function handleOptionClick(archetype: Archetype) {
    if (!question) return
    setAnswer(question.id, archetype)
    const next = question.id + 1
    if (next <= questions.length) {
      router.push(`/q/${next}`)
    } else {
      const final = computeArchetype({ ...answers, [question.id]: archetype })
      router.push(`/result/${final}`)
    }
  }

  return (
    <div className="w-full flex justify-center px-4">
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-3xl w-full text-white">
        <h2 className="text-4xl font-bold mb-6 tracking-wider text-center">
          Question {question.id}
        </h2>
        <p className="text-xl mb-10 leading-relaxed text-center">
          {question.text}
        </p>
        <div className="flex flex-col items-center gap-4">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleOptionClick(opt.archetype)}
              className="
                w-[50%] max-w-sm
                px-6 py-4
                bg-white/60 text-white text-lg font-medium text-center
                rounded-xl border border-white/20 backdrop-blur-sm
                transition-all duration-200 ease-in-out
                hover:bg-white/80 hover:scale-[1.02]
              "
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// This forces Next.js to render the page on every request under your _app.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} }
}
