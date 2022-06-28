import UserApi from '../../api/user'
// import md5 from 'md5'
// import { setItem, getItem } from '../../utils/storage.js'
// import { TOKEN } from '../cosntant'
export default {
  namespaced: true,
  state: () => ({
    token :localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token',token)
      // setItem('token',token)
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      console.log(response)
      if(response){
        commit("setToken",response.data.data.token)
      }
      return response
    }
  }
}
