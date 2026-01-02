```python
# UDT:Vendor:q9r0:145
import xml.etree.ElementTree as ET
class Vendor:
 V={'ab':'.L5X','siemens':'.zap16','codesys':'.xml','beckhoff':'.tsproj','omron':'.cxp'}
 def __init__(s):s.types={}
 def load(s,path):
  tree=ET.parse(path)
  s.types.update({
   t.get('Name'):[(m.get('Name'),m.get('DataType'))
    for m in t.findall('.//Member')]
   for t in tree.findall('.//DataType')
  })
  return s
 def save(s,vendor):
  root=ET.Element('R')
  for name,fields in s.types.items():
   dt=ET.SubElement(root,'DataType',Name=name)
   for f in fields:ET.SubElement(dt,'Member',Name=f[0],DataType=f[1])
  return ET.tostring(root)
```
