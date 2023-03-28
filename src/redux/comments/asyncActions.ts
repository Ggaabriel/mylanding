import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Comments, FetchCommentsParams } from './types';


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

type TotalCount = number;
  
export const fetchTotalCount = createAsyncThunk<TotalCount // тип для payload
  >('comments/fetchTotalCountStatus', async () => {

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

type Like = boolean;
export const fetchToggleLike = createAsyncThunk<Like, number>(`comments/fetchToggleLike`,
    async (id) => {
        const responce = await axios.get(`http://localhost:8080/comments?id=${id}`);
        const like = responce.data[0].like;
        const totalLike = responce.data[0].totalLike
        
        const {data} =  await axios.patch(`http://localhost:8080/comments/${id}`, {
            like: !like
        });
        await axios.patch(`http://localhost:8080/comments/${id}`, {
            totalLike: !like? totalLike + 1 : totalLike - 1
        });
        console.log(data.like);
        
        return !like; 
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