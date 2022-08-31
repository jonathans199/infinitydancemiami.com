<template>
	<div>
		<section id="page-title">
			<div class="container clearfix">
				<h1>Contact us today!</h1>
				<span><a href="tel:7867526888">(786) 752-6888</a></span>
				<span><a href="mailto:infinitydancestudio1@gmail.com">infinitydancestudio1@gmail.com</a></span>
			</div>
		</section>

		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14382.582666047545!2d-80.445386!3d25.6830381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x276f3f439fbcd415!2sInfinity+Dance+Studio!5e0!3m2!1sen!2sus!4v1536424303116" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
		<!-- <section id="google-map" class="gmap slider-parallax">
			

		</section> -->
		<!-- <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script> -->
		<!-- <script type="text/javascript" src="/_assets/js/jquery.gmap.js"></script> -->

		<section id="content">
			<div class="content-wrap">

				<div class="container clearfix">
					<div class="postcontent nobottommargin">

												<h3>Send us an Email</h3>
												<form name="catwebformform97335" @submit="onSubmit" @reset="onReset" v-if="show" enctype="multipart/form-data" >
													<div class="col_one_third">
													<input 
														v-model="form.name"
														type="text" 
														name="FirstName" 
														id="FirstName" 
														class="sm-form-control" 
														maxlength="255" 
														placeholder="First Name" 
														required
													/>
													</div>
													<div class="col_one_third">
														<input 
															type="text" 
															name="LastName" 
															id="LastName" 
															class="sm-form-control" 
															maxlength="255" 
															v-model="form.lastName"
															placeholder="Last Name" 
														/>
													</div>
													<div class="col_one_third col_last">
														<input 
															type="text" 
															name="CellPhone" 
															id="CellPhone" 
															v-model="form.phone"
															class="sm-form-control" 
															maxlength="255" 
															placeholder="Cell" 
															required
														/>
													</div>
													<div class="col_two_third">
														<input 
															type="text" 
															name="EmailAddress" 
															v-model="form.email"
															id="EmailAddress" 
															class="required email sm-form-control" 
															maxlength="255" 
															placeholder="Email" 
															required
														/>
													</div>
													<div class="col_two_third">
														<textarea 
															name="CAT_Custom_869" 
															id="CAT_Custom_869" 
															v-model="form.message"
															cols="10" 
															rows="4" 
															class="required sm-form-control" 
															onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);">
														</textarea>
													</div>
													<label>Preferred Contact Method</label>
													<br />
													<input type="radio" name="CAT_Custom_868" id="CAT_Custom_868_0" value="Phone" /> Phone
													<br />
													<input type="radio" name="CAT_Custom_868" id="CAT_Custom_868_1" value="Email" /> Email
													<td>
														<div style="display: none">
															<input type="text" name="s_content" id="s_content" class="cat_textbox" />
															<input type="text" name="s_summary" id="s_summary" class="cat_textbox" value="b92a0ef4c3044dd7acab8b9770dcafdb" />
														</div>
													</td>
													<div class="col_full">
														<button 
															class="button button-3d nomargin"
															type="submit"
															v-if="!this.loading">
															Submit
														</button>
														<button 
															type="submit" 
															class="button button-3d nomargin"
															disabled
															v-if="this.loading">
															SENDING <i class="fa fa-circle-o-notch fa-spin" />
														</button>
													</div>

												</form>
										</div>
								
					<div class="sidebar col_last nobottommargin">

						<address>
							<strong>Infinity Dance Studio</strong><br>
							8901 SW 157 ave #5<br>
							Miami, FL 33196<br>
						</address>
						<abbr title="Phone Number"><strong>Phone:</strong></abbr> (786) 752-6888<br>
						<abbr title="Email Address"><strong>Email:</strong></abbr> dance@infinitydancemiami.com

						
						<div class="widget noborder notoppadding">

							<a href="http://www.facebook.com/infinitydanceschool/" class="social-icon si-small si-dark si-facebook">
								<i class="icon-facebook"></i>
								<i class="icon-facebook"></i>
							</a>

							<a href="#" class="social-icon si-small si-dark si-gplus">
								<i class="icon-gplus"></i>
								<i class="icon-gplus"></i>
							</a>

						</div>

					</div><!-- .sidebar end -->

				</div>
			</div>
		</section><!-- #content end -->
	</div>
</template>
<script>

import * as config from './../../../config/settings'
import axios from 'axios'
import Toasted from 'vue-toasted'
import Vue from 'vue';
import jQuery from 'jquery'
// let config = require('./../../../vue.config.js')


Vue.use(Toasted)

export default {
	name: "Contact", 
	components: {
	},

	data () {
    return {
      loading: false,
      form: {
        email: '',
        name: '',
        message: null
      },
      show: true,
      api: 'https://api.tzuru.com/api/v1/store/075be20f-c3d9-4332-b03b-e59b61a8dd25/client/forms?type=contact'
    }
  },

  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.loading = true
      axios.post(this.api, this.form)
      .then(response => {
        this.$toasted.show('Contact form sent', { 
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
