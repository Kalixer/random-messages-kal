const messages = [
    "The end of something is better that i'ts beginning",
    "Remember develop your artistic side",
    "What took you from 0-100 won't take you from 100-1000",
    "No one owes you anything",
    "Intelligence it's a gift",
    "A little bit everyday is much better than a lot but often",
    "Be empathic, what people need is love",
    "Be yourself, you're awesome",
    "You are your number one fan, no one will fight for you as yourself",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}


module.exports = { randomMsg };