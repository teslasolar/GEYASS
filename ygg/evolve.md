```javascript
// UDT:Evolve:l9m0:125
import {kappa as k} from '../core/const.md'
export function gradient(trees){
 const fit=trees.map(t=>t.H()*t.fruit.reduce((s,f)=>s+f.quality,0)*Math.log(1+t.age))
 const avg=fit.reduce((a,b)=>a+b,0)/fit.length
 return trees.filter((_,i)=>fit[i]>avg*k||trees[_].depth===0)
}
export function evolve(forest,gens){
 for(let i=0;i<gens;i++){
  forest.step()
  if(i%~~(k*k*100)===0){
   forest.trees=gradient(forest.trees)
  }
 }
 return forest
}
```
