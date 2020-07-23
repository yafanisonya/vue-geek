<!--<template>-->
<!--  <div id="app">-->
<!--    <input v-model="message">-->
<!--    <input :value="message" @input="handleChange">-->
<!--    {{message}} {{message + message}}-->
<!--    <div :id="message"></div>-->
<!--    <todo-list>-->
<!--      <todo-item @delete="handleDelete" v-for="item in list" :key="item.title" :title="item.title" :del="item.del">-->
<!--        <template v-slot:pre-icon="{value}">-->
<!--          <span>前置图标 {{value}}</span>-->
<!--        </template>-->
<!--        <span slot="suf-icon">后置图标</span>-->
<!--      </todo-item>-->
<!--    </todo-list>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import TodoItem from './components/TodoItem'-->
<!--import TodoList from './components/TodoList'-->


<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    TodoItem,-->
<!--    TodoList,-->
<!--  },-->
<!--  data(){-->
<!--    return{-->
<!--      message:'hello world',-->
<!--      list:[{-->
<!--        title:'课程111',-->
<!--        del:true-->
<!--      },{-->
<!--        title:'课程2222',-->
<!--        del:false-->
<!--      }]-->
<!--    }-->
<!--  },-->
<!--  methods:{-->
<!--    handleChange(e){-->
<!--      this.message = e.target.value-->
<!--    },-->
<!--    handleDelete(val){-->
<!--      console.log('handleDelete', val)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->


<!--<style>-->
<!--</style>-->
<template>
  <div id="app">
    <a-tabs>
      <a-tab-pane key="Computed" tab="计算属性">
        <Computed />
      </a-tab-pane>
      <a-tab-pane key="Watch" tab="侦听器">
        <Watch />
      </a-tab-pane>
      <a-tab-pane key="vs" tab="计算属性 vs 侦听器">
        <Computed1 />
        <br />
        <Watch1 />
      </a-tab-pane>
      <a-tab-pane key="Watch1_pro" tab="防抖版">
        <WatchPro />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
  import Computed from "../src/components/Computed";
  import Computed1 from "../src/components/Computed1";
  import Watch from "../src/components/Watch";
  import Watch1 from "../src/components/Watch1";
  import WatchPro from "../src/components/Watch1_pro";
  export default {
    components: {
      Computed,
      Computed1,
      Watch,
      Watch1,
      WatchPro
    }
  };
</script>
