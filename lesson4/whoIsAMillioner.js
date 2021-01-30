var whoIsAMillioner = [
    {
        question: 'Кто из этих философов в 1864 году написал музыку на стихи А.С. Пушкина «Заклинание» и «Зимний вечер»?',
        answers: [
            { answer: '1 - Юнг\n', correct: false },
            { answer: '2 - Гегель\n', correct: false },
            { answer: '3 - Ницше\n', correct: true },
            { answer: '4 - Шопенгауэр\n', correct: false }
        ],
    },
    {
        question: 'Сколько раз в сутки подзаводят куранты Спасской башни Кремля?',
        answers: [
            { answer: '1 - Один\n', correct: false },
            { answer: '2 - Два\n', correct: true },
            { answer: '3 - Три\n', correct: false },
            { answer: '4 - Четыре\n', correct: false }
        ],
    },
]

function startGame() {
    let move = 1;
    let correct = 0;

    whoIsAMillioner.forEach((answer) => {
        let ok = true;
        do {
            let input = prompt(`Ход №${move}\n${answer.question}\n${answer.answers.map((val) => { return val.answer }).join(' ')}`);
            if (isNaN(input) || !isFinite(input) || input < 1 || input > 4)
                alert('Введите номер ответа от 1 до 4');
            else {
                if (answer.answers[input - 1].correct) correct++;
                ok = false;
                move++;
            }
        } while (ok)
    });
    alert(`Спасибо за игру!\nПравильных ответов: ${correct}`);
}