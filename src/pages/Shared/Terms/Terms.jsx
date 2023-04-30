import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
	return (
		<Container>
			<h2>Terms and conditions</h2>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto molestiae quis, autem maxime quo, illum eaque aliquam porro nam, officiis similique quos. Eaque eum magni fugiat at nulla cupiditate voluptatibus porro velit nam quam numquam ipsa eius corrupti commodi est unde officiis aut, iure autem? Eligendi vitae sapiente error eum?</p>
			<p>Go back to <Link to="/register">Register</Link></p>
		</Container>
	);
};

export default Terms;