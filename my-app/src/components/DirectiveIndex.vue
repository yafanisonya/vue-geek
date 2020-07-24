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
import Directives from './Directives.vue';
import CustomerDirectives from './CustomerDirectives.vue';
export default{
  components:{
    Directives,
    CustomerDirectives
  }
}
</script>

<style lang="scss" scoped>

</style>