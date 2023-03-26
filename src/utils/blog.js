/**
 * External Dependencies.
 */
import axios from 'axios';

/**
 * Internal Dependencies.
 */
import { GET_POSTS_ENDPOINT } from './constants/endpoints';

/**
 * Get Posts.
 *
 * @return {Promise<void>}
 */

export const getPosts = async ( pageNo = 1 ) => {
	return await axios.get( `${ GET_POSTS_ENDPOINT }?page_no=${ pageNo }` )
		.then( res => {
			if ( 200 === res.data.status ) {
				return res;
			} else {
				return {};
			}
		} )
		.catch( err => console.log( err.response.data.message ) );
};
