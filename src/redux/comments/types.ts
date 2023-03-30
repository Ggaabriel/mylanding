export interface Comments {
    id: number,
    nickname:string,
    comment:string,
    icon: string,
    data: string,
    like: boolean,
    totalLike:number
}

export interface Pagination {
    comments:Comments[],
    page: number,
    limit: number,
    totalCount: number,
    icon:string
}

export interface FetchCommentsParams {
    page: number;
    limit: number;
}

export interface IUser {
    id: number;
    email: string;
    password: string;
}
export type PostFlagLike = {
    id:number,
    like:boolean
}
export type TotalLike = {
    id:number,
    like:boolean,
    totalLike: number
}
