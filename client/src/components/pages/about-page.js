import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import "./about.css";
import fjt from "../../../../photos/jt.jpg";
import ike from "../../../../photos/iken.jpg";
import jak from "../../../../photos/jacktamas.jpg";
import mat from "../../../../photos/matt.jpg";


class AboutPage extends Component {
	render() {
		return (
			<div>
				<div className="container-fluid text-center mainSecAbout">
					<Helmet>
						<title>{this.props.route.name}</title>
					</Helmet>
					<br/>

					<div className="jumbotron">
						<h1 className="display-4 brandName">Explore It</h1>
						<p className="lead">Maps As A Service</p>
						<hr className="my-4" />
						<p>The Team.</p>
					</div>
				</div>

				<div className="container teamSec">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6 card-pad animated fadeInUp delay-02s">
						<div className="card bg-transparent flip">
							<div className="front hide-it-front bg-light">
								<img className="img-fluid rounded-circle portImg" src={mat} alt="Matthew Groff" />
								<div className="card-body">
									<h4 className="card-title text-center">Matthew Groff</h4>
									<ul className="list-inline text-center">
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="mailto:mattlgroff@gmail.com?subject=Found your portfolio!">
												<i className="fa fa-fw fa-envelope"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://github.com/mattlgroff">
												<i className="fa fa-fw fa-github"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://stackoverflow.com/users/8298432/matthew-groff">
												<i className="fa fa-fw fa-stack-overflow"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://www.linkedin.com/in/mattgroff">
												<i className="fa fa-fw fa-linkedin"></i>
											</a>
										</li>
									</ul>
									<img className="portImg icon-r" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Simpleicons_Interface_arrow-curve-pointing-to-right-direction.svg" alt="FLIP" />
								</div>
							</div>
							<div className="back bg-long bg-light">
								<div className="card-body center-div">
									<h5 className="card-title text-center">Favorite Quote</h5>
									<p className="text-center">"'You miss 100% of the shots you don't take.' - Wayne Gretzky" <br/> - Michael Scott"</p>
									<h6 className="card-text text-center"> <a target="_blank" href="https://mattlgroff.github.io/">Matt's Portfolio</a></h6>
									<hr></hr>
									<p className="text-center">I'm a lifelong learner who is always trying to better myself and become a greater developer. I try to be on the forefront of advancements in technology, especially software development.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 card-pad animated fadeInUp delay-04s">
						<div className="card bg-transparent flip">
							<div className="front hide-it-front bg-light">
								<img className="img-fluid rounded-circle portImg" src={jak} alt="Jack Tamas" />
								<div className="card-body">
									<h4 className="card-title text-center">Jack Tamas</h4>
									<ul className="list-inline text-center">
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="mailto:jtamas@jacktamas.com?subject=Found your portfolio!">
												<i className="fa fa-fw fa-envelope"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://github.com/Jacktamas">
												<i className="fa fa-fw fa-github"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://stackoverflow.com/users/7882517/jack-tamas">
												<i className="fa fa-fw fa-stack-overflow"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://www.linkedin.com/in/jacktamas">
												<i className="fa fa-fw fa-linkedin"></i>
											</a>
										</li>
									</ul>
									<img className="portImg icon-r" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Simpleicons_Interface_arrow-curve-pointing-to-right-direction.svg" alt="FLIP" />
								</div>
							</div>
							<div className="back bg-long bg-light">
								<div className="card-body center-div">
									<h5 className="card-title text-center">Favorite Quote</h5>
									<p className="text-center">“ Programs must be written for people to read, and only incidentally for machines to execute. ”
										- Abelson / Sussman
									</p>
									<h6 className="card-text text-center"> <a target="_blank" href="http://jacktamas.com">Jacks's Portfolio</a></h6>
									<hr></hr>
									<p className="text-center">Software Developer: certified in fullstack web development. Focused on continuing to advance in the Web Development industry to make a better life for others.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 card-pad animated fadeInUp delay-05s">
						<div className="card bg-transparent flip">
							<div className="front hide-it-front bg-light">
								<img className="img-fluid rounded-circle portImg" src={ike} alt="Ike Nnawuba" />
								<div className="card-body">
									<h4 className="card-title text-center">Ike Nnawuba</h4>
									<ul className="list-inline text-center">
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="mailto:innawuba@gmail.com?subject=Found your portfolio!">
												<i className="fa fa-fw fa-envelope"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://github.com/innawu1">
												<i className="fa fa-fw fa-github"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://stackoverflow.com/users/8354057/ike-nnawuba">
												<i className="fa fa-fw fa-stack-overflow"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="http://linkedin.com/in/ikechi-nnawuba-53753415">
												<i className="fa fa-fw fa-linkedin"></i>
											</a>
										</li>
									</ul>
									<img className="portImg icon-r" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Simpleicons_Interface_arrow-curve-pointing-to-right-direction.svg" alt="FLIP" />
								</div>
							</div>
							<div className="back bg-long bg-light">
								<div className="card-body center-div">
									<h5 className="card-title text-center">Favorite Quote</h5>
									<p className="text-center">"Success is not final, failure is not fatal: it is the courage to continue that counts. " - Winston Churchill</p>
									<h6 className="card-text text-center"><a target="_blank" href="https://innawu1.github.io/">Ike's Portfolio</a></h6>
									<hr></hr>
									<p className="text-center">Full Stack Web Developer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 card-pad animated fadeInUp delay-05s">
						<div className="card bg-transparent flip">
							<div className="front hide-it-front bg-light">
								<img className="img-fluid rounded-circle portImg d-block mx-auto" src={fjt} alt="FJT" />
								<div className="card-body">
									<h4 className="card-title text-center">Fiaalii Togiaso</h4>
									<ul className="list-inline text-center">
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="mailto:jtogiaso@gmail.com?subject=Found your portfolio!">
												<i className="fa fa-fw fa-envelope"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://github.com/jtogiaso">
												<i className="fa fa-fw fa-github"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://stackoverflow.com/users/8351976/kitiona49">
												<i className="fa fa-fw fa-stack-overflow"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="btn-social btn-outline" target="”_blank”" href="https://www.linkedin.com/in/fiaalii-f-togiaso-24a579147/">
												<i className="fa fa-fw fa-linkedin"></i>
											</a>
										</li>
									</ul>
									<img className="portImg icon-r" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Simpleicons_Interface_arrow-curve-pointing-to-right-direction.svg" alt="FLIP" />
								</div>
							</div>
							<div className="back bg-long bg-light">
								<div className="card-body center-div">
									<h5 className="card-title text-center">Favorite Quote</h5>
									<p className="text-center">“ The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. ” - Anonymous</p>
									<h6 className="card-text text-center"> <a target="_blank" href="https://jtogiaso.github.io/Basic-Portfolio">JT's Portfolio</a></h6>
									<hr></hr>
									<p className="text-center">Coding allows me to realize my dreams to help others efficiently make the most of their lives, all while I get to network with great people who also strive to push the boundaries of technology. </p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</div>
			{
		// 	<footer className="footer">
		// 		<div className="container-fluid">
		// 			© 2018 Copyright Explore It
		// 	</div>
		// </footer>
	}
			</div>



		);
	}
}

export default AboutPage;