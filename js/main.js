//storing all the values
var display_Question = document.querySelector('#question');
var display_Option_1 = document.querySelector('#option-1');
var display_Option_2 = document.querySelector('#option-2');
var display_Option_3 = document.querySelector('#option-3');
var display_Option_4 = document.querySelector('#option-4');

var all_options = document.querySelectorAll('.options-card');
var next_btn = document.querySelector('#next-btn');
var display_curQues_no = document.querySelector('#cur-ques');
var display_totalQues_no = document.querySelector('#total-ques');

var no_of_crctans = document.querySelector('#crct-ans');
var tot_ques = document.querySelector('#tot-q');

let crct_ans_tracker = 0;
//Questions sets here
let Question_Sets = [
    {
        question: "1. What does HTML stand for?",
        option1: "HyperText Markup Language",
        option2: "HighText Machine Language",
        option3: "Hyper Tool Multi Language",
        option4: "Home Tool Markup Language",
        answer: "HyperText Markup Language"
    },
    {
        question: "2. Which CSS property is used to change text color?",
        option1: "font-color",
        option2: "text-color",
        option3: "color",
        option4: "background-color",
        answer: "color"
    },
    {
        question: "3. Which of the following is a JavaScript framework?",
        option1: "Django",
        option2: "Laravel",
        option3: "React",
        option4: "Flask",
        answer: "React"
    },
    {
        question: "4. Which symbol is used for comments in JavaScript?",
        option1: "//",
        option2: "/",
        option3: "#",
        option4: "/* */",
        answer: "//"
    },
    {
        question: "5. Which method is used to add an element at the end of an array in JavaScript?",
        option1: "add()",
        option2: "push()",
        option3: "append()",
        option4: "insert()",
        answer: "push()"
    }
];

//making next button active once any option is clicked
function enable_nxtbtn() {
    next_btn.style.pointerEvents = 'auto';
    next_btn.style.opacity = 1;
}
//to disable next btn 
function disable_nxtbtn() {
    next_btn.style.pointerEvents = 'none';
    next_btn.style.opacity = 0.5;
}
disable_nxtbtn();

//displaying curQues no and total Ques no 
let Curr_Ques = 0;
display_curQues_no.innerHTML = Curr_Ques + 1;
display_totalQues_no.innerHTML = Question_Sets.length; //for all pages
tot_ques = Question_Sets.length;//for final score board

//function to display questions and answers
function showques(Curr_Ques) {
    display_Question.innerHTML = Question_Sets[Curr_Ques].question;
    display_Option_1.innerHTML = Question_Sets[Curr_Ques].option1;
    display_Option_2.innerHTML = Question_Sets[Curr_Ques].option2;
    display_Option_3.innerHTML = Question_Sets[Curr_Ques].option3;
    display_Option_4.innerHTML = Question_Sets[Curr_Ques].option4;
}

//choosing the option
all_options.forEach(option => {
    //once clicked making options not clickable
    option.addEventListener('click', () => {
        enable_nxtbtn();
        all_options.forEach(opt => {
            opt.style.pointerEvents = 'none';
        });

        let correctanswer = Question_Sets[Curr_Ques].answer.trim();
        //if clicked option is correct
        if (option.textContent.trim() == correctanswer) {
            option.style.backgroundColor = '#008000';
            option.style.color = "#ffffff";
            crct_ans_tracker = crct_ans_tracker + 1;
            no_of_crctans.innerHTML = crct_ans_tracker;
        }
        //if clicked option is correct
        else {
            option.style.backgroundColor = 'red';
            option.style.color = "#ffffff";
            all_options.forEach(opt => {
                if (opt.textContent.trim() === correctanswer) {
                    opt.style.backgroundColor = '#008000';
                    opt.style.color = "#ffffff";
                }
            });
        }
    });
});

//displaying next question
next_btn.addEventListener('click', () => {
    Curr_Ques++;
    if (Curr_Ques < Question_Sets.length) {
        display_curQues_no.innerHTML = Curr_Ques + 1;
        showques(Curr_Ques);
        disable_nxtbtn();
        reset();
    }
    else {
        localStorage.setItem('score',crct_ans_tracker);
        localStorage.setItem('total',tot_ques);
        window.location.href = "score-board.html";
    }
});

//To rest everything
function reset() {
    all_options.forEach(opt => {
        opt.style.pointerEvents = 'auto';
        opt.style.backgroundColor = '';
        opt.style.color = '';
    });
}

//calling showques function to dispaly the questions and options
showques(Curr_Ques);
