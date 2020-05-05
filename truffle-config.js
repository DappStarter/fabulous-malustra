require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember promote hockey process tackle tornado'; 
let testAccounts = [
"0x53821c97ad2b32760560210cf270233458da86025717fcb2e7d9aa72f7c57ebb",
"0x578df84bb41d2ae93e005206c11bd21b3d83c4069417bb9730c74caa9c31bf19",
"0x2ee1a9825499fecb692f0d5c33d5e14409afdd463093e2b5bcec087e37b6dbf5",
"0x52cc7a488ef9f55597f7ed7535d64133149da6b9de547598059c3ffceced848c",
"0xd55e7efcb6e77ae59b5582fc459ad0b2ffcdd359f16e1bc0ed728a093f1d7f66",
"0xfb50ee2f455f1776aef0b6ac3f3e2be89d16e324bbe2a905f94e7406c2642547",
"0x6ee51df2016d084696afc4c6b8459bd994575d5d99b529d7c50b191a4d779d7b",
"0x246d8788f3684d58a4f89ee50eca65c3d4e042a6349065006c16086c098172d0",
"0x6dd1185dc1a3547c909a1a4842290ca2ae434dbd4f65fb04a5150700159fadcc",
"0xa95c7a07f8c7b19bbebb5186e3e0a151c5804d53c9cbbb95d69c7188d12dfbb1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
