const qrScanner = new QrScanner(
    qr_video,
    result => {
        location.href = result.data;
        qrScanner.stop();
        $('.loader').css('display','block');
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
            $('.loader').css('display','none');
            qrScanner.start();
        }
    }, 1000);
});