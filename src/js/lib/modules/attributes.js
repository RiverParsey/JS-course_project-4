import $ from '../core';

$.prototype.getAtt = function(attributeName) {
  if (this.length > 0) {
    return this[0].getAttribute(attributeName);
  }
  
  return null;
}

$.prototype.getAllAtt = function(attributeName) {
  let result = {};
  for (let i = 0; i < this.length; i++) {
    result[i] = this[i].getAttribute(attributeName);
  }

  return result;
}

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