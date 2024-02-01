import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8080'
})

export const retrieveHelloWorldPath
    = (username) => apiClient.get(`/hello/path-variable/${username}`)