import React from 'react';


const FormTextareaField = (props) => {

  const { meta: {error, touched}, input, label} = props;
  const className = `form-group ${touched && error ? "has-danger" : ""}`;

  return (
    <div className={className}>
      <label>{label}</label>
      <textarea  className="form-control" {...input} />
      <div className="text-help">
        {touched && error ? error : ""}
      </div>
    </div>
  );
};

export default FormTextareaField;
