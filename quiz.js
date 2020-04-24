window.onload = function(){
}
let startQuiz = function(){
  var questionsList = [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What does CPU stand for?',
      correct_answer: 'Central Processing Unit',
      incorrect_answers: ['Central Process Unit', 'Computer Personal Unit', 'Central Processor Unit'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: 'Final',
      incorrect_answers: ['Static', 'Private', 'Public'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'The logo for Snapchat is a Bell.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Pointers were not used in the original C programming language; they were added later on in C++.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the most preferred image format used for logos in the Wikimedia database?',
      correct_answer: '.svg',
      incorrect_answers: ['.png', '.jpeg', '.gif'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In web design, what does CSS stand for?',
      correct_answer: 'Cascading Style Sheet',
      incorrect_answers: ['Counter Strike: Source', 'Corrective Style Sheet', 'Computer Style Sheet'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the code name for the mobile operating system Android 7.0?',
      correct_answer: 'Nougat',
      incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      incorrect_answers: ['120', '160', '100'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Linux was first created as an alternative to Windows XP.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which programming language shares its name with an island in Indonesia?',
      correct_answer: 'Java',
      incorrect_answers: ['Python', 'C', 'Jakarta'],
    },
  ]
  let text = document.querySelector('h1')
  let startBtn = document.querySelector("#start")
  text.innerText = ''
  startBtn.style.display = 'none'
  for(let i=0;i<questionsList.length;i++){
    let questions = document.querySelector('#questions')
    let question = document.createElement('div')
    question.classList.add('question')
    questions.appendChild(question)
    let title = document.createElement('div')
    let options = document.createElement('div')
    options.classList.add('options')
    title.classList.add('title')
    title.innerText = questionsList[i]['question']
    question.appendChild(title)
    question.appendChild(options)
    optionsString = questionsList[i]['correct_answer']+','+questionsList[i]['incorrect_answers']
    let optionsArray = optionsString.split(',')
    for(let j=0;j<optionsArray.length;j++){
      let label = document.createElement('label')
      let radio = document.createElement('input')
      radio.type = "radio"
      radio.name = 'name'+i
      radio.value = optionsArray[j]
      label.appendChild(radio)
      label.appendChild(document.createTextNode(optionsArray[j]))
      options.appendChild(label)
  }   
 }
  let submitButton = document.createElement('div')
  let lbl = document.createElement('label')
  let button = document.createElement('input')
  button.classList.add('submitButton')
  button.type = 'button'
  button.value = "Submit"
  lbl.appendChild(button)
  submitButton.appendChild(lbl)
  questions.appendChild(submitButton)
  submitButton.addEventListener('click',checkAnswers)
}


let strt = document.querySelector("#start")
strt.addEventListener('click',startQuiz)

let checkAnswers = function(){
  var questionsList = [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What does CPU stand for?',
      correct_answer: 'Central Processing Unit',
      incorrect_answers: ['Central Process Unit', 'Computer Personal Unit', 'Central Processor Unit'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: 'Final',
      incorrect_answers: ['Static', 'Private', 'Public'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'The logo for Snapchat is a Bell.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Pointers were not used in the original C programming language; they were added later on in C++.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the most preferred image format used for logos in the Wikimedia database?',
      correct_answer: '.svg',
      incorrect_answers: ['.png', '.jpeg', '.gif'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In web design, what does CSS stand for?',
      correct_answer: 'Cascading Style Sheet',
      incorrect_answers: ['Counter Strike: Source', 'Corrective Style Sheet', 'Computer Style Sheet'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the code name for the mobile operating system Android 7.0?',
      correct_answer: 'Nougat',
      incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      incorrect_answers: ['120', '160', '100'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Linux was first created as an alternative to Windows XP.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which programming language shares its name with an island in Indonesia?',
      correct_answer: 'Java',
      incorrect_answers: ['Python', 'C', 'Jakarta'],
    },
  ]

  // let ques = document.querySelectorAll('.question')
  //  let ansString =[]
  // for(let i=0;i<ques.length;i++){
  //   let opts = document.getElementsByName('name'+i)
  //   for(let j=0;j<opts.length;j++){
  //     if(opts[j].checked){
  //       ansString += opts[j].value + ','
  //     }
  //   }
  // }
  // // console.log(ansString)
  let ans = document.getElementsByTagName('input')
  ansString = []
  for(let k =0;k<ans.length;k++){
    if(ans[k].type = 'radio'){
      if(ans[k].checked){
        ansString +=  ans[k].value  +','
      }
    }
  }
  let ansArray = ansString.split(',')
  ansArray.pop()
  let originalAnswers = []
  for(let i=0;i<questionsList.length;i++){
    originalAnswers += questionsList[i]['correct_answer'] + ','
    
  }
  let originalAnswersArray = originalAnswers.split(',')
  originalAnswersArray.pop()
  console.log(originalAnswersArray)
  console.log(ansArray)
  let score =0
  for(let i=0;i<originalAnswersArray.length;i++){
    if(originalAnswersArray[i] == ansArray[i]){
      score += 1
    }
  }
  let questions = document.querySelector('#questions')
  let val = document.createElement('div')
  val.classList.add('score')
  val.innerText = 'Your score is : '+ score
  questions.appendChild(val)
  
}
