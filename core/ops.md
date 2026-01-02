```python
# UDT:Operations:a1b2:180
# ρμΗ trinity operations
from math import copysign,log2,exp
def rho(x,m='k'):
 if m=='k':return 1/x if x else float('inf')*(1 if x>=0 else-1)
 if m=='l':return-x
 return copysign(0,-copysign(1,x))if x==0 else x
def mu(a,b,m='k'):
 from const import kappa as k
 alpha={'k':k,'l':.5,'o':0}[m]
 if a is None:return b
 if b is None:return a
 if m=='o':return a if abs(a)>abs(b)else b
 return alpha*a+(1-alpha)*b
def H(x,m='k'):
 from const import kappa as k,phi as p
 if m=='k':return-x*log2(x+1e-10)*exp(-abs(x-k)*p)
 if m=='l':return-x*log2(x+1e-10)
 return float('inf')if x==0 else 0
```
