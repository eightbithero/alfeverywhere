console.log('it will be alf');

var alfPromoDiv = document.createElement('div');
alfPromoDiv.id = "alfPromo";
alfPromoDiv.classList.add("alfForMansilya");

var alfvideo = document.createElement('video');
alfvideo.src = chrome.runtime.getURL('static/alf.mp4');
alfvideo.autoplay = true;
alfvideo.muted = true;
alfvideo.crossOrigin = "Anonymous";
// alfvideo.classList.add("alfForMansilya");

var body = document.body;
body.insertBefore(alfPromoDiv, body.firstChild);
body.insertBefore(alfvideo, alfPromoDiv);

var alfPromoVideo = alfPromoDiv;//document.body;
var transparentVideo = seeThru
    .create( alfvideo )
    .ready( function ( instance, video ) {
        alfPromoVideo.classList.add( 'alfForMansilyaReady' );

        video.addEventListener('ended', function () {
            alfPromoVideo.classList.remove( 'alfForMansilyaReady' );
        });
    });
transparentVideo.play();

console.log('alf gone');