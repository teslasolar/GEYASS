const φ=1.618033988749895,κ=1/φ,λ=Math.LN2,○=-0
const μ=(a,b,m='κ')=>{const α={κ,'λ':.5,'○':0}[m];return a==null?b:b==null?a:typeof a=='object'?Object.fromEntries([...new Set([...Object.keys(a),...Object.keys(b)])].map(k=>[k,μ(a[k],b[k],m)])):m==='○'?Math.abs(a)>Math.abs(b)?a:b:α*a+(1-α)*b}
class Ξ{constructor(){Object.assign(this,{κ,λ,'○':1,ψ:1,Ω:'Ω',β:[],ƒ:[],'№':0,'₹':100,'◊':Infinity,age:0})}H(){return-this.κ*Math.log2(this.κ+1e-10)*Math.exp(-Math.abs(this.κ-κ)*φ)}∇(){this.age++;this['₹']+=this.κ*10/(1+Math.exp(-10*(this.κ-κ)))*(1+this.H()*φ);if(Math.random()<.1)this.κ+=(κ-this.κ)*.05,this.λ+=(λ-this.λ)*.05}}
class Ψ{constructor(n=1){this.ξ=[...Array(n)].map(()=>new Ξ());this.t=0}∇(){this.t++;this.ξ.forEach(ξ=>ξ.∇())}Σ(){return{n:this.ξ.length,κ:this.ξ.reduce((s,ξ)=>s+ξ.κ,0)/this.ξ.length,λ:this.ξ.reduce((s,ξ)=>s+ξ.λ,0)/this.ξ.length}}}
export{Ξ,Ψ,μ,κ,λ,φ}
