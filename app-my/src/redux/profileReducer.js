import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    {
      id: 1,
      message: 'How are you?',
      likesCount: 23,
      image: 'https://cdn-icons-png.flaticon.com/512/206/206871.png'
    },
    {
      id: 2,
      message: 'How are you?',
      likesCount: 23,
      image: 'https://cdn5.vectorstock.com/i/1000x1000/55/19/modern-army-soldier-icon-simple-style-vector-10885519.jpg'
    },
    {
      id: 3,
      message: 'How are you?',
      likesCount: 23,
      image: 'data:image/png;base64,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'
    },
    {
      id: 4,
      message: 'How are you?',
      likesCount: 23,
      image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/soldier.png'

    },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {
          id: 1,
          message: action.text, // значение по умолчанию берется отсюда
          likesCount: 0,
          image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/soldier.png'
        }],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state, profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state, status: action.status
      }
    }
    case DELETE_POST : 
    return {
      ...state, posts: state.posts.filter(p => p.id !== action.postId)
    }
    default: {
      return state;
    }
  }
};

export const addPostActionCreator = (text) => ({ type: ADD_POST , text})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export const deletePostAC = (postId) => ({
  type: DELETE_POST,
  postId
});

export const getStatus = (status) => ({
  type: SET_STATUS,
  status
});

export const getProfileUser = (userId) => {
  return (dispatch) => {
    usersAPI.getProfileUser(userId).then(data => {
      dispatch(setUserProfile(data))
    })
  }
};

export const getUserStatus = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then(({ data }) => {
      dispatch(getStatus(data))
    })
  }
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(resp => {
      if (resp.data.resultCode === 0) {
        dispatch(getStatus(status))
      }
    })
  }
};

export default profileReducer;