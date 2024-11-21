document.addEventListener("DOMContentLoaded", (event) => {
    var audio = new Audio("music/nostargia.mp3");
    
    $('#play-pause-button').on("click",function(){
      if($(this).hasClass('fa-play'))
       {
         $(this).removeClass('fa-play');
         $(this).addClass('fa-pause');
         audio.play();
       }
      else
       {
         $(this).removeClass('fa-pause');
         $(this).addClass('fa-play');
         audio.pause();
       }
    });
    
    audio.onended = function() {
         $("#play-pause-button").removeClass('fa-pause');
         $("#play-pause-button").addClass('fa-play');
    };
    function final_loading(){
        var v = document.getElementById("progress");
        v.remove();
        var html = document.querySelector("html");
            html.style.placeItems ="normal";
        console.log("");
        //v.style.displaｙ="none"
    }
    const counter = document.querySelectorAll(".counter")[0];
    counter.innerText = `${10}`;
    var global_count = +counter.innerText;
    var global_current = 10;
    $('#commingsoon').bind('progress', function() 
    {
        var v = document.getElementById('commingsoon');
        var r = v.buffered;
        var total = v.duration;
        if(total){
            var start   = r.start(0);
            var end     = r.end(0);
            var progr   = Math.floor((end/total)*10);
            var cur     = 10 - progr;
            var diff    = global_count - cur;
            if(diff == 1){
                global_count  = cur;
                counter.innerText = `${cur}`;
            }else if(diff > 1){
                const updateCounter = () => {
                    if(global_count == cur ){
                        return;
                    }
                    global_count -= 1;
                    if(global_count == cur ){
                        return;
                    }
                    counter.innerText = `${global_count}`;
                    setTimeout(updateCounter, 20);
                }
                updateCounter();
            }
        }
    }
    );

    const video = document.getElementById("commingsoon");
    video.addEventListener("loadeddata", (event) => {
        var diff    = global_count;
        if(diff == 1){
            global_count  = 0;
            counter.innerText = `${0}`;
        }else if(diff > 1){
            const updateCounter = () => {
                if(global_count == 0 ){
                    return;
                }
                global_count -= 1;
                if(global_count <= 0 ){
                    return;
                }
                counter.innerText = `${global_count}`;
                setTimeout(updateCounter, 20);
            }
            updateCounter();
        }
        final_loading();
        console.log(
            "Yay! The readyState just increased to  " +
            "HAVE_CURRENT_DATA or greater for the first time.",
        );
    });

});
