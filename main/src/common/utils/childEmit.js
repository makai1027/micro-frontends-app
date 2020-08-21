import store from '@/store'

export default {
    submitDataMsg(payload) {
        store.dispatch('subapp/changeMsg', payload)
    }
}