import followUserApi from '@/api/followUser';

export const mutationTypes = {
  followUserStart: '[followUser] followUserStart',
  followUserSuccess: '[followUser] followUserSuccess',
  followUserFailure: '[followUser] followUserFailure',
};

export const actionTypes = {
  followUser: '[followUser] followUser',
};

const mutations = {
  [mutationTypes.followUserStart]() {},
  [mutationTypes.followUserSuccess]() {},
  [mutationTypes.followUserFailure]() {},
};

const actions = {
  [actionTypes.followUser](context, { slug, isFollowed }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.followUserStart);
      const promise = isFollowed
        ? followUserApi.unfollowUser(slug)
        : followUserApi.followUser(slug);
      promise
        .then((profile) => {
          context.commit(mutationTypes.followUserSuccess, profile);
          resolve(profile);
        })
        .catch(() => {
          context.commit(mutationTypes.followUserFailure);
        });
    });
  },
};

export default {
  mutations,
  actions,
};
