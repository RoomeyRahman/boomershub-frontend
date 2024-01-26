export interface IUpdate {
    _id: string;
    data: object;
}

export interface IQueryParams {
    limit?: number;
    skip?: number;
    searchBy?: string;
    noCondition?: boolean;
    pagination?: boolean;
    filter?: any;
}
