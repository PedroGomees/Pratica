#include <stdio.h>

int quadrado(int a, int resultado){



resultado = a * a;
return resultado;
}

int main(){
    int n1;
    int r;
    printf("Deseja saber o quadrado de qual n�mero?\n");
    scanf("%d",&n1);
    
    printf("O quadrado do n�mero escolhido �:%d", quadrado(n1,r));
    
}
