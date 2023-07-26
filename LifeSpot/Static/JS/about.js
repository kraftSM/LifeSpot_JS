function GetUserRet() {
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