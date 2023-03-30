import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BooleanLiteral } from 'typescript';
import { Comments, FetchCommentsParams, PostFlagLike, TotalLike } from './types';


export const fetchComments = createAsyncThunk(
    'comments/fetchCommentsStatus',
    async (params: FetchCommentsParams) => {
      const { page, limit } = params;
      const response = await axios.get<Comments[]>(
        `http://localhost:8080/comments?_page=${page}&_limit=${limit}`
      );
      return response.data;
    },
);


export const fetchTotalCount = createAsyncThunk<number>('comments/fetchTotalCountStatus', async () => {

    const response = await axios.get(
      `http://localhost:8080/comments?_page=1`, {
        headers: {
          'X-Total-Count': 'true'
        }
      }
    );
    const totalCount = parseInt(response.headers['x-total-count']);
    return totalCount;
});


// export const fetchToggleLike = createAsyncThunk<boolean, number>(`comments/fetchToggleLike`,//первый тип это колбэк второй что принимает асинхронная функция
//     async (id) => {
//         const responce = await axios.get(`http://localhost:8080/comments?id=${id}`);
//         const like = responce.data[0].like;
//         const totalLike = responce.data[0].totalLike
        
//         const {data} =  await axios.patch(`http://localhost:8080/comments/${id}`, {
//             like: !like
//         });
//         await axios.patch(`http://localhost:8080/comments/${id}`, {
//             totalLike: !like? totalLike + 1 : totalLike - 1
//         });
//         console.log(data.like);
        
//         return !like; 
// })

export const postFlagLike = createAsyncThunk<boolean, PostFlagLike>(`comments/postFlagLike`,
    async ({id, like}) => {
        const {data} = await axios.patch(`http://localhost:8080/comments/${id}`, {
            like: !like
        });
        return data.like; 
})

export const postTotalLike = createAsyncThunk<number, TotalLike>(`comments/postTotalLike`,
    async ({id, like, totalLike}) => {
        const {data} = await axios.patch(`http://localhost:8080/comments/${id}`, {
            totalLike: !like? totalLike + 1 : totalLike - 1
        });
        return data.totalLike; 
})


type Image = string
export const fetchImage = createAsyncThunk<Image, number>(
    'comments/fetchImage',
    async (id) => {
      const response = await axios.get(
        `http://localhost:8080/comments/${id}`
      );
      
      return response.data.icon;
    },
);