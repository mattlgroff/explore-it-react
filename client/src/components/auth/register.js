import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from '../../actions/auth';
import { Helmet } from 'react-helmet';
import { ClipLoader } from 'react-spinners';

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
    this.props.registerUser(formProps , this);
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
        <div className="container">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <button type="submit" className="btn btn-primary" onClick={this.changeState.bind(this)}>Register</button>
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
