document.addEventListener('DOMContentLoaded', function() {
    const imgImportButton = document.getElementById('img-import');
    const fileInput = document.getElementById('file-input');
    const dpim = document.getElementById('dpim');
    const imageContainer = document.getElementById('imh');
    
    let isDragging = false;
    let startX, startY, initialMouseX, initialMouseY, translateX = 0, translateY = 0;
    let scale = 1;

    // Image import functionality
    imgImportButton.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                dpim.src = e.target.result;
                dpim.style.transform = `translate(0, 0) scale(1)`;
                translateX = 0;
                translateY = 0;
                scale = 1;
            };
            reader.readAsDataURL(file);
        }
    });

    // Start dragging (mouse and touch)
    function startDrag(e) {
        isDragging = true;
        const event = e.touches ? e.touches[0] : e;
        initialMouseX = event.clientX;
        initialMouseY = event.clientY;
        imageContainer.style.cursor = 'grabbing';
    }

    // Dragging (mouse and touch)
    function drag(e) {
        if (isDragging) {
            const event = e.touches ? e.touches[0] : e;
            const deltaX = event.clientX - initialMouseX;
            const deltaY = event.clientY - initialMouseY;
            translateX += deltaX;
            translateY += deltaY;
            dpim.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            initialMouseX = event.clientX;
            initialMouseY = event.clientY;
        }
    }

    // End dragging (mouse and touch)
    function endDrag() {
        isDragging = false;
        imageContainer.style.cursor = 'grab';
    }

    // Zoom functionality (mouse wheel and touch pinch)
    function zoom(e) {
        e.preventDefault();
        if (e.deltaY) {
            // Mouse wheel
            const scaleFactor = 1.1;
            if (e.deltaY < 0) {
                scale *= scaleFactor;
            } else {
                scale /= scaleFactor;
            }
        } else if (e.touches && e.touches.length === 2) {
            // Pinch zoom
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (startDistance) {
                scale *= distance / startDistance;
            }
            startDistance = distance;
        }

        dpim.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    imageContainer.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);

    imageContainer.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', endDrag);

    imageContainer.addEventListener('wheel', zoom);

    let startDistance = null;
    imageContainer.addEventListener('touchmove', function(e) {
        if (e.touches.length === 2) {
            zoom(e);
        }
    });
    document.addEventListener('touchend', function(e) {
        if (e.touches.length < 2) {
            startDistance = null;
        }
    });
});
