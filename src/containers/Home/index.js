import React from 'react'
import './index.scss'
import Tours from '../../components/tours';
import Features from '../../components/features';

const Home = () => {
  return (
		<>
			<div className="home-container">
				<div className="section">
					<div className="max-width">
						<nav className="home-container_navbar navbar">
							<div className="navbar_logo">
								<h3>Logo</h3>
							</div>
						</nav>
					</div>
					<div className="hero">
						<div className="hero-section">
							<h1 className="hero-section_header">
								<span className="hero-section_header-main">Outdoors</span>
								<br />
								<span className="hero-section_header-sub">
									is where life happens
								</span>
							</h1>
							<div className="btn-container">
								<button className="hero-btn">discover our tours</button>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="below-section"> */}
					<Tours />
                    <Features/>
				{/* </div> */}
			</div>
		</>
	);
}

export default Home
