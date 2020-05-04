import axios from './axios'

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params}).then(res => {
            if (res.status === 200) resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, {data}).then(res => {
            if (res.status === 200) resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })

}
