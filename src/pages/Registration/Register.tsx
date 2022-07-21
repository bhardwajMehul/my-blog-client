import React from 'react';

import './Register.css';

interface RegisterPageProps {}

export const Register: React.FC<RegisterPageProps> = ({}) => {
	console.log(window.navigator);
	return (
			<div className='container-fluid row' >
				<div className='col-sm-12 col-6'>here the description will come</div>
				<div className='col-sm-12 col-6'>here the form will come</div>
			</div>

	);
};
