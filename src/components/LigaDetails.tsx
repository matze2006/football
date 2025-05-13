import React, { useEffect, useState } from 'react'
import { Season, Team } from './types';
import TeamItem from './TeamItem';

type Props = {
    season:Season
    
}

export default function LigaDetails({ season }: Props) {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        loadTeams(season.id, season.season);
    }, [season]);

    async function loadTeams(id: string, season:string) {
        fetch(`https://api.openligadb.de/getbltable/${id}/${season}`).then(data => data.json().then(result => {
            console.log(result);
            setTeams(result);
            
        }))

    }

    return (
        <div>LigaDetails for season {season.season}
        {teams.map((team:Team)=><TeamItem team={team}/>)}
        </div>
    )
}