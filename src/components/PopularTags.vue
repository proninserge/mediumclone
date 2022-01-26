<template>
  <div>
    <ProjectLoading v-if="isLoading" />
    <ProjectErrorMessage v-if="error" />

    <div class="sidebar" v-if="popularTags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="{ name: 'tag', params: { slug: popularTag } }"
          class="tag-default tag-pill"
        >
          {{ popularTag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectLoading from '@/components/Loading';
import ProjectErrorMessage from '@/components/ErrorMessage';
import { mapState } from 'vuex';
import { actionTypes } from '@/store/modules/popularTags';
export default {
  name: 'ProjectPopularTags',
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      popularTags: (state) => state.popularTags.data,
      error: (state) => state.popularTags.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags);
  },
  components: {
    ProjectLoading,
    ProjectErrorMessage,
  },
};
</script>
