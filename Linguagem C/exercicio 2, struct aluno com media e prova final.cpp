#include <stdio.h>
#define T 3


struct aluno{
char nome[27],sexo,r[25], resultado[25];
int m;
float n1,n2,pf,media, mediapf;
};
int main(){
int i;
struct aluno tab[T];

for(i = 0; i < T; i++){

printf("Digite o nome do aluno\n");
scanf("%s", tab[i].nome);


do{printf("Digite o sexo, M ou F:\n");
scanf("%c", &tab[i].sexo);}
while(tab[i].sexo != 'F' && tab[i].sexo != 'M');


printf("Digite a matricula do aluno\n");
scanf("%d",&tab[i].m);
do{
printf("Digite a primeira nota:\n");
scanf("%f", &tab[i].n1);

}while(tab[i].n1 < 0 || tab[i].n1 > 10);


do{
printf("Digite a segunda nota:\n");
scanf("%f", &tab[i].n2);

}while(tab[i].n2 < 0 || tab[i].n2 > 11);

tab[i].media = (tab[i].n1 + tab[i].n2)/2;

if(tab[i].media >= 6){
printf("O aluno foi aprovado!/n");
break;

}else if(tab[i].media < 4){

printf("O aluno foi reprovado!\n");
}else{
printf("O aluno esta de prova final!/n");
printf("Digite a nota da prova final:/n");
scanf("%f", &tab[i].pf);
tab[i].mediapf = (tab[i].pf + tab[i].media)/2;

}
if(tab[i].mediapf < 6){

printf("O aluno foi Reprovado\n");
}else{

printf("O aluno foi Aprovado\n" );
}
}
}

