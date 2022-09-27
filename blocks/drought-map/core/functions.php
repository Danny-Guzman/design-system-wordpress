<?php
/**
 * Drought Map Helper Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_drought_map_get_min_file') ){
	/**
	* Load Minified Version of a file
	*
	* @param  string $f File to load.
	* @param  string $ext Extension of file, default css.
	*
	* @return string
	*/
	function caweb_drought_map_get_min_file( $f, $ext = 'css' ) {
		// if not debugging and a minified version exists load it.
		if ( ! DroughtMap_DEBUG && file_exists( DroughtMap_DIR . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
			return DroughtMap_URI . str_replace( ".$ext", ".min.$ext", $f );
		} else {
			return DroughtMap_URI . $f;
		}
	}
}
