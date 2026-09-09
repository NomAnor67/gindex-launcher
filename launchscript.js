function generateIframe() {
    var url = document.getElementById('url').value;
    var iframe = document.createElement('iframe');
    iframe.src = url;
    document.body.appendChild(iframe);
}

document.getElementById('url').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        generateIframe();
    }
});
function openCenteredPopup2() {
            let overlay = document.getElementById('patchPopupOverlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'patchPopupOverlay';
                overlay.className = 'popup-overlay';
                overlay.innerHTML = `
                    <div class="popup-content">
                        <button class="popup-close" onclick="closePatchPopup(event)">Close</button>
                        <div class="centered">
                        <p>Note: Not all versions will get a patch notes update</p>
                        <div></div>
                            <h1>v2.0</h1>
                            <pre>Added QOL features such as a patch notes dropdown, information regarding loading a website, and </pre>
                            <pre style="color:red;"> EXPERIMENTAL: </pre> <pre> Added GameIndex drivers and a list of tested links. Either of these features may be removed in the future.</pre>
                                                    <div class="centered">
                            
                        
                        </div>
                    </div>`;
                overlay.addEventListener('click', closePatchPopup);
                overlay.querySelector('.popup-content').addEventListener('click', function(event) {
                    event.stopPropagation();
                });
                document.body.appendChild(overlay);
            }
            overlay.style.display = 'flex';
        }

