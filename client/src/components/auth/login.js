import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../../actions/auth';
import { Helmet } from 'react-helmet';
import { ClipLoader } from 'react-spinners';

const form = reduxForm({
  form: 'login',
});

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  changeState(){
    if (!this.state.loading) {
      this.setState({loading: true})
    }
  }

  handleFormSubmit(formProps) {
    this.props.loginUser(formProps , this);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Helmet>
          <title>{this.props.route.name}</title>
        </Helmet>
        <br/>
        <br/>
        <div className="container">
          <div className="card login-panel">
            <div className="card-body">
              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div>
                  <label>Email</label>
                  <Field name="email" className="form-control" component="input" type="text" autoComplete="username" />
                </div>
                <div>
                  <label>Password</label>
                  <Field name="password" className="form-control" component="input" type="password" autoComplete="current-password" />
                </div>
                <br/>
                <div className="errDiv text-danger" id="ide">
                </div>
                <br/>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button type="submit" className="btn btn-primary" onClick={this.changeState.bind(this)}>Login</button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className='sweet-loading'>
                      <ClipLoader
                        color={'#123abc'} 
                        loading={this.state.loading} 
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {
      //   <footer className="customFooter">
      //     <div className="container-fluid">
      //       © 2018 Copyright Explore It
      //   </div>
      // </footer>
    }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));
