import { apiClient } from './ApiClient'

export const retrieveHelloWorldPath
= (username) => apiClient.get(`/hello/path-variable/${username}`)

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`,{
        headers: {
            Authorization: token
        }
    })
