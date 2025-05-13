import React from 'react'
import { Team } from './types'

type Props = {
    team:Team
}

export default function TeamItem({team}: Props) {
  return (
    <div className='bg-green-400 p-4'>{team.teamName}</div>
  )
}