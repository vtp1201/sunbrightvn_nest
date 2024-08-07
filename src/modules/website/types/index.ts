import { currency, website } from '@prisma/client';

export type WebsiteFullRelation = website & { currency: currency };
export type Website = website;
