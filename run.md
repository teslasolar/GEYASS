```python
#!/usr/bin/env python3
# UDT:Runner:r1s2:195
import sys,re,os
from pathlib import Path
def extract(md):
 blocks=re.findall(r'```(\w+)\n(.*?)```',md,re.DOTALL)
 return[(lang,code)for lang,code in blocks if lang in['python','javascript','c','asm']]
def run_py(code):
 env={'__name__':'__main__'}
 exec(code,env)
 return env
def run_js(code):
 import subprocess as sp
 return sp.run(['node','-e',code],capture_output=True,text=True)
def load_module(path):
 md=Path(path).read_text()
 blocks=extract(md)
 for lang,code in blocks:
  if lang=='python':return run_py(code)
 return None
if __name__=='__main__':
 if len(sys.argv)<2:print("Usage: python run.md <file.md> [args]");sys.exit(1)
 target=sys.argv[1]
 load_module(target)
```

Run with: `python run.md core/const.md`
