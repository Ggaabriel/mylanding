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