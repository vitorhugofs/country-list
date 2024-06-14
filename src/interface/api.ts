export interface Country {
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    name: {
        common: string;
        official: string;
    };
    cca3: string;
    capital: string[];
    region: string;
    population: number;
    subregion: string;
    tld: ['string'];
    languages: {
        [key: string]: string
    }
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        }
    }
}
  