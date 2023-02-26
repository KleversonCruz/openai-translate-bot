# Bot de tradução para Telegram

Este é um bot de tradução para Telegram que permite aos usuários traduzir textos para diversas linguagens.

## Funcionalidades

O bot responde ao comando `/traduzir` e apresenta as opções de linguagens destino disponíveis. O usuário pode então enviar a sentença que deseja traduzir.

As traduções são realizadas utilizando a API de tradução da OpenAI.

## Instalação e configuração

Para utilizar este bot, é necessário criar um arquivo `.env` na raiz do projeto e definir as seguintes variáveis de ambiente:

- `TELEGRAM_BOT_TOKEN`: token do bot do Telegram.
- `OPENAI_API_KEY`: chave de acesso à API da OpenAI.

Para instalar as dependências do projeto, execute o seguinte comando:

`npm install`

Para iniciar o bot, execute o seguinte comando:

`npm start`

## Tecnologias utilizadas

Este bot foi construído utilizando Node.js e a biblioteca `node-telegram-bot-api`. Além disso, a API de tradução da OpenAI foi utilizada para realizar as traduções.

