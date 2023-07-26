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
const saveUserReview =  review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n    <div id="review-user" ' +
        `<p> <i> <b>${review['userName']}</b>  ${review['createDate']}</i></p>` + 
        '</div>' +
        `<p>${review['userText']}</p>` +
        '</div>';
}
