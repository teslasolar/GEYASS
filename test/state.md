```python
# UDT:TestState:x9y0:195
# Test Ψ state with κλ○ merge
import sys;sys.path.insert(0,'..')

def test_state_basic():
 from core.state import Psi
 s=Psi('test')
 s['x']=10
 s['y']=20
 assert s['x']==10
 assert s['y']==20
 assert s['z']is None
 print("✓ state basic")

def test_state_merge_kappa():
 from core.state import Psi
 s1=Psi('a');s1.m='k'
 s2=Psi('b');s2.m='k'
 s1['x']=3;s2['x']=7
 s1['y']=5;s2['z']=9
 s1=s1+s2
 assert 3<s1['x']<7  # golden blend
 assert s1['y']==5
 assert s1['z']==9
 print("✓ state κ merge")

def test_state_merge_lambda():
 from core.state import Psi
 s1=Psi('a');s1.m='l'
 s2=Psi('b');s2.m='l'
 s1['x']=4;s2['x']=8
 s1=s1+s2
 assert abs(s1['x']-6)<0.5  # half blend
 print("✓ state λ merge")

def test_state_merge_boundary():
 from core.state import Psi
 s1=Psi('a');s1.m='o'
 s2=Psi('b');s2.m='o'
 s1['x']=3;s2['x']=7
 s1=s1+s2
 assert s1['x']==7  # boundary winner
 print("✓ state ○ merge")

if __name__=='__main__':
 test_state_basic()
 test_state_merge_kappa()
 test_state_merge_lambda()
 test_state_merge_boundary()
 print("🦅 State tests passed")
```
