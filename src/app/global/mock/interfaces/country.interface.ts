import { IState } from './state.interface';

export interface ICountry {
    readonly id: number;
    readonly name: string;
    readonly code: string;
    readonly flag: string;
    readonly dialingCode: string;
    readonly states: IState[];
    readonly continent: string;
    readonly isActive: boolean;
    readonly isDeleted: boolean;
}
