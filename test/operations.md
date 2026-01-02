```python
# UDT:TestOperations:w7x8:240
# Test all trinity operations across modes
import sys;sys.path.insert(0,'..')

def test_rho_modes():
 from core.ops import rho
 # κ mode (multiplicative)
 assert abs(rho(2,'k')-0.5)<0.01
 assert abs(rho(0.5,'k')-2)<0.01
 # λ mode (additive)
 assert rho(5,'l')==-5
 assert rho(-3,'l')==3
 # ○ mode (sign flip)
 import math
 z=rho(0,'o')
 assert math.copysign(1,z)==-1
 print("✓ ρ all modes")

def test_mu_modes():
 from core.ops import mu
 # κ mode (golden)
 r=mu(0,10,'k')
 assert 3<r<7
 # λ mode (half)
 assert mu(4,8,'l')==6
 # ○ mode (winner)
 assert mu(3,7,'o')==7
 assert mu(-5,2,'o')==-5
 print("✓ μ all modes")

def test_H_modes():
 from core.ops import H
 from core.const import kappa
 # κ mode peaks at golden
 hk=H(kappa,'k')
 assert hk>H(0.5,'k')
 # λ mode shannon
 hl=H(0.5,'l')
 assert abs(hl-0.5)<0.1
 # ○ mode spike
 ho=H(0,'o')
 assert ho==float('inf')
 print("✓ Η all modes")

if __name__=='__main__':
 test_rho_modes()
 test_mu_modes()
 test_H_modes()
 print("🦅 All operation modes tested")
```
