/*
  This file is how you add new menu items to your site. It uses the Gatsby
  concept of Component Shadowing:
  https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/

  It over-rides he default file in the gatsby-ipfs-web-wallet Theme.
*/

import React from 'react'
import { Sidebar } from 'adminlte-2-react'
import About from '../../about'
import Sweep from 'gatsby-plugin-bch-sweep/src/components/sweep'

const { Item } = Sidebar

const MenuComponents = [
  {
    key: 'Sweep',
    // component: <><p>test</p></>,
    component: <Sweep key='Sweep' />,
    menuItem: <Item icon='fas-cog' key='Sweep' text='Sweep' />
  },
  {
    key: 'About',
    component: <About />,
    menuItem: <Item icon='fas-cog' key='About' text='About' />
  }
]

export default MenuComponents
