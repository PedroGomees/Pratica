#include <stdio.h>
#define N 5
#include <string.h>

struct turmas{
       char nome[23], apv[15];
       int f, porcentagemFaltas;
       };

int main(){
struct turmas tab[N];
int i;
int reprovados = 0;
    for(i = 0; i < N; i++){
     printf("Nome do aluno %d:\n", i +1);
     scanf("%s", tab[i].nome);
     
       printf("Numero de faltas:\n");
       scanf("%d", &tab[i].f);
         do {
            printf("Numero de faltas do aluno %d (limite máximo de 20):\n", i + 1);
            scanf("%d", &tab[i].f);

            if (tab[i].f > 20) {
                printf("Numero de faltas inválido! O limite máximo é 20. Tente novamente.\n");
            }
        } while (tab[i].f > 20); 
       tab[i].porcentagemFaltas = (tab[i].f * 10 ) / 2;
        if (tab[i].porcentagemFaltas >= 75) {
            strcpy(tab[i].apv, "Reprovado");
            reprovados++;
        } else {
            strcpy(tab[i].apv, "Aprovado");
        }}
         
for( i = 0; i < N; i++){
     printf(" \nO(a) aluno(a) %s obteve %d de faltas, e está %s \n", tab[i].nome, tab[i].f, tab[i].apv);
    
     }
printf(" O número de reprovados é %d", reprovados);
}
