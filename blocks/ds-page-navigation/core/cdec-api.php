<?php
/**
 * Ds Page Navigation CDEC REST API
 *
 * @see https://cdec.water.ca.gov/resapp/
 *
 * @package caweb
 */

if( ! function_exists('caweb_cdec_reservoir_conditions_api')){
	/**
	* Retrieve data from the CDEC Reservoir API
	*
	* @see https://cdec.water.ca.gov/resapp/service/res/conditions
	* @param  string $station_id Major reservoirs station that were recommended by CDEC.
	* @return string
	*/
	function caweb_cdec_reservoir_conditions_api( $station_id = '' ) {
		$result = 'No Results';

		if ( empty( $station_id ) ) {
			return $result;
		}

		$date   = gmdate( 'Y-m-d' );

		$url = "https://cdec.water.ca.gov/resapp/service/res/conditions?date=$date&stationIds=$station_id";

		$args = array(
			'headers' => array(
				'Content-Type' => 'application/json',
			),
		);

		$response = wp_remote_get( $url, $args );

		if ( 200 === wp_remote_retrieve_response_code( $response ) ) {
			$result = wp_remote_retrieve_body( $response );

			return json_decode( $result, true )[0];
		}

	}
}
