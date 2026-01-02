```python
# UDT:Space:e5f6:110
# Σ sparse 3D with boundary detection
class Sigma(dict):
 def __init__(s,d=1000):s.d=d;s.boundary=set()
 def __getitem__(s,k):return super().__getitem__(str(k))if str(k)in s else 0
 def __setitem__(s,k,v):
  super().__setitem__(str(k),v)
  x,y,z=eval(str(k))if','in str(k)else(k,0,0)
  for dx,dy,dz in[(1,0,0),(-1,0,0),(0,1,0),(0,-1,0),(0,0,1),(0,0,-1)]:
   if f"{x+dx},{y+dy},{z+dz}"not in s:s.boundary.add(str(k));break
  else:s.boundary.discard(str(k))
```
