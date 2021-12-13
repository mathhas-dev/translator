import React from 'react';
import { Rest } from 'application/rest';
import { observable, action } from 'mobx';
import i18n from "i18next";


const doGet = async (id) => {
  const rest = new Rest('translator');
  rest.api = 'access/api';
  const response = await rest.get(id);
  return await response.json();
}

const doPost = async (data) => {
  const rest = new Rest('translator');
  rest.api = 'access/api';
  const response = await rest.post(data);
  return await response.json();
}

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

const translatorStore = observable({
  _id: null,
  dados: {
    original_text: "",
    translated_text: "",
    translation_mode: ""
  },
  searching: false,
  loading: false,
  sending: false,
  message: null,
  error: null,
  reset: function () {
    this._id = null;
    this.dados = {
      original_text: "",
      translated_text: "",
      translation_mode: ""
    };
    this.message = null;
    this.error = null;
    this.sending = false;
    this.loading = false;
  },
  getError: function (field) {
    return this.error !== null && this.error.hasOwnProperty(field) ?
      parseError(this.error[field]) : null
  },
  set id(id) {
    this.reset();
    if (id) this._id = id
    const that = this;
    doGet(id).then(response => {
      that.dados = response;
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      that.loading = false;
    });
  },
  get id() {
    return this._id;
  },
  send: async function () {
    this.sending = true;

    try {
      let response;
      response = await doPost(this.dados);
      this.dados = response;
      this.error = null;
    } catch (error) {
      this.error = error;
      this.message = {
        content:
          i18n.t("Error translating!"),
        error: true,
      };
    } finally {
      this.sending = false;
    }
  },
}, {
  send: action,
  reset: action,
});

export { translatorStore };
