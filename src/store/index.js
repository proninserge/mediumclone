import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/modules/auth';
import feed from '@/store/modules/feed';
import article from '@/store/modules/article';
import popularTags from '@/store/modules/popularTags';
import createArticle from '@/store/modules/createArticle';
import editArticle from '@/store/modules/editArticle';
import settings from '@/store/modules/settings';
import addToFavorites from '@/store/modules/addToFavorites';
import userProfile from '@/store/modules/userProfile';
import followUser from '@/store/modules/followUser';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    popularTags,
    article,
    createArticle,
    editArticle,
    settings,
    addToFavorites,
    userProfile,
    followUser,
  },
});
