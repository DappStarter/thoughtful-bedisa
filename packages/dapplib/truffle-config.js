require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad give clinic bottom treat'; 
let testAccounts = [
"0x746664369b1c240ac7b24b58b47ef6e1f177c793af7ced24e28e5e8729693f0e",
"0xb5dd6d775c41e6391a79746cd5afc54a67db890b0841daf8ac5e0136dc4f77d0",
"0x5fce0b82ec48c3967385b1505f23fc43be298bb5016b145d3de1e9c805a27bc8",
"0x50df19c6a1bb790e9c35a9e8069ee6c316cf1f3aea7eff2552bf0c0baa676998",
"0xaa89ab031315f9a10a9e665f35edb0951479256084861253437e5fe4a74b5c25",
"0x19213eb63b722746c81fddc10b4e71de3e53514de89eb0848b122d087410db8d",
"0x989042417a4aa01a04c00c79ad462bb5c649ad0a8ec568c9d1faafb56ad2ca2e",
"0x74f827fb4d078355f7a4426ef0c0ef9769456953b6334bfacdda41fd499b0c21",
"0x6aaecd9c05b21b61428cf89c0f6f76474ca96dbb69af3a20856fce0d3e7a1197",
"0x99f93caf16d029287fc2385059927d7e77d2cc1fc2d05b793b0766b6af299d7e"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
