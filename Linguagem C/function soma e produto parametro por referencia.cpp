#include <stdio.h>

void soma_produto(int a, int b, int *soma, int *produto){
*soma = 0;
*produto = 0;
*soma = a + b;
*produto = a * b;

     }
     
int main(){
int n1, n2, soma, produto;
printf("Escreva o primeiro n�mero\n");
scanf("%d",&n1);
printf("Escreva o segundo n�mero\n");
scanf("%d",&n2);

soma_produto(n1,n2,&soma,&produto);
printf("A soma dos n�meros escolhidos: %d\n",soma);
printf("O produto dos n�meros escolhidos: %d\n",produto);
return 0;
    }


