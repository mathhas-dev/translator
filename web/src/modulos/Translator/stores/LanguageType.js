import React from 'react';
import { Rest } from 'application/rest';
import { observable, action } from 'mobx';
import i18n from "i18next";

const doGet = async (endpoint) => {
  const rest = new Rest(`translator/${endpoint}`);
  rest.api = 'translator/api';
  const response = await rest.get();
  return await response.json();
}

const languages = observable({
  list: [],
  loading: false,
  message: null,
  reload: function () {
    const that = this;
    this.loading = true;
    doGet('get_languages').then(response => {
      that.list = response;
    }).catch(error => {
      console.log(error);
      this.message = {
        content:
          i18n.t("Error getting languages!"),
        error: true,
      };
    }).finally(() => {
      that.loading = false;
    });
  },
  getError: function (field) {
    return this.error !== null && this.error.hasOwnProperty(field) ?
      parseError(this.error[field]) : null
  },
}, {
  reload: action,
});

const parseError = (error) => {
  let content = error
  if (typeof content === 'object') {
    content = []
    for (let key in error) content.push(error.get(key))
  }
  content = Array.isArray(content) ?
    (<>{content.map((text, i) => <span key={i}>{text}<br /></span>)}</>) :
    String(content)
  return { content, pointing: 'above' };
}


export { languages };
