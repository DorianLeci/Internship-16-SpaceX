export interface Rocket {
  id: string;
  name: string;
  type: string;
  description?: string;
  flickrImages?: string[];

  height?: {
    meters?: number;
  };
  mass?: {
    kg?: number;
  };

  firstFlight?: string;
}
