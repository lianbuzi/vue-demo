<template>
  <div id="app">
<!--     <img src="./assets/logo.png" alt=""> -->
    <hello></hello>
    <router-link to="/login">Go to login</router-link>
    <router-link to="/list">Go to list</router-link> 
      <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
