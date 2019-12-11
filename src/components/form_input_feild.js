import React from 'react';

const FormInputField = (props) => {
  // console.log("props", props); // props === field
  const { meta: {error, touched}, input, label} = props;
  const className = `form-group ${touched && error ? "has-danger" : ""}`;

  return (
    <div className={className}>
      <label>{label}</label>
      <input type="text" className="form-control" {...input} />
      <div className="text-help">
        {touched && error ? error : ""}
      </div>
    </div>
  );
};

export default FormInputField;
