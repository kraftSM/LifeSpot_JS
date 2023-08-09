// динамическое заполнение слайдера не предусмотрено
// соответственно на момент dsign'а колиство слотов и images известно
const imageCount = 3; // количество картинок в библиотеке
const sliderCount = 3; // количество картинок в слайдере
let sliderIndex = 1; //  индекс картинки в 1-м слоте 

//setSliderImages();
refresSlider(sliderIndex);

function sliderNext() {
    if (sliderIndex == sliderCount) sliderIndex = 1;
    else sliderIndex = sliderIndex + 1;
}
function sliderPrev() {
    if(sliderIndex == 1) sliderIndex = sliderCount;
    else sliderIndex = sliderIndex - 1;
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
        sliderIdx = ((sliderIndex + i - 1) % sliderCount) ;// индекс элемента в текущем слайдере
        //далее следует брать ImgName  & ImgText из ранее сформированого массива-0based (или БД) [ImagePath:ImageCaption]
        //для учебных задачприписываем  ImgName=sliderIdx".jpg"  & ImgText="SliderImage"+sliderIdx
        sliderIdx = sliderIdx + 1;//для учебных задач +1(наш массив is-1based) by design
        sliderNewText = sliderText.substring(0, (sliderText.length - 1)) + sliderIdx;
        sliderImageName = sliderImagePref + sliderIdx + ".jpg";

        //alert("refresSlider " + sliderText + ">->" + sliderNewText + ":img->" + sliderImageName);
        elements[i].querySelector("text").textContent = sliderNewText;
        elements[i].querySelector("img").src = sliderImageName;
    }
}