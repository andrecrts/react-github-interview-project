/* eslint-disable react/button-has-type */
import React from 'react';

const ButtonMlg = props => {
  const {
    htmlType,
    label,
    variant,
    size,
    widthB,
    icon,
    estilo,
    value,
    onClick
  } = props;

  const checkVariant = () => {
    switch (variant) {
      case 'yellow':
        return 'btn-mlg-yellow';
      case 'block':
        return 'btn-mlg-block';
      case 'blue':
        return 'btn-mlg-blue';
      case 'purple':
        return 'btn-mlg-purple';
      case 'red':
        return 'btn-mlg-red';
      case 'green':
        return 'btn-mlg-green';
      case 'blue-outline':
        return 'btn-mlg-blue-outline';
      case 'yellow-outline':
        return 'btn-mlg-yellow-outline';
      case 'transparent-white':
        return 'btn-mlg-transparent-white';
      default:
        return 'btn-mlg-yellow';
    }
  };
  const checkSize = () => {
    switch (size) {
      case 'big':
        return 'btn-mlg-big ';
      case 'small':
        return 'btn-mlg-small ';
      case 'mini':
        return 'btn-mlg-mini ';
      default:
        return '';
    }
  };
  const checkWidth = () => {
    let ancho = '125px';
    if (widthB && widthB !== 'block') {
      ancho = widthB;
    }
    if (widthB === 'block') {
      return {};
    }
    return { width: ancho };
  };
  if (htmlType === 'submit') {
    const newLocal = (
      <button
        type={variant === 'block' ? 'button' : 'submit'}
        style={checkWidth()}
        value={value}
        onClick={variant === 'block' ? null : onClick}
        className={estilo || 'btn-mlg ' + checkVariant() + ' ' + checkSize()}
      >
        {icon}
        {label}
      </button>
    );
    return newLocal;
  }
  return (
    <button
      type="button"
      style={checkWidth()}
      value={value}
      onClick={variant === 'block' ? null : onClick}
      className={estilo || 'btn-mlg ' + checkVariant() + ' ' + checkSize()}
    >
      {icon}
      {label}
    </button>
  );
};

export default ButtonMlg;
