<template>
  <ProjectArticleForm
    :initial-values="initialValues"
    :errors="validationErrors"
    :is-submitting="isSubmitting"
    @articleSubmit="onSubmit"
  />
</template>

<script>
import { mapState } from 'vuex';
import ProjectArticleForm from '@/components/ArticleForm';
import { actionTypes } from '@/store/modules/createArticle';
export default {
  name: 'ProjectCreateArticle',
  components: {
    ProjectArticleForm,
  },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
    };
  },
  methods: {
    onSubmit(articleInput) {
      console.log(articleInput);
      this.$store
        .dispatch(actionTypes.createArticle, { articleInput })
        .then((article) => {
          this.$router.push({
            name: 'article',
            params: { slug: article.slug },
          });
        });
    },
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.createArticle.isSubmitting,
      validationErrors: (state) => state.createArticle.validationErrors,
    }),
  },
};
</script>
