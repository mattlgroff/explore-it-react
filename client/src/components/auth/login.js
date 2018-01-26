import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../../actions/auth';
import { Helmet } from 'react-helmet';

const form = reduxForm({
  form: 'login',
});

class Login extends Component {
  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
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
                  The email or password you have entered is incorrect.
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
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
