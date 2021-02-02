const pollTitle = document.querySelector("#poll__title");
const pollAnswersList = document.querySelector("#poll__answers");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.onreadystatechange = function () {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    let pollResponse = JSON.parse(xhr.responseText);    
    pollTitle.textContent = pollResponse.data.title;
    
    let pollAnswers = pollResponse.data.answers;   
    pollAnswers.forEach((answer, answerIndex) => {
      pollAnswersList.insertAdjacentHTML("beforeEnd",
        `<button class="poll__answer">
          ${answer}
        </button>
        `)    
        
      pollAnswersList.lastElementChild.addEventListener("click", () => {
        const xhrPost = new XMLHttpRequest;
        xhrPost.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
        xhrPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        xhrPost.onreadystatechange = function () {
          if (xhrPost.readyState === xhrPost.DONE && xhrPost.status === 200) {
            pollAnswersList.innerHTML = "";
            pollResponse = JSON.parse(xhrPost.responseText);            
            pollAnswers = pollResponse.stat;
            let votesAll = 0;
            pollAnswers.forEach(answer => {
              votesAll += answer.votes;              
            });            
            pollAnswers.forEach(answer => {
              pollAnswersList.insertAdjacentHTML("beforeEnd",
                `<div class="poll__answer">
                  ${answer.answer}: <b>${(100 * answer.votes / votesAll).toFixed(2)}%</b>
                </div>
                `)
            });

            alert("Спасибо, ваш голос засчитан!");
          }
        }
        xhrPost.send(`vote=${pollResponse.id}&answer=${answerIndex}`);

      });
    })
  };
};

xhr.send();