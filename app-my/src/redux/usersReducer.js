import { usersAPI } from "./../api/api"

const FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET_USERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_IS_FETCHING = 'SET_IS_FETCHING',
  TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

const initialState = {
  users: [],
  totalCount: 50,
  pageSize: 8,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.payload.users,
        totalCount: action.payload.totalCount,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFetching ? [
          ...state.followingInProgress, action.userId] :
          state.followingInProgress.filter(u => u.id !== action.id)
      }
    default:
      return state;
  }
}

export const follow = (userId) => ({
  type: FOLLOW,
  userId
})
export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId
})
export const setUsers = (payload) => ({
  type: SET_USERS,
  payload
})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})
export const setFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching
})
export const toogleInFollowing = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING,
  isFetching,
  userId
})

export const requestUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(resp => {
      dispatch(setUsers({ users: resp.items, totalCount: resp.totalCount, }));
      dispatch(setCurrentPage(currentPage))
      dispatch(setFetching(false));
    })
  }
}

export const unfollowUser = (id) => {
  return (dispatch) => {
    dispatch(toogleInFollowing(true, id))
    usersAPI.unfollowUser(id).then(resp => {
      if (resp.data.resultCode === 0) {
        dispatch(unfollow(id))
      }
      dispatch(toogleInFollowing(false, id))
    })
  }
}

export const followUser = (id) => {
  return (dispatch) => {
    dispatch(toogleInFollowing(true, id))
    usersAPI.followUser(id).then(resp => {
      if (resp.data.resultCode === 0) {
        dispatch(follow(id))
      }
      dispatch(toogleInFollowing(false, id))
    })
  }
}



export default usersReducer
