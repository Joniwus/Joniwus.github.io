import { createStore } from 'vuex';

export const store = createStore({
    state () {
        return {
            mobileThreshold: 768,
            isMobile: false
        };
    },
    mutations: {
        setIsMobile (state, value) {
            state.isMobile = !!value;
        }
    },
    actions: {
        updateIsMobile ({ commit, state }) {
            commit('setIsMobile', window.innerWidth < state.mobileTreshold);
        }
    },
    getters: {
        isMobile: (state) => state.isMobile
    }
});

window.addEventListener('resize', () => {
    store.dispatch('updateIsMobile');
});
