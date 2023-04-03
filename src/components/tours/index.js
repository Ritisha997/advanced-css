import React from 'react'
import './index.scss'
import nat1 from '../../assets/img/nat-1-large.jpg'
import nat2 from '../../assets/img/nat-2-large.jpg'
import nat3 from '../../assets/img/nat-3-large.jpg'
import Tilte from '../title'

const Tours = () => {
  return (
		<>
			<Tilte />
			<div className="tours below-section">
				<div className="tours-main">
					<h2>you're going to fal in love with nature</h2>
					<p className="mt-2">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galle
					</p>
					<h2>you're going to fal in love with nature</h2>
					<p className="mt-2">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
					</p>
				</div>
				<div className="tours-img">
					<img src={nat1} alt="nature" className="tours-img_main nat1-img" />
					<img src={nat2} alt="nature" className="tours-img_main nat2-img" />
					<img src={nat3} alt="nature" className="tours-img_main nat3-img" />
				</div>
			</div>
		</>
	);
}

export default Tours
