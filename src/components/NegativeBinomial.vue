<template>
  <Title title="負二項分佈" />
  <div class="flex justify-center items-center flex-col">
    <div class="w-[95%] h-full max-w-[650px]">
      <div class="my-3 flex justify-center items-center">
        <span class="mr-2">輸入成功的機率：</span
        ><input
          type="number"
          v-model="p"
          class="w-16"
          min="0"
          max="1"
          step="0.1"
          @change="check"
        />
      </div>
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
        在成功的機率為 {{ p }} 下
        <br />
        模擬執行第 {{ total }} 次時為第 {{ getnum }} 次成功
      </p>
    </div>
  </div>
</template>

<script>
import Title from "./atoms/Title.vue";
import Button from "./atoms/Button.vue";
export default {
  name: "NegativeBinomial",
  components: {
    Title,
    Button,
  },
  data() {
    return {
      p: 0.01,
      getnum: 1,
      total: 0,
      selectNum: [],
      start: false,
    };
  },
  mounted() {
    for (let i = 1; i <= 50; i++) {
      this.selectNum.push(i);
    }
  },
  methods: {
    check() {
      if (this.p > 1) {
        this.p = 1;
      } else if (this.p <= 0) {
        this.p = 0.01;
      }
    },
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