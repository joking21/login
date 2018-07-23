
<template>
<div>
     <Header></Header>
       <div class="parent">
        <h1>以下为弹性盒子的测试</h1>

        {{count}}
        <div class="par1">
            <div class="child1">1</div>
            <div class="child2">2</div>
            <div class="child3">3</div>
        </div>
        <Button type='info' @click="addFun()">+1</Button>
         <Button type='info' @click="minusFun()">-1</Button>
    </div> 
</div>

</template>
<script src="../assets/js/test1.js"></script>

<style scoped>
    @import "../assets/css/test1.css"
</style>



