<template>
  <Title title="抽取一個隨機數" />
  <p>請點選按鈕生成隨機數</p>

  <Button
    type="button"
    class="px-[35px] text-[32px] my-[30px]"
    @click="getRandom"
    title="Click"
  />
  <p v-if="random">你的隨機數為：{{ random }}</p>
</template>
<script>
import Title from "./atoms/Title.vue";
import Button from "./atoms/Button.vue";
export default {
  name: "Random",
  components: {
    Title,
    Button,
  },
  data() {
    return { random: "" };
  },
  methods: {
    getRandom() {
      this.random = Math.random().toFixed(4);
    },
  },
};
</script>
