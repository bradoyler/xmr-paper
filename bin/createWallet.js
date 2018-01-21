#!/usr/bin/env node

const walletUtils = require('../src/lib/mymonero-core-js/monero_utils/monero_wallet_utils')
const wallet = walletUtils.NewlyCreatedWallet('english')
console.log('## Wallet address:', wallet.keys.public_addr)
console.log('## Mnemonic seed:', wallet.mnemonicString)
