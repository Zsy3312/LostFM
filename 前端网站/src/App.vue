<template>

  <div id="app" data-spy="scroll" data-target="#myScrollspy" data-offset="1">
    <div class="pr-5 pl-5">
      <nav id="myScrollspy" class="navbar navbar-expand-md bg-light pr-5 pl-5  fixed-top">
        <router-link to="/" class="navbar-brand mt-1 ml-5 mr-auto">
          <h3 class="mynav text-muted"> Lost.FM</h3>
        </router-link>

        <ul class="mynav navbar-nav" >
          <li class="mynav nav-item active mr-5 " >
            <router-link :to="{ path: '/VolList'}"  class="nav-link " >期刊</router-link>
          </li>
          <li class="mynav nav-item active mr-5 " >
            <router-link :to="{ path: '/',query: {to : 1}}" class="nav-link " >分类</router-link>
          </li>
          <li class="mynav nav-item active mr-5 " >
            <router-link :to="{ path: '/TypeList', query: {type: '全部'}}"  class="nav-link " >单曲</router-link>
          </li>
          <li class="mynav nav-item active mr-5 " >
            <router-link :to="{ path: '/',query: {to : 2}}" class="nav-link " >专栏</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'App',
    data () {
      return {
        types : ["期刊", "单曲", "专栏"]
      }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*margin-top: 60px;*/
}
body {
  margin-top: 50px; 
}
li.mynav{

}
ul.mynav{
  margin-right: 20em;
}
li a{
  font-size:1.4em;
  color:#707070;
}
li a:hover {
  color: #996600;
}
</style>
