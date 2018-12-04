var alfPromoDiv = document.createElement('div');
alfPromoDiv.id = "alfEverywhere";
alfPromoDiv.classList.add("alfForMansilya");

var alfvideo = document.createElement('video');
alfvideo.src = chrome.runtime.getURL('static/alf.mp4');
alfvideo.autoplay = true;
alfvideo.muted = true;
alfvideo.crossOrigin = "Anonymous";

var body = document.body;
alfPromoDiv.appendChild(alfvideo);
body.insertBefore(alfPromoDiv, body.firstChild);

var transparentVideo = seeThru
    .create( alfvideo )
    .ready( function ( instance, video ) {
        alfPromoDiv.classList.add( 'alfForMansilyaReady' );

        video.addEventListener('ended', function () {
            alfPromoDiv.classList.remove( 'alfForMansilyaReady' );
            alfPromoDiv.parentNode.removeChild(alfPromoDiv);
        });
    });

transparentVideo.play();