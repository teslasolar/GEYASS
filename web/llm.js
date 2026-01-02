// GEYASS Web LLM Agent - κλ○ assistant (<250 tokens)
const κ=0.618,λ=0.693,MODELS={tiny:'Xenova/LaMini-Flan-T5-77M',small:'Xenova/flan-t5-small',phi:'Xenova/phi-1_5_dev'};
class Agent{constructor(m='tiny'){this.model=MODELS[m]||m;this.pipe=null;this.mode='κ'}
async init(){if(this.pipe)return;const{pipeline}=await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1');this.pipe=await pipeline('text2text-generation',this.model,{quantized:true})}
prompt(t,m){return m==='κ'?`Compress to essential structure: ${t}`:m==='λ'?`Explain information flow: ${t}`:m==='○'?`Find boundaries and edges: ${t}`:`Improve this κλ○ system: ${t}`}
async run(t,m='κ'){await this.init();const p=this.prompt(t,m),r=await this.pipe(p,{max_new_tokens:200,temperature:m==='κ'?κ:0.7});return r[0].generated_text}
async Ω(t){return this.run(t,this.mode)}
async compress(t){return this.run(t,'κ')}
async explain(t){return this.run(t,'λ')}
async boundary(t){return this.run(t,'○')}
async improve(t){return this.run(t,'φ')}}
globalThis.GeyassAgent=Agent;
