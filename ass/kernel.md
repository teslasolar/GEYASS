```c
// UDT:Kernel:n3o4:185
#define K 0.6180339887f
#define L 0.6931471806f
#define O (-0.0f)
float rho(float x,char m){
 if(m=='k')return 1.0f/x;
 if(m=='l')return-x;
 return __builtin_copysign(0.0f,-__builtin_copysign(1.0f,x));
}
float mu(float a,float b,char m){
 float alpha=(m=='k')?K:(m=='l')?0.5f:0.0f;
 if(m=='o')return __builtin_fabs(a)>__builtin_fabs(b)?a:b;
 return alpha*a+(1-alpha)*b;
}
typedef struct{int id,t;float v[256];char m;}Psi;
void set(Psi*s,int k,float v){s->t++;s->v[k]=v;}
float get(Psi*s,int k){return s->v[k];}
void merge(Psi*a,Psi*b){for(int i=0;i<256;i++)a->v[i]=mu(a->v[i],b->v[i],a->m);}
```
