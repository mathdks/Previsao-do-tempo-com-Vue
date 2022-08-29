# Previsão do tempo com Vue

Esse projeto demonstra de maneira simples a previsão do tempo atual para três cidades diferentes.

## Tecnologias utilizadas

A aplicação foi criada utilizando as seguintes tecnologias:
- Vue
- Pinia
- Tailwind CSS

## Regra de negócio

Ele foi dividido, basicamente, em 3 grandes regras de negócio:
- Consulta da API [OpenWeatherMap](https://openweathermap.org/current#name)
- Armazenamento de estado com Pinia
- Testes automatizados

## O que foi feito

[X] Criação da aplicação: toda a aplicação foi construída utilizando o Vue e suas bibliotecas auxiliares
(Vite, Vue-Router, Axios, etc)
[X] Estilização dos componentes: toda a estilização de componentes foi feita utilizando o TailwindCSS.
Geralmente, em projetos pequenos, a estilização de componentes é a última coisa que eu faço. E entendo que o TailwindCSS se encaixa como uma ferramente perfeita, pois permite estilizar os componentes de uma maneira rápida, prática e intuitiva. Nesse projeto todos os componentes foram estilizados em menos de 30 minutos.
[X] Consulta da API: a consulta da API do OpenWeatherMap é feita utilizando o *[nome da cidade](https://openweathermap.org/current#name)*. Foi utilizado o parâmetro **units=metric** para que a API enviasse a resposta no padrão do Sistema Internacional de Unidades. **Todos os dados apresentados em tela e armazenados no Redux e no Firebase são da resposta da API**.

## O que (ainda) não foi feito e porque não foi feito

- Testes automatizados: Ainda não sei escrever testes automatizados de maneira precisa. Assim, prefiro justificar de forma clara o porque de não ter feito do que programar algo que simplesmene não funcionará.

## Como reproduzir

Para reproduzir o projeto com sucesso, é necessário renomear o arquivo **.env.example** para **.env**
e preencher os dados da **apiKey do OpenWeatherMap** nas respectivas variáveis.

## Considerações finais

Eu já faço desenvolvimento front-end há um bom tempo, e acredito que consigo trabalhar porque **conheço os conceitos**.

Por conhecer os conceitos, eu consigo me adaptar de forma relativamente rápida a qualquer ferramente.

O Vue é a minha ferramenta favorita para desenvolvimento front-end, mas também já trabalhei em projetos com JQuery, Blade, AlpineJS, React, etc...

Eu só preciso de um tempo para entender como os conceitos se aplicam a determinada ferramente.

Para esse projeto, como foi utilizada uma ferramenta que já domino, o tempo total investido foi de aproximadamente 2 horas, dividas em 2 dias.