import React, { useEffect } from 'react'
import Page from 'pageTemplates/Comum'
import { Header, Icon, Message } from 'semantic-ui-react'
import CardButton from 'components/CardButton'

import { useTranslation } from "react-i18next";
import "../../../locales/i18n";
import SelectLanguage from '../../../locales/component'
import { userStore } from 'stores';
import { observer } from 'mobx-react';

const SuperTitle = props => {
  const { layout, title } = props

  const desktop = layout === 'desktop'
  const tablet = layout === 'tablet'

  const wrapperStyle = {
    marginBottom: desktop ? '2em' : '1em',
    marginTop: desktop ? '8em' : tablet ? '3em' : '1em',
  }

  const titleStyle = {
    fontWeight: 300,
    fontHeight: desktop ? '4rem' : tablet ? '3rem' : '2rem'
  }

  return (
    <div
      style={wrapperStyle}
    >
      <Header
        as='h1'
        style={titleStyle}
      >{title}</Header>
    </div>
  )
}

const CustomIcons = [
  'icon_1',
  'icon_2',
  'icon_3',
].reduce((acc, cur) => {
  return ({
    ...acc,
    [cur]: <img alt='' src={`${process.env.PUBLIC_URL}/icons/${cur}.svg`} />
  })
}, {})

const ManagerIcons = () => {
  const { t } = useTranslation();

  return (
    <CardButton.Grid>
      <CardButton
        id='HomePage_Users'
        title={t("Users")}
        icon={<Icon name='users' size='big' />}
        subtitle={t("Management of users")}
        iconScale={1.1}
        to='/user'
      />
      <CardButton
        title={t("Place Holder")}
        subtitle={t("Place Holder")}
        icon={<Icon name='student' size='huge' />}
        iconScale={0.9}
        to='#'
      />
      <CardButton
        title={t("Place Holder")}
        subtitle={t("Place Holder")}
        icon={<Icon name='list ol' size='big' />}
        to='#'
      />
      <CardButton
        title={t("Place Holder")}
        subtitle={t("Place Holder")}
        icon={<Icon name='list ol' size='big' />}
        to='#'
      />
      <CardButton
        title={t("Place Holder")}
        subtitle={t("Place Holder")}
        icon={<Icon name='calendar check outline' size='huge' />}
        iconScale={0.9}
        to='#'
      />
    </CardButton.Grid>
  )
}

const AdminUserIcons = () => {
  const { t } = useTranslation();

  return (
    <CardButton.Grid>
      <CardButton
        title={t("Place Holder")}
        subtitle={t("Place Holder")}
        icon={<Icon name='student' size='huge' />}
        iconScale={0.9}
        to='#'
      />
      <CardButton
        title={t("Place Holder")}
        subtitle={t("Place Holder")}
        icon={CustomIcons.icon_2}
        to='#'
      />
      <CardButton
        title={t("Place Holder")}
        subtitle={t("Place Holder")}
        icon={<Icon name='calendar check outline' size='huge' />}
        iconScale={0.9}
        to='#'
      />
    </CardButton.Grid>
  )
}

const UserIcons = () => {
  const { t } = useTranslation();

  return (
    <CardButton.Grid>
      <CardButton
        title={t("Place Holder")}
        subtitle={t("Place Holder")}
        icon={CustomIcons.icon_1}
        to='#'
      />
      <CardButton
        title={t("Place Holder")}
        subtitle={t("Place Holder")}
        icon={<Icon name='th' size='huge' />}
        iconScale={0.9}
        to='#'
      />
    </CardButton.Grid>
  )
}

const HomePage = observer(props => {
  const { t } = useTranslation();

  useEffect(() => {
    userStore.get_401_or_403();
  }, [])

  const dismissMessage = () => {
    userStore.message = null;
    userStore.remove_401_or_403();
  }

  return (
    <Page suppressBreadcrumb>
      <SelectLanguage />

      <Message
        hidden={userStore.message === null}
        onDismiss={dismissMessage}
        {...userStore.message}
      />

      <SuperTitle title={t("Select the desired option")} />

      {
        userStore.profile.profile === process.env.REACT_APP_MANAGEMENT_PROFILE || userStore.profile.profile === process.env.REACT_APP_ADMIN_PROFILE
          ?
          <ManagerIcons />
          :
          userStore.profile.profile === process.env.REACT_APP_USER_PROFILE
            ?
            <UserIcons />
            :
            <AdminUserIcons />
      }

    </Page>
  )
})

export default HomePage