import axios from '@/api/axios';

const getUrl = (slug) => `/profiles/${slug}/follow`;

const followUser = (slug) => {
  const url = getUrl(slug);
  return axios.post(url).then((response) => response.data.article);
};

const unfollowUser = (slug) => {
  const url = getUrl(slug);
  return axios.delete(url).then((response) => response.data.article);
};

export default {
  followUser,
  unfollowUser,
};
