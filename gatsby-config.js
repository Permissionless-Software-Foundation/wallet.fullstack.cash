/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-theme-bch-wallet',
    // 'bch-wallet-plugin-postoffice',
    // {
    //   resolve: 'gatsby-plugin-compile-es6-packages',
    //   options: {
    //     modules: ['bch-wallet-plugin-postoffice']
    //   }
    // },
    // require.resolve('/home/trout/work/psf/gatsby-plugin-bch-sweep')
    'gatsby-plugin-bch-sweep'
  ],
  // https://www.gatsbyjs.com/docs/reference/release-notes/v2.28/#feature-flags-in-gatsby-configjs
  flags: {
    DEV_SSR: false
  }
}
