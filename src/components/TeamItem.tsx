import { Team } from './types'

type Props = {
  team: Team
}

export default function TeamItem({ team }: Props) {
  return (
    <div className='grid grid-cols-5 p-4 border'>
      <div className=''>{team.teamName}</div>
      <div className='justify-self-center'>{team.points}</div>
      <div className='justify-self-center'>{team.won}</div>
      <div className='justify-self-center'>{team.lost}</div>
      <div className='justify-self-center'>{team.draw}</div>
    </div>
  )
}