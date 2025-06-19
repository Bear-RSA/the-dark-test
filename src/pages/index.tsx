// pages/index.tsx
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

export default function Home() {
  const router = useRouter()

  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-6 text-center">
        The Dark Test
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-center">
        The world ended quietly. No explosions. Just silence, rot, and choices.
        <br />
        This isn&apos;t a game. It&apos;s a mirror.
      </p>
      <div className="text-center">
        <button
          onClick={() => router.push('/q/1')}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold"
        >
          Begin the Test
        </button>
      </div>
    </Layout>
  )
}
