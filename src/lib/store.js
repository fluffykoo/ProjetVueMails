
import { createStore } from 'vuex';

export default createStore({
    state: {
        user: { userName: null },
        isAuthenticated: false,
    },
    mutations: {
        setUser(state, userName) {
            state.user.userName = userName;
        },
        setAuthentication(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated;
        },
    },
    actions: {
        setUser(context, userName) {
            context.commit('setUser', userName);
        },
        setAuthentication(context, isAuthenticated) {
            context.commit('setAuthentication', isAuthenticated);
        },
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        getUserName: (state) => state.user.userName,
    },
    modules: {},
});
