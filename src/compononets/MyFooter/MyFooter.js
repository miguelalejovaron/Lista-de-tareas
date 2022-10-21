import React, { useState } from 'react';

//Bootstrapp
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Footer Pictures
import BriefCasePicture from '../../media/briefcase_picture.jpg';
import MyLogo from '../../media/logo_marca_personal_v2.png';
import './MyFooter.css';

//Lottie Player
import { Player } from '@lottiefiles/react-lottie-player';

//Lottie Json files
import Instagram from './instagram_lottie.json';
import Linkedin from './linkedin_lottie.json';
import Mail from './mail_lottie.json';
import GitHub from './git_hub_lottie.json';

export function MyFooter() {
	const [ togglerMail, setTogglerMail ] = useState(false);

	const togglerClickEvent = () => {
		if (!togglerMail) {
			setTogglerMail(true);
		} else if (togglerMail) {
			setTogglerMail(false);
		}
	};

	return (
		<footer id="moreInfo" className="footer__main-conatiner--margin-top">
			<Container className="footer__main-container--responsive">
				<Col>
					<Row className="index-footer">
						<Col className="footer__briefcase-social-media--style">
							<img src={BriefCasePicture} className="container__picture--size-style" alt="" />
						</Col>
						<Col className="footer__brief-case-names-logo-container__flex">
							<h2 className="text-center footer__name-text--font-style">MIGUEL VARON RAMIREZ.</h2>
							<h6 className="text-center footer__name-text--font-style">FRONTEND DEVELOPER</h6>
							<img src={MyLogo} className="container__logo--size-style" alt="" />
						</Col>
						<Col className="footer__container-social-media-icons--style">
							<ul className="footer__social-media-list--style">
								<li>
									<a href="https://www.instagram.com/miguelalejovaron/">
										<Player
											autoplay
											loop
											src={Instagram}
											style={{ height: '60px', width: '60px' }}
										/>
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/miguel-alejandro-varon-473665186/">
										<Player
											autoplay
											loop
											src={Linkedin}
											style={{ height: '60px', width: '60px' }}
										/>
									</a>
								</li>
								<li>
									<button
										className="footer-mail__button--styles"
										type="click"
										onClick={togglerClickEvent}
									>
										<Player autoplay loop src={Mail} style={{ height: '60px', width: '60px' }} />
									</button>
									<hr />
								</li>
								<li>
									<a href="https://github.com/miguelalejovaron">
										<Player autoplay loop src={GitHub} style={{ height: '60px', width: '60px' }} />
									</a>
								</li>
							</ul>
							{togglerMail === true ? (
								<div>
									<p className='footer__mail-info-advice text-center'>Press the button again, if you want to vanish the text below.</p>
									<h4 className="footer__mail-info-show__font-styles text-center">miguelalejovaron@hotmail.com</h4>
								</div>
							) : (
								''
							)}
						</Col>
					</Row>
				</Col>
			</Container>
		</footer>
	);
}
