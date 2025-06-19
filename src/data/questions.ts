export type Archetype = 'strategist' | 'protector' | 'maverick' | 'hollowed';

export interface Option {
  label: string;
  archetype: Archetype;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: 'You hear screaming from a child nearby. Zombies are closing in. You have 10 seconds to act.',
    options: [
      { label: 'Hide quietly. You can’t risk revealing your location.', archetype: 'strategist' },
      { label: 'Run toward the scream. A child deserves a chance.', archetype: 'protector' },
      { label: 'Grab your weapon and charge. If I’m fast, I can save them.', archetype: 'maverick' },
      { label: 'Use the scream as a distraction to slip away unnoticed.', archetype: 'hollowed' },
    ],
  },
  {
    id: 2,
    text: 'Your group is low on food. One member is sick and unlikely to recover.',
    options: [
      { label: 'Ration food away from them. Conserve for the strong.', archetype: 'strategist' },
      { label: 'Keep feeding them. Everyone matters, sick or not.', archetype: 'protector' },
      { label: 'Ask them what they want — if they want to go out fighting, I’ll help.', archetype: 'maverick' },
      { label: 'Quietly make sure they don’t wake up again.', archetype: 'hollowed' },
    ],
  },
  {
    id: 3,
    text: 'You find a fortified shelter — but it’s locked. Screams echo behind you.',
    options: [
      { label: 'Check for weaknesses in the structure. Look for an entry point.', archetype: 'strategist' },
      { label: 'Knock and beg whoever’s inside to let you in.', archetype: 'protector' },
      { label: 'Kick it down or break in. I’ll take it by force if I must.', archetype: 'maverick' },
      { label: 'Run. I’ve survived worse. Keep moving.', archetype: 'hollowed' },
    ],
  },
  {
    id: 4,
    text: 'A stranger offers to trade weapons for food, but they seem unstable.',
    options: [
      { label: 'Decline. Risk too high.', archetype: 'strategist' },
      { label: 'Offer less than what they asked. Help, but protect your group.', archetype: 'protector' },
      { label: 'Agree. Worst case, I fight my way out.', archetype: 'maverick' },
      { label: 'Smile. Take the deal. Then take their bag once their back is turned.', archetype: 'hollowed' },
    ],
  },
  {
    id: 5,
    text: 'Your shelter is compromised. You have 1 minute to escape.',
    options: [
      { label: 'Gather key supplies and exit through a planned route.', archetype: 'strategist' },
      { label: 'Wake everyone, even the weakest. We leave no one.', archetype: 'protector' },
      { label: 'Grab your best gear and lead the way out swinging.', archetype: 'maverick' },
      { label: 'Take your bag and slip out. The rest will slow you down.', archetype: 'hollowed' },
    ],
  },
  {
    id: 6,
    text: 'A loved one has been bitten — but not turned. Yet.',
    options: [
      { label: 'Restrain and observe. Maybe there’s still time.', archetype: 'strategist' },
      { label: 'Stay with them. If they turn, you won’t let them be alone.', archetype: 'protector' },
      { label: 'Tell them the truth. Let them choose how they go.', archetype: 'maverick' },
      { label: 'Leave without saying goodbye. You can’t handle the moment.', archetype: 'hollowed' },
    ],
  },
  {
    id: 7,
    text: 'Someone challenges your leadership in front of the group.',
    options: [
      { label: 'Diffuse it. Calm them. Assert through logic.', archetype: 'strategist' },
      { label: 'Talk it through later. Unity matters more than ego.', archetype: 'protector' },
      { label: 'Call them out. If they want the role, they can try take it.', archetype: 'maverick' },
      { label: 'Poison their water tonight. No more problems.', archetype: 'hollowed' },
    ],
  },
  {
    id: 8,
    text: 'You find a lab with research on the virus. There’s a chance it holds a cure, but it’s crawling with infected.',
    options: [
      { label: 'Mark it for return. You need a better plan.', archetype: 'strategist' },
      { label: 'Risk it. If there’s a cure, it’s worth your life.', archetype: 'protector' },
      { label: 'Gear up. You’re going in — loud if you have to.', archetype: 'maverick' },
      { label: 'Burn it. If they had a cure, we’d know by now.', archetype: 'hollowed' },
    ],
  },
  {
    id: 9,
    text: 'You meet another survivor — alone, desperate, and begging to join your group.',
    options: [
      { label: 'Assess them. Ask questions before deciding.', archetype: 'strategist' },
      { label: 'Let them in. No one deserves to be alone out here.', archetype: 'protector' },
      { label: 'Make them prove themselves. You don’t carry dead weight.', archetype: 'maverick' },
      { label: 'Smile. Say yes. Use them as bait later.', archetype: 'hollowed' },
    ],
  },
  {
    id: 10,
    text: 'Your group discovers a hidden bunker. Only enough room for 3 — but you are 6.',
    options: [
      { label: 'Create a lottery. Fair, logical.', archetype: 'strategist' },
      { label: 'Give up your spot to someone weaker.', archetype: 'protector' },
      { label: 'Take the spot by force or threat. Survival is earned.', archetype: 'maverick' },
      { label: 'Trap them all outside. The bunker is yours.', archetype: 'hollowed' },
    ],
  },
  {
    id: 11,
    text: 'You’re offered safety with a rival group — but you’ll have to leave your own behind.',
    options: [
      { label: 'Negotiate to bring your group. Don’t decide yet.', archetype: 'strategist' },
      { label: 'Refuse. You won’t abandon your people.', archetype: 'protector' },
      { label: 'Go. Then come back to free your group.', archetype: 'maverick' },
      { label: 'Accept. You never liked them anyway.', archetype: 'hollowed' },
    ],
  },
  {
    id: 12,
    text: 'A child in your group is slowing everyone down. A swarm is close.',
    options: [
      { label: 'Distract the swarm. Let others escape.', archetype: 'strategist' },
      { label: 'Carry them. Whatever it takes.', archetype: 'protector' },
      { label: 'Hand them your weapon. Teach them to run.', archetype: 'maverick' },
      { label: 'Trip them. Buy yourself time.', archetype: 'hollowed' },
    ],
  },
  {
    id: 13,
    text: 'You intercept a radio message: “There’s a boat leaving at sunrise.”',
    options: [
      { label: 'Chart your route. Move quietly.', archetype: 'strategist' },
      { label: 'Tell everyone. Give them a chance too.', archetype: 'protector' },
      { label: 'Tell your best fighter. Only they need to know.', archetype: 'maverick' },
      { label: 'Leave that night. Don’t say a word.', archetype: 'hollowed' },
    ],
  },
  {
    id: 14,
    text: 'You’re caught in a trap. The only way out is through a friend who’s stuck with you.',
    options: [
      { label: 'Find a way for both of you, even if it’s slow.', archetype: 'strategist' },
      { label: 'Push them free, even if you stay stuck.', archetype: 'protector' },
      { label: 'Break the chain. Save who you can — including yourself.', archetype: 'maverick' },
      { label: 'Use them to trigger the escape mechanism. You survive.', archetype: 'hollowed' },
    ],
  },
  {
    id: 15,
    text: 'After all you’ve done — do you believe you deserve to survive?',
    options: [
      { label: 'Yes. I played the odds right. Survival is math.', archetype: 'strategist' },
      { label: 'Only if the people I saved live on.', archetype: 'protector' },
      { label: 'Deserve? No. But I earned it.', archetype: 'maverick' },
      { label: 'No. But I’ll survive anyway. Because I’m not done yet.', archetype: 'hollowed' },
    ],
  },
];
