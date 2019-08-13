<template>
  <div class="Vol" style="margin-top: 100px">

    <div class="row">
      <div class="col-7 offset-1">
        <h2 class="text-center text-muted">Vol.{{Vol}}{{volName}}  | <span class="text-muted" style="font-size: 0.7em">{{type}}</span> </h2>
        <img v-bind:src="img" class="container-fluid">
        <p class="pl-3 pr-3 mt-3" style="font-size: 1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{describe}} </p>
        <div id="player" v-if="ready" class="mt-3 mb-5">
          <aplayer autoplay
                   repeat = "list"
                   :music="music"
                   :list = "playList"
          />
        </div>
      </div>

      <div class="col-2 ml-5" >
        <div class="text-center" >
          <h3 id="Test" class="text-muted">
            相似期刊推荐
          </h3>
          <ul class="list-unstyled">
            <li class="mt-3" v-for="similarItem in similar">
              <img v-bind:src="similarItem.img" width="100%" height="auto">
              <router-link  :to="{ path: '/Vol', query: {vol:similarItem.NO}}">
                <p >Vol.{{similarItem.NO}} {{similarItem.Title}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Aplayer from 'vue-aplayer'

  export default {
    name: "Vol",
    components: {
      Aplayer
    },
    data () {
      return {
        Vol: this.$route.query.vol,
        img:"",
        volName:"",
        describe: "",
        type:"",
        musicList:[],
        similar:[],
        music : {},
        playList:[],
        ready:false
      }
    },
    mounted : function () {
      this.Vol = this.$route.query.vol;
      console.log(this.Vol);
      this.getData();
    },
    watch: {
      '$route' (to, from) {
        this.Vol=to.query.vol;
        console.log(to.query.vol);
        this.playList.length=0;
        this.ready=false;
        this.getData();
      }
    },
    methods: {
      getData : function(){
        this.$http.get('http://localhost:8081/getVol?vol='+ this.Vol).then(function(res){

          this.img = res.body.img;
          this.volName = res.body.title;
          this.describe = res.body.description;
          this.musicList = res.body.musicList;
          this.type=res.body.type;

          for(var i =0; i<this.musicList.length; i++){
            let tem = {
              pic: "/static/photo/similar"+ (i%6+1).toString() +".jpg",
              theme: 'pic',
              title: this.musicList[i].song ,
              src: this.musicList[i].path ,
              artist: this.musicList[i].article,
            };
            this.playList.push(tem);
          }

          this.music = this.playList[0];

          this.similar = res.body.similar;

          this.ready=true;

        },function(){
          console.log('请求失败处理');
        });
      }

    },

  }


</script>

<style scoped>

</style>
