import { useEffect, useState } from 'react';
import Liga from './Liga';


type League = {
  leagueId: number;
  leagueName: string;
  leagueShortcut: string;
  leagueSeason: string;
};

type Props = {
    onSelectLiga:(id:string, season:string)=>void;
}

export default function LigaContainer({onSelectLiga}: Props) {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [filteredLeagues, setFilteredLeagues] = useState<League[]>([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getavailableleagues")
      .then((res) => res.json())
      .then((data: League[]) => {
        
        const bundesligaLeagues = data.filter(
          (league) => league.leagueShortcut.toLowerCase() === "bl1"
          || league.leagueShortcut.toLowerCase() === "bl2" 
          || league.leagueShortcut.toLowerCase() === "bl3"
        );
        setLeagues(bundesligaLeagues);
        setFilteredLeagues(bundesligaLeagues);
      })
      .catch((error) => console.error("Fehler beim Laden der Ligen:", error));
  }, []);

  const filterLiga = (filter: string) => {
    let filtered = leagues.filter((league) =>
      league.leagueName.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredLeagues(filtered);
  };

  return (
    <div className='pl-4 pr-4'>
      <div className="font-bold text-4xl">
        <h1 className="justify-self-center">Bundesliga (1,2 und 3) Übersicht</h1>
      </div>
      <div>
        <input className="border m-5" type="text" placeholder="Search" onChange={(el) => {
          filterLiga(el.target.value);
        }} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 pt-10">
        {filteredLeagues.map((league) => (
          <Liga key={league.leagueId} liga={league.leagueName} onClick={()=>onSelectLiga(league.leagueShortcut, league.leagueSeason.toString())} />
        ))}
      </div>
    </div>
  )
}