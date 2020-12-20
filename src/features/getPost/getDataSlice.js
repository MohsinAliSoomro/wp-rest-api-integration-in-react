import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//api link
//http://www.holandi.nl/wp-json/wp/v2/sentence

export const fetchGetPost = createAsyncThunk('getPost/fetchGetPost', async (data, thunkApi) => {
	const response = await fetch('http://www.holandi.nl/wp-json/wp/v2/posts');
	return await response.json();
});

export const getDataSlice = createSlice({
	name: 'getData',
	initialState: {
		error: '',
		post: [],
		loading: false,
	},
	extraReducers: {
		[fetchGetPost.fulfilled]: (state, action) => {
			state.loading = false;
			state.post.push(action.payload);
		},
		[fetchGetPost.rejected]: (state, action) => {
			state.loading = false;
			state.error = state;
		},
		[fetchGetPost.pending]: (state, action) => {
			state.loading = true;
		}
	}
});

export const selectGetData = (state) => state.getData.value;

export default getDataSlice.reducer;
