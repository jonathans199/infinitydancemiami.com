<template>
	<div>
		<section id="page-title">
			<div class="container clearfix">
				<h1>Contact us today!</h1>
				<span><a href="tel:7867526888">(786) 752-6888</a></span>
				<span><a href="mailto:dance@infinitydancemiami.com">dance@infinitydancemiami.com</a></span>
			</div>
		</section>
		<section id="google-map" class="gmap slider-parallax"></section>
		<!-- <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script> -->
		<!-- <script type="text/javascript" src="/_assets/js/jquery.gmap.js"></script> -->

		<section id="content">
			<div class="content-wrap">

				<div class="container clearfix">
					<div class="postcontent nobottommargin">

												<h3>Send us an Email</h3>
												
												<!--<script type="text/javascript" src="/CatalystScripts/ValidationFunctions.js?vs=b2050.r494698-phase1">
												</script>-->

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
													<!-- <script type="text/javascript">
													//<![CDATA[
													var submitcount97335 = 0;
													
													function checkWholeForm97335(theForm) {
															var why = "";
															if (theForm.FirstName) why += isEmpty(theForm.FirstName.value, "First Name");
															if (theForm.LastName) why += isEmpty(theForm.LastName.value, "Last Name");
															if (theForm.CellPhone) why += isEmpty(theForm.CellPhone.value, "Cell Phone Number");
															if (theForm.EmailAddress) why += checkEmail(theForm.EmailAddress.value);
															if (why != "") {
																	alert(why);
																	return false;
															}
															if (submitcount97335 == 0) {
																	submitcount97335++;
																	theForm.submit();
																	return false;
															} else {
																	alert("Form submission is in progress.");
																	return false;
															}
													}
													//]]>
													</script>-->

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

