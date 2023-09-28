const arr = [
  "If you fall asleep now, you will dream. If you study now, you will live your dream.",
  "When you think its too late, the truth is, its still early.",
  "The pain of studying is only temporary. But the pain of not knowing — ignorance — is forever.",
  "Studying is not about time. Its about effort.",
  "Life is not all about studying. But if you cant even conquer this little part of life, then what else can you possibly do?",
  "Success only comes with self-management and determination.",
  "If you dont walk today, youll have to run tomorrow.",
  "The level of education is in direct correlation with your salary.",
  "When today is over, it will never come back.",
  "Even now, your enemies are eagerly flipping through books.",
];

function generateQuotes(quotest){
    const len = quotest.length
    document.querySelector(".modal-text p").innerHTML =  quotest[Math.round(Math.random()*len) ]
      
    
}


setInterval(generateQuotes, 3000, arr)