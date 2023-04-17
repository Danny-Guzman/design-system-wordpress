<?php
/**
 * Plugin Name: ca.gov Design System Gutenberg Blocks
 * Plugin URI: https://github.com/cagov/design-system-wordpress-gutenberg
 * Description: Integrates the <a href="https://designsystem.webstandards.ca.gov">State of California Design System</a> into the WordPress.
 * Author: CAWebPublishing
 * Author URI: https://digital.ca.gov
 * Version: 1.1.0
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 * Text Domain: cagov-design-system
 * Requires at least: 6.2
 *
 * @package  cagov-design-system
 * @source https://github.com/cagov/design-system/
 * @author   CAWebPublishing
 * @license  https://opensource.org/licenses/MIT MIT
 * @link     https://github.com/cagov/design-system-wordpress#README
 * @docs https://designsystem.webstandards.ca.gov
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'CAGOV_DESIGN_SYSTEM_DIR', __DIR__ );
define( 'CAGOV_DESIGN_SYSTEM_URL', plugin_dir_url( __FILE__ ) );
define( 'CAGOV_DESIGN_SYSTEM_VERSION', '1.0.1' );
define( 'CAGOV_DESIGN_SYSTEM_DEBUG', false );

add_action( 'plugins_loaded', 'cagov_design_system_plugins_loaded' );

add_action( 'admin_enqueue_scripts', 'cagov_design_system_admin_enqueue_scripts', 15 );
add_action( 'wp_enqueue_scripts', 'cagov_design_system_wp_enqueue_scripts', 999999999 );

add_action( 'get_header', 'cagov_design_system_get_header' );
add_action( 'get_footer', 'cagov_design_system_get_footer' );


/**
 * Fires once activated plugins have loaded.
 *
 * @return void
 */
function cagov_design_system_plugins_loaded() {
	/* Include Functionality */
	foreach ( glob( CAGOV_DESIGN_SYSTEM_DIR . '/inc/*.php' ) as $file ) {
		require_once $file;
	}

	// Add Gutenberg blocks.
	foreach ( glob( CAGOV_DESIGN_SYSTEM_DIR . '/blocks/*' ) as $file ) {
		$block_slug = basename( $file );

		if ( 'template' !== $block_slug ) {
			require_once sprintf( '%1$s/blocks/%2$s/%2$s.php', CAGOV_DESIGN_SYSTEM_DIR, $block_slug );
		}
	}
}


/**
 * Register scripts/styles with priority of 999999999
 *
 * Fires when scripts and styles are enqueued.
 *
 * @wp_action add_action( 'wp_enqueue_scripts', 'cagov_design_system_wp_enqueue_scripts', 999999999 );
 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 *
 * @return void
 */
function cagov_design_system_wp_enqueue_scripts() {
	$color = get_option( 'ca_site_color_scheme', 'cagov' );

	$core_css_file = cagov_design_system_get_min_file( "css/cagov-design-system-$color.css" );

	wp_dequeue_script( 'cagov-script' );
	wp_dequeue_style( 'cagov-style' );

	// CAgov design system core css.
	wp_enqueue_style( 'cagov-design-system-core-style', $core_css_file, array(), CAGOV_DESIGN_SYSTEM_VERSION );

	// CAgov design system core css.
	$frontend_js_file = cagov_design_system_get_min_file( 'js/cagov-design-system.js', 'js' );

	wp_enqueue_script( 'cagov-design-system-core-script', $frontend_js_file, array(), CAGOV_DESIGN_SYSTEM_VERSION, true );

}

/**
 * Admin Enqueue Scripts and Styles
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/
 * @wp_action add_action( 'admin_enqueue_scripts', 'cagov_design_system_admin_enqueue_scripts', 15 );
 * @param  string $hook The current admin page.
 *
 * @return void
 */
function cagov_design_system_admin_enqueue_scripts( $hook ) {
	$pages = array( 'toplevel_page_caweb_options' );

	if ( in_array( $hook, $pages, true ) ) {
		$admin_js                          = cagov_design_system_get_min_file( 'js/admin.js', 'js' );
		$cagov_design_system_localize_args = array();

		/* Enqueue Scripts */
		wp_enqueue_script( 'jquery' );

		wp_register_script( 'cagov-design-system-admin-scripts', $admin_js, array( 'jquery' ), '1.0.0', true );

		wp_localize_script( 'cagov-design-system-admin-scripts', 'cagov_design_system_admin_args', $cagov_design_system_localize_args );

		wp_enqueue_script( 'cagov-design-system-admin-scripts' );
	}
}

/**
 * Loads header template.
 *
 * @link https://developer.wordpress.org/reference/functions/get_header/
 *
 * @return void
 */
function cagov_design_system_get_header() {
	remove_action( 'wp_body_open', 'caweb_wp_body_open' );

	add_action( 'wp_body_open', 'cagov_design_system_wp_body_open' );

}

/**
 * Loads footer template.
 *
 * @link https://developer.wordpress.org/reference/functions/get_footer/
 *
 * @return void
 */
function cagov_design_system_get_footer() {
	remove_action( 'wp_footer', 'caweb_wp_footer' );

	add_action( 'wp_footer', 'cagov_design_system_wp_footer' );

}

/**
 * Fires the wp_body_open action.
 *
 * @link https://developer.wordpress.org/reference/functions/wp_body_open/
 * @return void
 */
function cagov_design_system_wp_body_open() {
	require_once CAGOV_DESIGN_SYSTEM_DIR . '/parts/header.php';
}

/**
 * Fires the wp_footer action.
 *
 * @link https://developer.wordpress.org/reference/functions/wp_footer/
 * @return void
 */
function cagov_design_system_wp_footer() {
	require_once CAGOV_DESIGN_SYSTEM_DIR . '/parts/footer.php';

}
