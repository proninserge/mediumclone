<template>
  <div id="app">
    <ProjectTopBar />

    <router-view />
  </div>
</template>

<script>
import ProjectTopBar from '@/components/TopBar';
import { actionTypes } from '@/store/modules/auth';
export default {
  name: 'ProjectApp',
  components: {
    ProjectTopBar,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser);
  },
};
</script>
