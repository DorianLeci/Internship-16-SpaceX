import type { Launch } from './Launch';

export interface LaunchDetails extends Launch {
  links?: {
    patch?: {
      small: string;
      large: string;
    };

    webcast?: string;
    article?: string;
  };

  rocket: string;
}
