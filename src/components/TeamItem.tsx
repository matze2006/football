import React from 'react'
import { Team } from './types'

type Props = {
    team:Team
}

export default function TeamItem({team}: Props) {
  return (
    <div className=''>{team.teamName}</div>
  )
}