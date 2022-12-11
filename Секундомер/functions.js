// случайное число
const getRandom = function(max = 100, min = 0) {
    return Math.floor(Math.random() * (max-min) + min);
};

// случайный цвет с альфа каналом
const getColor = function(alpha = 100) {
    return `rgba(${getRandom()}, ${getRandom()}, ${getRandom()}, ${alpha / 100})`;
};

// случайный линейный градиент
const getGradient = function(colors = [], direction = 'to left bottom',
 cnt = 2) {
    if (!colors.length) {
        while(cnt--) {
            colors.push(getColor(getRandom(101, 70)));
        }
    }
    return `linear-gradient(${direction}, ${colors.join(',')})`
};

