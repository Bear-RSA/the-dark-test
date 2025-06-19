// src/pages/result/[type].tsx
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Archetype } from '@/data/questions'

interface ResultData {
  title: string
  description: string
  likelihood: string
  image: string
}

const resultsMap: Record<Archetype, ResultData> = {
  strategist: {
    title: 'The Strategist — The Calculated Survivor',
    description: `As the dust settles and the echoes of the undead fade into silence, you stand composed amidst chaos, a master of the unseen chessboard of survival. Your mind has always been your sharpest blade—cold, calculated, and unwaveringly pragmatic. You know that emotion clouds judgment, and your clear-headed assessments have navigated you through impossible odds. Yet, every tactical sacrifice leaves a subtle scar upon your soul.

Your fellow survivors might respect or even fear your ruthless practicality, knowing your decisions, though harsh, have kept them breathing one more day. In this brutal apocalypse, you flourish by the book of logic, not sentiment. Your survival is not luck but mathematics—odds you've relentlessly calculated and consistently beaten.`,
    likelihood: `✅ Very High
Your methodical approach ensures long-term survival—but at the cost of emotional isolation. A life saved by logic alone can feel empty, yet undeniably effective.`,
    image: '/images/strategist.png',
  },
  protector: {
    title: 'The Protector — The Compassionate Guardian',
    description: `Bloodied hands, tired eyes, yet your spirit burns bright. Through every dark night and each harrowing encounter, you’ve protected others, bearing burdens heavier than your own heart. Loyalty runs through your veins like fire; your sacrifices are etched deep into the souls you saved. Each life preserved fuels your purpose, even as it wears down your weary frame.

But protection comes at a cost—each loss carves into your being, reminding you painfully that no shield can protect everyone. Still, you wouldn't trade your scars, for they mark the lives you've sheltered from certain death. In the world reclaimed by the undead, your humanity remains a beacon, a soft whisper of hope in a deafening silence.`,
    likelihood: `✅🟡 Moderate
You thrive when surrounded by loyal comrades but risk everything in acts of selfless bravery. Survival hinges on the strength and unity of your bonds.`,
    image: '/images/protector.png',
  },
  maverick: {
    title: 'The Maverick — The Defiant Warrior',
    description: `Your heart thunders defiantly in your chest; adrenaline surges through your veins like wildfire. Rules were never made for you—not before, and certainly not now. You've faced the undead with a savage grin, welcoming chaos as your closest ally. You're feared by zombies and humans alike, for your courage is infectious, your unpredictability daunting, and your reputation legendary.

Yet, every reckless fight chips away at your odds, every brash act a dice rolled with death. Your victories echo loudly, but so do the losses. You've walked a tightrope of audacity, where one misstep could plunge you into oblivion. Still, you'd rather die free and fierce than survive shackled by hesitation.`,
    likelihood: `✅🟡 Moderate to High (Volatile)
Your survival is exhilarating but uncertain—always teetering on the edge. A thrilling existence, but longevity demands tempered recklessness.`,
    image: '/images/maverick.png',
  },
  hollowed: {
    title: 'The Hollowed — The Empty Survivor',
    description: `You stand alone in the shadows, hollow eyes peering at the world you've conquered—and lost. Survival became your sole obsession; morality and humanity mere echoes of the past. You've done unspeakable things, left countless behind, and severed all emotional ties. The cost of your life is a graveyard of memories, haunted by those you betrayed and forsook.

You breathe, you exist—but your heart no longer beats for life, only survival. Those who meet your gaze shiver, recognizing the void within you. Yet, ironically, this emptiness keeps you alive. With nothing left to lose, your determination is unparalleled and frighteningly effective.`,
    likelihood: `✅✅ Extremely High (at immense personal cost)
You will survive—there is no doubt. But a life lived without humanity is mere existence, a hollow shell haunting a barren world.`,
    image: '/images/hollowed.png',
  },
}

interface Props extends ResultData {
  type: Archetype
}

export default function ResultPage({ type, title, description, likelihood, image }: Props) {
  const url = `https://darktest.vercel.app/result/${type}`
  const shareText = `I am ${title}!\nLet's see your rate of survival in the link below:\n${url}`

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: shareText,
        url: url,
      })
    } else {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`
      window.open(twitterUrl, '_blank')
    }
  }

  return (
    <>
      <Head>
        <title>The Dark Test: {title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`The Dark Test: ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`The Dark Test: ${title}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <Layout>
        <div className="text-center space-y-4 max-w-xl mx-auto py-8">
          <h1 className="text-4xl font-bold">{title}</h1>

          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            priority
            className="mx-auto mb-4 object-contain rounded-2xl"
            style={{ maxHeight: '40vh', width: 'auto' }}
          />

          <p className="text-base whitespace-pre-line">{description}</p>

          <h2 className="text-lg font-semibold mt-4">Likelihood of Survival:</h2>
          <p className="text-sm whitespace-pre-line">{likelihood}</p>

          <button
            onClick={handleShare}
            className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold"
          >
            Share Your Result
          </button>
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const types: Archetype[] = ['strategist', 'protector', 'maverick', 'hollowed']
  const paths = types.map(type => ({ params: { type } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const type = params?.type as Archetype
  const data = resultsMap[type]
  return { props: { type, ...data } }
}
