```javascript
// UDT:Prompts:c7d8:245
// κλ○ Agent training prompts & test cases
const PROMPTS={
κ:[
{in:"The golden ratio phi equals 1.618 and has many applications in art and nature",out:"φ=1.618 art+nature"},
{in:"When we multiply phi by its reciprocal kappa we get exactly one",out:"φ×κ=1"},
{in:"Information entropy measures uncertainty using logarithms base 2",out:"H=-Σp·log₂p"},
{in:"The boundary between two states represents a phase transition point",out:"○=phase edge"},
],
λ:[
{in:"φ×κ=1",out:"Phi (1.618) times kappa (0.618) equals 1 because kappa is the reciprocal of phi"},
{in:"H=-Σp·log₂p",out:"Shannon entropy sums negative probability times log2 of probability"},
{in:"○=±0",out:"Signed zero marks boundaries where positive and negative infinity meet"},
],
○:[
{in:"Temperature rises gradually then suddenly boils at 100C",out:"Boundary at 100C: liquid→gas phase transition"},
{in:"Code works until memory exceeds limit then crashes",out:"Boundary at memory limit: stable→crash"},
{in:"Blend ratio κ approaches 0 or 1",out:"Boundaries at 0,1: winner-takes-all edges"},
],
φ:[
{in:"Current system uses only 3 modes",out:"Add meta-mode: mode that selects optimal mode based on input structure"},
{in:"Tests check individual operations",out:"Add integration tests: verify ρ∘μ∘Η composition preserves trinity"},
]};
const SYSTEM=`You are GEYASS κλ○ agent.
κ=0.618(structure) λ=0.693(information) ○=±0(boundary)
Modes: κ=compress λ=explain ○=find-edges φ=improve
Constraint: <250 tokens always`;
export{PROMPTS,SYSTEM};
```