import axios from 'axios'
import Toasted from 'vue-toasted'
import Vue from 'vue';
import jQuery from 'jquery'
let config = require('./../../../vue.config.js')

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
      api: config.defaultURL + '/api/contact'
    }
  },

	mounted(){
		/**
		 * jQuery gMap - Google Maps API V3
		 *
		 * @license MIT License; http://www.opensource.org/licenses/mit-license.php
		 * @url   http://github.com/marioestrada/jQuery-gMap
		 * @author  Mario Estrada <me@mario.ec> based on original plugin by Cedric Kastner <cedric@nur-text.de>
		 * @version 2.2
		 */
		/* global google */
		!function(e){e.fn.gMap=function(o,a){switch(o){case"addMarker":return e(this).trigger("gMap.addMarker",[a.latitude,a.longitude,a.content,a.icon,a.popup]);case"centerAt":return e(this).trigger("gMap.centerAt",[a.latitude,a.longitude,a.zoom]);case"clearMarkers":return e(this).trigger("gMap.clearMarkers")}var n=e.extend({},e.fn.gMap.defaults,o);return this.each(function(){var o=new google.maps.Map(this);e(this).data("gMap.reference",o);var a=new google.maps.Geocoder;n.address?a.geocode({address:n.address},function(e){e&&e.length&&o.setCenter(e[0].geometry.location)}):n.latitude&&n.longitude?o.setCenter(new google.maps.LatLng(n.latitude,n.longitude)):e.isArray(n.markers)&&n.markers.length>0?n.markers[0].address?a.geocode({address:n.markers[0].address},function(e){e&&e.length>0&&o.setCenter(e[0].geometry.location)}):o.setCenter(new google.maps.LatLng(n.markers[0].latitude,n.markers[0].longitude)):o.setCenter(new google.maps.LatLng(34.885931,9.84375)),o.setZoom(n.zoom),o.setMapTypeId(google.maps.MapTypeId[n.maptype]);var s={scrollwheel:n.scrollwheel,disableDoubleClickZoom:!n.doubleclickzoom};n.controls===!1?e.extend(s,{disableDefaultUI:!0}):0!==n.controls.length&&e.extend(s,n.controls,{disableDefaultUI:!0}),o.setOptions(s),o.setOptions({styles:n.styles});var t,r,i=new google.maps.Marker;t=new google.maps.MarkerImage(n.icon.image),t.size=new google.maps.Size(n.icon.iconsize[0],n.icon.iconsize[1]),t.anchor=new google.maps.Point(n.icon.iconanchor[0],n.icon.iconanchor[1]),i.setIcon(t),n.icon.shadow&&(r=new google.maps.MarkerImage(n.icon.shadow),r.size=new google.maps.Size(n.icon.shadowsize[0],n.icon.shadowsize[1]),r.anchor=new google.maps.Point(n.icon.shadowanchor[0],n.icon.shadowanchor[1]),i.setShadow(r)),e(this).bind("gMap.centerAt",function(e,a,n,s){s&&o.setZoom(s),o.panTo(new google.maps.LatLng(parseFloat(a),parseFloat(n)))});var g=[];e(this).bind("gMap.clearMarkers",function(){for(;g[0];)g.pop().setMap(null)});var l;e(this).bind("gMap.addMarker",function(e,a,s,t,r,d){var c,p,m=new google.maps.LatLng(parseFloat(a),parseFloat(s)),h=new google.maps.Marker({position:m});if(r?(c=new google.maps.MarkerImage(r.image),c.size=new google.maps.Size(r.iconsize[0],r.iconsize[1]),c.anchor=new google.maps.Point(r.iconanchor[0],r.iconanchor[1]),h.setIcon(c),r.shadow&&(p=new google.maps.MarkerImage(r.shadow),p.size=new google.maps.Size(r.shadowsize[0],r.shadowsize[1]),p.anchor=new google.maps.Point(r.shadowanchor[0],r.shadowanchor[1]),i.setShadow(p))):(h.setIcon(i.getIcon()),h.setShadow(i.getShadow())),t){"_latlng"===t&&(t=a+", "+s);var w=new google.maps.InfoWindow({content:n.html_prepend+t+n.html_append});google.maps.event.addListener(h,"click",function(){l&&l.close(),w.open(o,h),l=w}),d&&google.maps.event.addListenerOnce(o,"tilesloaded",function(){w.open(o,h)})}h.setMap(o),g.push(h)});for(var d,c=this,p=function(o){return function(a){a&&a.length>0&&e(c).trigger("gMap.addMarker",[a[0].geometry.location.lat(),a[0].geometry.location.lng(),o.html,o.icon,o.popup])}},m=0;m<n.markers.length;m++)d=n.markers[m],d.address?("_address"===d.html&&(d.html=d.address),a.geocode({address:d.address},p(d))):e(this).trigger("gMap.addMarker",[d.latitude,d.longitude,d.html,d.icon,d.popup])})},e.fn.gMap.defaults={address:"",latitude:0,longitude:0,zoom:1,markers:[],controls:[],styles:[],scrollwheel:!1,doubleclickzoom:!0,maptype:"ROADMAP",html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",shadow:"http://www.google.com/mapfiles/shadow50.png",iconsize:[20,34],shadowsize:[37,34],iconanchor:[9,34],shadowanchor:[6,34]}}}(jQuery);

		jQuery('#google-map').gMap({
			address: '8901 SW 157th AVE, MIAMI, FLORIDA 33196',
			maptype: 'ROADMAP',
			zoom: 14,
			markers: [
					{
							address: "8901 SW 157th AVE, MIAMI, FLORIDA 33196",
							html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;">Hi, we\'re <span>Envato</span></h4><p class="nobottommargin">Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day, and a network of educational blogs where millions learn <strong>creative skills</strong>.</p></div>',
							icon: {
									image: "/_assets/img/map-icon-red.png",
									iconsize: [32, 39],
									iconanchor: [13,39]
							}
					}
			],
			doubleclickzoom: false,
			controls: {
				panControl: true,
				zoomControl: true,
				mapTypeControl: true,
				scaleControl: false,
				streetViewControl: false,
				overviewMapControl: false
			}

		});

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
