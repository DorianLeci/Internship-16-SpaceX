export interface Launch {
  id: string;
  name: string;
  upcoming: boolean;
  success: boolean | null;
  details: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };

  links: {
    missionPatch?: string;
    articleLink?: string;
    videoLink?: string;
  };
}

export interface LaunchesResponse {
  docs: Launch[];
  page: number;
  totalPages: number;
}
