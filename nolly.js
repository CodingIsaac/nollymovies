const movie = [
    { theRedemption: 0 },
    { africaTechRoot: 0 },
    { theInvisibleMan: 0 },
    { theComplicatedProject: 0 },
     { simplyJavascript: 0 },
     { theNewWeb: 0 }
 ];

    function validatelikes(theRedemption, africaTechRoot, theInvisibleMan, theComplicatedProject, simplyJavascript, theNewWeb ) {
        var theRedemption = document.getElementById("theRedemption").click;
        var africaTechRoot = document.getElementById("africaTechRoot").click;
        var theComplicatedProject = document.getElementById("theComplicatedProject").click;
        var theInvisibleMan = document.getElementById("theInvisibleMan").click;
        var simplyJavascript = document.getElementById("simplyJavascript").click;
        var theNewWeb = document.getElementById("theNewWeb").click;
       

    var likes = 0;
    


    function IncreaseLikes()
    {
        likes++;
        document.getElementById("likes").innerHTML = likes;
    }
}
document.getElementById('likes').addEventListener('click' ,true);
