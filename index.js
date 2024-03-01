const TelegramBot = require('node-telegram-bot-api');

const token = 'YOUR_TELEGRAM_TOKEN';
const bot = new TelegramBot(token, { polling: true });

const dictionary = require('./dictionary');

// /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Скажите, какие CSS стили вы хотите сгенерировать, и я помогу вам.');
});

// text message handler
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const user_input = msg.text.toLowerCase();
    bot.sendMessage(chatId, 'Ваш запрос: ' + user_input);

    // split the user request into separate categories and their values
    const categoriesAndValues = user_input.split(',');

    // generate CSS code based on base values
    let cssCodes = [];
    categoriesAndValues.forEach(categoryWithValue => {
        const [category, value] = categoryWithValue.split(':').map(item => item.trim());
        if (dictionary[category] && dictionary[category][value]) {
            // convert category names to CSS properties
            const cssProperty = convertToCssProperty(category);
            cssCodes.push(`${cssProperty}: ${dictionary[category][value]};`);
        }
    });

    // send the generated CSS code
    if (cssCodes.length > 0) {
        const formattedCSS = cssCodes.join('\n');
        bot.sendMessage(chatId, `Вот ваш CSS стиль:\n${formattedCSS}`);
    } else {
        bot.sendMessage(chatId, 'Не удалось сгенерировать CSS-код.');
    }
});

// function for converting the category name into a CSS property
function convertToCssProperty(category) {
    switch (category) {
        case 'цвет':
            return 'color';
        case 'отступы':
            return 'margin';
        case 'flexbox':
            return 'display';
        case 'тень':
            return 'box-shadow';
        default:
            return '';
    }
}