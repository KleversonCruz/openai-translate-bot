import dotenv from 'dotenv';
dotenv.config();
import TelegramBot from 'node-telegram-bot-api';
import { getLanguageName, getOptions } from './options.js';
import { clearState, getState, setState } from './state.js';
import { translateMessage } from './translateMessage.js';
import { commands } from './commands.js';

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands(commands);

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    'Olá! Bem-vindo ao bot de tradução. Para começar, digite /traduzir para ver as opções de linguagens disponíveis.'
  );
});

bot.onText(/\/traduzir/, (msg) => {
  const options = getOptions();

  bot.sendMessage(
    msg.chat.id,
    'Selecione uma opção de linguagem para tradução:',
    options
  );

  setState(msg.chat.id, 'esperando_linguagem', true);
});

bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  const language = callbackQuery.data;
  setState(message.chat.id, 'linguagem', language);

  bot.sendMessage(
    message.chat.id,
    `Ótimo! Você escolheu a linguagem ${getLanguageName(
      language
    )}. Agora envie a sentença que deseja traduzir.`
  );

  setState(message.chat.id, 'esperando_mensagem', true);
});

bot.on('message', (msg) => {
  if (getState(msg.chat.id, 'esperando_mensagem')) {
    const linguagem = getState(msg.chat.id, 'linguagem');

    translateMessage(msg.text, getLanguageName(linguagem))
      .then((traducao) => {
        bot.sendMessage(msg.chat.id, `Tradução: ${traducao}`);
      })
      .catch((error) => {
        console.error(error);
        bot.sendMessage(
          msg.chat.id,
          'Desculpe, ocorreu um erro ao traduzir sua mensagem. Por favor, tente novamente mais tarde.'
        );
      });

    clearState(msg.chat.id);
  }
});
