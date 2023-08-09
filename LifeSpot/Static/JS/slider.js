// динамическое заполнение слайдера не предусмотрено
// соответственно на момент dsign'а колиство слотов и images известно
const imageCount = 5; // количество картинок в библиотеке
const sliderCount = 4; // количество картинок в слайдере
let sliderIndex = 1; //  индекс картинки в 1-м слоте 
let startDrugIndex = 0; // начальный индекс перетаскиваемой картинки ==0 нет события 
let stoptDropIndex = 0; // финальный индекс отпускаемой картинки ==0 нет события
let deltaIndexDaD = stoptDropIndex - startDrugIndex; // итоговая дельта листания by drug'and'drop ==0 -> обработаем как click на Image
//setSliderImages();
refresSlider(sliderIndex);

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

    refresSlider(sliderIndex);
}
function btnNextClick() {
    sliderNext();
    //alert("btnNextClick " + sliderIndex);
    refresSlider(sliderIndex);
}
function btnPrevClick() {
    sliderPrev();
    //alert("btnPrevClick " + sliderIndex);
    refresSlider(sliderIndex);
}
function setSliderImages() {    
    alert("setSliderImages") ;
}
function refresSliderIndex(idxDelta) {
    if (idxDelta > 0) {
        sliderIndex += idxDelta;
        if (sliderIndex > imageCount) sliderIndex -= imageCount;
    }
    // = 0 промотать на весь sliderCount
    if (idxDelta == 0) sliderIndex = 1 + (sliderIndex + sliderCount - 1) % imageCount;
    if (idxDelta < 0) {
        sliderIndex -= idxDelta;
        if (sliderIndex < 0) sliderIndex += imageCount;
    }
    //alert("refresSliderIndex:"+ idxDelta);
    refresSlider(sliderIndex);
}
function refresSlider( curIdx) {
    let sliderText = "";
    let sliderNewText = "";
    let sliderIdx = sliderIndex;
    let sliderImagePref = "/Static/Images/";
    let sliderImageName = "";

    //alert("refreshSlider" + curIdx);
    // Находим слайдеры, которые необходимо обновить
    let elements = document.getElementsByClassName('slider-img');
    //alert("refreshSlider elements.length" + elements.length);

    //// Пробегаемся по слайдеру
    for (let i = 0; i <= elements.length; i++) {
        //alert("refresSlider " + i);
        sliderText = elements[i].querySelector("text").textContent;
        sliderIdx = ((sliderIndex + i - 1) % imageCount) ;// индекс элемента в текущем слайдере
        //далее следует брать ImgName  & ImgText из ранее сформированого массива-0based (или БД) [ImagePath:ImageCaption]
        //для учебных задачприписываем  ImgName=sliderIdx".jpg"  & ImgText="SliderImage"+sliderIdx

        sliderIdx += 1;//для учебных задач +1(наш массив is-1based) by design
        sliderNewText = sliderText.substring(0, (sliderText.length - 1)) + sliderIdx;
        sliderImageName = sliderImagePref + sliderIdx + ".jpg";

        //alert("refresSlider " + sliderText + ">->" + sliderNewText + ":img->" + sliderImageName);
        elements[i].querySelector("text").textContent = sliderNewText;
        elements[i].querySelector("img").src = sliderImageName;
    }
}