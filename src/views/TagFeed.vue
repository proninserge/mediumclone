<template>
  <div class="home-page">
    <ProjectBanner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <ProjectFeedToggler :tag-name="tagName" />
          <ProjectFeed :api-url="apiUrl"></ProjectFeed>
        </div>
        <div class="col-md-3">
          <ProjectPopularTags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectBanner from '@/components/Banner';
import ProjectFeed from '@/components/Feed';
import ProjectFeedToggler from '@/components/FeedToggler';
import ProjectPopularTags from '@/components/PopularTags';
export default {
  name: 'ProjectTagFeed',
  components: {
    ProjectFeed,
    ProjectPopularTags,
    ProjectBanner,
    ProjectFeedToggler,
  },
  computed: {
    tagName() {
      return this.$route.params.slug;
    },
    apiUrl() {
      return `/articles?tag=${this.tagName}`;
    },
  },
};
</script>
