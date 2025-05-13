export interface Season {
    id:string;
    season:string;
}

export interface Team {
    draw: number;
    goalDiff: number;
    goals: number;
    lost: number;
    matches: number;
    opponentGoals: number;
    points: number;
    shortName: string;
    teamIconUrl: string;
    teamInfoId: number;
    teamName: string;
    won: number;
  }
  