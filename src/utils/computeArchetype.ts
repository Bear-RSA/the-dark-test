import { Archetype } from '@/data/questions'

/**
 * Map of answers { [questionID]: Archetype },
 * returns the winning Archetype.
 */
export function computeArchetype(
    answers: Record<number, Archetype>
): Archetype {
    // 1. Tally counts
    const counts: Record<Archetype, number> = {
        strategist: 0,
        protector: 0,
        maverick: 0,
        hollowed: 0,
    }
    Object.values(answers).forEach((a) => {
        counts[a] = (counts[a] || 0) + 1
    })

    // 2. Find max count
    const maxCount = Math.max(...Object.values(counts))

    // 3. Collect all archetypes with that count
    const winners = (Object.keys(counts) as Archetype[]).filter(
        (k) => counts[k] === maxCount 
    )

    // 4. Tie-breaker priorty
    const priorty: Archetype[] = [
        'strategist',
        'protector',
        'maverick',
        'hollowed',
    ]

    // 5. Return the highest-priorty winner
    return winners.length === 1
        ? winners[0]
        : priorty.find((p) => winners.includes(p))!
}