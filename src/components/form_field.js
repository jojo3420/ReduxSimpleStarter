import React from 'react';

export const InputFormField = (props) => {
  // debugger
  // user가 엘리먼트에 touched 했을 경우 touched 프로퍼티 true 로 변경됨!
  const {meta: {touched, error}, input, label} = props;
  const className = `form-group ${touched && error ? "has-danger" : ""}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input className="form-control" { ...input } />
      <div className="text-help">
        {touched ? error : ""}
      </div>
    </div>
  );
};


export const TextareaFormField = (props) => {
  // debugger
  // user가 엘리먼트에 touched 했을 경우 touched 프로퍼티 true 로 변경됨!
  const {meta: {touched, error}, input, label} = props;
  const className = `form-group ${touched && error ? "has-danger" : ""}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <textarea className="form-control" { ...input } />
      <div className="text-help">
        {touched ? error : ""}
      </div>
    </div>
  );
};

