import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from '../../actions/auth';
import { Helmet } from 'react-helmet';

const form = reduxForm({
  form: 'register',
  validate,
});

const renderField = field => (
  <div>
    <input className="form-control" {...field.input} />
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

class Register extends Component {
  handleFormSubmit(formProps) {
    this.props.registerUser(formProps);
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
        <div className="container">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            
            <Helmet>
              <title>{this.props.route.name}</title>
            </Helmet>
            <br/>
            <br/>
            <div className="card login-panel">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <label>Email</label>
                    <Field name="email" className="form-control" component={renderField} type="text" autoComplete="username" />
                    <div className="row">
                      <div className="col-md-12">
                        <label>Password</label>
                      </div>
                    </div>
                    <Field name="password" className="form-control" component="input" type="password" autoComplete="current-password" />
                    <br/>
                    <div className="errDiv text-danger" id="ide">
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {
        // <footer className="customFooter">
        //   <div className="container-fluid">
        //     © 2018 Copyright Explore It
        // </div>
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

export default connect(mapStateToProps, { registerUser })(form(Register));
