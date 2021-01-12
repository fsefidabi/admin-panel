export const NavbarModule = {
  namespaced: true,
  
  state: {
    navItems: [
      {
        name: 'Dashboard',
        icon: 'fa fa-home'
      },
      {
        name: 'Pages',
        icon: 'fa fa-file'
      },
      {
        name: 'Users',
        icon: 'fa fa-users'
      },
      {
        name: 'Archive',
        icon: 'fa fa-archive'
      }
    ],
    currentTab: 'Dashboard'
  },
  
  mutations: {
    UPDATE_CURRENT_TAB(state, tab) {
      state.currentTab = tab.name
      console.log(state.currentTab)
    }
  },
  
  actions: {
    updateCurrentTab({commit}, tab) {
      commit('UPDATE_CURRENT_TAB', tab)
    }
  }
}