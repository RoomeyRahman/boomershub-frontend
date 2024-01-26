import { IOrganization } from './organization.interface';

export interface IOrganizationMember {
    readonly id: number;
    readonly user: any;
    readonly organization: IOrganization;
    readonly status: string;
    readonly isActive: boolean;
    readonly isDeleted: boolean;
}
