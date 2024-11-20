import Link from 'next/link';
import React from 'react';
// import Accordion from '../elements/Accordion';

const serviceListData = [
	{
		title: "Innovo",
		linkurl: "/service-innovo"
	},
	// {
	// 	title: "Cloud Native Network Solution",
	// 	linkurl: ""
	// },
	// {
	// 	title: "Network Monitoring Tool",
	// 	linkurl: ""
	// },
	// {
	// 	title: "Data Analysis",
	// 	linkurl: "page-service-details"
	// },
	// {
	// 	title: "Security System",
	// 	linkurl: "page-service-details"
	// },
	// {
	// 	title: "Data Visualization",
	// 	linkurl: "page-service-details"
	// },
];

const Serviceone = ({ alternate }) => {
	return (
		<>

			<section className="services-details">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4">
							<div className="service-sidebar">
								<div className="sidebar-widget service-sidebar-single">
									<div className="service-sidebar wow fadeInUp"
										data-wow-delay="0.1s" data-wow-duration="1200m">
										<div className="service-list">
										<ul>
											{serviceListData.map((eachitem, index) => (
												<li key={index}><Link className={(index === 0)} href={eachitem.linkurl}><i className="fas fa-angle-right"></i><span>{eachitem.title}</span></Link></li>
											))}
										</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-8 col-lg-8">
							<div className="services-details__content">
								<img src="/images/resource/iot.jpg" title='Oitech' />
								<h2 className="mt-4">Service Overview</h2>
								<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Serviceone;