<template>
  <div class="border2">
    <h3 :style="{color: theme.color }">E 节点</h3>
    <button @click="handleClick">改变 color为green</button>
  </div>
</template>

<script>
  export default {
    components:{},
    inject:{
      theme:{
        default:()=>({})
      }
    },
    methods:{
      handleClick(){
        if(this.theme.changeColor){
          this.theme.changeColor('green');
        }
      }
    }
  };
</script>
