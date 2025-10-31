var Question = document.querySelector('#question');
var Option_1 = document.querySelector('#option-1');
var Option_2 = document.querySelector('#option-2');
var Option_3 = document.querySelector('#option-3');
var Option_4 = document.querySelector('#option-4');
var next_btn = document.querySelector('#next-btn');

let Question_Sets = [
    {
        question: "What is Question 1", option1: "this is option 1", option2: "this is option 2",
        option3: "this is option 3", option4: "this is option 4"
    },
    {
        question: "What is Question 2", option1: "this is option 1", option2: "this is option 2",
        option3: "this is option 3", option4: "this is option 4"
    },
    {
        question: "What is Question 3", option1: "this is option 1", option2: "this is option 2",
        option3: "this is option 3", option4: "this is option 4"
    },
];
console.log(Question_Sets);

let index = 0;
next_btn.addEventListener('click', () => {
    display(index);
    index++;
});

function display(index) {
    Question.innerHTML = Question_Sets[index].question;
    Option_1.innerHTML = Question_Sets[index].option1;
    Option_2.innerHTML = Question_Sets[index].option2;
    Option_3.innerHTML = Question_Sets[index].option3;
    Option_4.innerHTML = Question_Sets[index].option4;
}
