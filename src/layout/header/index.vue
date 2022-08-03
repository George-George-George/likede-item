<template>
  <div class="body">
    <img src="http://likede2-admin.itheima.net/img/logo.3673fab5.png" alt="" />
    <div class="right-menu">
      <div class="touxiang">
        <img style="headerImg" :src="headerImg" alt="" />
      </div>
      <div>
        <span>欢迎您,{{ $store.state.user.userInfo.userName }}</span>
      </div>
      <div class="btn"><span>退出</span></div>
    </div>
  </div>
</template>

<script>
import headerImg from "@/assets/404_images/404_cloud.png";
export default {
  data() {
    return {
      headerImg,
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.body {
  background-color: #ccc;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
  width: 100%;
  height: 100%;
  img {
    width: 30px;
    margin-top: 6px;
    margin-left: 15px;
    position: relative;
    top: -9px;
  }
}
.right-menu {
  position: absolute;
  right: 3%;
  top: 3%;
  display: flex;
  width: 240px;
  height: 60px;
  justify-content: space-between;
  align-self: center;
  span {
    color: #fff;
  }
}
</style>
