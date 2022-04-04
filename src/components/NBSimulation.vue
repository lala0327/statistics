<template>
  <Title title="負二項分佈模擬" />
  <div class="flex justify-center items-center flex-col">
    <div class="w-[95%] h-[100%] max-w-[650px]">
      <div class="my-3 flex justify-center items-center">
        <span class="mr-2">選取成功的次數：</span>
        <select class="w-16" v-model="getnum">
          <option v-for="num in selectNum" :key="num" :value="num">
            {{ num }}
          </option>
        </select>
      </div>
      <Button title="開始計算" class="my-[5px]" @click="calculate" />
      <p class="text-base my-3 sm:text-lg" v-if="start">
        模擬執行第 {{ total }} 次時為第 {{ getnum }} 次成功
      </p>
    </div>
  </div>
</template>

<script>
import Title from "./atoms/Title.vue";
import Button from "./atoms/Button.vue";
import axios from "axios";
export default {
  name: "NBSimulation",
  components: {
    Title,
    Button,
  },
  data() {
    return {
      selectNum: [],
      getnum: 1,
      p: "",
      total: 0,
      start: false,
    };
  },
  mounted() {
    axios
      .get(
        "https://sheets.googleapis.com/v4/spreadsheets/1wK6sWFSGhrWdpMIFjhSGHoN9l1SSFzaL1ZmxuOb0A-Q/values/1?alt=json&key=AIzaSyBTMYnrj8_S08CTDiUhaEv5hmfGknQmkKc"
      )
      .then((res) => {
        this.p = res.data.values[6][1];
      });
    for (let i = 1; i <= 50; i++) {
      this.selectNum.push(i);
    }
  },
  methods: {
    calculate() {
      var total = 0;
      var success = 0;
      var lose = 0;
      while (success <= this.getnum) {
        total++;
        var random_num = Math.random();
        if (random_num <= this.p) {
          success++;
        } else {
          lose++;
        }
        if (success == this.getnum) {
          break;
        }
      }
      this.total = total;
      this.start = true;
    },
  },
};
</script>