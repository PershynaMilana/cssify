const dictionary = {
    'цвет': {
        'красный': 'red',
        'синий': 'blue',
        'зеленый': 'green',
        'желтый': 'yellow',
        'оранжевый': 'orange',
        'розовый': 'pink',
        'пурпурный': 'purple',
        'голубой': 'skyblue',
        'коричневый': 'brown',
        'белый': 'white',
        'черный': 'black',
        'серый': 'gray',
        'серебристый': 'silver',
        'золотой': 'gold',
        'бирюзовый': 'turquoise',
        'лимонный': 'lemon',
        'лавандовый': 'lavender',
        'малиновый': 'raspberry',
        'бордовый': 'maroon',
        'лиловый': 'lilac'
    },
    'отступы': {
        'большой': '20px',
        'средний': '10px',
        'маленький': '5px',
        'очень большой': '30px',
        'очень маленький': '3px',
        'очень средний': '15px',
        'очень очень большой': '40px',
        'очень очень маленький': '2px',
        'очень очень средний': '25px',
        'минимальный': '1px',
        'максимальный': '50px',
        'микроскопический': '0.5px',
        'огромный': '100px',
        'небольшой': '8px',
        'сверхбольшой': '60px',
        'ультрамаленький': '4px',
        'экстремальный': '75px',
        'плавающий': 'auto',
        'крошечный': '2px',
        'гигантский': '150px'
    },
    'flexbox': {
        'горизонтальный': 'display: flex; flex-direction: row;',
        'вертикальный': 'display: flex; flex-direction: column;',
        'горизонтальный реверсивный': 'display: flex; flex-direction: row-reverse;',
        'вертикальный реверсивный': 'display: flex; flex-direction: column-reverse;',
        'горизонтально выровненный по центру': 'display: flex; justify-content: center;',
        'вертикально выровненный по центру': 'display: flex; align-items: center;',
        'по центру': 'display: flex; justify-content: center; align-items: center;',
        'по ширине': 'display: flex; justify-content: space-between;',
        'по высоте': 'display: flex; align-items: stretch;',
        'равномерно распределенный по горизонтали': 'display: flex; justify-content: space-around;',
        'равномерно распределенный по вертикали': 'display: flex; align-items: space-around;',
        'с центрированием содержимого': 'display: flex; align-content: center',
        'с центрированием элементов': 'display: flex; justify-items: center;',
        'без центрирования': 'display: flex; justify-content: flex-start;',
        'сверху вниз': 'display: flex; flex-direction: column; justify-content: flex-start;',
        'слева направо': 'display: flex; flex-direction: row; justify-content: flex-start;',
        'снизу вверх': 'display: flex; flex-direction: column-reverse; justify-content: flex-end;',
        'справа налево': 'display: flex; flex-direction: row-reverse; justify-content: flex-end;',
        'с центрированием по ширине': 'display: flex; justify-content: center; align-items: stretch;',
        'с центрированием по высоте': 'display: flex; align-items: center; justify-content: space-around;'
    },
    'шрифт': {
        'обычный': 'normal',
        'курсив': 'italic',
        'жирный': 'bold',
        'подчеркнутый': 'underline',
        'зачеркнутый': 'line-through',
        'маленький': 'small-caps',
        'капительный': 'capitalize',
        'нормализованный': 'normalize',
        'пропорциональный': 'proportional',
        'с жирным начертанием': 'bold italic',
        'с курсивным начертанием': 'italic bold',
        'с жирным и курсивным начертанием': 'bold italic',
        'подчеркнутый курсив': 'underline italic',
        'зачеркнутый жирный': 'line-through bold',
        'маленький курсив': 'small-caps italic',
        'капительный жирный': 'capitalize bold',
        'нормализованный курсив': 'normalize italic',
        'пропорциональный подчеркнутый': 'proportional underline',
        'с жирным начертанием подчеркнутый': 'bold underline',
        'с курсивным начертанием зачеркнутый': 'italic line-through'
    },
    'тень': {
        'малая': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'средняя': '4px 4px 6px rgba(0, 0, 0, 0.7)',
        'большая': '6px 6px 8px rgba(0, 0, 0, 0.9)',
        'очень малая': '1px 1px 2px rgba(0, 0, 0, 0.3)',
        'очень большая': '8px 8px 10px rgba(0, 0, 0, 0.9)',
        'огромная': '10px 10px 12px rgba(0, 0, 0, 0.95)',
        'уменьшенная': '3px 3px 5px rgba(0, 0, 0, 0.6)',
        'увеличенная': '5px 5px 7px rgba(0, 0, 0, 0.8)',
        'плотная': '7px 7px 9px rgba(0, 0, 0, 0.85)',
        'легкая': '9px 9px 11px rgba(0, 0, 0, 0.88)',
        'полутень': '2px 2px 3px rgba(0, 0, 0, 0.4)',
        'тень справа': '-2px 2px 4px rgba(0, 0, 0, 0.5)',
        'тень слева': '2px -2px 4px rgba(0, 0, 0, 0.5)',
        'тень сверху': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'тень снизу': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'тень по умолчанию': '3px 3px 5px rgba(0, 0, 0, 0.6)',
        'тень без размытия': '2px 2px rgba(0, 0, 0, 0.5)',
        'многослойная тень': '3px 3px 5px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(0, 0, 0, 0.4)',
        'светящаяся тень': '0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00, 0 0 80px #00ff00'
    }
};

module.exports = dictionary;
