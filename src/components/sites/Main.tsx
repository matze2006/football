import { useState } from 'react';
import LigaContainer from '../LigaContainer'
import LigaDetails from '../LigaDetails'
import { Season } from '../types';

type Props = {}


export default function Main({}: Props) {
    const [selectedLiga, setSelectedLiga] = useState<Season>({id:"bl1", season:"2024"});
  return (
    <div className='grid grid-cols-2'>
        <LigaContainer onSelectLiga={(id:string, season:string)=>{
            setSelectedLiga({id:id, season:season})
            alert(season);
        }}/>
        <div>
            <LigaDetails season={selectedLiga}/>
        </div>
    </div>
  )
}