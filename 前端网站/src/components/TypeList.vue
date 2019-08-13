<template>
  <div class="TypeList" style="margin-top: 100px">
    <div class="row">

      <div class="col-6  offset-1 mb-5">
       <h1 class="display-4 font-weight-bold text-center text-muted">{{type}}单曲</h1>

        <div class="input-group mt-3 mb-3">
          <div class="input-group-prepend">
            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
              {{searchTag}}
            </button>
            <div class="dropdown-menu">
              <span class="dropdown-item" v-on:click="searchTag='歌曲名'">歌曲名</span>
              <span class="dropdown-item" v-on:click="searchTag='艺术家'" >艺术家</span>
            </div>
          </div>
          <input type="text" class="form-control" v-model="searchString" placeholder="请输入关键词">
        </div>

        <ul class="list-group">
          <li class="list-group-item " v-bind:class="{'unselected': !Item.inList, 'selected':Item.inList}"
              v-on:click="add(Item,Index)" v-for="(Item,Index) in typeList(songList,type,searchString)">
            <span> {{Item.article}} - {{Item.song}}</span>
          </li>
        </ul>
      </div>
      <div class="col-4 offset-7 fixed-top " style="margin-top: 130px">
        <div class="mt-2">
          <nav class="navbar navbar-expand-sm pl-4" style="background-color: #c3e6cb">
            <ul class="navbar-nav">
              <li class="nav-item mr-3" v-bind:class="{'disable': target===type}" v-for="target in totalType">
                <router-link :to="{ path: '/TypeList', query: {type: target}}">
                  <span class="font-weight-bold">{{target}}</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div :key="menuKey" id="player" class="mt-3 mb-5">
          <aplayer autoplay
                   repeat = "list"
                   :music="music"
                   :list = "playList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Aplayer from 'vue-aplayer'

    export default {
      name: "TypeList",
      components:{
        Aplayer,
      },
      data () {
        return {
          type: "",
          songList:[],
          music:{},
          playList:[],
          menuKey:1,
          totalType:["摇滚","后摇","爵士","古典","民谣","英伦","全部"],
          searchString:"",
          searchTag:"歌曲名"
        }
      },
      mounted  : function () {
        this.type = this.$route.query.type;
        console.log(this.type);
        this.getData();
      },
      watch: {
        '$route' (to, from) {
          this.type=to.query.type;
          console.log(to.query.type);
          //this.getData();
        }
      },
      methods:{
        getData : function(){
          this.$http.get('http://localhost:8081/getAllSong').then(function(res){
            this.songList = res.body;
            for(var i = 0;i<this.songList.length;i++){
              this.songList[i].inList = false;
            }
          },function(){
            console.log('请求失败处理');
          });
        },
        typeList: function (list, type, searchString) {
          console.log(searchString);
          if(searchString === ''){//搜索内容为空
            if(type==="全部"){
              return list.filter(function (item) {
                return item.type !== null
              })
            }
            else {
              return list.filter(function (item) {
                return item.type === type
              })
            }
          }
          else if(this.searchTag === '歌曲名'){
            if(type==="全部"){
              return list.filter(function (item) {
                return item.song.indexOf(searchString) !== -1;
              })
            }
            else {
              return list.filter(function (item) {
                return item.song.indexOf(searchString) !== -1 && item.type === type;
              })
            }
          }
          else {
            if(type==="全部"){
              return list.filter(function (item) {
                return item.article.indexOf(searchString) !== -1;
              })
            }
            else {
              return list.filter(function (item) {
                return item.article.indexOf(searchString) !== -1 && item.type === type;
              })
            }
          }
        },

        add : function(Item,Index){
          console.log(Item.inList);
          if(Item.inList === false){
            let tem = {
              pic: "/static/photo/similar"+ (Index%6+1).toString() +".jpg",
              theme: 'pic',
              title: Item.song ,
              src: Item.path ,
              artist: Item.article,
            };
            if(this.playList.length === 13){
              var title = this.playList.shift().title;
              for(let i =0 ; i< this.songList.length; i++){
                if(title === this.songList[i].song){
                  this.songList[i].inList=false;
                }
              }
            }
            this.music = tem;
            this.playList.push(tem);
            Item.inList = true;
            ++this.menuKey;
          }
          else{
            for(var i =0 ;i<this.playList.length; i++){
              if(Item.song === this.playList[i].title){
                this.playList.splice(i,1);
                break;
              }
            }
            if(this.playList.length>0){
              this.music = this.playList[this.playList.length-1];
            }
            else {
              this.music = {};
            }
            Item.inList = false;
            ++this.menuKey;
          }
        }


      }
    }
</script>

<style scoped>
  li.unselected{
    color: grey;
  }

  li.unselected:hover{
    color : white;
    background-color: silver;
  }

  li.selected{
    color : #155724;
    background-color: #c3e6cb;
  }

  li.selected:hover{
    color : white;
    background-color: silver;
  }

  li a{
    font-size:1.4em;
    color: #155724;
  }
  li a.diasble{
    color:grey;
  }
  li a.diasble:hover {
    color:grey;
  }


</style>
