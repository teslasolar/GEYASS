```javascript
// UDT:Forest:k7l8:180
import {Xi} from './tree.md'
import {mu} from '../core/ops.md'
export class Psi {
 constructor(n=1){
  this.trees=[...Array(n)].map(()=>new Xi())
  this.t=0
 }
 step(){
  this.t++
  this.trees.forEach(tree=>tree.step())
  const pollen=this.trees.filter(t=>Math.random()<t.H())
  this.trees.forEach(a=>{
   const b=pollen[~~(Math.random()*pollen.length)]
   if(b&&b!==a&&Math.random()<a.H()){
    const m=['k','l','o'][~~(Math.random()*3)]
    Object.assign(a,mu({k:a.k,l:a.l},{k:b.k,l:b.l},m))
   }
  })
 }
 stats(){
  return{
   n:this.trees.length,
   t:this.t,
   k:this.trees.reduce((s,t)=>s+t.k,0)/this.trees.length
  }
 }
}
```
