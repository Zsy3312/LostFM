<template >
  <div class="HelloWorld" >
    <div>
      <img class="mainPhoto" src="../assets/background.jpg" >
    </div>

    <div id="div1">
      <h1 class="text-center display-4 font-weight-bold text-muted mt-5">热门期刊</h1>


    <div class="row mt-1">
      <div class="col-md-6 offset-md-1" >
        <router-link  :to="{ path: '/Vol', query: {vol:2}}">
          <img src="http://localhost:8081/vol2/title.jpg" width="100%" height="auto">
          <p style="font-size: 1.3em">Vol.2 冲破一切</p>
        </router-link>

      </div>
      <div class="col-md-3 ml-1">
        <router-link :to="{ path: '/Vol', query: {vol:6}}">
          <img src="http://localhost:8081/vol6/title.jpg" width="90%" height="auto">
          <p style="font-size: 1.2em">Vol.6 你的生活是他人的橱窗</p>
        </router-link>

        <router-link :to="{ path: '/Vol', query: {vol:5}}">
          <img src="http://localhost:8081/vol5/title.jpg" width="90%" height="auto">
          <p style="font-size: 1.2em">Vol.5 长路漫漫</p>
        </router-link>
      </div>
     </div>
    </div>


    <div id="div2">
      <h1 class="text-center display-4 font-weight-bold text-muted mt-5">单曲分类</h1>

    <div class="row">
      <div class="col-md-4 pl-0 pr-0" >
        <div class="port-1 effect-3">
          <div class="image-box">
            <img src="../assets/vol.962.jpg" width="100%" height="auto" alt="Image-3">
          </div>
          <router-link :to="{ path: '/TypeList', query: {type: '英伦' }}" >
            <div class="text-desc">
              <h3 class="text-center text-muted display-3 font-weight-bold " style="margin-top: 25%">英伦</h3>
            </div>
          </router-link>
        </div>

        <div class="port-1 effect-3">
          <div class="image-box">
            <img src="../assets/vol.963.jpg" width="100%" height="auto" alt="Image-3">
          </div>
          <router-link  :to="{ path: '/TypeList', query: {type: '爵士' }}" >
            <div class="text-desc">
              <h3 class="text-center text-muted display-3 font-weight-bold " style="margin-top: 25%">爵士</h3>
            </div>
          </router-link>
        </div>
      </div>

      <div class="col-md-4 pl-0 pr-0">
        <div class="port-1 effect-3">
          <div class="image-box">
            <img src="../assets/vol.960.jpg" width="100%" height="auto" alt="Image-3">
          </div>
          <router-link :to="{ path: '/TypeList', query: {type: '后摇' }}">
            <div class="text-desc">
              <h3 class="text-center text-muted display-3 font-weight-bold " style="margin-top: 25%">后摇</h3>
            </div>
          </router-link>
        </div>
        <div class="port-1 effect-3">
          <div class="image-box">
            <img src="../assets/vol.950.jpg" width="100%" height="auto" alt="Image-3">
          </div>
          <router-link  :to="{ path: '/TypeList', query: {type: '摇滚' }}">
            <div class="text-desc">
             <h3 class="text-center text-muted display-3 font-weight-bold" style="margin-top: 25%">摇滚</h3>
           </div>
          </router-link>
        </div>
      </div>

      <div class="col-md-4 pl-0 pr-0">
        <div class="port-1 effect-3">
          <div class="image-box">
            <img src="../assets/vol.958.jpg" width="100%" height="auto" alt="Image-3">
          </div>
          <router-link  :to="{ path: '/TypeList', query: {type: '古典' }}">
            <div class="text-desc">
              <h3 class="text-center text-muted display-3 font-weight-bold" style="margin-top: 25%">古典</h3>
            </div>
          </router-link>
        </div>
        <div class="port-1 effect-3">
          <div class="image-box">
            <img src="../assets/vol.966.jpg" width="100%" height="auto" alt="Image-3">
          </div>
          <router-link  :to="{ path: '/TypeList', query: {type: '民谣' }}">
            <div class="text-desc">
              <h3 class="text-center text-muted display-3 font-weight-bold" style="margin-top: 25%">民谣</h3>
            </div>
          </router-link>
         </div>
        </div>
      </div>
    </div>

    <div id="div3">
      <h1 class="text-center display-4 font-weight-bold text-muted mt-5">原创推荐</h1>


      <div class="row mb-5">
        <div class="col-md-6 offset-md-1" >
          <table>
           <tr>
             <td width="50%" valign="top">
                <img class="createPhoto rounded-circle "  src="../assets/create-1.jpg">
             </td>
             <td >
               <span  class="pl-5">
                 <router-link style="font-size: 2em" :to="{ path: '/Column'}" >
                   开心就足够
                  </router-link>
                  <br>
                  <span style="font-size: 1.6em;color:#996600" class="pl-5">徐真真</span>
               </span>
             </td>
           </tr>
         </table>

          <div>
            <p class="text-md-left pr-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人生不可能一帆风顺，你会选择什么态度去面对？有人会重新调整新的状态投入寻找理想生活，有人则一蹶不振
            放弃自己坚持的东西。开心乐观的信仰，有时比黄金珍贵，徐真真用一首朗朗上口的Rap来告诉你看似复杂
            却又浅显的道理，轻快的flow与积极向上的歌词让人一秒就能豁然开朗，和真真的笑容一样像阳光般照耀着你，
            驱散你内心的阴霾。今天，我想看到新的你，寒冬里也别忘记去晒晒太阳。
           </p>
          </div>
       </div>
        <div class="col-md-3" >
          <img src="../../static/photo/col3.jpg" class="container-fluid rounded">
          <router-link :to="{ path: '/Column'}" class="ml-3" style="font-size: 1.3em" >白水的老歌与新作</router-link>

          <img src="../assets/create-3.jpg" class="container-fluid rounded" >
          <router-link :to="{ path: '/Column'}" class="ml-3" style="font-size: 1.3em">Sugar Man:隐没在城市的声音</router-link>
        </div>
      </div>
    </div>

    <div class="jumbotron jumbotron-fluid mb-0" style="background-color: black">
      <div class="container row">
        <div class="col-md-3 offset-1">
          <h1 class="text-white">Lost.FM</h1><br>
          <p id="join" class="text-white">
            关于Lost.FM<br>
            加入我们<br>
          </p>
        </div>
        <div class="col-md-3 offset-4">
          <p class="text-white">
            Mobile: 18916223651<br><br>
            Email: 331259642@qq.com
          </p>
        </div>
        <div class="col-md-1">
          <img src="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      types : ["英伦", "古典", "后摇", "民谣", "说唱", "摇滚"],

    }
  },
  mounted  : function () {
    this.msg = 'mounted is running';
    console.log("hello");
    if(this.$route.query.to===1){
      let element = document.getElementById("div2");
      element.scrollIntoView();
    }
    else if(this.$route.query.to===2){
      let element = document.getElementById("div3");
      element.scrollIntoView();
    }
  },

  watch: {
    '$route' (to, from) {
      if(to.query.to===1){
        let element = document.getElementById("div2");
        element.scrollIntoView();
      }
      else if(to.query.to===2){
        let element = document.getElementById("div3");
        element.scrollIntoView();
      }
    }
  },

  /* html
    <div>
      <nav class="navbar navbar-expand-lg ">
        <span class="title  mr-auto" >
          <router-link to="/" >
            音乐期刊
          </router-link>
        </span>

        <ul class="navbar-nav" >
          <li class="nav-item active m-0" v-for="type in types">
            <router-link :to="{ path: '/TypeList', query: {type:type}}" class="nav-link" >{{type}}</router-link>
          </li>
        </ul>
      </nav>
    </div>
   */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 30px;
}
a {
  color: #707070;
}
a :hover{
  color: #996600
}
.carousel-inner img {
  width: 100%;
  height: auto;
}
body{
  padding-left: 100px;
  padding-right: 100px;
}
img.mainPhoto{
  width: 100%;
  height: auto;
}
img.createPhoto{
  width:100%;
  height: auto;
}
img.musicList{
  width: 100%;
  height: auto;
}
h2.title{
  margin-left: 50px;
  text-align:left
}
ul.navbar-nav{
  margin-right: 10%;
}
div.musicList_1{
  margin-left: 10%;
}
div.musicList_2{
  margin-left: 5%;
}
span.title{
  padding-left: 2%;
  margin-left: 7.5%;
  border-left-color: #996600;
  border-left-style: solid;
  border-left-width: 3px;
  font-size:1.6em;
}
.bg {
  background:url(../assets/background.jpg) no-repeat center;
  background-size: 100% 100%;
}
/* effect-1 css */
.text-desc{position: absolute; left: 0; top: 0; background-color: #fff; height: 100%; opacity: 0; width: 100%; padding: 20px;}
.port-1{float: left; width: 100%; position: relative; overflow: hidden; text-align: center;}
.port-1 .text-desc{opacity: 0.9; top: -100%; transition: 0.5s; color: #000; }
.port-1 img{transition: 0.5s;}
.port-1:hover img{transform: scale(1.2);}

.port-1.effect-3 .text-desc{top: 50%; left: 50%; width: 0; height: 0; overflow: hidden; padding: 0;}
.port-1.effect-3:hover .text-desc{width: 100%; top: 0; left: 0; height: 100%; }

</style>
