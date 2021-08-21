<template>
  <div id="app">
<div class="body container border-2 border-red-300 mx-auto">
  <div class="banner">
    <h1 class="title text-4xl font-bold bg-white px-4 py-2">開放里湯圓 pop</h1>
    <img src="../src/assets/dum.jpg" alt="" class="dum">
  </div>
    <div class="board border-2 border-red-300 p-4 pb-0 text-4xl font-bold text-center">
      <div class="peanut flex flex-col justify-center" v-if="displayA">
        <img src="./assets/peanut.jpg" alt="">
        <h2 class="p-2 text-4xl mx-auto "><span class="font-bold text-6xl">花生 </span>Win</h2>
      </div>
      <div class="blackmi flex flex-col justify-center" v-if="displayB">
        <img src="./assets/blackmi.jpg" alt="">
        <h2  class="p-2 text-4xl mx-auto "><span class="font-bold text-6xl">芝麻 </span>Win</h2>
      </div>
       </div>
  <div class="board border-2 border-red-300 p-4 pb-0 flex justify-between text-4xl font-bold text-center">
    <h2>花生派<br><span  class="m-16 my-8 block">{{ countA }}</span></h2>
    <h2>芝麻派<span class="m-16 my-8 block">{{ countB }}</span></h2>
  </div>
  <div class="clickGroup flex justify-between ">
  <div class="section ">
  <div class="clickimg border-2 border-blue-300" @click="counterA">
    <img src="../src/assets/img00.jpg" alt="" class="imgOne mx-auto">
    <img src="../src/assets/img01.jpg" alt="" class="imgTwo ">
  </div>
  </div>

   <div class="section ">
  <div class="clickimg border-2 border-blue-300" @click="counterB">
    <img src="../src/assets/img00.jpg" alt="" class="imgOne mx-auto">
    <img src="../src/assets/img01.jpg" alt="" class="imgTwo ">
  </div>
  </div>
  </div>
</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      //set 0
      // countA: 0,
      // countB: 0,
      countA:JSON.parse(localStorage.getItem('CountA')) || 0,
      countB:JSON.parse(localStorage.getItem('CountB')) || 0,
      displayA:false,
      displayB:false,
    }
  },
  methods:{
    counterA (){
      this.countA +=1
      localStorage.setItem('CountA', JSON.stringify(this.countA))
   
         if (this.countA>this.countB){
          this.displayA = true
          this.displayB = false
      }else{
        this.displayB = true
        this.displayA = false
      }
         if (this.countA == this.countB){
            this.displayA = false
            this.displayB = false
         }
    },
   counterB (){
      this.countB +=1
       localStorage.setItem('CountB', JSON.stringify(this.countB))
       
              if (this.countA>this.countB){
        this.displayA = true
          this.displayB = false
      }else{
        this.displayB = true
        this.displayA = false
      }

      if (this.countA == this.countB){
            this.displayA = false
            this.displayB = false
         }
    },
  },
}
</script>

<style lang="scss" scoped>
.title{
  position: absolute;
  top: 25%;
  left: 15%;
}
.dum{
  background-image: cover;
  width: 100%;
  height: 500px;
} 
.clickimg{
  position: relative;
 
}
.imgOne{
z-index: 10;
}
.imgTwo{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: none;
  z-index: 2;
  height: 210px;
}
.clickimg:active{
.imgTwo{
  display: block;
   z-index: 100;
}
}
@media (max-width: 375px) {
.title{
  top: 22.5%;
}
}
</style>
