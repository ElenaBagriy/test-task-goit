import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUser } from './usersOperations';

const usersInitialState = {
  users: [],
  followingUsers: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    followUser(state, action) {
      state.followingUsers.push(action.payload);
    },
    unfollowUser(state, action) {
      const indexOfFollowing = state.followingUsers.findIndex(
        (item) => item === action.payload);
      state.followingUsers.splice(indexOfFollowing, 1);
    },
  },
  extraReducers: builder =>
    builder

      // ------------ Get all users ----------------
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.map((user) => {
          return { ...user, isFollowing: false }
        });
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, handleRejected)
  
      // ------------ Update user ----------------
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {...action.payload, isFollowing: user.isFollowing};
          };
          return user;
        })
      })
      .addCase(updateUser.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
export const { followUser, unfollowUser } = usersSlice.actions;