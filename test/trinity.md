```python
# UDT:TestTrinity:t1u2:180
import sys;sys.path.insert(0,'..')
def test_constants():
 from core.const import phi,kappa,lamb,void
 assert abs(phi-1.618)<0.001
 assert abs(kappa-0.618)<0.001
 assert abs(lamb-0.693)<0.001
 assert void==-0.0
 print("✓ constants")
def test_reciprocity():
 from core.ops import rho
 assert abs(rho(2,'k')-0.5)<0.01
 assert rho(5,'l')==-5
 print("✓ reciprocity")
def test_merge():
 from core.ops import mu
 r=mu(3,7,'k')
 assert 3<r<7
 print("✓ merge")
def test_entropy():
 from core.ops import H
 from core.const import kappa
 h=H(kappa,'k')
 assert h>0
 print("✓ entropy")
if __name__=='__main__':
 test_constants()
 test_reciprocity()
 test_merge()
 test_entropy()
 print("🦅 Trinity tests passed")
```
