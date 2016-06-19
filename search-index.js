var searchIndex = {};
searchIndex["ethkey"] = {"doc":"","items":[[3,"Brain","ethkey","Simple brainwallet.",null,null],[3,"KeyPair","","secp256k1 key pair",null,null],[3,"Secret","","",null,null],[3,"Public","","",null,null],[3,"Address","","",null,null],[3,"Message","","",null,null],[3,"Prefix","","Tries to find keypair with address starting with given prefix.",null,null],[3,"Random","","Randomly generates new keypair.",null,null],[3,"Signature","","",null,null],[4,"Error","","Crypto error",null,null],[13,"InvalidSecret","","Invalid secret key",0,null],[13,"InvalidPublic","","Invalid public key",0,null],[13,"InvalidAddress","","Invalid address",0,null],[13,"InvalidSignature","","Invalid EC signature",0,null],[13,"InvalidMessage","","Invalid AES message",0,null],[13,"Io","","IO Error",0,null],[13,"Custom","","Custom",0,null],[5,"public_to_address","","",null,{"inputs":[{"name":"public"}],"output":{"name":"address"}}],[5,"sign","","",null,{"inputs":[{"name":"secret"},{"name":"message"}],"output":{"name":"result"}}],[5,"verify_public","","",null,{"inputs":[{"name":"public"},{"name":"signature"},{"name":"message"}],"output":{"name":"result"}}],[5,"verify_address","","",null,{"inputs":[{"name":"address"},{"name":"signature"},{"name":"message"}],"output":{"name":"result"}}],[5,"recover","","",null,{"inputs":[{"name":"signature"},{"name":"message"}],"output":{"name":"result"}}],[11,"new","","",1,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"generate","","",1,{"inputs":[{"name":"brain"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","","",2,{"inputs":[{"name":"keypair"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_secret","","Create a pair from secret key",2,{"inputs":[{"name":"secret"}],"output":{"name":"result"}}],[11,"from_keypair","","",2,{"inputs":[{"name":"secretkey"},{"name":"publickey"}],"output":{"name":"self"}}],[11,"secret","","",2,{"inputs":[{"name":"keypair"}],"output":{"name":"secret"}}],[11,"public","","",2,{"inputs":[{"name":"keypair"}],"output":{"name":"public"}}],[11,"address","","",2,{"inputs":[{"name":"keypair"}],"output":{"name":"address"}}],[11,"new","","",3,{"inputs":[{"name":"vec"},{"name":"usize"}],"output":{"name":"self"}}],[11,"generate","","",3,{"inputs":[{"name":"prefix"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"address"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"address"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",4,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"address"},{"name":"self"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",4,{"inputs":[{"name":"address"},{"name":"self"}],"output":{"name":"option"}}],[11,"cmp","","",4,{"inputs":[{"name":"address"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"clone","","",4,{"inputs":[{"name":"address"}],"output":{"name":"self"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"self"}}],[11,"from","","",4,null],[11,"into","","",4,null],[11,"hash","","",4,{"inputs":[{"name":"address"},{"name":"h"}],"output":null}],[11,"deref","","",4,{"inputs":[{"name":"address"}],"output":{"name":"target"}}],[11,"deref_mut","","",4,{"inputs":[{"name":"address"}],"output":{"name":"target"}}],[11,"fmt","","",5,{"inputs":[{"name":"secret"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"secret"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",5,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"secret"},{"name":"self"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",5,{"inputs":[{"name":"secret"},{"name":"self"}],"output":{"name":"option"}}],[11,"cmp","","",5,{"inputs":[{"name":"secret"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"clone","","",5,{"inputs":[{"name":"secret"}],"output":{"name":"self"}}],[11,"default","","",5,{"inputs":[],"output":{"name":"self"}}],[11,"from","","",5,null],[11,"into","","",5,null],[11,"hash","","",5,{"inputs":[{"name":"secret"},{"name":"h"}],"output":null}],[11,"deref","","",5,{"inputs":[{"name":"secret"}],"output":{"name":"target"}}],[11,"deref_mut","","",5,{"inputs":[{"name":"secret"}],"output":{"name":"target"}}],[11,"fmt","","",6,{"inputs":[{"name":"message"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",6,{"inputs":[{"name":"message"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",6,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"message"},{"name":"self"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",6,{"inputs":[{"name":"message"},{"name":"self"}],"output":{"name":"option"}}],[11,"cmp","","",6,{"inputs":[{"name":"message"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"clone","","",6,{"inputs":[{"name":"message"}],"output":{"name":"self"}}],[11,"default","","",6,{"inputs":[],"output":{"name":"self"}}],[11,"from","","",6,null],[11,"into","","",6,null],[11,"hash","","",6,{"inputs":[{"name":"message"},{"name":"h"}],"output":null}],[11,"deref","","",6,{"inputs":[{"name":"message"}],"output":{"name":"target"}}],[11,"deref_mut","","",6,{"inputs":[{"name":"message"}],"output":{"name":"target"}}],[11,"fmt","","",7,{"inputs":[{"name":"public"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"public"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",7,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"eq","","",7,{"inputs":[{"name":"public"},{"name":"self"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",7,{"inputs":[{"name":"public"},{"name":"self"}],"output":{"name":"option"}}],[11,"cmp","","",7,{"inputs":[{"name":"public"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"clone","","",7,{"inputs":[{"name":"public"}],"output":{"name":"self"}}],[11,"default","","",7,{"inputs":[],"output":{"name":"self"}}],[11,"from","","",7,null],[11,"into","","",7,null],[11,"hash","","",7,{"inputs":[{"name":"public"},{"name":"h"}],"output":null}],[11,"deref","","",7,{"inputs":[{"name":"public"}],"output":{"name":"target"}}],[11,"deref_mut","","",7,{"inputs":[{"name":"public"}],"output":{"name":"target"}}],[11,"generate","","",8,{"inputs":[{"name":"random"}],"output":{"name":"result"}}],[11,"r","","Get a slice into the &#39;r&#39; portion of the data.",9,null],[11,"s","","Get a slice into the &#39;s&#39; portion of the data.",9,null],[11,"v","","Get the recovery byte.",9,{"inputs":[{"name":"signature"}],"output":{"name":"u8"}}],[11,"eq","","",9,{"inputs":[{"name":"signature"},{"name":"self"}],"output":{"name":"bool"}}],[11,"fmt","","",9,{"inputs":[{"name":"signature"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"signature"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",9,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"default","","",9,{"inputs":[],"output":{"name":"self"}}],[11,"from","","",9,null],[11,"into","","",9,null],[11,"deref","","",9,{"inputs":[{"name":"signature"}],"output":{"name":"target"}}],[11,"deref_mut","","",9,{"inputs":[{"name":"signature"}],"output":{"name":"target"}}],[8,"Generator","","Generates new keypair.",null,null],[10,"generate","","Should be called to generate new keypair.",10,{"inputs":[{"name":"generator"}],"output":{"name":"result"}}],[11,"sign_schnorr","secp256k1","Create a Schnorr signature",11,{"inputs":[{"name":"secp256k1"},{"name":"message"},{"name":"secretkey"}],"output":{"name":"result"}}],[11,"verify_schnorr","","Verify a Schnorr signature",11,{"inputs":[{"name":"secp256k1"},{"name":"message"},{"name":"signature"},{"name":"publickey"}],"output":{"name":"result"}}],[11,"recover_schnorr","","Retrieves the public key for which `sig` is a valid signature for `msg`.\nRequires a verify-capable context.",11,{"inputs":[{"name":"secp256k1"},{"name":"message"},{"name":"signature"}],"output":{"name":"result"}}],[11,"new","","Creates a new Secp256k1 context",11,{"inputs":[],"output":{"name":"secp256k1"}}],[11,"with_caps","","Creates a new Secp256k1 context with the specified capabilities",11,{"inputs":[{"name":"contextflag"}],"output":{"name":"secp256k1"}}],[11,"without_caps","","Creates a new Secp256k1 context with no capabilities (just de/serialization)",11,{"inputs":[],"output":{"name":"secp256k1"}}],[11,"randomize","","(Re)randomizes the Secp256k1 context for cheap sidechannel resistence;\nsee comment in libsecp256k1 commit d2275795f by Gregory Maxwell",11,null],[11,"generate_keypair","","Generates a random keypair. Convenience function for `key::SecretKey::new`\nand `key::PublicKey::from_secret_key`; call those functions directly for\nbatch key generation. Requires a signing-capable context.",11,{"inputs":[{"name":"secp256k1"},{"name":"r"}],"output":{"name":"result"}}],[11,"sign","","Constructs a signature for `msg` using the secret key `sk` and RFC6979 nonce\nRequires a signing-capable context.",11,{"inputs":[{"name":"secp256k1"},{"name":"message"},{"name":"secretkey"}],"output":{"name":"result"}}],[11,"sign_recoverable","","Constructs a signature for `msg` using the secret key `sk` and RFC6979 nonce\nRequires a signing-capable context.",11,{"inputs":[{"name":"secp256k1"},{"name":"message"},{"name":"secretkey"}],"output":{"name":"result"}}],[11,"recover","","Determines the public key for which `sig` is a valid signature for\n`msg`. Requires a verify-capable context.",11,{"inputs":[{"name":"secp256k1"},{"name":"message"},{"name":"recoverablesignature"}],"output":{"name":"result"}}],[11,"verify","","Checks that `sig` is a valid ECDSA signature for `msg` using the public\nkey `pubkey`. Returns `Ok(true)` on success. Note that this function cannot\nbe used for Bitcoin consensus checking since there may exist signatures\nwhich OpenSSL would verify but not libsecp256k1, or vice-versa. Requires a\nverify-capable context.",11,{"inputs":[{"name":"secp256k1"},{"name":"message"},{"name":"signature"},{"name":"publickey"}],"output":{"name":"result"}}],[11,"drop","","",11,null],[11,"fmt","","",11,{"inputs":[{"name":"secp256k1"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",11,{"inputs":[{"name":"secp256k1"},{"name":"secp256k1"}],"output":{"name":"bool"}}],[11,"clone","","",11,{"inputs":[{"name":"secp256k1"}],"output":{"name":"secp256k1"}}]],"paths":[[4,"Error"],[3,"Brain"],[3,"KeyPair"],[3,"Prefix"],[3,"Address"],[3,"Secret"],[3,"Message"],[3,"Public"],[3,"Random"],[3,"Signature"],[8,"Generator"],[3,"Secp256k1"]]};
initSearch(searchIndex);