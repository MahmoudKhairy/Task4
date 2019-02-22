clearQuestions();

var textAreaIndex = 0;
var textarea, committee;
var isRadioButtonChecked = false;
var isSubmitButtonClicked = false;
var errorTag = document.getElementById("error-message");

//To check if any field is still empty in the form
function submitCheckEmpty() {
    if (!isRadioButtonChecked) {
        errorTag.style.display = 'block';
    }

    isSubmitButtonClicked = true;

    var elements = document.forms["info"].elements;
    for (var j = 0; j < elements.length; j++) {
        if (elements[j].value === "") {
            elements[j].className += " error";
        }
    }
}

//To check if there is any input field empty or not 
function checkEmpty(element) {
    if (isSubmitButtonClicked) {
        if (element.value === "") {
            element.className += " error";
        } else {
            element.className = "";
        }
    }
}

//To show the questions that related to specified committee
function showCommitteeQuestions(type) {
    isRadioButtonChecked = true;
    errorTag.style.display = 'none';
    committee = document.getElementById(type);
    clearQuestions();
    committee.style.display = 'block';
    committee.style.setProperty('animation-name', 'appear');
    textarea = committee.getElementsByTagName('textarea');
    while (textAreaIndex < textarea.length) {
        console.log("test");
        setTextAreaEvent(textAreaIndex);
        console.log("test");

        textarea[textAreaIndex].disabled = false;
        console.log("test");

        textarea[textAreaIndex].required = true;
        console.log("test");

        textAreaIndex++;
    }
    textAreaIndex = 0;
}

//To set an event listener to each textarea
function setTextAreaEvent(index) {
    textarea[index].addEventListener("keyup", function () {
        if (isSubmitButtonClicked) {
            if (textarea[index].value === "") {
                textarea[index].className += " error";
            } else {
                textarea[index].className = "";
            }
        }
    });
}

//To hide the questions and reset the textarea
function clearQuestions() {
    var element = document.getElementsByClassName("comQuestions");
    for (var i = 0; i < element.length; i++) {
        element[i].style.display = 'none';
        element[i].style.setProperty('animation-name', '');
    }
    var textarea = document.getElementsByTagName('textarea');
    for (var j = 0; j < textarea.length; j++) {
        textarea[j].value = "";
        textarea[j].disabled = true;
        textarea[j].required = false;
    }
}



//To check that the input is numbers only
function checkNumber(evt) {
    var char = String.fromCharCode(evt.which);
    if (!(/[0-9]/.test(char))) {
        evt.preventDefault();
    }
}

//To check that the input is alphapet only
function checkAlphabet(evt) {
    var char = String.fromCharCode(evt.which);
    if (!(/[a-zA-Z \-]/.test(char))) {
        evt.preventDefault();
    }
}
