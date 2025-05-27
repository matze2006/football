import React, { useEffect, useState } from 'react'
import { Season, Team } from './types';
import TeamItem from './TeamItem';

type Props = {
    season: Season
}

export default function LigaDetails({ season }: Props) {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        loadTeams(season.id, season.season);
    }, [season]);

    async function loadTeams(id: string, season: string) {
        fetch(`https://api.openligadb.de/getbltable/${id}/${season}`).then(data => data.json().then(result => {
            console.log(result);
            setTeams(result);
        }))

    }

    return (
        <div>
            <div className='grid grid-cols-5 p-4 border-b-black border-b-3 mt-25 mb-2 pl-5 pr-5'>
                <div className='font-bold justify-self-center'>Name</div>
                <div className='font-bold justify-self-center'>Punkte</div>
                <div className='font-bold justify-self-center'>Gewonnen</div>
                <div className='font-bold justify-self-center'>Verloren</div>
                <div className='font-bold justify-self-center'>Unentschieden</div>
            </div>

            <div className='grid gap-2 h-90 ml-5 mr-5'>
                {teams.map((team: Team) => <TeamItem team={team} />)}
            </div>
        </div>
    )
}