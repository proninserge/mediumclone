<template>
  <button
    @click="handleClick"
    class="btn btn-sm action-btn ng-binding btn-outline-secondary"
  >
    <i class="ion-plus-round"></i>
    &nbsp;
    {{ followed }} {{ userName }}
  </button>
</template>

<script>
import { actionTypes } from '@/store/modules/followUser';
export default {
  name: 'ProjectFollowUser',
  props: {
    isFollowed: {
      type: Boolean,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      followed: this.isFollowed ? 'Unfollow' : 'Follow',
    };
  },
  methods: {
    handleClick() {
      this.$store.dispatch(actionTypes.followUser, {
        slug: this.userName,
        isFollowed: this.isFollowed,
      });
      if (this.followed === 'Follow') {
        this.followed = 'Unfollow';
      } else {
        this.followed = 'Follow';
      }
    },
  },
};
</script>
