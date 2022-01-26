<template>
  <div>
    <ProjectLoading v-if="isLoading" />
    <ProjectErrorMessage v-if="error" />

    <div v-if="feed">
      <div class="article-preview" v-if="noFeed">Nothing here just yet</div>
      <div
        class="article-preview"
        v-for="(article, index) in feed.articles"
        :key="index"
      >
        <div class="article-meta">
          <router-link
            :to="{
              name: 'userProfile',
              params: { slug: article.author.username },
            }"
          >
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: { slug: article.author.username },
              }"
              class="author"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <div class="pull-xs-right">
            <ProjectAddToFavorites
              :is-favorited="article.favorited"
              :article-slug="article.slug"
              :favorites-count="article.favoritesCount"
            />
          </div>
        </div>
        <router-link
          :to="{ name: 'article', params: { slug: article.slug } }"
          class="preview-link"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          <ProjectTagList :tags="article.tagList" />
        </router-link>
      </div>
      <ProjectPagination
        :total="feed.articlesCount"
        :limit="limit"
        :current-page="currentPage"
        :url="baseUrl"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from '@/store/modules/feed';
import ProjectPagination from '@/components/Pagination';
import ProjectLoading from '@/components/Loading';
import ProjectErrorMessage from '@/components/ErrorMessage';
import ProjectTagList from '@/components/TagList';
import ProjectAddToFavorites from '@/components/AddToFavorites';
import { LIMIT } from '@/utils/constants';
import { stringify, parseUrl } from 'query-string';
export default {
  name: 'ProjectFeed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
    }),
    limit() {
      return LIMIT;
    },
    currentPage() {
      return Number(this.$route.query.page || '1');
    },
    baseUrl() {
      return this.$route.path;
    },
    offset() {
      return this.currentPage * this.limit - this.limit;
    },
    noFeed() {
      return this.feed.articlesCount === 0;
    },
  },
  components: {
    ProjectPagination,
    ProjectLoading,
    ProjectErrorMessage,
    ProjectTagList,
    ProjectAddToFavorites,
  },
  watch: {
    currentPage() {
      this.fetchFeed();
    },
    baseUrl() {
      this.fetchFeed();
    },
  },
  mounted() {
    this.fetchFeed();
  },
  methods: {
    fetchFeed() {
      const parsedUrl = parseUrl(this.apiUrl);
      const stringifiedParams = stringify({
        limit: LIMIT,
        offset: this.offset,
        ...parsedUrl.query,
      });
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
      this.$store.dispatch(actionTypes.getFeed, { apiUrl: apiUrlWithParams });
    },
  },
};
</script>
