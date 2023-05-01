import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectUsers = state => state.users.users;

export const selectFollowingUsers = state => state.users.followingUsers;

export const selectIsLoading = state => state.users.isLoading;

export const selectError = state => state.users.error;

export const selectFilter = state => state.filters.status;

export const selectFilteredUsers = createSelector(selectUsers, selectFollowingUsers, selectFilter, (users, followingUsers, filter) => {
  switch (filter) {
      case statusFilters.follow:
      return users.filter((user) => {
        return !followingUsers.includes(user.id);
      });
    case statusFilters.followings:
      return users.filter((user) => {
        return followingUsers.includes(user.id);
      });
    default:
      return users;
  }
});