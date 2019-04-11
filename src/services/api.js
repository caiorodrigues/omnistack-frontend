import axios from 'axios'

const api = axios.create({
        baseURL: 'https://omnistack-backend-caior.herokuapp.com/',
    })

export default api    