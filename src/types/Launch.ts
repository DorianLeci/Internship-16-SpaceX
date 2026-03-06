export interface Launch {
  id: string;
  name: string;
  upcoming: boolean;
  success: boolean | null;
  details: string;
}

export interface LaunchesResponse {
  docs: Launch[];
  page: number;
  totalPages: number;
}
