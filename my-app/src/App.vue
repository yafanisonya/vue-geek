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

<template>
  <div>
    <a-tabs>
      <a-tab-pane key="Directives" tab="内置指令">
        <Directives/>
      </a-tab-pane>
      <a-tab-pane key="CustomerDirectives" tab="自定义指令">
        <CustomerDirectives/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">

  import Directives from './components/Directives.vue';
  import CustomerDirectives from './components/CustomerDirectives.vue';

  export default{
    components:{
      Directives,
      CustomerDirectives
    }
  }
</script>

<style lang="scss" scoped>

</style>

