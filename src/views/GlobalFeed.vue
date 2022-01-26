<template>
  <div class="home-page">
    <ProjectBanner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <ProjectFeedToggler />
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
import ProjectPopularTags from '@/components/PopularTags';
import ProjectFeedToggler from '@/components/FeedToggler';
export default {
  name: 'ProjectGlobalFeed',
  components: {
    ProjectFeed,
    ProjectPopularTags,
    ProjectBanner,
    ProjectFeedToggler,
  },
  data() {
    return {
      apiUrl: '/articles',
    };
  },
};
</script>
