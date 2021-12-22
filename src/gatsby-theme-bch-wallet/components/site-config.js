/*
  This file is intended to be overwritten. It provides a common place to store
  site configuration data.
*/

const config = {
  title: 'FullStack.cash',
  titleShort: 'PSF',
  balanceText: 'BCH Balance',
  balanceIcon: 'fab-bitcoin',

  // The BCH address used in a memo.cash account. Used for tracking the IPFS
  // hash of the mirror of this site.
  memoAddr: 'bitcoincash:qq8mk8etntclfdkny2aknh4ylc0uaewalszh5eytnr',

  // Footer Information
  hostText: 'FullStack.cash',
  hostUrl: 'https://fullstack.cash/',
  sourceCode: 'https://github.com/Permissionless-Software-Foundation/wallet.fullstack.cash',
  torUrl: '6akyufxp2fiyqk5526kwxvas63xo5kag657jlztnaqnemjctkfp2xhid.onion',
  clearWebUrl: 'https://wallet.fullstack.cash'
}

module.exports = config
