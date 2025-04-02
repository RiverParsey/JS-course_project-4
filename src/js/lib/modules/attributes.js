import $ from '../core';

$.prototype.setAtt = function(attributeName, value) {
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attributeName, value);
  }

  return this;
};

$.prototype.removeAtt = function(attributeName, value) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attributeName, value);
  }

  return this;
};