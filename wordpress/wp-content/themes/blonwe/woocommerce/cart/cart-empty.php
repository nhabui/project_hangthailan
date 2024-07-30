<?php
/**
 * Empty cart page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart-empty.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 7.0.1
 */

defined( 'ABSPATH' ) || exit;

if ( wc_get_page_id( 'shop' ) > 0 ) : ?>
	<div class="row content-wrapper">
		<div class="col col-12 col-lg-12 primary-column">
			<div class="cart-wrapper">
			
				<div class="cart-empty-page">
					
					<div class="empty-icon">
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 56 56" enable-background="new 0 0 56 56" xml:space="preserve">
							<g>
							<path d="M0.4,27.6c0.4-0.9,1.2-1.2,2.2-1.2c5.4,0,10.8,0,16.3,0c0.8,0,1.4,0.2,2,0.8c2.2,2.3,4.5,4.5,6.7,6.8
							  c0.1,0.1,0.2,0.3,0.4,0.5c0.2-0.2,0.4-0.4,0.5-0.5c2.3-2.3,4.6-4.5,6.8-6.8c0.5-0.5,1.1-0.7,1.8-0.7c5.6,0,11.1,0,16.7,0
							  c0.8,0,1.5,0.2,1.8,1c0.3,0.8,0,1.4-0.6,2c-2.5,2.5-5,5-7.6,7.5c-0.3,0.3-0.4,0.6-0.4,1c0,5.2,0,10.4,0,15.6c0,1-0.3,1.7-1.3,2.1
							  c-11.8,0-23.6,0-35.4,0c-1-0.4-1.3-1.1-1.3-2.1c0-5.2,0-10.4,0-15.7c0-0.4-0.1-0.7-0.4-0.9c-2.4-2.4-4.8-4.8-7.2-7.2
							  c-0.4-0.4-0.7-0.8-1-1.3C0.4,28.1,0.4,27.9,0.4,27.6z M12.3,38.3c0,4.7,0,9.4,0,14c4.7,0,9.4,0,14,0c0-4.7,0-9.4,0-14
							  C21.7,38.3,17,38.3,12.3,38.3z M43.7,38.3c-4.7,0-9.4,0-14,0c0,4.7,0,9.4,0,14c4.7,0,9.4,0,14,0C43.7,47.6,43.7,43,43.7,38.3z
							  M24.1,35c-1.8-1.8-3.5-3.5-5.3-5.2c-0.1-0.1-0.4-0.2-0.6-0.2c-3.9,0-7.9,0-11.8,0c-0.1,0-0.3,0-0.5,0c1.7,1.7,3.4,3.4,5,5
							  c0.3,0.3,0.5,0.4,0.9,0.4c3.8,0,7.7,0,11.5,0C23.6,35,23.8,35,24.1,35z M32,35c0.2,0,0.3,0,0.4,0c4,0,8,0,12,0
							  c0.2,0,0.4-0.1,0.6-0.3c1.6-1.6,3.2-3.2,4.8-4.8c0.1-0.1,0.2-0.2,0.3-0.3c-0.1,0-0.1,0-0.2,0c-4.1,0-8.1,0-12.2,0
							  c-0.2,0-0.4,0.1-0.5,0.2C35.4,31.5,33.7,33.2,32,35z"/>
							<path d="M29.6,24.9c0,0.4,0,0.8,0,1.1c0,1-0.6,1.8-1.6,1.8c-0.9,0-1.6-0.7-1.7-1.7c-0.1-2.8-0.4-5.6-1.1-8.3
							  c-0.5-2.2-1.3-4.3-2.6-6.2c-1.5-2-3.4-3.1-5.9-2.8c-1.7,0.2-3,0.9-3.5,2.6c-0.5,1.7,0.1,3.1,1.4,4.3c1.4,1.2,3.1,1.7,4.8,1.9
							  c0.5,0.1,1,0.1,1.6,0.1c0.9,0,1.5,0.7,1.6,1.5c0.1,0.8-0.6,1.7-1.4,1.7c-3.8,0-7.3-0.8-9.8-3.9c-1.7-2.2-2.1-4.6-1-7.2
							  c1.1-2.5,3.2-3.8,5.9-4.1c3.9-0.5,6.9,1.1,9.1,4.3c1.7,2.4,2.6,5.1,3.2,7.9C29.1,20.2,29.4,22.6,29.6,24.9
							  C29.7,24.9,29.6,24.9,29.6,24.9z"/>
							<path d="M34.2,21c-0.3,0-0.6,0-0.9,0c-1,0-1.7-0.7-1.7-1.6c0-0.9,0.7-1.6,1.7-1.6c1.9,0,3.8-0.2,5.6-0.9c1.2-0.5,2.2-1.1,3.1-2
							  c3.1-3.2,2.1-7.5-2.2-8.8c-1-0.3-2-0.4-3-0.5c-1-0.1-1.8-0.8-1.7-1.7c0-0.9,0.8-1.6,1.8-1.6c2.1,0,4.2,0.4,6,1.6
							  c4.6,2.8,5.5,8.8,1.9,12.8c-2,2.2-4.5,3.4-7.4,4C36.3,20.8,35.3,20.9,34.2,21C34.2,21,34.2,21,34.2,21z"/>
							<path d="M29.7,1.5C30,1.2,30.2,1,30.5,0.8c0.7-0.5,1.5-0.5,2.1,0.1c0.6,0.6,0.7,1.5,0.2,2.1c-0.6,0.7-1.3,1.4-2,2.1
							  c-0.6,0.5-1.5,0.4-2-0.1c-0.6-0.6-1.2-1.2-1.8-1.8c-0.6-0.7-0.6-1.6,0-2.2c0.6-0.6,1.5-0.7,2.2-0.1C29.3,1,29.5,1.2,29.7,1.5z"/>
						  </g>
						</svg>
					</div>					
					
					<?php 
						/*
						 * @hooked wc_empty_cart_message - 10
						 */
						do_action( 'woocommerce_cart_is_empty' );
					?>

					<p class="return-to-shop">
						<a class="button wc-backward<?php echo esc_attr( wc_wp_theme_get_element_class_name( 'button' ) ? ' ' . wc_wp_theme_get_element_class_name( 'button' ) : '' ); ?>" href="<?php echo esc_url( apply_filters( 'woocommerce_return_to_shop_redirect', wc_get_page_permalink( 'shop' ) ) ); ?>">
							<?php
								/**
								 * Filter "Return To Shop" text.
								 *
								 * @since 4.6.0
								 * @param string $default_text Default text.
								 */
								echo esc_html( apply_filters( 'woocommerce_return_to_shop_text', esc_html__( 'Return to shop', 'blonwe' ) ) );
							?>
						</a>
					</p>
				
				</div>
				
			</div>
		</div>
	</div>	
<?php endif; ?>
