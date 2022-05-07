import { createStore } from "vuex";
import {
  Roles,
  startPageMap,
  roleNamesMap,
  getUserRoleName,
  getUserMenu,
} from "@/roles/roles";
import { User } from "@/models/user";
import { menuItem } from "@/router/menuItems";
import { Card, createTestCard } from "@/models/card";

export interface State {
  count: number;
  isAuthenticated: boolean;
  userData: User;
  menuItems: Array<menuItem | undefined>;
  userPasses: Array<Card>;
}
export const store = createStore<State>({
  state: {
    count: 0,
    isAuthenticated: false,
    userData: {
      firstName: "",
      lastName: "",
      userRoleID: 0,
    },
    userPasses: [
      createTestCard(1),
      createTestCard(2),
      createTestCard(3),
      createTestCard(4),
      createTestCard(5),
      createTestCard(6),
      createTestCard(7),
    ],
    menuItems: [],
  },
  getters: {
    getUserRoleName(state: State) {
      return getUserRoleName(state.userData);
    },
    getMenuItems(state: State) {
      return state.menuItems;
    },
    getUserRoleID(state: State) {
      return state.userData.userRoleID;
    },
    isAuthenticated(state: State) {
      return state.isAuthenticated;
    },
    getUserFirstName(state: State) {
      return state.userData.firstName;
    },
    getUserLastName(state: State) {
      return state.userData.lastName;
    },
    getUserPassData(state: State) {
      return state.userPasses;
    },
  },
  mutations: {
    loginUser(state: State, payload) {
      state.userData = payload.userData;
      state.isAuthenticated = true;
      state.menuItems = getUserMenu(payload.userData);
    },
    logoutUser(state: any) {
      state.userData = {};
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.userRole = "";
    },
  },
  actions: {},
  modules: {},
});
