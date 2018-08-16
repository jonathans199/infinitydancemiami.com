<template>
 <div>
   <footer id="footers">
    <div class="container">
        <!-- Footer Widgets
============================================= -->
        <div class="footer-widgets-wrap clearfix">
            <div class="col-md-4">
                <div>
                    <div class="widget clearfix">
                        <img src="@/assets/img/ids_logo85px.png" alt="Infinity Dance Studio" class="footer-logo">
                        <p> Copyrights © 2016
                            <br> All Rights Reserved by Infinity Dance Studio, Inc</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div>
                    <div class="widget clearfix">
                        <div style="background: transparent url(images/world-map.png) no-repeat scroll center center / 100% auto;">
                            <h4>Infinity Dance Studio</h4>
                            <address>
                                <h5>
                                    8901 SW 157th AVE #5<br>
                                    Miami, FL 33196</h5>
                            </address>
                            <h5>
                                <a href="tel:786-752-6888">(786) 752-6888</a><br>
                                <a href="mailto:dance@infinitydancemiami.com"> dance@infinitydancemiami.com </a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="widget subscribe-widget clearfix">
                    <h5><strong>Subscribe</strong> to Our Newsletter to get News and Offers</h5>
                    <!--<script type="text/javascript" src="/CatalystScripts/ValidationFunctions.js?vs=b2050.r494698-phase1"></script>-->
                    <form    @submit="onSubmit"  @reset="onReset" v-if="show">
                      <input 
                        type="text" 
                        name="EmailAddress" 
                        id="EmailAddress" 
                        class="form-control required email" 
                        maxlength="255" 
                        v-model="form.email"
                        required
                        placeholder="Email">
                      <br>
                      <input class="btn btn-success" type="submit" value="Submit" id="catwebformbutton">
                        
                    </form>
                    <div class="widget clearfix" style="margin-bottom: -20px;">
                        <div class="row">
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="https://www.facebook.com/infinitydanceschool/" class="social-icon si-dark si-colored si-facebook nobottommargin" style="margin-right: 10px;">
                                    <em class="icon-facebook"></em>
                                    
                                </a>
                            </div>
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="https://www.instagram.com/infinitydancestudio/" class="social-icon si-dark si-colored si-instagram nobottommargin" style="margin-right: 10px;">
                                    <em class="icon-instagram"></em>
                                    <em class="icon-instagram"></em>
                                </a>
                            </div>
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="https://www.youtube.com/user/infinitydancestudio1" class="social-icon si-dark si-colored si-youtube nobottommargin" style="margin-right: 10px;">
                                    <em class="icon-youtube"></em>
                                    <em class="icon-youtube"></em>
                                </a>
                            </div>
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="#" class="social-icon si-dark si-colored si-gplus nobottommargin" style="margin-right: 10px;">
                                    <em class="icon-gplus"></em>
                                    <em class="icon-gplus"></em>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!-- .footer-widgets-wrap end -->
        </div>
    </footer>
 </div>
</template>
<script>
import axios from 'axios'
import Toasted from 'vue-toasted'
import Vue from 'vue';
import jQuery from 'jquery'
let config = require('./../../../../vue.config.js')

Vue.use(Toasted)

export default {
  name: "FooterContent",
  data () {
    return {
      loading: false,
      form: {
        email: ''
      },
      show: true,
      api: config.defaultURL + '/api/news_letters'
    }
  },

  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.loading = true
      axios.post(this.api, this.form)
      .then(response => {
        this.$toasted.show(response.data.m, { 
          position:'top-right', 
          duration: 5000,
          type: 'success'
        })
        this.onReset(evt)
        this.loading = false
      })
      .catch((error) => {
        this.$toasted.show(error.response.data.m, { 
          position:'top-right', 
          duration: 5000,
          type: 'error'
        })
        this.loading = false
      })
    },

    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.message = null;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  } 
}
</script>
