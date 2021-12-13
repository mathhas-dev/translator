import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import logoImage from 'assets/logo.png'
import './StaticPage.css'

const EmptyPanel = props => {
  return (
    <div className='empty-panel empty-panel--horizontal'>
      <Image
        className='empty-panel__logo'
        src={logoImage}
        size='massive'
      />
      <Header
        className='empty-panel__title'
        as='h1'
        inverted
        size='medium'
        textAlign='center'
      >
        My Translator
      </Header>
      <Header sub inverted
        textAlign='center'
        color='grey'
        style={{ marginTop: -8 }}
      >
        Version {process.env.REACT_APP_VERSION}
      </Header>
    </div>
  )
}

const StaticPage = props => {
  const { showLeftPanel, showRightPanel } = props
  return (
    <div className='empty-page'>
      { showLeftPanel ? <EmptyPanel /> : null }
      { props.children }
      { showRightPanel ? <EmptyPanel /> : null }
    </div>
  )
}

export default StaticPage