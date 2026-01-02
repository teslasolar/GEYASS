```python
# UDT:Cache:f7g8:75
# $ memoization with λ-decay
from time import time
class Cache(dict):
 def __init__(s):super().__init__();s.t={}
 def __call__(s,k,f):
  from const import lamb as l
  now=time()
  if k in s and now-s.t[k]<1/l:return s[k]
  s[k]=f();s.t[k]=now
  return s[k]
```
