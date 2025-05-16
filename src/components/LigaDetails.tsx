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
            <div className='grid grid-cols-5 p-4 border'>
                <div>Name</div>
                <div>Punkte</div>
                <div>Gewonnen</div>
                <div>Verloren</div>
                <div>Unentschieden</div>
            </div>

            <div className='pt-25 grid gap-2 h-90 '>
                {teams.map((team: Team) => <TeamItem team={team} />)}
            </div>
        </div>
    )
}