import { ICountry } from './country.interface';

export interface IState {
    readonly id: number;
    readonly name: string;
    readonly code: string;
    readonly flag: string;
    readonly dialingCode: Array<{
        city: string;
        areaCode: string;
        dialingCode: string;
        isDeleted: boolean;
    }>;
    readonly lat: number;
    readonly lng: number;
    // readonly cities: ICity[];
    readonly country: ICountry;
    readonly isCapital: boolean;
    readonly isActive: boolean;
    readonly isDeleted: boolean;
}
