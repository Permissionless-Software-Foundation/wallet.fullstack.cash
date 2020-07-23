/*
  About
*/

import React from 'react'
import { Row, Col, Content, Box } from 'adminlte-2-react'

class About extends React.Component {
  render () {
    return (
      <Content
        title='About'
        subTitle=''
        browserTitle='About | wallet.fullstack.cash'
      >
        <Row>
          <Col xs={12}>
            <Box
              title='wallet.fullstack.cash'
              type='primary'
              closable
              collapsable
            >
              <p>
                This is the official web wallet provided by FullStack.cash. You
                can access this web wallet over Tor and IPFS. See the links in
                the footer at the bottom of the page.
              </p>
              <p>
                This wallet app is currently in an 'Open Alpha' test. The
                general public is invited to use it, but be aware that the app
                is in-progress, the code is in-flux, and many things will change
                or break. Please solicit feedback on this app in our{' '}
                <a
                  href='https://t.me/permissionless_software'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Telegram Channel
                </a>
              </p>
            </Box>
          </Col>
        </Row>
      </Content>
    )
  }
}

export default About
