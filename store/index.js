import axios from "axios";
import {
  setToken,
  getToken,
  setUserInfo,
  setUser,
  getUserInfo
} from "@/plugins/saveCook";
export const state = () => ({
  token: "",
  userData: "",
  userList:[],
});

export const mutations = {
  setToken(state, token) {
    setToken(token);
    state.token = token;
  },
  setUserData(state, userObj) {
    state.userData = userObj;
  },
  // setUserList(state, user) {
  //   state.userList.push(user)
  //   setUser(state.userList)
  // }
};

// export const actions = {
//   setUserList({ state, commit },data) {
//     axios.get("user.json").then(res => {
//       commit("setUserList",res);
//     });
   
//   }
// };
