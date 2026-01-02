```c
// UDT:Alloc:o5p6:110
typedef struct B{struct B*n;}B;
static B*F[12];
void*alloc(int s){
 int o=0;
 while((4096<<o)<s)o++;
 for(int i=o;i<12;i++){
  if(F[i]){
   B*b=F[i];
   F[i]=b->n;
   while(i>o){
    i--;
    B*u=(B*)((char*)b+(4096<<i));
    u->n=F[i];
    F[i]=u;
   }
   return b;
  }
 }
 return 0;
}
void free(void*p,int s){
 int o=0;
 while((4096<<o)<s)o++;
 B*b=(B*)p;
 b->n=F[o];
 F[o]=b;
}
```
