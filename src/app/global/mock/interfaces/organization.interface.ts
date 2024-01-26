import { ICountry } from './country.interface';
import { IState } from './state.interface';
import { ICity } from './city.interface';

export interface IOrganization {
    readonly id: number;
    readonly name: string;
    readonly nameSlug: string;
    readonly slug: string;
    readonly description: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly lat: number;
    readonly lng: number;
    readonly city: ICity;
    readonly state: IState;
    readonly country: ICountry;
    readonly foundedAt: number;
    readonly logo: string;
    readonly banner: string;
    readonly videos: Array<{ ext: string; url: string }>;
    readonly pictures: Array<{ ext: string; url: string }>;
    readonly socials: Array<{ type: string; url: string }>;
    readonly testimonials: Array<{
        name: string;
        description: string;
        url: string;
    }>;
    readonly faqs: Array<{ question: string; answer: string }>;
    readonly confidential: Array<{ doc_name: string; doc_url: string }>;
    readonly contactInfo: Array<{ name: string; phone: string }>;
    readonly isActive: boolean;
    readonly isDeleted: boolean;
}
