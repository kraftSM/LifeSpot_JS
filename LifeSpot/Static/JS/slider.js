// динамическое заполнение слайдера не предусмотрено
// соответственно на момент dsign'а колиство слотов и images известно
const imageCount = 6; // количество картинок в библиотеке
const sliderCount = 4; // количество картинок в слайдере
let sliderIndex = 1; //  индекс картинки в 1-м слоте 
let startDrugIndex = 0; // начальный индекс перетаскиваемой картинки ==0 нет события 
let stoptDropIndex = 0; // финальный индекс отпускаемой картинки ==0 нет события
let deltaIndexDaD = stoptDropIndex - startDrugIndex; // итоговая дельта листания by drug'and'drop ==0 -> обработаем как click на Image
let sliderOperation = "None"; //

//setSliderImages();
//refreshSlider();

// последущая функция эквивалентна refresSliderIndex(+1) оставлена для кнопки
function sliderNext() {
    if (sliderIndex == imageCount) sliderIndex = 1;
    else sliderIndex = sliderIndex + 1;
}
// последущая функция эквивалентна refresSliderIndex(-1) оставлена для кнопки
function sliderPrev() {
    if (sliderIndex == 1) sliderIndex = imageCount;
    else sliderIndex = sliderIndex - 1;
}
// последущая функция переработана в refresSliderIndex(idxDelta) можно бы и удалять. оставлена для сравнения
function imgClick(dir) {
    if (dir > 0) sliderNext();   
    if (dir == 0) sliderIndex = 1 + (sliderIndex + sliderCount -1) % imageCount ; // == 0 промотать на весь sliderCount
    if (dir < 0) sliderPrev();

    refresSlider();
}
function btnNextClick() {
    sliderNext();
    //alert("btnNextClick " + sliderIndex);
    refreshSlider();
}
function btnPrevClick() {
    sliderPrev();
    //alert("btnPrevClick " + sliderIndex);
    refreshSlider();
}
function setSliderImages() {    
    alert("setSliderImages") ;
}
function refreshSliderIndex(idxDelta) {
    if (idxDelta > 0) {
        sliderIndex += idxDelta;
        if (sliderIndex > imageCount) sliderIndex -= imageCount;
    }
    // = 0 промотать на весь sliderCount
    if (idxDelta == 0) sliderIndex = 1 + (sliderIndex + sliderCount - 1) % imageCount;
    if (idxDelta < 0) {
        sliderIndex += idxDelta;
        if (sliderIndex <= 0) sliderIndex += imageCount;
    }
    //alert("refresSliderIndex:" + idxDelta);
    //console.log("refresSliderIndex:" + idxDelta);
    refreshSlider();
}

function refreshSliderInfo() {
    //alert("refreshSlider:sliderInfoLine1");
    let sliderInfoTxt = document.getElementById("sliderInfoLine");
    let infoText = "sliderInfo| slideCnt:" + sliderCount + " Image:" + sliderIndex + " of " + imageCount + " | Operation:" + sliderOperation; 
    sliderInfoTxt.textContent = infoText;
    //console.log(infoText);
}
function refreshSlider() {
    let sliderText = "";
    let sliderNewText = "+";
    let sliderIdx = sliderIndex;
    let sliderImagePref = "/Static/Images/";
    let sliderImageName = "";

    //console.log('refreshSliderInfo() -1');
    //refreshSliderInfo();

    ////alert("refreshSlider" + curIdx);
    //// Находим слайдеры, которые необходимо обновить
    let elements = document.getElementsByClassName('slider-img');
    ////alert("refreshSlider elements.length" + elements.length);
    ////console.log("refreshSlider elements.length" + elements.length);
    //console.log(elements);

    //// Пробегаемся по слайдеру    

    for (let i = 0; i < elements.length; i++)
    {
        //alert("refresSlider " + i);
        //console.log('sliderText-0');
        //console.log(elements[i]);
        ////console.log('sliderText-1');
        ////console.log(elements[i].children);
        ////console.log('sliderText-2');
        ////console.log(elements[i].children[0]);       
        ////console.log('sliderText-3');
        ////console.log(elements[i].children[1]); 

        sliderText = elements[i].querySelector("text").textContent; //достук через querySelector("text") - возвращается первый из потомков, имеющий CSS-secctor ="text"
        //sliderText = elements[i].children[1].textContent; //достук как ко 2-му Item'у списка элементов-детей (читаем текстовое содержимое элемента)
        //console.log("refreshSlider| sliderText " + sliderText);

        sliderIdx = ((sliderIndex + i - 1) % imageCount);// индекс элемента в текущем слайдере
        //alert("refresSlider i:" + i+" refresSlider isliderIdx:" + sliderIdx);
        //далее следует брать ImgName  & ImgText из ранее сформированого массива-0based (или БД) [ImagePath:ImageCaption]
        //для учебных задачприписываем  ImgName=sliderIdx".jpg"  & ImgText="SliderImage"+sliderIdx

        sliderIdx += 1;//для this задач +1(наш массив is-1based) by design        
        sliderImageName = sliderImagePref + sliderIdx + ".jpg";
        sliderNewText = sliderText.substring(0, (sliderText.length - 1)) + sliderIdx;

        //alert("refresSlider " + sliderText + ">->" + sliderNewText + ":img->" + sliderImageName);
        //console.log("refreshSlider| " + sliderText + ">->" + sliderNewText + ":img->" + sliderImageName);
        elements[i].querySelector("text").textContent = sliderNewText;
        elements[i].querySelector("img").src = sliderImageName;
    }
    //console.log('refreshSliderInfo() -2');

    //refresSliderInfo();
}
function itemMouseDown() {
    //console.log('itemMouseDown =+=' );
    //console.log('itemMouseDown' this);
    console.log('itemMouseDown =-=');
}
function itemMouseUp() {
    //console.log('itemMouseDown =+=');
    //console.log('itemMouseDown' this);
    console.log('itemMouseUp =-=');
}
function getEventType(event) {
    //const log = document.getElementById("log");
    //log.innerText = `${event.type}\n${log.innerText}`;
    console.log('getEventType(event)'+ event);
}

refreshSlider();
console.log('start MouseListener Section');

//    //move by mouse

//let slides = document.getElementsByClassName("slider-img");
//console.log(slides);

//let slidePanel = document.getElementById('sliderIm-pn');  
//slidePanel.onmousedown = itemMouseDown;
//slidePanel.addEventListener("mouseup", itemMouseUp, false);
//console.log(slidePanel);

//slidePanel.addEventListener("mousedown", itemMouseDown, false);
//console.log(slidePanel);
//slidePanel.addEventListener("mousedown", getEventType, false); // first


//refreshSlider();