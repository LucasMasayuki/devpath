---
title: 'The importance of unit tests'
excerpt: 'The road of a developer can be a short or long journey, from intern to senior, from developer to CEO of a startup, the paths are multiple and start to track them can be from a confusing and distressing beginning.'
coverImage: '/cover-images/jest-test.webp'
date: '2021-01-26T05:35:07.322Z'
author:
  name: Lucas Masayuki Tamaribuchi
  picture: '/author/lucas-tamaribuchi.jpg'
ogImage:
  url: '/cover-images/jest-test.webp'
tags: ['typescript']
---

## Definição de teste unitário

> Na programação, os testes de unidade são um método de teste de software, onde uma unidade do software é testado individualmente. Uma unidade é o menor componente de software testável possível. Os testes de unidade são normalmente utilizados para garantir que cada parte do sistema esteja funcionando corretamente individualmente, de forma detalhada e isso ajuda a detectar e proteger contra bugs no futuro.

## Por que utilizar testes unitários ? 🤔

### 1 - Testes unitários aumentam a qualidade do seu código 🧼

Testes unitarios ajudam os desenvolvedores a identificarem defeitos e problemas de implementação durante a fase de desenvolvimento.

### 2 - Menor número de bugs e erros 🚫🐛

Com os testes unitarios conseguimos detectar errors durante o desenvolvimento, permitindo ao desenvolvedor conseguir testar o seu código e assegurar que o que foi implementado por ele está funcionando corretamente, tanto códigos novos, quanto as partes do código que já existiam. Com uma boa cobertura de testes, conseguimos aumentar a consistência, eliminando erros, impedindo que eles se escondam no código (Aquela Variavel que a gente só usa fora do happy path, que a gente esquece de setar 🤦🏻‍♂️, com uma boa cobertura de testes deixam de existir 🎉).

### 3 - Redução de custos e de esforço/tempo em testes manuais ➖⏳

Como os testes unitarios são uma tarefa automatizada, e apenas nescessita que o proprio desenvolvedor que escreveu o código, faça e corrija os testes unitarios, economiza tempo e esforço, além de reduzir possiveis custos (Alocação de pessoas para realizar os testes) para realização de testes manuais, possibilitando focar os testes manuais em pontos sensiveis do sistema, onde apenas testes unitarios não garantem o funcionamento correto do sistema. 

### 4 - Testes unitários funcionam como um tipo de documentação 📄

Ao escrever testes unitarios, o desenvolvedor acaba documentando o comportamento esperado dentro de um determinado contexto do código escrito por ele. Por isso que é de suma importância que o teste seja bem descritivo do que ele está testando, e o que ele espera que aconteça.

### 5 -  Facilita refatorações e integrações 👨‍🔧

Tendo uma boa cobertura de testes no cóigo, conseguimos fazer alterações e novas integrações de forma mais fácil, uma vez que como descrito no item anterior, eles servem como uma especie de documentação, podemos nos certificar atraves dos testes, que ao refatorarmos parte do código, a sua lógica e comportamento não se altere.

### 6 - Ajuda no processo de debugging 🔍

Testes de unidades são muito uteis para o processo de debug, ao inves de precisar rodar o projeto inteiro, para debugar um micro processo dentro dele, podemos utilizar o teste unitario para testar especificamente o processo com problema. 

Só quem já passou horas botando prints e restartando o projeto/navegador para debugar, sabe o quanto isso é uma benção 🤲

### **7 - Habilita o uso de CI**

Imagine que tem mais de 10 pessoas mexendo no mesmo projeto que você está trabalhando, agora imagine que um desenvolvedor faça uma alteração em uma parte do código que é um recurso compartilhado utilizado por todas as features em que os outros desenvolvedores estão trabalhando. A mudança é mergeada sem conflitos e o projeto compila normalmente e ocorre o deploy, e surpresa sua aplicação quebra em produção 🙀.

Esse é um tipico caso de erros em tempo de execução, que só vão ser tratados apenas quando a aplicação é executado como um todo. Colocando os testes unitarios para serem executados nos servidores de CI evita de ocorrer esses tipos de problemas 🙀, sem testes unitarios sendo executados nos servidores de CI, não temos nenhuma certeza sobre o funcionamento correto da aplicação