# vue-slider-actions
**simple swipe action for vue**  
**vue 移动端滑动操作组件,支持左右滑动**
## Installation
```
npm install --save vue-slider-actions
```

### Basic Usage
```js
import { SliderAction } from 'vue-slider-actions';
//or    
import SliderAction from 'vue-slider-actions';
Vue.use(SliderAction);
```

### API
| Prop             | Data Type | Required|Default| Description        |
| ---------------- | --------- |-------- |-------|------------------ |
| text             | String    | false   |       | text of button    |
| showArrow        | Boolean   | false   | true   | whether to show arrow|
| threshold        | Number    | false   |  0.5   |With that property you can fine tune when actions are considered open. Based on action with.|
| handleClick | Function | false | | Emitted on click item|
| autoClose | Function, Boolean | false | false | Whether to close automatically| 

 
### example
```html
<div id="app">
    <div v-for="(item, i) in list" :key="item.key" class="list_item">
      <slider-action :autoClose="true" :text="item.title">
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
  ```
  ``` js
  <script>
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
        if(window.confirm('close?')) return true;
        return false
      },
    },
  }
  </script>
```
