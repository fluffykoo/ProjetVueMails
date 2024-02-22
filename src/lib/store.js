
import { createStore } from 'vuex';

export default createStore({
    state: {
        user: { userName: null },
        isAuthenticated: false,
        sentEmails: JSON.parse(sessionStorage.getItem('sentEmails')) || [],
    },
    mutations: {
        setUser(state, userName) {
            state.user.userName = userName;
        },
        setAuthentication(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated;
        },
         addEmail(state, email) {
            state.sentEmails.push(email);
            sessionStorage.setItem('sentEmails', JSON.stringify(state.sentEmails));
        },
         deleteEmail(state, emailIndex) {
            state.sentEmails.splice(emailIndex, 1);
            sessionStorage.setItem('sentEmails', JSON.stringify(state.sentEmails));
        },
    },
    actions: {
        setUser(context, userName) {
            context.commit('setUser', userName);
        },
        setAuthentication(context, isAuthenticated) {
            context.commit('setAuthentication', isAuthenticated);
        },
        sendEmail(context, email) {
            context.commit('addEmail', email);
        },
        deleteSentEmail(context, emailId) {
            context.commit('deleteEmail', emailId);
        },
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        getUserName: (state) => state.user.userName,
        getSentEmails: (state) => state.sentEmails,
    },
    modules: {},
});
