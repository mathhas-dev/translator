import * as pages from './pages'
import Page404 from 'components/Page404.js'
import i18n from "i18next";


function Modulo() {
  this.name = 'translator'
  this.title = i18n.t("Translator")
  this.management = false
  this.routes = [
    {
      path: `/translator`,
      title: 'My Translator',
      public: true,
      hidden: true,
      component: pages.Translator
    },
    {
      path: `/`,
      title: '404',
      public: false,
      hidden: true,
      component: Page404
    }
  ]
}

export default new Modulo()
