import Vue from 'vue'
import axios from 'axios'
import { Notify } from 'quasar'

Vue.prototype.$axios = axios

const api = axios.create({ baseURL: 'http://localhost:3001' })

api.interceptors.response.use((response) => {
	return response
}, (error) => {
  Notify.create({ color: 'negative', position: 'top',
    message: '(Global): '+ error,
    icon: 'report_problem'
  })  
  throw error
});

// api.defaults.headers.common['Authorization'] = AUTH_TOKEN;

Vue.prototype.$api = api

export { axios, api }
