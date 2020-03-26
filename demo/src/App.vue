<template>
  <div id="app">
    <div v-for="(item, i) in list" :key="item.key" class="list_item">
      <slider-action :autoClose="autoClose" :text="item.title">
          <div>{{item.title}}{{i}}</div>
          <template slot="left">
            <div class="custom-action info">info</div>
            <div class="custom-action replay">replay</div>
          </template>
          <template slot="right">
            <div class="custom-action remove">remove</div>
            <div class="custom-action cancel">cancel</div>
          </template>
          <div slot="extra">more</div>
        </slider-action>
      </div>
    <div class="list_item">
      <slider-action >
          <div>fasfasf</div>
          <template slot="right">
            <div class="custom-action remove">remove</div>
            <div class="custom-action cancel">cancel</div>
          </template>
          <div slot="extra">more</div>
        </slider-action>
      </div>
  </div>
</template>

<script>
import { SliderAction } from '../../src';
export default {
  name: 'App',
  data() {
    return{
      list: [
      {title: 'title-320', key: 'title-1'},
      {title: 'title-22', key: 'title-2'},
      {title: 'title-3f', key: 'title-3'}
      ]
    }
  },
  methods: {
    autoClose(e) {
      console.log(e)
      if(window.confirm('是否关闭')) return true;
      return false
    },
  },
  components: {
    SliderAction
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list_wrap{
  padding: 0;
  list-style: none;
}
.list_item{

  border-top: 1px solid #ddd;
}
body{
  overscroll-behavior-y: none;
}
.custom-action{
  display: flex;
  align-items: center;
  height: 100%;
  /* border-left: 1px solid #ddd; */
  padding: 0 5px;
  color:#fff
}
.replay{
  background-color: #629dff;
}
.info{
  background-color:#dbdb4b;
}
.remove{
  background-color: rgb(244, 51, 60);
}
.cancel {
  background-color: #2c3e50;
}
</style>
