import { Injectable } from '@nestjs/common';

import { BusinessActivityService } from '@modules/business_activity/business-activity.service';
import { CountryService } from '@modules/country/country.service';

@Injectable()
export class BusinessActivityBBCSGService {
  constructor(
    private countryService: CountryService,
    private businessActivityService: BusinessActivityService,
  ) {}

  async filter({ country, searchString }: { country: string; searchString: string }) {
    try {
      const findCountry = await this.countryService.findFirst({
        where: { name: country },
      });
      return this.businessActivityService.findMany({
        where: {
          countryId: findCountry?.id && undefined,
          OR: searchString
            ? [
                {
                  name: {
                    contains: searchString,
                  },
                },
                {
                  sicCode: {
                    contains: searchString,
                  },
                },
              ]
            : undefined,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
