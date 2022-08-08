---
layout: scan
---
<video id="qr_video"></video>
<script>
    let qrScanned = false;
    const qrScanner = new QrScanner(
        qr_video,
        result => {
            if(!qrScanned){
                location.href = result.data;
                qrScanned = true;
            }
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
</script>