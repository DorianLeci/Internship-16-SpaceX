import type { CompanyHeadquearters } from './CompanyHeadquarters';
import type { CompanySocials } from './CompanySocials';

export interface Company {
  founder: string;
  ceo: string;
  founded: string;
  employees: number;
  launchSites: number;
  testSites: number;
  summary: string;
  headquarters: CompanyHeadquearters;
  links: CompanySocials;
}
