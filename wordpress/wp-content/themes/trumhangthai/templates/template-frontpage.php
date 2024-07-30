<?php
/***
	Template Name: Frontpage
*/

get_header(); 

get_template_part('template-parts/sections/section','slider');
//get_template_part('template-parts/sections/section','best-seller');
get_template_part('template-parts/sections/section','product-01'); 

?>

<?php get_footer(); ?>