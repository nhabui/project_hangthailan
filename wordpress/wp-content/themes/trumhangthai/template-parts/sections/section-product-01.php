<?php 
    $nhabt_wpwoo = get_theme_mod('nhabt_wpwoo_setting','1');

    if($nhabt_wpwoo == '1') {

    $nhabt_wpwoo_product_section_heading_1 = get_theme_mod('nhabt_wpwoo_product_section_heading_1');
?>
    <section id="best-seller-section" class="py-5">
        <div class="container">
            <?php if( $nhabt_wpwoo_product_section_heading_1 != ''){?>
                <h3 class="mb-5" style="margin-bottom: 1rem !important;"><?php echo esc_html( apply_filters('nhabt_wpwoo_topheader', $nhabt_wpwoo_product_section_heading_1)); ?></h3>
                
                <?php

                $parent_category_slug = get_theme_mod('nhabt_wpwoo_product_section_product_category_1');

                $parent_category = get_term_by('slug', $parent_category_slug, 'product_cat');
                $subcategories = get_terms(array(
                    'taxonomy'     => 'product_cat',
                    'child_of'     => $parent_category->term_id,
                    'hide_empty'   => false,
                ));

                if ($subcategories) {
                    echo '<table style="margin: 10px 10px 10px 10px;">';
                    echo '<tr>';
                    foreach ($subcategories as $subcategory) {
                        echo '<td>';
                        ?>
                        <h5 style="font-size: 12px;">
                            <a href="<?php echo get_term_link($subcategory); ?>" style="margin: 10px 10px 10px 10px;">
                                <?php echo esc_html(apply_filters('nhabt_wpwoo_topheader', $subcategory->name)); ?>
                            </a>
                        </h5>
                        <?php
                        echo '</td>';
                    }
                    echo '</tr>';
                    echo '</table>';
                } else {
                    echo '<p>No subcategories found.</p>';
                }
                ?>

            <?php } ?>

            <?php if(class_exists('woocommerce')){ ?>
                <div class="row" style="--bs-gutter-x: 0.5rem;">
                    <?php
                    $nhabt_wpwoo_args = array(
                        'post_type'      => 'product',
                        'posts_per_page' => 10,
                        'product_cat'    => get_theme_mod('nhabt_wpwoo_product_section_product_category_1')
                    );
                    $loop = new WP_Query( $nhabt_wpwoo_args );
                    while ( $loop->have_posts() ) : $loop->the_post();
                    ?>
                        <div class="col-lg-2 col-md-6 col-sm-12">
                            <div class="product-box-nhabt mb-5" style="margin-bottom: 1rem !important;">
                                <?php   global $product; ?>
                                <div class="product-image-nhabt">
                                    <?php echo woocommerce_get_product_thumbnail(); ?>
                                </div>
                                <div class="product-content-nhabt">
                                    <h4><a href="<?php the_permalink(); ?>"><?php echo esc_html(get_the_title()); ?></a></h4>
                                    <p>Giá <?php echo $product->get_price_html(); ?></p>
                                    <?php
        // Get the custom text input value
        $custom_text_field_value = get_post_meta(get_the_ID(), '_custom_text_field', true);

        // Check if the value exists before displaying it
        if ($custom_text_field_value) {
            // Check if the custom field value is a valid URL
            $custom_url = esc_url($custom_text_field_value);
            if (filter_var($custom_url, FILTER_VALIDATE_URL)) {
                echo '<a class="custom-button" href="' . $custom_url . '">Facebook</a>';
            }
        }
        ?>
                                    <div class="product-bottom">
                                        <p class="discount_amt mb-0">
                                            <?php 
                                            $percentages = gadget_store_woocommerce_get_product_sale_percentages( $product );
                                            $label = gadget_store_woocommerce_get_product_sale_percentage_label( $percentages, '' );
                                            echo $label;
                                            ?><?php esc_html_e(' Off','gadget-store'); ?> 
                                        </p>
                                        <p class="sale_cart mb-0">
                                            <?php if( $product->is_type( 'simple' ) ){ woocommerce_template_loop_add_to_cart( $loop->post, $product ); } ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php
                    endwhile;
                    wp_reset_query();
                    ?>
                </div>
            <?php }?>
        </div>
    </section>
<?php }?>
