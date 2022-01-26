<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: 'ProjectErrorMesage',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Something bad happed',
    },
  },
};
</script>
