import { Team } from './types'

type Props = {
  team: Team

}

export default function TeamItem({ team }: Props) {
  return (
    <div className='grid grid-cols-5 p-4 border'>
      <div className=''>{team.teamName}</div>
      <div className=''>{team.points}</div>
      <div className=''>{team.won}</div>
      <div className=''>{team.lost}</div>
      <div className=''>{team.draw}</div>
    </div>

  )
}