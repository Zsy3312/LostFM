<template>
  <div class="MainPage">

    <p>{{msg}}</p>
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "MainPage",
      data () {
        return {
          msg: 'MainPage',

        }
      },
      mounted  : function () {
        this.msg = 'welcome to main page';
        console.log("MainPage");

        id3(this.files[0], function(err, tags) {
          // tags now contains your ID3 tags
        });
      }
    }
</script>

<style scoped>

</style>
