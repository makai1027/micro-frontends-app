import Cookies from 'js-cookie'

export default {
    set: (key, data) => {
        Cookies.set(key, data)
    },
    remove: key => {
        Cookies.remove(key)
    },
    get: key => {
        return Cookies.get(key)
    }
}