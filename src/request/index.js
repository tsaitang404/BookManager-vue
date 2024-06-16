import axios from 'axios'

const env = import.meta.env
// create an axios instance
const service = axios.create({
    baseURL: env.VITE_BASE_API, // url = base url + request url
    timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json'
        // do something before request is sent
        // config.headers['AUTHORIZATION'] = getToken()
        // config.headers['_username'] = getUsername()
        // config.headers['murmur'] = getMurmur()
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error);
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        if (!res.code) {
            return res;
        }
        if (res.code !== 0) {
            if (res.code === 401) {
                removeToken();
                location.reload()
            } else {
                // handle other error codes
            }
            return Promise.reject(res);
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error);
    }
)

export default service
