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
    <p>
      <button @click="handleNameChange">change this.name</button>
      <button @click="handleInfoChange">change this.info</button>
      <button @click="handleListChange">change this.list</button>
    </p>
    <PropsAndData :name="name" :info="info" :list="list"/>
  </div>
</template>
  <script>
    import PropsAndData from '../src/components/PropsAndData'
    let name = "world";
    export default {
      name: 'App',
      components: {PropsAndData},
      data(){
        this.name = name;
        return{
          name:name,
          info:{
            number:undefined
          },
          list:[]
        }
      },
      methods:{
        handleNameChange(){
          this.name = "vue" + Date.now();
          console.log('this.name 发生了变化，但是并没有触发组件更新',this.name);
        },
        handleInfoChange(){
          if(this.info.number === undefined){
            this.info.number = 1
          }else{
            this.info.number += 1
          }
          console.log("this.info 发生了变化，但是并没有触发组件更新",this.info);
        },
        handleListChange(){
          this.list.push(1,2,3);
          console.log('this.list 没有发生变化，但是触发了组件更新',this.list);
        }
      }
    }
  </script>
