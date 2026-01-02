```asm
; UDT:Boot:m1n2:95
; 512b bootloader → kernel
[BITS 16][ORG 0x7C00]
cli
xor ax,ax
mov ds,ax
mov ss,ax
mov sp,0x7C00
lgdt[G]
mov eax,cr0
or al,1
mov cr0,eax
jmp 8:P
[BITS 32]
P:mov ax,16
mov ds,ax
mov ss,ax
mov esp,0x90000
jmp 0x8000
G:dw 23
dd D
D:dq 0,0x00CF9A000000FFFF,0x00CF92000000FFFF
times 510-($-$$)db 0
dw 0xAA55
```
