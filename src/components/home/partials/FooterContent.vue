<template>
 <div>
   <footer id="footers">
    <div class="container">
        <!-- Footer Widgets ============================================= -->
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
                        <div style="background: transparent url(images/) no-repeat scroll center center / 100% auto;">
                            <h4>Infinity Dance Studio</h4>
                            <address>
                                <h5>
                                    8901 SW 157th AVE #5<br>
                                    Miami, FL 33196</h5>
                            </address>
                            <h5>
                                <a href="tel:786-752-6888">(786) 752-6888</a><br>
                                <a href="mailto:infinitydancestudio1@gmail.com"> infinitydancestudio1@gmail.com </a>
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
                    <div class="widget clearfix" style="margin-bottom: -20px; font-size: 3rem;">
                        <div class="row">
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="https://www.facebook.com/infinitydanceschool/" style="margin-right: 10px;">
                                    <i class="icon-facebook"></i>
                                    
                                </a>
                            </div>
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="https://www.instagram.com/infinitydancestudio/"  style="margin-right: 10px;">
                                    <em class="icon-instagram"></em>
                                </a>
                            </div>
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="https://www.youtube.com/user/infinitydancestudio1" style="margin-right: 10px;">
                                    <em class="icon-youtube"></em>
                                </a>
                            </div>
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="#" style="margin-right: 10px;">
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
      api: 'https://api.tzuru.com/api/v1/store/075be20f-c3d9-4332-b03b-e59b61a8dd25/client/forms?type=news_letter'
    }
  },

  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.loading = true
      axios.post(this.api, this.form)
      .then(response => {
        this.$toasted.show('Subscribed to our newsletter', { 
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
