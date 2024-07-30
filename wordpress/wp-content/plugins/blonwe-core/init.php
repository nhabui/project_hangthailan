<?php

/*************************************************
## Styles and Scripts
*************************************************/ 
define('KLB_INDEX_JS', plugin_dir_url( __FILE__ )  . '/js');
define('KLB_INDEX_CSS', plugin_dir_url( __FILE__ )  . '/css');

function klb_scripts() {
	wp_register_script( 'jquery-socialshare',    KLB_INDEX_JS . '/jquery-socialshare.js', array('jquery'), '1.0', true);
	wp_register_script( 'klb-social-share', 	 KLB_INDEX_JS . '/custom/social_share.js', array('jquery'), '1.0', true);
	wp_register_script( 'klb-gdpr', 	  		 KLB_INDEX_JS . '/custom/gdpr.js', array('jquery'), '1.0', true);

	if (function_exists('get_wcmp_vendor_settings') && is_user_logged_in()) {
		if(is_vendor_dashboard()){
			wp_deregister_script( 'bootstrap');
			wp_deregister_script( 'jquery-nice-select');
		}
	}
}
add_action( 'wp_enqueue_scripts', 'klb_scripts' );

/*----------------------------
  Elementor Get Templates
 ----------------------------*/
if ( ! function_exists( 'blonwe_get_elementorTemplates' ) ) {
    function blonwe_get_elementorTemplates( $type = null )
    {
        if ( class_exists( '\Elementor\Plugin' ) ) {

            $args = [
                'post_type' => 'elementor_library',
                'posts_per_page' => -1,
            ];

            $templates = get_posts( $args );
            $options = array();

            if ( !empty( $templates ) && !is_wp_error( $templates ) ) {

				$options['0'] = esc_html__('Set a Template','blonwe-core');

                foreach ( $templates as $post ) {
                    $options[ $post->ID ] = $post->post_title;
                }
            } else {
                $options = array(
                    '' => esc_html__( 'No template exist.', 'blonwe-core' )
                );
            }

            return $options;
        }
    }
}

/*----------------------------
  Single Share
 ----------------------------*/
add_action( 'woocommerce_single_product_summary', 'blonwe_social_share', 70);
function blonwe_social_share(){
	$socialshare = get_theme_mod( 'blonwe_shop_social_share', '0' );

	if($socialshare == '1'){
		wp_enqueue_script('jquery-socialshare');
		wp_enqueue_script('klb-social-share');
	
	   $single_share_multicheck = get_theme_mod('blonwe_shop_single_share',array( 'facebook', 'twitter', 'pinterest', 'linkedin', 'reddit'));
	   
	   echo '<div class="product-share entry-social">';
		   echo '<div class="site-social">';
				echo '<ul class="social-media social-container social-share social-color-bordered ">';
					if(in_array('facebook', $single_share_multicheck)){
						echo '<li><a href="#" class="facebook"><i class="klb-social-icon-facebook"></i></a></li>';
					}
					if(in_array('twitter', $single_share_multicheck)){
						echo '<li><a href="#" class="twitter"><i class="klb-social-icon-twitter"></i></a></li>';
					}
					if(in_array('pinterest', $single_share_multicheck)){
						echo '<li><a href="#" class="pinterest"><i class="klb-social-icon-pinterest"></i></a></li>';
					}
					if(in_array('linkedin', $single_share_multicheck)){
						echo '<li><a href="#" class="linkedin"><i class="klb-social-icon-linkedin"></i></a></li>';
					}
					if(in_array('reddit', $single_share_multicheck)){
						echo '<li><a href="#" class="reddit"><i class="klb-social-icon-reddit"></i></a></li>';
					}
					
				echo '</ul>';
			echo '</div>';
		echo '</div>';

	}

}

/*-------------------------------------------
  Product Checklist
 --------------------------------------------*/
add_action( 'woocommerce_single_product_summary', 'blonwe_single_product_checklist', 38);
function blonwe_single_product_checklist(){
	$singlechecklist = get_theme_mod( 'blonwe_single_checklist', '0' );
 
	
	if($singlechecklist == '1'){
		echo '<div class="product-checklist">';
		
		$singlechecklist = get_theme_mod('blonwe_single_products_checklist'); 
		 foreach($singlechecklist as $f){ 
			echo '<ul>';
				echo '<li>'.blonwe_sanitize_data($f['checklist_title']).'</li>';
			echo '</ul>';
		}	
		echo '</div>';
	}
}

/*----------------------------
  Update Cart When Quantity changed on CART PAGE.
 ----------------------------*/
add_action( 'woocommerce_after_cart', 'blonwe_update_cart' );
function blonwe_update_cart() {
    echo '<script>
	
	var timeout;
	
    jQuery(document).ready(function($) {

		var timeout;

		$(\'.woocommerce\').on(\'change\', \'input.qty\', function(){

			if ( timeout !== undefined ) {
				clearTimeout( timeout );
			}

			timeout = setTimeout(function() {
				$("[name=\'update_cart\']").trigger("click");
			}, 1000 ); // 1 second delay, half a second (500) seems comfortable too

		});

    });
    </script>';
}

/*----------------------------
  Disable Crop Image WCMP
 ----------------------------*/
add_filter('wcmp_frontend_dash_upload_script_params', 'blonwe_crop_function');
function blonwe_crop_function( $image_script_params ) {
	$image_script_params['canSkipCrop'] = true;
	return $image_script_params;
}
