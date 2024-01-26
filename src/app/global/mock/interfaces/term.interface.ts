import { IOrganization } from './organization.interface';

export interface ITerm {
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly organization: IOrganization;
    readonly projects: any;
}
