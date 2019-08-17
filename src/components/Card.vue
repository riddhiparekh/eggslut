<template>
  <div class="col-lg-6 col-md-6 col-sm-12">
    <div class="post-item">
      <img v-bind:src="getImgUrl(cardData.cardImg)">
      <div class="post-flag">
        <img :src="getImgUrl(cardData.cardRating)">
      </div>
      <div class="post-detail">
        <div class="top-row">
          <div class="usericon" v-lazy-container="{ selector: 'img' }">
            <img :src="getImgUrl(cardData.cardAvatar)" alt="image">
          </div>
          <div class="view-count" v-lazy-container="{ selector: 'img' }">
            <img height="18" src="@/assets/images/icon-camera-regular-16-white-100-copy.svg" alt="image">
            <span>{{cardData.cardImgCount}}</span>
          </div>
        </div>
        <div class="bottom-row">
          <div class="like-post" v-lazy-container="{ selector: 'img' }">
            <img src="@/assets/images/icon-heart-full-16-white-75-copy.svg" alt="image"><span>{{cardData.cardLikes}}</span>
          </div>
          <div class="comments" v-lazy-container="{ selector: 'img' }">
            <img src="@/assets/images/icon-comment-16-white-75-copy.svg" alt="image"><span>{{cardData.cardCmnts}}</span>
          </div>
          <div class="share-post" v-lazy-container="{ selector: 'img' }">
            <img src="@/assets/images/icon-share-16-white-75-copy.svg" alt="image"><span>{{cardData.cardShare}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props:['cardData'],
  data() {
    return {}
  },
  methods: {
  	getImgUrl(pic) {
  		return require("@/assets/images/"+pic)
	}
  }
}
</script>
