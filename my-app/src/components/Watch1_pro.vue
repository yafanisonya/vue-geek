<template>
  <div>
    {{ fullName }}
  </div>
</template>

<script>
  export default {
    data(){
      return{
        firstName:"Foo",
        lastName:"Bar",
        fullName:"Foo Bar"
      };
    },
    watch:{
      firstName(val){
        clearTimeout(this.firstTimeOut);
        this.firstTimeOut = setTimeout(()=>{
          this.fullName = val + "" + this.lastName;
        },500);
      },
      lastName(val){
        clearTimeout(this.lastTimeout);
        this.lastTimeout = setTimeout(()=>{
          this.fullName = this.firstName + "" + val;
        },500);
      }
    }
  };
</script>

