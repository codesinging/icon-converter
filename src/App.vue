<template>
  <div id="app">
      <div class="box">
          <pin-icon-add-item></pin-icon-add-item>
          <pin-icon-add-item size="24"></pin-icon-add-item>
          <pin-icon-add-item size="100"></pin-icon-add-item>
          <pin-icon-add-item size="100" color="red"></pin-icon-add-item>
          <pin-icon-add-item size="100" filled></pin-icon-add-item>
          <pin-icon-add-item size="100" filled class="text-red"></pin-icon-add-item>
          <pin-icon-add-item size="100" class="text-red bg-gray p-8" stroke-width="1"></pin-icon-add-item>
      </div>
  </div>
</template>

<script>

import PinIconAddItem from "../components/iconpark/vue/PinIconAddItem";
export default {
  name: 'App',
  components: {
      PinIconAddItem
  }
}
</script>

<style>
#app {
    padding: 100px;
}
.box{
    border: solid 1px #eeeeee;
    padding: 20px;
}
.text-white{
    color: white;
}
.text-red{
    color: red;
}
.bg-red{
    background-color: red;
}
.bg-gray{
    background-color: #ccc;
}
.p-4{
    padding: 16px;
}
.p-8{
    padding: 32px;
}
.rounded-full{
    border-radius: 999px;
}
</style>
