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
              This is the official web wallet provided by FullStack.cash.
            </Box>
          </Col>
        </Row>
      </Content>
    )
  }
}

export default About
