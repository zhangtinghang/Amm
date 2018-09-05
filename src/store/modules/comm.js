const comm = {
  state: {
    blogType: null,
  },
  mutations: {
    SET_BLOGTYPE: (state, toggleNum) => {
      state.blogType = toggleNum
    }
  },
  actions: {
    toggleBlog({ commit }, toggleNum) {
      commit('SET_BLOGTYPE', toggleNum)
    }
  }
}

export default comm
