
# Documento Lista de User Stories

Documento construído a partido do **Modelo BSI - Doc 004 - Lista de User Stories** que pode ser encontrado no
link: https://docs.google.com/document/d/1Ns2J9KTpLgNOpCZjXJXw_RSCSijTJhUx4zgFhYecEJg/edit?usp=sharing

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento 001 - Documento de Visão](doc-visao.md). Este documento também pode ser adaptado para descrever Casos de Uso. Modelo de documento baseado nas características do processo easYProcess (YP).

## Histórico de revisões

| Data       | Versão  | Descrição                          | Autor                          |
| :--------- | :-----: | :--------------------------------: | :----------------------------- |
| 22/06/2020 | 0.0.1   | Template e descrição do documento  | Taciano de Morais Silva |
| 23/06/2020 | 0.0.2   | Detalhamento do User Story US01    | Taciano de Morais Silva |
| 19/03/2021 | 0.0.3   | Melhorias no UserStory US01; Detalhamento do User Story US02; | Pedro Jonas e Gabriel |

### User Story US01 - Manter Usuário

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de usuário que tem acesso ao sistema via login e senha. Um usuário tem os atributos name, id, email, username, data de nascimento, tipo de usuário, status, password, avatarURL, quantidade de tickets. O email será o login ou o username e ele pode registrar-se diretamente no sistema, o avatarURL é um link para uma foto de seu perfil. Além disso o usuário poderá alterar alguns dados, como o e-mail ou a senha. O usuário administrador do sistema pode realizar as operações de adicionar, alterar, remover e listar os usuários comuns do sistema. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01 | Cadastrar Usuário |
| RF02 | Realizar o login  |
| RF03 | Alterar Usuário |
| RF04 | Excluir Usuário |
| RF05 | Vizualizar detalhes do Usuário |
| RF06 | Visualizar detalhes de um ônibus |
| RF07 | Comprar Tickets |
| RF08 | Visualizar Tickets |
| RF09 | Visualizar histórico de transporte |
| RF22 | Visualizar rota |

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Prioridade**            | Essencial                           |
| **Estimativa**            | 8 h                                 |
| **Tempo Gasto (real):**   |                                     |
| **Tamanho Funcional**     | 7 PF                                |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.00** | e-mail inválido ao cadastrar |
| **TA02.00** | Login inexistente |
| **TA03.00** | Comprar número negativo de tickets |

### User Story US02 - Manter Administrador

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Deve ser possível criar um usuário Administrador no sistema |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF10 | Cadastro de Ônibus |
| RF11 | Alterar Ônibus |
| RF12 | Desativar Ônibus |
| RF13 | Excluir Ônibus |
| RF14 | Alterar Usuário |
| RF15 | Banir Usuário |
| RF16 | Cadastrar ponto de parada |
| RF17 | editar ponto de parada |
| RF18 | Excluir ponto de parada |
| RF19 | Cadastrar uma rota |
| RF20 | Alterar uma rota |
| RF21 | Excluir uma rota |

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Prioridade**            | Essencial                           |
| **Estimativa**            | 8 h                                 |
| **Tempo Gasto (real):**   |                                     |
| **Tamanho Funcional**     | 7 PF                                |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.00** | Excluir Ônibus já excluido |
| **TA02.00** | Alterar Usuário inexistente |
| **TA03.00** | Editar ponto de parada inexistente |
| **TA04.00** | Criar rota sem paradas |
