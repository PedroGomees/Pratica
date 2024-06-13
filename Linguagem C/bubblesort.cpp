#include <stdio.h>
#define N 10

int main(){
    int i, aux, flag;
    int lista[N];
    
    for( i = 0; i < N; i++){
         printf("Item %d", i + 1);
         scanf("%d", &lista[i]);
         }
         flag = 1;
         while(flag){
         flag = 0;
         for(i=0; i < N ; i++){
         if(lista[i] > lista[i+1]){
         aux = lista[i];
         lista[i] = lista[i+1];
         lista[i+1] = aux;
         flag = 1;
                     }
                  }
                     }
    for(i = 0; i < 10; i++){
    printf("\nitem %d = %d", i+1, lista[i]);
    }
}
