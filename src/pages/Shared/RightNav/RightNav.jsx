import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg.png";
import bg1 from "../../../assets/bg1.png";

const RightNav = () => {
	return (
		<div>
			<h4 className='mt-4'> Login With</h4>
			<Button className='mb-2' variant="outline-primary">  <FaGoogle /> Login with Google</Button>
			<Button className='px-3' variant="outline-secondary"> < FaGithub /> Login with gitHub</Button>

			<div>
				<h4 className='mt-4'> Find us on</h4>
				<ListGroup>
					<ListGroup.Item>< FaFacebook />  Facebook</ListGroup.Item>
					<ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
					<ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>

				</ListGroup>
			</div>
			<QZone></QZone>
			<div>
				<img src={bg} alt="" />
				<img src={bg1} alt="" />
			</div>
		</div>
	);
};

export default RightNav;