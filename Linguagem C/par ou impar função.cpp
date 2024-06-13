#include <stdio.h>

int num_verif(int n, int resultado){
    
    if(n % 2 == 0){
        resultado = 1;
    }else{
        resultado = 0;
}
    return resultado;
}

int main(){
    int num;
    int resultado;

printf("Digite um número\n");
scanf("%d", &num);

printf("Resultado:%d\n", num_verif(num,resultado));
}
