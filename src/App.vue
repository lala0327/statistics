<template>
  <div class="w-screen h-screen flex justify-center items-center flex-col">
    <div class="w-[85%] h-[90%] bg-white max-w-[900px]"><router-view /></div>
  </div>
</template>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  background-color: #427aa1;
  font-family: "微軟正黑體";
  text-align: center;
  font-size: 18px;
  font-weight: 900;
}
.outsideBox {
  border-radius: 30px;
}
input {
  border: 1px solid black;
  padding: 3px 5px !important;
}
select {
  border: 1px solid black;
}
</style>
