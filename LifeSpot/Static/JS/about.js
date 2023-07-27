//Сообщение подгрузки скрипта FOR DEBUG only
//alert("Приветствуем на LifeSpot! сегодя: " + new Date().toLocaleString());

let usrReview = new Map();
usrReview["userName"] = "testName";
usrReview["userText"] = "userText";
usrReview["createDate"] = new Date().toLocaleString();

function setReviewUserName(usrName) {
    if (!isEmpty(usrName))
        usrReview["userName"] = usrName; 
}
function ClearUserReview() {
    let clrVal1 = "-";
    document.getElementById('txtUserName').value = clrVal1;
    usrReview["userName"] = clrVal1;
    let clrVal2 = "--";
    document.getElementById('txtReviewText').value = clrVal2;
    usrReview["userText"] = clrVal2;

    usrReview["createDate"] = new Date().toLocaleString();
} 

function setReviewText(revText) {
    if (!isEmpty(revText))
        usrReview["userText"] = revText;
    }
function showUserReviewObj() {  
    ShowUserReview(usrReview);
}

function GetUserReturn() {
    userName = GetUserName();
    //alert("Приветствуем на LifeSpot! " + userName);
    userText = GetUserText(userName);    
}
function GetUserText(userName) {
    let usrText = prompt(userName + ", пожалуйста, введите ваш отзыв");
    if (!isEmpty(usrText)) alert("Текст вашего отзыва: " + usrText);
}
function isEmpty(str) {
    return (str == null) || (str.length == 0);
}
function GetUserName() {
    let usrName = prompt("Пожалуйста, введите вашe Имя ");
    if (!isEmpty(usrName)) {
        alert("Приветствуем на LifeSpot! " + usrName);
        return usrName;
    }
}
function toggleElementVisibility(element) {
    if (element.style.visibility == 'hidden')
        element.style.visibility = 'visible'
    else element.style.visibility = 'hidden';
}

    function toggleRewPanel() {

    let element = document.getElementById('review-edit-elements');
        toggleElementVisibility(element);
    //toggleReviews();
}
function hideRewPanel() {
    //alert("Hide elements: ");
    let elements = document.getElementsByClassName('review-editors');
    //alert("Hide  " + elements.length + " elements ");

    for (let i = 0; i <= elements.length; i++) {
        elements[i].style.visibility = 'hidden';
    }

}
function toggleReviews() {
    alert("toggleReviews() ");

    let element = document.getElementsByClassName('reviews');
    alert("toggleReviews "+element.length);
    element[0].visibility = 'hidden';

//    toggleElementVisibility(element);
    //
}
 
function GetUserReview() {
    // Создадим объект    
    let userReview = {}
    // Запрашиваем и сохраняем свойство отзыва в полях объекта
    userReview["userName"] = prompt("Пожалуйста, введите ваше имя для отзыва")
    //userReview["userName"] ="Васек"
    if (userReview["userName"] == null) {
        return
    }    
    userReview["userText"] = prompt("Пожалуйста, введите ваш отзыв")
    if(userReview["userText"] == null) {
        return
    }
    userReview["createDate"] = new Date().toLocaleString()
    // Отображем поля отзыва в  Alerte - for DEBUG
    // ShowUserReview(userReview) 
    // Сохраняем поля отзыва на странице - живет пока не ушли с неё :)  "хрнанилище" пока нет - for DEBUG
    //alert("Запись отзыв от пользователя: start")
    saveUserReview(userReview)
    //alert("Запись отзыв от пользователя: finish")   
}
function ShowUserReview(usrRev) {
    alert("Отзыв от пользователя: " + usrRev["userName"] + " Создан: " + usrRev["createDate"] + "\n Текст отзыва : " + usrRev["userText"]);
}
/*     
function saveUserReview(usrRev) {
    alert("Отзыв от пользователя: " + usrRev["userName"] + " Создан: " + usrRev["createDate"] + "\n Текст отзыва : " + usrRev["userText"]);
}
*/
function saveObj2Reviews() {
    saveUserReview(usrReview);
}

const saveUserReview =  review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n    <div id="review-user" ' +
        `<p> <i> <b>${review['userName']}</b>  ${review['createDate']}</i></p>` + 
        '</div>' +
        `<p>${review['userText']}</p>` +
        '</div>';
}
