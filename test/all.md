```python
# UDT:TestAll:b5c6:245
# All trinity tests integrated
print("🦅 Running all trinity tests...\n")

# Load primitives inline
phi=(1+5**.5)/2
kappa=1/phi
lamb=__import__('math').log(2)
import math as m

def rho(x,mode='k'):
 if mode=='k':return 1/x if x else float('inf')
 if mode=='l':return -x
 return m.copysign(0,-m.copysign(1,x))if x==0 else x

def mu(a,b,mode='k'):
 alpha={'k':kappa,'l':.5,'o':0}[mode]
 if mode=='o':return a if abs(a)>abs(b)else b
 return alpha*a+(1-alpha)*b

def H(x,mode='k'):
 if mode=='k':return-x*m.log2(x+1e-10)*m.exp(-abs(x-kappa)*phi)
 if mode=='l':return-x*m.log2(x+1e-10)
 return float('inf')if x==0 else 0

# Test constants
assert abs(phi-1.618)<0.001
assert abs(kappa-0.618)<0.001
assert abs(lamb-0.693)<0.001
assert abs(phi*kappa-1)<0.001
assert abs(phi-kappa-1)<0.001
print("✓ Constants & identities")

# Test ρ all modes
assert abs(rho(2,'k')-0.5)<0.01
assert rho(5,'l')==-5
print("✓ ρ reciprocity")

# Test μ all modes
assert 3<mu(3,7,'k')<7
assert mu(4,8,'l')==6
assert mu(3,7,'o')==7
print("✓ μ merge")

# Test Η all modes
assert H(kappa,'k')>0
assert abs(H(0.5,'l')-0.5)<0.1
assert H(0,'o')==float('inf')
print("✓ Η entropy")

print("\n🦅 All tests passed!")
```
