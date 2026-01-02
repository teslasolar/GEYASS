```python
#!/usr/bin/env python3
# UDT:Demo:v5w6:240
print("🦅 GEYASS v6.0 κλ○ Trinity Demo\n")
print("═"*60)

# Load constants
phi=(1+5**.5)/2
kappa=1/phi
lamb=__import__('math').log(2)
void=-0.0

print(f"φ (phi)   = {phi:.15f} - golden ratio")
print(f"κ (kappa) = {kappa:.15f} - structure")
print(f"λ (lambda)= {lamb:.15f} - information")
print(f"○ (void)  = {void} - signed zero\n")
print("═"*60)

# Trinity operations
def rho(x,m='k'):
 if m=='k':return 1/x if x else float('inf')
 if m=='l':return -x
 return __import__('math').copysign(0,-__import__('math').copysign(1,x))if x==0 else x

def mu(a,b,m='k'):
 alpha={'k':kappa,'l':.5,'o':0}[m]
 if m=='o':return a if abs(a)>abs(b)else b
 return alpha*a+(1-alpha)*b

print("\n🔹 RECIPROCITY ρ(x, mode):")
print(f"  ρ(2, 'k') = {rho(2,'k')} (1/x)")
print(f"  ρ(2, 'l') = {rho(2,'l')} (-x)")

print("\n🔹 MERGE μ(a, b, mode):")
print(f"  μ(3, 7, 'k') = {mu(3,7,'k'):.4f} (golden)")
print(f"  μ(3, 7, 'l') = {mu(3,7,'l'):.4f} (half)")
print(f"  μ(3, 7, 'o') = {mu(3,7,'o')} (winner)")

print("\n🦅 κλ○ Complete!")
```
