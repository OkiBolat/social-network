import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '2daf0aff-6b5b-4e4e-a2aa-961bf5bf6e0c'
  }
})

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    const response = await instance(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  followUser(id) {
    return instance.post(`/follow/${id}`)
  },
  unfollowUser(id) {
    return instance.delete(`/follow/${id}`)
  },
  getProfileUser(id) {
    return instance(`/profile/${id}`).then(response => response.data)
  },
  authMe() {
    return instance('auth/me')
    
  }
  

}

export const profileAPI = {
  getProfileUser(id) {
    return usersAPI.getProfileUser(id)
  },
  getStatus(id) {
    return instance(`/profile/status/${id}`)
  },
  updateStatus(status) {
    return instance.put('/profile/status', {status: status})
  },
  authMe() {
    return usersAPI.authMe()
  },
  authLogin(formData) {
    return instance.post('/auth/login', formData)
  },
  logout() {
    return instance.delete('/auth/login')
  }
}
