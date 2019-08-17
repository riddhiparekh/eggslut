<template>
  <section>
    <div class="container">
      <div class="post-section">
        <div class="row">
          <div class="col-lg-6 col-sm-12 m-auto">
            <div class="top-detail-box">
              <div class="location">
                <img src="@/assets/images/ratings-label-dope-112.svg">
                <h4>{{resDetails.resName}}</h4>
                <p>{{resDetails.resDesc}}</p>
                <span>{{resDetails.resAddress}}</span>
              </div>
              <div class="mapouter">
                <GmapMap ref="mapRef" :center="{lat:34.050609, lng:-118.248629}" :zoom="19" map-type-id="roadmap" style="width: 538px; height: 120px" :options="{
                     zoomControl: false,
                     mapTypeControl: false,
                     scaleControl: false,
                     streetViewControl: true,
                     rotateControl: false,
                     fullscreenControl: false,
                     disableDefaultUi: false,
                     draggable:true
                   }">

                   <GmapCircle v-for="(pin, index) in markers" :key="index" :center="pin.position" :radius="1.5" :visible="true" :options="{fillColor:'#D21D1D',fillOpacity:0.7,strokeColor:'#fff', strokeWeight: 2}"></GmapCircle>
                 <!--  <GmapCircle v-for="(pin, index) in markers" :key="index" :center="pin.position" :radius="2.5" :visible="true" :options="{fillColor:'#E47777',fillOpacity:0.5,strokeColor:'#E47777',strokeOpacity: 0.8, strokeWeight: 1}"></GmapCircle>
                    <GmapCircle v-for="(pin, index) in markers" :key="index" :center="pin.position" :radius="3.5" :visible="true" :options="{fillColor:'#E47777',fillOpacity:0.5,strokeColor:'#E47777',strokeOpacity: 0.8, strokeWeight: 1}"></GmapCircle> -->
                </GmapMap>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-12 m-auto">
            <div class="title-row">
              <img src="@/assets/images/icon-history-16-white-75.svg">
              <span>30 DAY RECAP</span>
              <span class="line"></span>
            </div>
            <div class="row p-0 post-item-wrap">
              <card v-for="(card,index) in cardDetails" :key="index" :cardData="card"></card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Card from './Card'
export default {
  name: 'dashboard',
  components: {
    Card,
  },
  mounted() {
    this.axios.post('https://reqres.in/api/users', {
        resName: 'Eggslut',
        resDesc: 'Grand Central Market, Los Angeles Restaurant',
        resAddress: '317 S Broadway, Los Angeles, CA 90013, USA'
      })
      .then((response) => {
        this.resDetails = response.data
      })
      .catch((error) => {
        this.resDetails = error
      })
  },
  data() {
    return {
      markers: [{ position: { lat: 34.050609, lng: -118.248629 }, label: 'restaurant' }],
      resDetails: {},
      cardDetails: [{
          cardImg: 'img1.jpg',
          cardAvatar: 'avtar.jpg',
          cardRating: 'ratings-label-okay-112.svg',
          cardImgCount: 3,
          cardLikes: 17,
          cardCmnts: 10,
          cardShare: 22,
        },
        {
          cardImg: 'img2.jpg',
          cardAvatar: 'avtar1.png',
          cardRating: 'ratings-label-nope-112.svg',
          cardImgCount: 5,
          cardLikes: 7,
          cardCmnts: 10,
          cardShare: 2,
        },
        {
          cardImg: 'img3.jpg',
          cardAvatar: 'avtar2.png',
          cardRating: 'ratings-label-dope-112.svg',
          cardImgCount: 4,
          cardLikes: 41,
          cardCmnts: 1,
          cardShare: 0,
        },
        {
          cardImg: 'img4.jpg',
          cardAvatar: 'avtar3.jpg',
          cardRating: 'ratings-label-okay-112.svg',
          cardImgCount: 8,
          cardLikes: 15,
          cardCmnts: 1,
          cardShare: 20,
        },
        {
          cardImg: 'img5.jpg',
          cardAvatar: 'avtar4.jpg',
          cardRating: 'ratings-label-okay-112.svg',
          cardImgCount: 7,
          cardLikes: 15,
          cardCmnts: 2,
          cardShare: 4,
        },
        {
          cardImg: 'img6.jpg',
          cardAvatar: 'avtar2.png',
          cardRating: 'ratings-label-dope-112.svg',
          cardImgCount: 4,
          cardLikes: 8,
          cardCmnts: 1,
          cardShare: 21,
        },
        {
          cardImg: 'img7.jpg',
          cardAvatar: 'avtar1.png',
          cardRating: 'ratings-label-nope-112.svg',
          cardImgCount: 3,
          cardLikes: 45,
          cardCmnts: 11,
          cardShare: 10,
        },
        {
          cardImg: 'img8.jpg',
          cardAvatar: 'avtar2.png',
          cardRating: 'ratings-label-dope-112.svg',
          cardImgCount: 6,
          cardLikes: 4,
          cardCmnts: 11,
          cardShare: 2,
        },
        {
          cardImg: 'img9.jpg',
          cardAvatar: 'avtar3.jpg',
          cardRating: 'ratings-label-okay-112.svg',
          cardImgCount: 14,
          cardLikes: 75,
          cardCmnts: 8,
          cardShare: 0,
        },
        {
          cardImg: 'img10.jpg',
          cardAvatar: 'avtar.jpg',
          cardRating: 'ratings-label-dope-112.svg',
          cardImgCount: 14,
          cardLikes: 12,
          cardCmnts: 14,
          cardShare: 2,
        }
      ]
    }
  }
}

</script>
