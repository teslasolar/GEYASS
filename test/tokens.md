```python
# UDT:TestTokens:u3v4:145
import re,sys
from pathlib import Path
def count_tokens(text):
 code=re.findall(r'```\w+\n(.*?)```',text,re.DOTALL)
 if not code:return 0
 tokens=re.findall(r'\w+|[^\w\s]',code[0])
 return len(tokens)
def test_all():
 root=Path('..')
 fails=[]
 for md in root.rglob('*.md'):
  if md.name=='PLAN.md':continue
  text=md.read_text()
  tok=count_tokens(text)
  status='✓'if tok<250 else'✗'
  print(f"{status} {str(md):40} {tok:3} tokens")
  if tok>=250:fails.append((md,tok))
 if fails:
  print(f"\n✗ {len(fails)} files over limit")
  sys.exit(1)
 print("\n🦅 All files under 250 tokens")
if __name__=='__main__':test_all()
```
