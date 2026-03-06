import type { Launch } from './Launch';

export interface LaunchDetails extends Launch {
  date_utc: string;
  links?: {
    patch: {
      small?: string;
      large?: string;
    };

    webcast?: string;
    article?: string;
  };

  rocket: string;
}
