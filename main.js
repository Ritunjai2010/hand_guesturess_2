Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var prediction_1 = "";
var prediction_2w = "";
camera = document.getElementById("Camera");
Webcam.attach('#camera');
function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id = 'captured_imge' src = '"+data_uri+"'/>";
    });
}
console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/48-Cr4R4Q/model.json',modelLoaded);
function modelLoaded() 
{
    console.log("model loaded");
}

