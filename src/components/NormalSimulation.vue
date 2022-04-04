<template>
  <Title title="一般常態模擬" />
  <div class="flex justify-center items-center flex-col">
    <div class="w-[95%] h-[100%] max-w-[650px]">    
      <div class="my-[5px] flex justify-center items-center">
        <span class="mx-[5px]">選取樣本數：</span>
        <select class="mx-[5px]" v-model="getnum">
          <option v-for="num in selectNum" :key="num" :value="num">
            {{ num }}
          </option>
        </select>
        <Button title="點擊計算" class="mx-[5px]" @click="calculate" />
      </div>
      <div class="flex justify-center flex-col items-center">
        <p class="my-[5px]">你的隨機數為：</p>
        <div
          class="
            w-full
            min-h-[200px]
            bg-slate-200
            text-[16px]
            flex flex-wrap
            py-[5px]
            px-[10px]
            text-justify
          "
        >
          {{ randomText }}
        </div>
      </div>
      <div class="flex justify-center flex-col items-center">
        <p class="my-[5px]">x&#772 (樣本平均值)= {{xBar}}</p>
        <p class="my-[5px]">s (樣本標準差)= {{s}}</p>   
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./atoms/Title.vue";
import Button from "./atoms/Button.vue";
import axios from "axios";
export default {
  name: "NormalSimulation",
  components: {
    Title,
    Button,
  },
  data() {
    return {
      randomText: "",
      selectNum: [],
      getnum: 2,
      mu: "",
      sigma: "",
      xBar: "________",
      s: "________",
    };
  },
  mounted() {
    for (let i = 2; i <= 30; i++) {
      this.selectNum.push(i);
    }
    axios
      .get(
        "https://sheets.googleapis.com/v4/spreadsheets/1wK6sWFSGhrWdpMIFjhSGHoN9l1SSFzaL1ZmxuOb0A-Q/values/1?alt=json&key=AIzaSyBTMYnrj8_S08CTDiUhaEv5hmfGknQmkKc"
      )
      .then((res) => {
        this.mu = res.data.values[2][0];
        this.sigma = res.data.values[2][1];
      });
  },
  methods: {
    calculate() {
      const random = [];
      //顯示隨機數
      for (let i = 1; i <= this.getnum; i++) {
        var r = d3.randomNormal(this.mu, this.sigma)().toFixed(4);
        random.push(r);
      }
      this.randomText = random.join(", ");
      //樣本平均值
      var total = 0;
      for (let j = 0; j <= random.length - 1; j++) {
        total += random[j] * 10000;
      }
      this.xBar = (total / 10000 / random.length).toFixed(4);
      //樣本標準差
      var Stotal = 0;
      const arr = [];
      for (let i = 0; i <= random.length - 1; i++) {
        const anser = Math.round(random[i] * 10000 - this.xBar * 10000) / 10000;
        arr.push(Math.pow(anser, 2));
      }
      for (let i = 0; i <= arr.length - 1; i++) {
        Stotal += arr[i] * 10000;
      }
      this.s = Math.sqrt(Stotal / 10000 / (random.length - 1)).toFixed(4);
    },
  },
};
</script>
