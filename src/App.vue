<template>
  <div id="app">
    <div id="nav">
      <router-link to="/sports">体育</router-link> |
      <router-link to="/recreation">娱乐</router-link> |
      <router-link to="/game">游戏</router-link>
    </div>
    <transition mode='out-in'>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* 设置中间动画的公有属性 */
.v-enter-active,
.v-leave-active {
  transition: all 0.8s;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-50%, 0, 0);
}

.v-leave-to {
  opacity: 0;
  transform: translate3d(50%, 0, 0);
}
</style>
