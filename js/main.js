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



//Questions sets here
let Question_Sets_All = {
    programming: [
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
        }],
    gk: [
        {
            question: "1. What is the capital city of France?",
            option1: "Berlin",
            option2: "Madrid",
            option3: "Paris",
            option4: "Rome",
            answer: "Paris"
        },
        {
            question: "2. Who wrote the national anthem of India?",
            option1: "Rabindranath Tagore",
            option2: "Bankim Chandra Chatterjee",
            option3: "Mahatma Gandhi",
            option4: "Sarojini Naidu",
            answer: "Rabindranath Tagore"
        },
        {
            question: "3. Which planet is known as the Red Planet?",
            option1: "Venus",
            option2: "Mars",
            option3: "Jupiter",
            option4: "Mercury",
            answer: "Mars"
        },
        {
            question: "4. Who was the first President of India?",
            option1: "Dr. Rajendra Prasad",
            option2: "Jawaharlal Nehru",
            option3: "Dr. B. R. Ambedkar",
            option4: "Sardar Vallabhbhai Patel",
            answer: "Dr. Rajendra Prasad"
        },
        {
            question: "5. Which is the largest ocean on Earth?",
            option1: "Atlantic Ocean",
            option2: "Indian Ocean",
            option3: "Arctic Ocean",
            option4: "Pacific Ocean",
            answer: "Pacific Ocean"
        }
    ],
    science: [
        {
            question: "1. What is the chemical symbol for Gold?",
            option1: "Ag",
            option2: "Au",
            option3: "Fe",
            option4: "Pb",
            answer: "Au"
        },
        {
            question: "2. What is the powerhouse of the cell?",
            option1: "Nucleus",
            option2: "Ribosome",
            option3: "Mitochondria",
            option4: "Cytoplasm",
            answer: "Mitochondria"
        },
        {
            question: "3. Which gas makes up the majority of Earth's atmosphere?",
            option1: "Oxygen",
            option2: "Carbon Dioxide",
            option3: "Nitrogen",
            option4: "Argon",
            answer: "Nitrogen"
        },
        {
            question: "4. What is the process of a liquid turning into a gas called?",
            option1: "Condensation",
            option2: "Sublimation",
            option3: "Evaporation",
            option4: "Melting",
            answer: "Evaporation"
        },
        {
            question: "5. What is the speed of light in a vacuum (approximately)?",
            option1: "300,000 km/h",
            option2: "30,000 km/s",
            option3: "3,000 km/s",
            option4: "300,000 km/s",
            answer: "300,000 km/s"
        }],
    history: [
        {
            question: "1. When did the Titanic sink?",
            option1: "1912",
            option2: "1905",
            option3: "1918",
            option4: "1923",
            answer: "1912"
        },
        {
            question: "2. Who was the first emperor of Rome?",
            option1: "Julius Caesar",
            option2: "Nero",
            option3: "Augustus",
            option4: "Caligula",
            answer: "Augustus"
        },
        {
            question: "3. In which year did World War II end?",
            option1: "1942",
            option2: "1945",
            option3: "1950",
            option4: "1939",
            answer: "1945"
        },
        {
            question: "4. What was the ancient civilization that built the pyramids?",
            option1: "Mesopotamian",
            option2: "Greek",
            option3: "Egyptian",
            option4: "Inca",
            answer: "Egyptian"
        },
        {
            question: "5. Who invented the printing press?",
            option1: "Galileo Galilei",
            option2: "Johannes Gutenberg",
            option3: "Leonardo da Vinci",
            option4: "Nikola Tesla",
            answer: "Johannes Gutenberg"
        }],
    geography: [
        {
            question: "1. Which country is both an island and a continent?",
            option1: "Greenland",
            option2: "Australia",
            option3: "Madagascar",
            option4: "Japan",
            answer: "Australia"
        },
        {
            question: "2. What is the longest river in the world?",
            option1: "Amazon River",
            option2: "Yangtze River",
            option3: "Nile River",
            option4: "Mississippi River",
            answer: "Nile River"
        },
        {
            question: "3. What mountain range includes Mount Everest?",
            option1: "Andes",
            option2: "Rocky Mountains",
            option3: "Alps",
            option4: "Himalayas",
            answer: "Himalayas"
        },
        {
            question: "4. In which continent is the Sahara Desert located?",
            option1: "Asia",
            option2: "South America",
            option3: "Africa",
            option4: "Australia",
            answer: "Africa"
        },
        {
            question: "5. What is the capital city of Canada?",
            option1: "Toronto",
            option2: "Montreal",
            option3: "Vancouver",
            option4: "Ottawa",
            answer: "Ottawa"
        }],
    sports: [
        {
            question: "1. How many players are on a soccer (football) team on the field?",
            option1: "10",
            option2: "11",
            option3: "12",
            option4: "9",
            answer: "11"
        },
        {
            question: "2. Which country won the first-ever FIFA World Cup in 1930?",
            option1: "Brazil",
            option2: "Italy",
            option3: "Uruguay",
            option4: "Argentina",
            answer: "Uruguay"
        },
        {
            question: "3. What is a 'bogey' in golf?",
            option1: "One stroke under par",
            option2: "One stroke over par",
            option3: "Two strokes under par",
            option4: "Two strokes over par",
            answer: "One stroke over par"
        },
        {
            question: "4. What is the maximum score a player can get in a single frame of ten-pin bowling?",
            option1: "10",
            option2: "20",
            option3: "30",
            option4: "100",
            answer: "30"
        },
        {
            question: "5. The Tour de France is a famous competition in which sport?",
            option1: "Running",
            option2: "Swimming",
            option3: "Cycling",
            option4: "Rowing",
            answer: "Cycling"
        }],
    literature: [
        {
            question: "1. Who wrote the novel 'Pride and Prejudice'?",
            option1: "Jane Austen",
            option2: "Charlotte Brontë",
            option3: "Charles Dickens",
            option4: "Mary Shelley",
            answer: "Jane Austen"
        },
        {
            question: "2. What is the name of Sherlock Holmes's sidekick?",
            option1: "Dr. Watson",
            option2: "Professor Moriarty",
            option3: "Irene Adler",
            option4: "Mycroft Holmes",
            answer: "Dr. Watson"
        },
        {
            question: "3. 'To be, or not to be, that is the question' is from which Shakespeare play?",
            option1: "Macbeth",
            option2: "Romeo and Juliet",
            option3: "Hamlet",
            option4: "Othello",
            answer: "Hamlet"
        },
        {
            question: "4. What animal is featured in the title of George Orwell's famous political allegory?",
            option1: "Tiger",
            option2: "Dog",
            option3: "Sheep",
            option4: "Animal Farm",
            answer: "Animal Farm"
        },
        {
            question: "5. Who wrote 'The Odyssey'?",
            option1: "Virgil",
            option2: "Homer",
            option3: "Plato",
            option4: "Aristotle",
            answer: "Homer"
        }],
    movies: [
        {
            question: "1. What film features the quote: 'May the Force be with you'?",
            option1: "Star Trek",
            option2: "Guardians of the Galaxy",
            option3: "Star Wars",
            option4: "Dune",
            answer: "Star Wars"
        },
        {
            question: "2. Who directed the movie 'Pulp Fiction'?",
            option1: "Steven Spielberg",
            option2: "Martin Scorsese",
            option3: "Quentin Tarantino",
            option4: "Christopher Nolan",
            answer: "Quentin Tarantino"
        },
        {
            question: "3. Which actor played the lead role in 'Forrest Gump'?",
            option1: "Leonardo DiCaprio",
            option2: "Tom Hanks",
            option3: "Brad Pitt",
            option4: "Denzel Washington",
            answer: "Tom Hanks"
        },
        {
            question: "4. What animated film franchise features a character named Woody and Buzz?",
            option1: "Shrek",
            option2: "Monsters Inc.",
            option3: "Toy Story",
            option4: "Ice Age",
            answer: "Toy Story"
        },
        {
            question: "5. What fictional city is the home of Batman?",
            option1: "Metropolis",
            option2: "Star City",
            option3: "Gotham City",
            option4: "Central City",
            answer: "Gotham City"
        }],
    music: [
        {
            question: "1. Which band released the album 'The Dark Side of the Moon'?",
            option1: "Led Zeppelin",
            option2: "The Beatles",
            option3: "Pink Floyd",
            option4: "The Rolling Stones",
            answer: "Pink Floyd"
        },
        {
            question: "2. What musical instrument is commonly associated with Louis Armstrong?",
            option1: "Saxophone",
            option2: "Trumpet",
            option3: "Clarinet",
            option4: "Piano",
            answer: "Trumpet"
        },
        {
            question: "3. The genre of music known as 'Reggae' originated in which country?",
            option1: "Trinidad and Tobago",
            option2: "Cuba",
            option3: "Jamaica",
            option4: "Brazil",
            answer: "Jamaica"
        },
        {
            question: "4. Who is often referred to as the 'King of Pop'?",
            option1: "Elvis Presley",
            option2: "Prince",
            option3: "Michael Jackson",
            option4: "Madonna",
            answer: "Michael Jackson"
        },
        {
            question: "5. Which composer wrote the famous 'Moonlight Sonata'?",
            option1: "Mozart",
            option2: "Beethoven",
            option3: "Bach",
            option4: "Chopin",
            answer: "Beethoven"
        }],
    art: [
        {
            question: "1. Who painted the Mona Lisa?",
            option1: "Vincent van Gogh",
            option2: "Pablo Picasso",
            option3: "Leonardo da Vinci",
            option4: "Claude Monet",
            answer: "Leonardo da Vinci"
        },
        {
            question: "2. The sculpture 'David' was created by which Renaissance artist?",
            option1: "Donatello",
            option2: "Raphael",
            option3: "Michelangelo",
            option4: "Botticelli",
            answer: "Michelangelo"
        },
        {
            question: "3. What art movement is characterized by abstract designs and geometric shapes, often associated with Piet Mondrian?",
            option1: "Impressionism",
            option2: "Cubism",
            option3: "De Stijl",
            option4: "Surrealism",
            answer: "De Stijl"
        },
        {
            question: "4. What is the name of the famous Japanese woodblock print depicting a massive wave?",
            option1: "The Great Wave off Kanagawa",
            option2: "The Red Fuji",
            option3: "The Travelers",
            option4: "The Dream of the Fisherman's Wife",
            answer: "The Great Wave off Kanagawa"
        },
        {
            question: "5. Which artist is known for his melting clocks in the painting 'The Persistence of Memory'?",
            option1: "René Magritte",
            option2: "Salvador Dalí",
            option3: "Frida Kahlo",
            option4: "Andy Warhol",
            answer: "Salvador Dalí"
        }]
};

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

const selected_cat = localStorage.getItem('Question_category');
const Question_Sets = Question_Sets_All[selected_cat];

//displaying curQues no and total Ques no 
let Curr_Ques = 0;
let crct_ans_tracker = 0;
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
        localStorage.setItem('score', crct_ans_tracker);
        localStorage.setItem('total', tot_ques);
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
