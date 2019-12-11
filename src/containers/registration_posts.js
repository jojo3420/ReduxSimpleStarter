import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";
import PropTypes from 'prop-types';

import FormInputField  from "../components/form_input_feild"
import FormTextareaField  from "../components/form_textarea_filed";
import { registrationPosts } from '../actions/index';



class RegistrationPosts extends Component {

  // static context = {
  //   router: PropTypes.object
  // };


  onSubmitPosts(values) {
    // console.log(values);
    this.props.register(values);
  }


  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmitPosts.bind(this))}>
        <Link className="btn btn-warning" to="/">back</Link>
        <h3>Registration A New Posts</h3>
        <Field name="title" label="Title for Posts" component={FormInputField}/>
        <Field name="categories" label="Categories for Posts" component={FormInputField}/>
        <Field name="content" label="Content for Posts" component={FormTextareaField}/>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}



function validate(values) {
  const error = {};

  if (!values.title) {
    error.title = "type a title";
  }
  if (!values.categories) {
    error.categories = "type a categories";
  }
  if (!values.content) {
    error.content = "type a content";
  }
  return error;
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    register: registrationPosts
  }, dispatch);
}

// export default RegistrationPosts;
export default reduxForm({
  validate,
  form: "RegistrationPostsForm",
})(connect(null, mapDispatchToProps)(RegistrationPosts));
