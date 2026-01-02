```python
# UDT:Sync:i3j4:95
# κλ○ consensus algorithm
class Sync:
 def __init__(s,mode='k'):s.m=mode;s.peers={}
 def merge(s,states):
  from ops import mu
  result=None
  for st in states.values():
   result=st if result is None else mu(result,st,s.m)
  return result
 def vote(s,proposals):
  from ops import H
  return max(proposals,key=lambda p:H(p,s.m))
```
