import React from 'react';
import { Link } from 'react-router-dom';

export default function P404(){
	return(
			<div id='0'>
				<ul><Link to="/">Readable</Link></ul>
				<ul><h2> 404 not found</h2></ul>
			</div>
		)
}