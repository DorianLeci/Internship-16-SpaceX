import type { Launch } from './Launch';

export interface LaunchDetails extends Launch {
  links: {
    patch: {
      small: string | null;
      large: string | null;
    };

    webcast?: string | null;
    article?: string | null;
  };

  rocket: string;
}
