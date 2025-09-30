function openAccordion(){
    const ansElement = document.getElementById("ans-1");
    const svgDown = document.getElementById("svg-down");
    const svgUp = document.getElementById("svg-up");

     if (ansElement.style.maxHeight) {
        ansElement.style.maxHeight = null;
        svgDown.style.display = "block";
        svgUp.style.display = "none";
    } else {
        ansElement.style.maxHeight = ansElement.scrollHeight + "px";
        svgDown.style.display = "none";
        svgUp.style.display = "block";
    } 
}
