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
                This is the official web wallet provided by{' '}
                <a
                  href='https://fullstack.cash'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  FullStack.cash
                </a>
                . You can access this web wallet over Tor and IPFS. See the
                links in the footer at the bottom of the page.
              </p>

              <p>
                This wallet app can be used as a normal wallet, but it's real
                purpose is to serve as 'boilerplate' application that JavaScript
                developers can fork and customize to build their own ideas.
                Learn more about the code and infrastructure powering this
                wallet at{' '}
                <a
                  href='https://fullstack.cash'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  FullStack.cash
                </a>{' '}
                Please solicit feedback on this app in our{' '}
                <a
                  href='https://t.me/bch_js_toolkit'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Telegram Channel
                </a>
              </p>

              <p>
                The code for this web wallet can be found{' '}
                <a
                  href='https://github.com/Permissionless-Software-Foundation/wallet.fullstack.cash'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  on GitHub
                </a>
                . It's based on the{' '}
                <a
                  href='https://github.com/Permissionless-Software-Foundation/bch-wallet-starter'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  bch-wallet-starter Gatsby Starter
                </a>
                , the{' '}
                <a
                  href='https://github.com/Permissionless-Software-Foundation/gatsby-ipfs-web-wallet'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  gatsby-ipfs-web-wallet Gatsby Theme
                </a>
                , and the{' '}
                <a
                  href='https://github.com/Permissionless-Software-Foundation/minimal-slp-wallet'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  minimal-slp-wallet
                </a>{' '}
                wallet engine. We encourage other businesses to copy and modify
                the wallet code for their own use.
              </p>
              <p>
                This wallet has full support for Bitcoin Cash (BCH) and eCash
                (BCHA) blockchains. That includes SLP tokens, including
                nonfungible tokens (NFT) on both blockchains. When a transaction
                is made with this wallet, an output of 2000 satoshis is added.
                This is a convenience fee that goes towards burning PSF tokens.
                It helps support the developers who work on this web wallet and
                other software sponsored by the{' '}
                <a
                  href='https://psfoundation.cash'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Permissionless Software Foundation
                </a>
                .
              </p>
            </Box>
          </Col>
        </Row>
      </Content>
    )
  }
}

export default About
