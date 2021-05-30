function preload(){
    clown_nose= loadImage("https://i.postimg.cc/MHXdXVkG/Clown-Nose-removebg-preview.png");
    Glasses=loadImage("https://i.postimg.cc/0ygjWvyW/R3e911a46ab7ee4c82215a7840ceb22ab-removebg-preview.png")
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
    lips=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
    }
    function setup(){
        canvas=createCanvas(300, 300)
        canvas.center()
        video = createCapture(VIDEO)
        video.size(300, 300)
        video.hide()
    
        poseNet=ml5.poseNet(video, modelLoaded)
        poseNet.on('pose', gotPoses)
    }
    
    function modelLoaded(){
        console.log("poseNet is initialized")
    }
    NoseX=0 
    NoseY=0
    noseX=0 
    noseY=0
    noseX2=0 
    noseY2=0
    leftEyeX=0
    leftEyeY=0
    
    function gotPoses(results){
        if(results.length>0){
            console.log(results)
            NoseX=results[0].pose.nose.x-15
            NoseY=results[0].pose.nose.y+2
            noseX=results[0].pose.nose.x-18
            noseY=results[0].pose.nose.y-18
            noseX2=results[0].pose.nose.x-18
            noseY2=results[0].pose.nose.y+20    
            leftEyeX=results[0].pose.leftEye.x-65
            leftEyeY=results[0].pose.leftEye.y-20
            console.log("nose x =" + NoseX)
            console.log("nose y =" + NoseY)
        }
    }
    function draw(){
    image(video, 0, 0, 300, 300);
    fill(225,0,0);
    stroke(255,0,0);
    
    image(clown_nose, noseX, noseY,40,40)
    image(Glasses, leftEyeX, leftEyeY,90,40)
    image(mustache, NoseX, NoseY, 40,30)
    image(lips,noseX2,noseY2,40,30)
    }
    function take_snapshot(){   
    save('myFilterImage.png')
    }
    