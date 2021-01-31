# exerciceGO

Olá!

Após análise do exercicio proposto, optei, tendo em conta o meu perfil, aptidões e gostos, por me focar mais na parte da funcionalidade ao invés de no layout. 
Sendo que tenho um perfil mais de back-end, desenvolvi um pequeno serviço node para consultar os dados da API externa e fazer as operações necessárias, de modo, a devolver para o utilizador os dados já todos processados. 
Em relação à abordagem de chamadas à API interna, caso tivessemos um load balancer a fazer a distribuição de trafego por diferentes instancias do back-end, seria mais eficiente, rápido e retiraria carga de recursos da máquina que estaria a correr este serviço, fazer um pedido de detalhes da cidade por cada cidade selecionada. Não sendo este o cenário, optei por fazer apenas um pedido à API interna, que leva-se todas as cidades selecionadas e retorna-se todos os detalhes.
Relativamente à interface, as minhas skills não são propriamente de um front-end developer, nem de um designer, e de maneira a ter uma interface minimamente apresentavel, optei por usar um template angular, adaptando para o contexto que necessitamos.

Para correr o projeto, basta fazer checkout do repositorio git. Dentro do diretório be, fazer npm install e de seguida npm start. Dentro do diretório fe, fazer npm install e de seguida ng serve.

Obrigado
Fábio Costa
