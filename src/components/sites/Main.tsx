import { useState } from 'react';
import LigaContainer from '../LigaContainer'
import LigaDetails from '../LigaDetails'
import { Season } from '../types';

type Props = {}

export default function Main({}: Props) {
    const [selectedLiga, setSelectedLiga] = useState<Season>({id:"bl1", season:"2024", leagueName:"1. Fußball-Bundesliga 2024/2025"}); 
  return (
    <div>
        <div className="font-bold text-4xl p-4">
            <h1 className="justify-self-center">Bundesliga (1,2 und 3) Übersicht</h1>
        </div>
        <div className='grid grid-cols-2'>
            <LigaContainer onSelectLiga={(id:string, season:string, leagueName:string)=>{
                setSelectedLiga({id:id, season:season, leagueName:leagueName})
            }}/>
            <div>
                <LigaDetails season={selectedLiga}/>
            </div>
        </div>
    </div>
  )
}