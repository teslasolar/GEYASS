```python
# UDT:Crypto:g9h0:85
# 🔐 Ed25519 signing
import nacl.signing as ns
import hashlib as h
import base58 as b58
class Crypto:
 def __init__(s):
  s.sk=ns.SigningKey.generate()
  s.id=b58.b58encode(h.sha256(s.sk.verify_key.encode()).digest()[:20]).decode()
 def __call__(s,m):return s.sk.sign(m).signature
```
