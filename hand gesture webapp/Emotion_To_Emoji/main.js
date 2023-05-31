Webcam.set(
{ 
    height:350 ,
    width: 300,
    img_format:png,
    png_quality:60

});
 camera = document.getElementById("camera");
 Webcam.attach("#camera");

 function takesnapshot()
 {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture" src="'+data_uri+ '"  > </img>     '           
    
 });
}
console.log("ml5 version" ,ml5.version)
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JovCouSfP/json',modelLoaded)
function modelLoaded()
{
console.log('model Loaded!')
}