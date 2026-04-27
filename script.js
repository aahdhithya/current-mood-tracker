const buttons = document.querySelectorAll('button');
const message = document.getElementById('message');
const log = document.getElementById('log');

const moods={

    'happy': 'Yaay! you are feeling happy today! Keep smiling ❤️',
    'lovely': 'Awwh feeling lovely today! Sweeeet 🦋',
    'sad': 'oh, it is okay to cry :) let it all out 🫂',
    'mad': 'OHHH! WHO ARE WE BEATING UP TODAY? 😤',
    'scared': 'oh? just remember you are stronger than your fears! 💪',
    'excited': 'YESSS LETS GOOO BESTIE!🎉'
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const emoji = button.dataset.mood;
        const time = new Date().toLocaleTimeString();

        message.textContent=moods[emoji];

        const li = document.createElement('li');
        li.textContent=emoji + ' ' + moods[emoji] + ' - ' + time;
        log.prepend(li);
    });
});