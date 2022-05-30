Webcam.set({
    width:280,
    height:240,
    image_format:'png',
    png_quality:90
});

var camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(img_clicked){
        document.getElementById("result").innerHTML = '<img id="img1" src="'+img_clicked+'"/>'
    });
}
teachable_machine_model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lQCzjLTMz/model.json',modelLoaded)
function modelLoaded()
{
    console.log("The model has been loaded")
}
function identifyImage()
{
    img = document.getElementById("img1")
    teachable_machine_model.classify(img,gotResults)
}
function gotResults(error,results)
{
if(error)
{
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("obj_result").innerHTML =  results[0].label
    document.getElementById("accuracy_result").innerHTML =  results[0].confidence.toFixed(3)
}
}