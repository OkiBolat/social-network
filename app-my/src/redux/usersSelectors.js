import { createSelector } from "reselect"

export const getUsers  = (state) => {
  return state.usersPage.users
}
export const getUsersReserlect = createSelector(getUsers, (users) => {
  return users.filter(u => u)
})
export const getTotalCount  = (state) => {
  return state.usersPage.totalCount
}
export const getCurrentPage  = (state) => {
  return state.usersPage.currentPage
}
export const getPageSize  = (state) => {
  return  state.usersPage.pageSize
}
export const getIsFetching  = (state) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress
}