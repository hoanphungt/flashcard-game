/*Create two arrays, one for the questions and one for the answers

let question = ['Question1', 'Question2'];

let answer = ['Answer1', 'Answer2'];
*/

//Create flashcard array/object with questions and answers
let flashCard = [
    ['What you can hold in your right hand but not in your left?', 'Your elbow'], 
    ['What has feet but no legs?', 'A measuring device'], 
    ['Divide 160 by half plus 30?', '350'],
    ['What is black when clean and white when dirty?', 'A chalkboard'],
    ['What word is always pronounced wrong?', 'the word "wrong"'],
];

//Make function to allow question & answer appear
function changeQuestion() {
    let i = Math.floor(Math.random() * flashCard.length);
    let displayedCard = flashCard[i][0];
    questionCard.innerHTML = displayedCard;
    changeAnswer = function () {
        let displayedAnswer = flashCard[i][1];
        answerCard.innerHTML = displayedAnswer;
    };
    answerCard.innerHTML = '';
    //Allow user to delete current card
    deleteCard = function () {
        flashCard.splice(i, 1);
        questionCard.innerHTML = '';
        answerCard.innerHTML = '';
    }
};

//Allow user to submit new questions & their answers
function submitQA() {
    let Q = document.getElementById('newQuestion').value;
    let A = document.getElementById('newAnswer').value;
    flashCard.push([Q, A]);
    document.getElementById('newQuestion').value = '';
    document.getElementById('newAnswer').value = '';
}

//Allow user to delete a current card
function deleteCard() {

}
