<template>
  <div class="py-[10px] bg-[#EBF2FA] mb-[10px]">
    <div class="text-[40px] font-black text-white bg-[#05668D]">
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: {
    title: String,
  },
};
</script>
