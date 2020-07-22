<template>
  <div id="app">
    {{message}} {{message + message}}
    <div :id="message"></div>
    <todo-list>
      <todo-item @delete="handleDelete" v-for="item in list" :key="item.title" :title="item.title" :del="item.del">
        <template v-slot:pre-icon="{value}">
          <span>前置图标 {{value}}</span>
        </template>
        <span slot="suf-icon">后置图标</span>
      </todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'


export default {
  name: 'App',
  components: {
    TodoItem,
    TodoList,
  },
  data(){
    return{
      message:'hello world',
      list:[{
        title:'课程111',
        del:true
      },{
        title:'课程2222',
        del:false
      }]
    }
  },
  methods:{
    handleDelete(val){
      console.log('handleDelete', val)
    }
  }
}
</script>


<style>
</style>
