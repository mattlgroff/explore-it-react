import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import "./about.css";


class AboutPage extends Component {
  render() {
    return (
<div className="container">

	<Helmet>
		<title>{this.props.route.name}</title>
	</Helmet>
	<br/>
	<div className="jumbotron text-center title-bg text-white">
		<h1 className="display-4">Middle Stacked / On the Node</h1>
		<p className="lead">The Team</p>
		<hr className="my-4" />
		<h3 className="text-center">We are Middle Stacked / On the Node. To check us out or contact us, Explore our cards below! </h3>
	</div>

	<div className="row">
		<div className="col-lg-3 col-md-6 col-sm-6 card-pad animated fadeInUp delay-02s">
			<div className="card bg-transparent flip">
				<div className="front hide-it-front bg-light">
					<img className="card-img-top mapImg" src="data:image/jpeg;base64,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" alt="MAT" />
					<div className="card-body">
						<h4 className="card-title">Matt Groff</h4>
						<h6 className="card-text">Bio: </h6>
						<p>We are here today, to tell you about whatever it is you want! They went for bat</p>
					</div>
				</div>
				<div className="back bg-long bg-light">
					<div className="card-body">
						<h4 className="card-title text-center">Contact Info / Portfolio</h4>
						<h6 className="card-text"><img className="icon-p" src="http://people.ischool.berkeley.edu/~derek/resources/GitHub-Mark.png"/> <a target="_blank" href="https://github.com/jtogiaso">jtogiaso@github.com </a></h6>
						<h6 className="card-text"><img className="icon-p" src="https://image.flaticon.com/icons/png/512/174/174857.png"/> <a target="_blank" href="https://www.linkedin.com/in/fiaalii-f-togiaso-24a579147/">Fiaalii F Togiaso </a></h6>
						<h6 className="card-text"><img className="icon-p" src="http://kiki.to/img/stackoverflow-favicon.svg"/> <a target="_blank" href="https://stackoverflow.com/users/8351976/kitiona49">kitiona49</a></h6>
					</div>
				</div>
			</div>
		</div>
		<div className="col-lg-3 col-md-6 col-sm-6 card-pad animated fadeInUp delay-04s">
			<div className="card bg-transparent flip">
				<div className="front hide-it-front bg-light">
					<img className="card-img-top mapImg" src="https://pbs.twimg.com/media/CspvjblW8AA4WxC.jpg" alt="JAK" />
					<div className="card-body">
						<h4 className="card-title">Jack Tamas</h4>
						<h6 className="card-text">Bio: </h6>
						<p>We are here today, to tell you about whatever it is you want! They went for bat</p>
					</div>
				</div>
				<div className="back bg-long bg-light">
					<div className="card-body">
						<h4 className="card-title text-center">Contact Info / Portfolio</h4>
						<h6 className="card-text"><img className="icon-p" src="http://people.ischool.berkeley.edu/~derek/resources/GitHub-Mark.png"/> <a target="_blank" href="https://github.com/jtogiaso">jtogiaso@github.com </a></h6>
						<h6 className="card-text"><img className="icon-p" src="https://image.flaticon.com/icons/png/512/174/174857.png"/> <a target="_blank" href="https://www.linkedin.com/in/fiaalii-f-togiaso-24a579147/">Fiaalii F Togiaso </a></h6>
						<h6 className="card-text"><img className="icon-p" src="http://kiki.to/img/stackoverflow-favicon.svg"/> <a target="_blank" href="https://stackoverflow.com/users/8351976/kitiona49">kitiona49</a></h6>
					</div>
				</div>
			</div>
		</div>
		<div className="col-lg-3 col-md-6 col-sm-6 card-pad animated fadeInUp delay-05s">
			<div className="card bg-transparent flip">
				<div className="front hide-it-front bg-light">
					<img className="card-img-top mapImg" src="http://farabaleweekly.com/wp-content/uploads/2016/09/Abioye02.png" alt="IKE" />
					<div className="card-body">
						<h4 className="card-title">Ikechi Nnawuba</h4>
						<h6 className="card-text">Bio: </h6>
						<p>We are here today, to tell you about whatever it is you want! They went for bat</p>
					</div>
				</div>
				<div className="back bg-long bg-light">
					<div className="card-body">
						<h4 className="card-title text-center">Contact Info / Portfolio</h4>
						<h6 className="card-text"><img className="icon-p" src="http://people.ischool.berkeley.edu/~derek/resources/GitHub-Mark.png"/> <a target="_blank" href="https://github.com/jtogiaso">jtogiaso@github.com </a></h6>
						<h6 className="card-text"><img className="icon-p" src="https://image.flaticon.com/icons/png/512/174/174857.png"/> <a target="_blank" href="https://www.linkedin.com/in/fiaalii-f-togiaso-24a579147/">Fiaalii F Togiaso </a></h6>
						<h6 className="card-text"><img className="icon-p" src="http://kiki.to/img/stackoverflow-favicon.svg"/> <a target="_blank" href="https://stackoverflow.com/users/8351976/kitiona49">kitiona49</a></h6>
					</div>
				</div>
			</div>
		</div>
		<div className="col-lg-3 col-md-6 col-sm-6 card-pad animated fadeInUp delay-05s">
			<div className="card bg-transparent flip">
				<div className="front hide-it-front bg-light">
					<img className="card-img-top mapImg" src="http://farabaleweekly.com/wp-content/uploads/2016/09/Abioye04.png" alt="FJT" />
					<div className="card-body">
						<h4 className="card-title">Fiaalii Togiaso</h4>
						<h6 className="card-text">Bio: </h6>
						<p>We are here today, to tell you about whatever it is you want! They went for bat</p>
					</div>
				</div>
				<div className="back bg-long bg-light">
					<div className="card-body">
						<h4 className="card-title text-center">Contact Info / Portfolio</h4>
						<h6 className="card-text"><img className="icon-p" src="http://people.ischool.berkeley.edu/~derek/resources/GitHub-Mark.png"/> <a target="_blank" href="https://github.com/jtogiaso">jtogiaso@github.com </a></h6>
						<h6 className="card-text"><img className="icon-p" src="https://image.flaticon.com/icons/png/512/174/174857.png"/> <a target="_blank" href="https://www.linkedin.com/in/fiaalii-f-togiaso-24a579147/">Fiaalii F Togiaso </a></h6>
						<h6 className="card-text"><img className="icon-p" src="http://kiki.to/img/stackoverflow-favicon.svg"/> <a target="_blank" href="https://stackoverflow.com/users/8351976/kitiona49">kitiona49</a></h6>
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
	


    );
  }
}

export default AboutPage;
