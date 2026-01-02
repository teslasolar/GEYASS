φ = (1 + 5**.5) / 2
κ = 1 / φ
λ = __import__('math').log(2)
○ = -0.0
ρ = lambda x, m='κ': 1/x if m=='κ' else -x if m=='λ' else __import__('math').copysign(0,-__import__('math').copysign(1,x)) if x==0 else x
μ = lambda a,b,m='κ': ({k:μ(a.get(k),b.get(k),m)for k in{*a,*b}}if type(a)==dict else[μ(x,y,m)for x,y in zip(a,b)]if type(a)==list else b if a==None else a if b==None else(a if abs(a)>abs(b)else b)if m=='○'else({'κ':κ,'λ':.5,'○':0}[m]*a+(1-{'κ':κ,'λ':.5,'○':0}[m])*b))
Η = lambda x,m='κ': -x*__import__('math').log2(x+1e-10)*__import__('math').exp(-abs(x-κ)*φ)if m=='κ'else -x*__import__('math').log2(x+1e-10)if m=='λ'else(float('inf')if x==0 else 0)
