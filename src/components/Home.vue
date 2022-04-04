<template>
  <Title title="Welcome" />
  <div
    class="w-full h-[calc(100%-90px)] flex justify-center items-center flex-col"
  >
    <div class="flex flex-col md:flex-row">
      <div>
        <Button
          type="button"
          class="btn my-2"
          @click="Random"
          title="抽取一個隨機數"
        />
        <Button
          type="button"
          class="btn my-2"
          @click="StandardNormal"
          title="標準常態"
        />
        <Button
          type="button"
          class="btn my-2"
          @click="Normal"
          title="一般常態"
        />
        <Button
          type="button"
          class="btn my-2"
          @click="NormalSimulation"
          title="一般常態模擬"
        />
      </div>
      <div>
        <Button
          type="button"
          class="btn my-2"
          @click="Uniform"
          title="均勻分布"
        />
        <Button type="button" class="btn my-2" @click="Coin" title="擲硬幣" />
        <Button
          type="button"
          class="btn my-2"
          @click="NegativeBinomial"
          title="負二項分佈"
        />
        <Button
          type="button"
          class="btn my-2"
          @click="NBSimulation"
          title="負二項分佈模擬"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Title from "./atoms/Title.vue";
import Button from "./atoms/Button.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Title,
    Button,
  },
  methods: {
    Random() {
      this.$router.push("Random");
    },
    Uniform() {
      this.$router.push("Uniform");
    },
    Normal() {
      this.$router.push("Normal");
    },
    NormalSimulation() {
      this.$router.push("NormalSimulation");
    },
    StandardNormal() {
      this.$router.push("StandardNormal");
    },
    Coin() {
      this.$router.push("Coin");
    },
    NegativeBinomial() {
      this.$router.push("NegativeBinomial");
    },
    NBSimulation() {
      this.$router.push("NBSimulation");
    },
  },
};
</script>
<style scoped>
.btn {
  width: 80%;
  max-width: 400px;
  font-size: 26px;
}
@media (max-width: 768px) {
  .btn {
    font-size: 22px;
  }
}
@media (min-width: 768px) {
  .btn {
    margin: 20px 0;
    padding: 15px 25px;
  }
}
</style>