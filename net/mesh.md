```python
# UDT:Mesh:h1i2:145
# 🌐 P2P websocket mesh
import websockets as ws,asyncio as a,json as j,time as t
class Mesh:
 def __init__(s,boot=['wss://r1.gey.dev']):
  from crypto import Crypto
  s.c=Crypto();s.id=s.c.id;s.peers={};s.rooms={};s.boot=boot
 async def __aenter__(s):
  s.peers={addr:await ws.connect(addr)for addr in s.boot}
  return s
 async def send(s,topic,msg):
  d={'m':msg,'s':s.c(j.dumps(msg).encode()).hex(),'t':t.time()}
  await a.gather(*[p.send(j.dumps({'topic':topic,'d':d}))for p in s.peers.values()])
 async def room(s,rid):
  from state import Psi
  if rid not in s.rooms:s.rooms[rid]=Psi(s.id)
  return s.rooms[rid]
```
