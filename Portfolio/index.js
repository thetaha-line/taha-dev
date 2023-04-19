var slider_content = document.getElementById("box");

var image = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
var i = image.length;

function nextimage(){
    if (i<image.length) {
        i= i+1 
    }
    else{
        i=1;
    }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}


function prewimage(){
    if (i<image.length+1 && i>1) {
        i= i-1
    }
    else{
        i=image.length;
    }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

}

setInterval(nextimage , 3000);




   


  