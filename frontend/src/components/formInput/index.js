import React from 'react';
import PropTypes from 'prop-types';
import './form-input.scss'

const FormInput = ({
  name,
  type,
  placeholder,
  className,
  value,
  error,
  children,
  label,
  searchActive,
  onChange,
  autoComplete,
  ...props
}) => {
  
  return (
    <React.Fragment>
      <label style={{ fontSize: '12px'}}htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        label={label}
        onChange={onChange}
        style={error && {border: 'solid 1px red'}}
        autoComplete={autoComplete}
        {...props}
      />
      { error && <p>{ error }</p>}
    </React.Fragment>
  )
}

FormInput.defaultProps = {
  type: "text",
  className: ""
}

FormInput.propTypes = {
  // name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  className: PropTypes.string,
  value: PropTypes.any,
  // onChange: PropTypes.func.isRequired
}

export default FormInput;