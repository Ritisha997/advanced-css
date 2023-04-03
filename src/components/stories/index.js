import React from 'react'
import Title  from '../title'
import logo from '../../assets/img/girl.jpg'
import './index.scss'

const Stories = () => {
  return (
		<>
			<Title />
			<div className="stories">
				<div className="stories-section  below-section">
					<div className="stories-section_main">
						<div className="stories-section_main-img">
							<img src={logo} alt="img" className="img" />
						</div>
						<div className="stories-section_main-text">
							<h3>i has the best week ever with my family</h3>
							<p className='mt-2'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stories
