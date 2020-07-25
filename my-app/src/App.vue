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
    <span>Message:{{msg}}</span>
    <br>
    <VNodes :vnodes="getJSXSpan()"/>
    <anchored-heading1 :level="1">Hello World!</anchored-heading1>
    <anchored-heading2 :level="2">Hello World!</anchored-heading2>
    <anchored-heading3 :level="3">Hello World!</anchored-heading3>
    <VNodes :vnodes="getAnchoredHeading(4)"/>
  </div>
</template>

<script>
  import AnchoredHeading1 from '../src/components/AnchoredHeading.vue'
  import AnchoredHeading2 from '../src/components/AnchoredHeading.js'
  import AnchoredHeading3 from '../src/components/AnchoredHeading.jsx'
  export default {
    components:{
      AnchoredHeading1,
      AnchoredHeading2,
      AnchoredHeading3,
      VNodes:{
        functional: true,
        render:(h,ctx) => ctx.props.vnodes
      }
    },
    data(){
      return {
        msg:"hello vue"
      };
    },
    methods:{
      getJSXSpan(){
        return <span>Message:{this.msg}</span>;
      },
      getAnchoredHeading(level){
        const Tag = `h${level}`;
        return <Tag>Hello world!</Tag>
      }
    }
  }
</script>




