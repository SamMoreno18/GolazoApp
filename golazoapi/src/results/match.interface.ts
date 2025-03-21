export interface Match {
    fixture: {
      date: string;
      venue: {
        name: string;
        city: string;
      };
    };
    status: {
      long?: string;
      short?: string;
      elapsed?: number;
    };
    teams: {
      home: {
        name: string;
        logo: string;
      };
      away: {
        name: string;
        logo: string;
      };
    };
    goals: {
      home: number | null;
      away: number | null;
    };
  }
  