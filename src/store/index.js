import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kategoris: [],
    barangs : [],
    buka : false
  },
  mutations: {
    getKategori(state, payload){
      state.kategoris = payload;
    },
    getBarangs(state, payload){
      state.barangs = payload
    },
    setBuka(state){
      state.buka = !state.buka;
    }
  },
  actions: {
    setBuka(context){
      context.commit('setBuka');
    },
    async addKategori({dispatch},payload) {
      try {
        await axios.post('/api/category', payload);
        dispatch('getKategori');
      } catch (error) {
        console.log(error.response.data.errors)
      }
    },
    async updateKategori({dispatch}, vari){
      try {
        await axios.put('/api/category/'+vari.id, vari.payload);
        dispatch('getKategori');
      } catch (error) {
        console.log(error.response.data.errors)
      }
    },
    async getKategori({commit}){
      const res = await axios.get('/api/category');
      commit('getKategori', res.data)
    },
    async deleteKategori({ dispatch },payload){
      try {
        await axios.delete('/api/category/'+payload);
        dispatch('getKategori');
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
