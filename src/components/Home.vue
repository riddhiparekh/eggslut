<template>
  <div>
	 <Topbar/>
   <Dashboard/>
   <Bottombar/>
   <back-to-top bottom="50px" right="50px">
  <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
</back-to-top>
  </div>
</template>
<script>
import Topbar from './Topbar'
import Dashboard from './Dashboard'
import Bottombar from './Bottombar'
import BackToTop from 'vue-backtotop'
export default {
  name: 'home',
  components: {
    Topbar,
    Dashboard,
    Bottombar,
    BackToTop 
  },
  data () {
    return {
    }
  }
}
</script>