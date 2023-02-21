validate = () => {
    var input = document.querySelector(".e-mail");
    var elements = document.querySelectorAll(".toggle");
    if(!input.checkValidity()) {
        for(element of elements){
            element.classList.add("invalid");
        }
    }else{
        for(element of elements){
            element.classList.remove("invalid");
        }
    }
}