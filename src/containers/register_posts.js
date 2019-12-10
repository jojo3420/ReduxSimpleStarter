import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
// redux connect 함수의 역할과 비슷하다.
// 리액트와 리덕스 폼을 맵핑 한다.
import { reduxForm, Field } from 'redux-form';
import { connect } from "react-redux";

import { createNewPost } from '../actions/index'


class RegisterPost extends Component {

  // 어플리케이션의 모든 컴포넌트들을 context 프로퍼티를 통해 접근 할 수 있고
  // 리액트 라우터를 접근하기 위해  static contextTypes 객체를 생성했다.
  static contextTypes = {
    router: PropTypes.object
  };


  renderInputField(field) {
    // debugger
    // user가 엘리먼트에 touched 했을 경우 touched 프로퍼티 true 로 변경됨!
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderTextAreaField(field) {
    // debugger
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea className="form-control" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // console.log('onSubmit() values:', values);
    // debugger; // this object is RegisterPost 
    this.props.createNewPost(values, () => {
      console.log('add post success!');
       // this.props.history.push("/");

      // blog post has been created, navigate the user to the index
      // we navigate by calling this.context.router.push with the
      // new path to navigate to.
      this.context.router.push("/");


    });

  }
  render() {
    // redux-form 에게 핸들 함수 전달 받아 폼 제출할때 핸들링 함수로 사용함
    // 구성 오브젝트를 통해 필드 관리 => title, categories, content
    const { handleSubmit } = this.props;

    return (
      /* 유저가 리덕스-폼 에게 제출을 시도 : redux-form validate this fields
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Create A New Post</h3>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title} />
          </div>
          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      */
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderInputField}
        />

        <Field
          label="Categories"
          name="categories"
          component={this.renderInputField}
        />

        <Field
          label="Post Content"
          name="content"
          component={this.renderTextAreaField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );


  }
}

function validate(values) {
  // console.log('validate() values', values);
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

// redux-form is connect(glue) react & redux-form
//  컴포넌트의 props 에 주입
//  redux-form helper 라고 부름.
export default reduxForm({
  validate,
  form: 'PostNewForm',
})(connect(null, { createNewPost })(RegisterPost));
