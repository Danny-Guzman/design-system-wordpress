<?php
/**
 * Ds Page Navigation Helper Functions
 *
 * @package cagov-design-system
 */

if ( ! function_exists( 'cagov_design_system_ds_page_navigation_get_min_file' ) ) {
	/**
	 * Load Minified Version of a file
	 *
	 * @param  string $f File to load.
	 * @param  string $ext Extension of file, default css.
	 *
	 * @return string
	 */
	function cagov_design_system_ds_page_navigation_get_min_file( $f, $ext = 'css' ) {
		// if not debugging and a minified version exists load it.
		if ( ! CAGOV_DESIGN_SYSTEM_DEBUG && file_exists( __DIR__ . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
			return DsPageNavigation_URI . str_replace( ".$ext", ".min.$ext", $f );
		} else {
			return DsPageNavigation_URI . $f;
		}
	}
}
