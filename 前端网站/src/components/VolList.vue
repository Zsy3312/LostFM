<template>
    <div class="VolList" style="margin-top: 100px">
      <h1 class="text-center text-muted">期刊一览</h1>
      <div class="row">
        <div class="col-4 offset-2">
          <ul class="list-unstyled">
            <li class="mt-5" v-for="listOne in oddItem(VolList, showNum)">
              <div>
                <router-link  style="display: block;position: relative" :to="{ path: '/Vol', query: {vol:listOne.NO}}">
                  <img class="rounded" v-bind:src="listOne.img" width="100%" height="343px">
                  <h3 class="float" > Vol.{{listOne.NO}} &nbsp;{{listOne.title}} | <span style="font-size: 0.8em">  {{listOne.type}} | 曲目{{listOne.musicList.length}}</span></h3>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-4 ">
          <ul class="list-unstyled">
            <li class="mt-5" v-for="listOne in evenItem(VolList, showNum)">
              <div>
                <router-link  style="display: block;position: relative" :to="{ path: '/Vol', query: {vol:listOne.NO}}">
                  <img class="rounded" v-bind:src="listOne.img" width="100%" height="343px">
                  <h3 class="float" > Vol.{{listOne.NO}} &nbsp;{{listOne.title}} | <span style="font-size: 0.8em">  {{listOne.type}} | 曲目{{listOne.musicList.length}}</span></h3>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-5 mb-5 text-center" v-if="showNum<VolList.length">
          <div class="section">
            <span v-on:click="addLimit()" class="loadMore pl-2 pr-2" > 加载更多</span>
          </div>
      </div>

      <div class="mt-5 mb-5 text-center" v-if="showNum>=VolList.length">
        <div class="section">
          <span v-on:click="resetLimit()" class="loadMore pl-2 pr-2" > 加载完毕，收起列表</span>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
      name: "VolList",
      data () {
        return {
          VolList :[],
          showNum: 10,
        }
      },
      mounted : function () {
        this.getData();
      },
      methods: {
        cons : function(){
          console.log(this.playList);

          console.log(this.music);
          this.music = this.playList[1];
          console.log(this.music);
        },

        addLimit : function(){
          this.showNum = this.showNum +10;
        },

        resetLimit : function(){
          this.showNum = 10;
        },

        evenItem: function (list, limit) {
          return list.filter(function (item) {
            return item.NO % 2 === 0 && item.NO <=limit
          })
        },

        oddItem: function (list, limit) {
          return list.filter(function (item) {
            return item.NO % 2 === 1 && item.NO <=limit
          })
        },

        getData : function(){
          this.$http.get('http://localhost:8081/getVolList').then(function(res){

            this.VolList = res.body;


          },function(){
            console.log('请求失败处理');
          });
        }

      },
    }
</script>

<style scoped>

  span.loadMore{
    font-size: 1.2em;
    background-color: white;
    color:grey;
  }

  span.loadMore:hover{
    background: #999;
    color:white;
  }

  div.section{
    width: 350px;

    text-align: center;

    border-bottom: 1px solid #999;

    margin: auto;

    line-height: 0;
  }

  h3.float{
    position:absolute;


    left: 0;

    right: 0;

    bottom: 0;

    margin-bottom: 0;

    background-color: rgba(59,59,59,0.7);

    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#b33b3b3b', endColorstr='#b33b3b3b');

    height: 50px;

    padding: 0 15px;

    font-size: 1em;

    color: #1FD5A8;

    line-height: 50px;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;
  }
</style>
