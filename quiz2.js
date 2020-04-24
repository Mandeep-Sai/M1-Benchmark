let strt = document.querySelector("#start")


function startQuiz(){
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
  let ansString =[]
  let init = 0
  let score =0
  let text = document.querySelector('h1')
  let startBtn = document.querySelector("#start")
  let questions = document.querySelector('#questions')
  text.innerText = ''
  startBtn.style.display = 'none'
    let question = document.createElement('div')
    
    let title = document.createElement('div')
    let options = document.createElement('div')
    question.classList.add('question')
    title.classList.add('title')
    options.classList.add('options')
    title.innerText = questionsList[init]['question']
    // options
    let optionsString = questionsList[init]['correct_answer']+','+questionsList[init]['incorrect_answers']
    let optionsArray = optionsString.split(',')
    for(let j=0;j<optionsArray.length;j++){
      let label = document.createElement('label')
      let radio = document.createElement('input')
      radio.type = "radio"
      radio.name = 'name'+ init
      radio.value = optionsArray[j]
      label.appendChild(radio)
      label.appendChild(document.createTextNode(optionsArray[j]))
      options.appendChild(label)
  }   
    question.appendChild(title)
    question.appendChild(options)
    questions.appendChild(question)

    // next button
    let nextButton = document.createElement('div')
    let lbl = document.createElement('label')
    let button = document.createElement('input')
    button.classList.add('nextButton')
    button.type = 'button'
    button.value = "Next"
    lbl.appendChild(button)
    nextButton.appendChild(lbl)
    questions.appendChild(nextButton)
    

    // adding event listener to next button
    nextButton.onclick = function(){
      let originalAnswers = []
      let msg = document.createElement('div')
      msg.classList.add('message')
      msg.innerText = ' '
      question.appendChild(msg)
      for(let i=0;i<questionsList.length;i++){
        originalAnswers += questionsList[i]['correct_answer'] + ','
      }
      let originalAnswersArray = originalAnswers.split(',')
      originalAnswersArray.pop()
      let a =document.getElementsByName('name'+init)
      for(let l=0;l<a.length;l++){
        if(a[l].checked){
          ansString = a[l].value
        }
      }
      let answer = originalAnswersArray[init]
      if(ansString === answer){
        score += 1
        msg.style.color = 'green'
        msg.innerText = 'Your previous answer is CORRECT and you score +1 point :) '
        setTimeout(function(){msg.innerText = ''}, 1000)
      }else{
        msg.style.color = 'red'
        msg.innerText = 'Your previous answer is WRONG and you scored 0 point :('
        setTimeout(function(){msg.innerText = ''}, 1000)
      }


      init += 1
      if(init === 10){
        title.innerText = "Your final score is  "+score
        nextButton.style.display = 'none'
      }
      
      document.querySelectorAll('.options')[init-1].style.display = 'none'
      let options = document.createElement('div')
      question.classList.add('question')
      title.classList.add('title')
      options.classList.add('options')
      title.innerText = questionsList[init]['question']
      let optionString = questionsList[init]['correct_answer']+','+questionsList[init]['incorrect_answers']
      let optionArray = optionString.split(',')
      for(let k=0;k<optionArray.length;k++){
        let label = document.createElement('label')
        let radio = document.createElement('input')
        radio.type = "radio"
        radio.name = 'name'+ init
        radio.value = optionArray[k]
        label.appendChild(radio)
        label.appendChild(document.createTextNode(optionArray[k]))
        options.appendChild(label)
      }
      question.appendChild(title)
      question.appendChild(options)
      questions.appendChild(question)
      }
      
}
strt.addEventListener('click',startQuiz)



