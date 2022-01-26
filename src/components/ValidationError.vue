<template>
  <ul class="error-messages">
    <li v-for="errorMessage in errorMessages" :key="errorMessage">
      {{ errorMessage }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProjectValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      const errorMessages = Object.keys(this.validationErrors).map((name) => {
        const messages = this.validationErrors[name].join(', ');
        return `${name} ${messages}`;
      });
      return errorMessages;
    },
  },
};
</script>
