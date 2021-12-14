import React from 'react';
import { Rest } from 'application/rest';
import { observable, action } from 'mobx';
import i18n from "i18next";

const doPost = async (data, endpoint) => {
  const rest = new Rest(`translator/${endpoint}`);
  rest.api = 'translator/api';
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
  dados: {
    text: "",
    base_language: "",
    target_language: "",
    translated_text: ""
  },
  loading: false,
  sending: false,
  message: null,
  error: null,
  reset: function () {
    this._id = null;
    this.dados = {
      text: "",
      base_language: "",
      target_language: "",
      translated_text: ""
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
  translate: async function () {
    this.sending = true;
    try {
      let response;
      response = await doPost(this.dados, 'do_translation');
      this.dados.translated_text = response.translations[0].translation;
      this.error = null;
      this.message = null;
    } catch (error) {
      this.error = error;
      this.message = {
        content:
          i18n.t("Sorry, we don't have translations for these languages yet..."),
        error: true,
      };
    } finally {
      this.sending = false;
    }
  },
}, {
  translate: action,
  reset: action,
});

export { translatorStore };
