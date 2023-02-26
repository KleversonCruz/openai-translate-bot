const LANGUAGES = {
  en: 'Inglês',
  es: 'Espanhol',
  fr: 'Francês',
  de: 'Alemão',
  it: 'Italiano',
  ja: 'Japonês',
};

function getOptions() {
  const options = {
    reply_markup: {
      inline_keyboard: [],
    },
  };

  Object.keys(LANGUAGES).forEach((language) => {
    options.reply_markup.inline_keyboard.push([
      {
        text: LANGUAGES[language],
        callback_data: language,
      },
    ]);
  });

  return options;
}

function getLanguageName(language) {
  return LANGUAGES[language];
}

export { getOptions, getLanguageName };
