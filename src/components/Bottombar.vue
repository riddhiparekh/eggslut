<template>
  <footer>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-4">
        <div class="copyright">
          <span><i class="fa fa-copyright" aria-hidden="true"></i>2019, Markk Inc.</span>
        </div>
      </div>
      <div class="col-lg-6 col-md-8 p-0">
        <div class="footer-menu-links">
          <ul>
            <li><router-link to="/details/blog">Blog</router-link></li>
            <li><router-link to="/details/about">About</router-link></li>
            <li><router-link to="/details/contact">Contact</router-link></li>
            <li><router-link to="/details/careers">Careers</router-link></li>
            <li><router-link to="/details/privacy">Privacy</router-link></li>
            <li><router-link to="/details/terms">Terms</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="social-links">
          <a href="#"><img src="@/assets/images/icon-twitter.svg" alt="image"></a>
          <a href="#"><img src="@/assets/images/icon-instagram.svg" alt="image"></a>
          <a href="#"><img src="@/assets/images/icon-facebook.svg" alt="image"></a>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>
<script>
export default {
  name: 'bottombar',
  data () {
    return {
    }
  }
}
</script>