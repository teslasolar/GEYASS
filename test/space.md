```python
# UDT:TestSpace:z1a2:180
# Test Σ sparse 3D with boundaries
import sys;sys.path.insert(0,'..')

def test_space_basic():
 from core.space import Sigma
 s=Sigma()
 s['0,0,0']=1
 s['1,0,0']=2
 assert s['0,0,0']==1
 assert s['1,0,0']==2
 assert s['5,5,5']==0
 print("✓ space basic")

def test_space_boundary():
 from core.space import Sigma
 s=Sigma()
 s['0,0,0']=1
 # First cell is at boundary (no neighbors)
 assert '0,0,0' in s.boundary
 # Add neighbor
 s['1,0,0']=2
 # Both at boundary still (edge cells)
 assert len(s.boundary)>0
 print("✓ space boundary")

def test_space_3d():
 from core.space import Sigma
 s=Sigma()
 s['5,3,7']=42
 s['-2,8,1']=99
 assert s['5,3,7']==42
 assert s['-2,8,1']==99
 print("✓ space 3D")

def test_space_sparse():
 from core.space import Sigma
 s=Sigma()
 for i in range(100):
  s[f'{i},0,0']=i
 assert len(s)==100
 assert s['50,0,0']==50
 print("✓ space sparse")

if __name__=='__main__':
 test_space_basic()
 test_space_boundary()
 test_space_3d()
 test_space_sparse()
 print("🦅 Space tests passed")
```
