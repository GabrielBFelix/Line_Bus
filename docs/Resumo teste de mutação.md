Os testes de mutação criam “novos” testes e avaliam a qualidade deles a partir de testes já existentes alterando-os de maneira simples e pequenas. As novas versões dos testes são chamadas de mutante, os testes devem detectá-los e rejeitá-los, “matando-o”. Esse processo ajuda o testador a criar testes e/ou encontrar pontos fracos nos testes usados ou em seções de código que raramente ou nunca são usados durante a execução.
Ao adicionar um código mutante e o mesmo não ser “morto”, pode significar duas coisas: O código é morto / Não é executado ou os testes não foram capazes de detectar as falhas criadas pelo mutante. Claro que, para um melhor funcionamento, são criados várias cópias do software, o que pode ser pesado, mas a orientação a objetos levou a criação de ferramentas de teste capazes de testar partes individuais de um software.

# Com essa grande quantidade de teste, fica mais fácil de atingir as metas dos testes de mutação, que são:
### Identificar fragmentos de código fracamente testados.
### Identificar testes fracos
### Calcular uma pontuação de mutação.
### Aprender sobre propagação de erro e infecção de estado do programa.

# O teste de mutação possui duas hipóteses: 
### Programador competente: A maioria das falhas introduzidas são devidas a pequenos erros sintáticos.
### Efeito de Acoplamento: Falhas simples podem formar uma cascata ou se acoplar para formar outras falhar emergentes.
Um conjunto de operações de mutação usados no programa de origem gera um teste de mutação, chamado de mutante, se os testes forem capazes de detectar uma falha, o teste é considerado morto.
