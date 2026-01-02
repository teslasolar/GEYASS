```python
# UDT:Parse:p7q8:135
import re
class UDT:
 def __init__(s):s.types={}
 def parse(s,text):
  for m in re.findall(r'UDT:(\w+):(\w+):(\d+)\n─+\n((?:[^\n]+\n)*)',text):
   name,uuid,tokens,fields=m
   s.types[name]={
    'name':name,'uuid':uuid,'tokens':int(tokens),
    'fields':[(l.split(':')[0].strip(),l.split(':')[1].strip())
     for l in fields.split('\n')if':'in l]
   }
  return s
 def gen(s,lang='py'):
  if lang=='py':
   return'\n'.join(f"class {t['name']}:\n"+'\n'.join(
    f" {f[0]}:{f[1]}=None"for f in t['fields'])for t in s.types.values())
  return''
```
