import { currency, website } from '@prisma/client';

export * from '../website.service';

export type WebsiteFullRelation = website & { currency: currency };
export type Website = website;
