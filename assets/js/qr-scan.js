const qrScanner = new QrScanner(
    qr_video,
    result => {
        // if(!qrScanned){
            location.href = result.data;
            qrScanner.stop();
        // }
    },
    {
    onDecodeError: error => {
        // camQrResult.textContent = error;
        // camQrResult.style.color = 'inherit';
    },
    highlightScanRegion: true,
    highlightCodeOutline: true
    }
);
qrScanner.start();

$(window).bind("pageshow", function () {
    setTimeout(function () {
        if(typeof(qrScanner) !== 'undefined'){
            qrScanner.start();
        }
    }, 1000);
});