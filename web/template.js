// GEYASS Template System - NESW layout (<250 tokens)
const T={
css:`*{margin:0;padding:0;box-sizing:border-box}body{font-family:monospace;background:#0a0a0a;color:#0f0;display:grid;grid-template-areas:"n n n""w c e""s s s";grid-template-rows:auto 1fr auto;grid-template-columns:60px 1fr 60px;min-height:100vh;font-size:11px}#n{grid-area:n;background:#111;padding:8px;border-bottom:1px solid #0f0}#s{grid-area:s;background:#111;padding:5px;border-top:1px solid #0f0;text-align:center}#w{grid-area:w;background:#0a0a0a;padding:5px;border-right:1px solid #0f0}#e{grid-area:e;background:#0a0a0a;padding:5px;border-left:1px solid #0f0}#c{grid-area:c;padding:10px;overflow:auto}h2{color:#ff0;font-size:12px}h3{color:#0ff;font-size:11px}.b{background:#0f0;color:#000;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;font-family:monospace;font-size:10px;width:100%;margin:3px 0}.b:hover{background:#ff0}.f{background:#1a1a1a;padding:8px;margin:5px 0;border-left:2px solid #0ff;border-radius:3px}.o{background:#000;border:1px solid #0f0;padding:8px;min-height:60px;margin:5px 0;font-size:10px;white-space:pre-wrap}`,
north:(t,s)=>`<div id="n"><h2>${t}</h2><div style="color:#888;font-size:10px">${s||''}</div></div>`,
south:(l)=>`<div id="s"><a href="${l||'..'}" style="color:#0ff">← Back</a></div>`,
west:(items)=>`<div id="w">${items.map(i=>`<button class="b" onclick="${i.fn||''}">${i.ico}</button>`).join('')}</div>`,
east:(items)=>`<div id="e">${items.map(i=>`<div style="text-align:center;margin:5px 0"><span style="color:#ff0">${i.v}</span><br><span style="color:#888;font-size:9px">${i.l}</span></div>`).join('')}</div>`,
center:(html)=>`<div id="c">${html}</div>`,
file:(n,d,c)=>`<div class="f"><h3>${n}</h3><div style="color:#888;font-size:9px">${d}</div><pre style="color:#0f0;font-size:9px;margin-top:5px">${c||''}</pre></div>`,
output:(id)=>`<div class="o" id="${id||'out'}"></div>`,
render:(cfg)=>`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${cfg.title}</title><style>${T.css}</style></head><body>${T.north(cfg.title,cfg.sub)}${T.west(cfg.west||[])}${T.center(cfg.center)}${T.east(cfg.east||[])}${T.south(cfg.back)}${cfg.script?`<script>${cfg.script}<\/script>`:''}</body></html>`
};
if(typeof module!=='undefined')module.exports=T;
