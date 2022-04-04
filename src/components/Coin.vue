<template>
  <Title title="擲硬幣" />
  <div class="flex justify-center items-center flex-col">
    <div class="w-[95%] h-[100%] max-w-[650px]">
      <div class="my-[5px] flex justify-center items-center">
        <span>請輸入硬幣數量：</span
        ><input
          type="number"
          v-model="num"
          class="w-16"
          min="1"
          max="200"
          @change="check"
          oninput="value=value.replace(/^(0+)|[^\d]+/g,'')"
        />
      </div>
      <Button title="開始" class="my-[5px]" @click="calculate" />
      <div class="my-2">正面次數：{{ head }}</div>
      <div class="my-2">反面次數：{{ tail }}</div>
    </div>
  </div>
</template>
<script>
import Title from "./atoms/Title.vue";
import Button from "./atoms/Button.vue";
import axios from "axios";
export default {
  name: "Coin",
  components: {
    Title,
    Button,
  },
  data() {
    return { p: "", num: 1, head: 0, tail: 0 };
  },
  mounted() {
    axios
      .get(
        "https://sheets.googleapis.com/v4/spreadsheets/1wK6sWFSGhrWdpMIFjhSGHoN9l1SSFzaL1ZmxuOb0A-Q/values/1?alt=json&key=AIzaSyBTMYnrj8_S08CTDiUhaEv5hmfGknQmkKc"
      )
      .then((res) => {
        this.p = res.data.values[6][0];
      });
  },
  methods: {
    check() {
      if (this.num > 200) {
        this.num = 200;
      }
    },
    calculate() {
      this.head = 0;
      this.tail = 0;
      for (let i = 1; i <= this.num; i++) {
        const random_num = Math.random();
        if (random_num <= this.p) {
          this.head++;
        } else {
          this.tail++;
        }
      }
    },
  },
};
</script>
