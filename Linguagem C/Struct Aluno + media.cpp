#include <stdio.h>

struct Aluno{
char nome[29];
float n1, n2, m;
       };

int main(){
int i = 0;
int j = 0;
struct Aluno tab[2];
for( i = 0; i < 2; i++){
  printf("Escreva o nome do aluno ");
  scanf("%s",tab[i].nome);
    printf("Escreva a primeira nota ");
  scanf("%f",&tab[i].n1);
     printf("Escreva a segunda nota ");
  scanf("%f",&tab[i].n2);
  
  tab[i].m = (tab[i].n1 + tab[i].n2)/2;
  
     }
for( j = 0; j < 2; j++){
     printf("\nInformações do primeiro aluno, Nome:\n%s ",  tab[j].nome);
       printf("\nPrimeira nota: %f\n ",  tab[j].n1);
       printf("\nSegunda nota: %f\n ",  tab[j].n2);
        printf("\nMedia das notas: %f\n ",  tab[j].m);
}
}
