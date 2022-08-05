import { getCode, login } from "@/api/user";
export default {
  namespaced: true,
  state: {
    token: '',
    img: '',
    realToken: '',
    userInfo: {}
  },
  mutations: {
    setToken(state, payload) {
      state.token = 1234
    },
    getRandom(state) {
      var chars = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      var nums = "";
      for (var i = 0; i < 32; i++) {
        var id = parseInt(Math.random() * 61);
        nums += chars[id];
      } //赋值
      this.checkNumber = nums;
      state.token = 1234
      return nums;
    },
    setCode(state, payload) {
      state.img = payload
    },
    setRealToken(state, payload) {
      state.realToken = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    getToken(context, val) {
      context.commit('getRandom')
    },
    async getCode(context, val) {
      const res = await getCode(val)
      const imgUrl = "data:image/png;base64," + btoa(new Uint8Array(res.data).reduce(
        (data, byte) => data + String.fromCharCode(byte), ""
      )
      )
      context.commit('setCode', imgUrl)
    },

  }
}
