<?php
/**
 * Plugin Name:       Drought Map
 * Plugin URI:        https://github.com/CAWebPublishing/caweb-drought-map
 * Description:       Data visualization showing rain and temperature effects on moisture on a 12 month Standardized Precipitation-Evapotranspiration Index (SPEI)
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Author:            CAWebPublishing
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       drought-map
 *
 * @package           caweb
 */

if( ! defined('DroughtMap_DIR') ){
	define( 'DroughtMap_DIR', __DIR__ );
}

if( ! defined('DroughtMap_URI') ){
	$caweb_caweb_drought_map_doc_root = isset( $_SERVER['DOCUMENT_ROOT'] ) ? sanitize_text_field( wp_unslash( $_SERVER['DOCUMENT_ROOT'] ) ) : '';
	define( 'DroughtMap_URI', esc_url( str_replace( $caweb_caweb_drought_map_doc_root, '', __DIR__ ) ) );
}

if( ! defined('DroughtMap_DEBUG') ){
	define('DroughtMap_DEBUG', false);
}

/**
 * Include caweb Core Functionality 
 */ 
foreach ( glob( DroughtMap_DIR . '/core/*.php' ) as $file ) {
	require_once $file;
}

/**
 * Include Drought Map Functionality 
 */ 
foreach ( glob( DroughtMap_DIR . '/inc/*.php' ) as $file ) {
	require_once $file;
}

/**
 * Plugin API/Action Reference
 * Actions Run During a Typical Request
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference#Actions_Run_During_a_Typical_Request
 */
add_action( 'init', 'caweb_drought_map_init' );
add_action( 'wp_enqueue_scripts', 'caweb_drought_map_wp_enqueue_scripts' );

if( ! function_exists('caweb_drought_map_init') ){
	/**
	 * Drought Map Initialization
	 *
	 * Fires after WordPress has finished loading but before any headers are sent.
	 * Include Gutenberg Block assets by getting the index file of each block build file.
	 *
	 * @link https://developer.wordpress.org/reference/hooks/init/
	 * @return void
	*/
	function caweb_drought_map_init() {	
		global $pagenow;

		/**
		* Enqueues the default ThickBox js and css. (if not on the login page or customizer page)
		*
		* @link https://developer.wordpress.org/reference/functions/add_thickbox/
		*/
		if ( ! in_array( $pagenow, array( 'wp-login.php', 'customize.php' ), true ) ) {
			add_thickbox();
		}
			
		// if editing a page/post register compiled Gutenberg Block bundles.
		if ( in_array( $pagenow, array( 'post.php', 'post-new.php' ), true ) ) {

			wp_enqueue_style( 'caweb-drought-map', caweb_drought_map_get_min_file( '/css/drought-map.css' ), array());
		}

		$block_args = array(
			'render_callback' => 'caweb_drought_map_block_renderer',
		);

		/**
		 * Registers the block using the metadata loaded from the `block.json` file.
		 * Behind the scenes, it registers also all assets so they can be enqueued
		 * through the block editor in the corresponding context.
		 *
		 * @see https://developer.wordpress.org/reference/functions/register_block_type/
		*/
		register_block_type( DroughtMap_DIR . '/build', $block_args );
	}
}

if( ! function_exists('caweb_drought_map_wp_enqueue_scripts') ){
	/**
	* Register Drought Map scripts/styles
	*
	* Fires when scripts and styles are enqueued.
	*
	* @category add_action( 'wp_enqueue_scripts', 'caweb_drought_map_wp_enqueue_scripts' );
	* @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
	*
	* @return void
	*/
	function caweb_drought_map_wp_enqueue_scripts() {

		// Register compiled Gutenberg Block bundles.
		wp_enqueue_script( 'caweb-drought-map', caweb_drought_map_get_min_file( '/js/drought-map.js', 'js' ), array(), '', true );

		wp_enqueue_style( 'caweb-drought-map', caweb_drought_map_get_min_file( '/css/drought-map.css' ), array(), '' );

	}
}
