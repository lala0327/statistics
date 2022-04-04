<template>
  <button
    type="button"
    class="
      px-[20px]
      py-[5px]
      bg-[#427aa1]
      text-white
      font-black
      cursor-pointer
      shadow-[0_3px_#999]
      rounded-[10px]
      hover:bg-[#05668d]
      active:bg-[#05668d] active:shadow-[0_1px_#999] active:translate-y-[3px]
    "
  >
    {{ title }}
  </button>
</template>
<script>
export default {
  name: "Title",
  props: {
    title: String,
  },
};
</script>