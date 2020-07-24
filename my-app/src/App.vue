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
      <a-tab-pane key="clock" tab="时钟">
        <button @click="destroyClock = !destroyClock">
          {{ destroyClock ? "加载时钟" : "销毁时钟"}}
        </button>
        <Clock v-if="!destroyClock"/>
      </a-tab-pane>
      <a-tab-pane key="Functional" tab="函数式组件">
        <Functional :name="name"/>
        <TempVar
          :var1="`hello ${name}`"
          :var2="destroyClock ? 'hello vue' : 'hello world'">
          <template v-slot="{var1,var2}">{{ var1 }} {{ var2 }}</template>
        </TempVar>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
  import Clock from "../src/components/Clock";
  import Functional from "../src/components/Functional";
  import TempVar from '../src/components/TempVar'
  export default {
    components:{
      Clock,
      Functional,
      TempVar
    },
    data(){
      return{
        destroyClock: false,
        name:"vue"
      };
    }
  };
</script>
