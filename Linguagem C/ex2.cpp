#include <stdio.h>

struct pedidos{
    int id, data, quant, p, total;
};

int main(){
  
    int i = 0;
    struct pedidos tab[3];
    for(i = 0; i < 3; i++){
        printf("Numero do pedido\n");
        scanf("%d", &tab[i].id);
        
        printf("Data do pedido\n");
        scanf("%d", &tab[i].data);
        
        printf("Pre�o do item\n");
        scanf("%d", &tab[i].p);
        
        printf("Quantidade\n");
        scanf("%d", &tab[i].quant);
        
     tab[i].total = tab[i].p * tab[i].quant;
         printf("E a quantidade de pedidos � %d", tab[i].quant);
        printf("O pre�o total do pedido �\n %d", tab[i].total);
       
    }
}
