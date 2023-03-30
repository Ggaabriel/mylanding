
import {createSlice} from '@reduxjs/toolkit';
import { fetchComments, fetchImage,
  // fetchToggleLike, 
  fetchTotalCount,
   postFlagLike, postTotalLike } from "./asyncActions";
import { Pagination } from './types';

const initialState:Pagination  = {
    comments:[],
    page:1,
    limit:4,
    totalCount:12,
    icon:""
}

const commentsSlice = createSlice({
    name:'comments',
    initialState,
    reducers:{
        setComments(state, action) {
            state.comments = action.payload      
        },
        setPage(state, action) {  
            state.page = action.payload
        },
        setLike(state, action) {
            state.comments[action.payload.id % 4].like = action.payload.like;  
            if(state.comments[action.payload.id % 4].like){
                state.comments[action.payload.id% 4].totalLike = state.comments[action.payload.id% 4].totalLike + 1 
            } 
            else{
                state.comments[action.payload.id % 4].totalLike = state.comments[action.payload.id% 4].totalLike - 1
            } 
        },

            
    },
    extraReducers: (builder) => {
        builder
        //comments
          .addCase(fetchComments.pending, (state, action) => {
            console.log(`loading123`);
            state.comments = [];
          })
          .addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload;
            console.log(`success123`);
          })
          .addCase(fetchComments.rejected, (state, action) => {
            console.log(`error123`);
            state.comments = [];
          })
          //totalCount
          .addCase(fetchTotalCount.pending, (state, action) => {
            console.log(`loading123`);
          })
          .addCase(fetchTotalCount.fulfilled, (state, action) => {
            state.totalCount = action.payload
            console.log(`success123`);
          })
          .addCase(fetchTotalCount.rejected, (state, action) => {
            console.log(`error123`);
          })
          //likes
          // .addCase(fetchToggleLike.pending, (state, action) => {
          //   console.log(`loading123`);
          // })
          // .addCase(fetchToggleLike.fulfilled, (state, action) => {
          //   console.log(`success123`);
          // })
          // .addCase(fetchToggleLike.rejected, (state, action) => {
          //   console.log(`error123`);
          // })
          // image
          .addCase(fetchImage.pending, (state, action) => {
            console.log(`loading123`);
          })
          .addCase(fetchImage.fulfilled, (state, action) => {
            console.log(`success123`);
            state.icon = action.payload
            
          })
          .addCase(fetchImage.rejected, (state, action) => {
            console.log(`error123`);
          })
          //flaglike
          .addCase(postFlagLike.pending, (state, action) => {
            console.log(`loading123`);
          })
          .addCase(postFlagLike.fulfilled, (state, action) => {
            console.log(`success123`);
          })
          .addCase(postFlagLike.rejected, (state, action) => {
            console.log(`error123`);
          })
          //totallike
          .addCase(postTotalLike.pending, (state, action) => {
            console.log(`loading123`);
          })
          .addCase(postTotalLike.fulfilled, (state, action) => {
            console.log(`success123`);
          })
          .addCase(postTotalLike.rejected, (state, action) => {
            console.log(`error123`);
          });
      }
})

export const {setComments, setPage, setLike} = commentsSlice.actions;
export default commentsSlice.reducer;