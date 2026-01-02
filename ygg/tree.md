```javascript
// UDT:Tree:j5k6:210
const {kappa:k,lamb:l,phi:p}=await import('../core/const.md')
export class Xi {
 constructor(){
  Object.assign(this,{k:k+(Math.random()-.5)*.1,l:l+(Math.random()-.5)*.1,
   age:0,energy:100,branch:[],fruit:[],depth:0})
 }
 H(){return-this.k*Math.log2(this.k+1e-10)*Math.exp(-Math.abs(this.k-k)*p)}
 step(){
  this.age++
  const align=1/(1+Math.exp(-10*(this.k-k)))
  this.energy+=this.k*10*align*(1+this.H()*p)
  if(Math.random()<.1){
   this.k+=(k-this.k)*.05
   this.l+=(l-this.l)*.05
  }
  if(this.energy>50&&this.age>5){
   const child=new Xi()
   child.depth=this.depth+1
   this.branch.push(child)
   this.energy-=20
  }
 }
}
```
