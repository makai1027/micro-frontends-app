export default {
    TOGGLE_COLLAGE: (state, bol) => {
        state.collage = bol
    },
    SET_TOKEN: (state, key) => {
        state.token = key
    },
    SET_MENU: (state, data) => {
        state.menu = data
    },
    SET_SIGNED: (state, data) => {
        state.hasSigned = data
    }
}