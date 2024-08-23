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

    // Dragging functionality
    imageContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
        imageContainer.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const deltaX = e.clientX - initialMouseX;
            const deltaY = e.clientY - initialMouseY;
            translateX += deltaX;
            translateY += deltaY;
            dpim.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            initialMouseX = e.clientX;
            initialMouseY = e.clientY;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        imageContainer.style.cursor = 'grab';
    });

    // Zoom functionality
    imageContainer.addEventListener('wheel', function(e) {
        e.preventDefault();
        const scaleFactor = 1.1;
        if (e.deltaY < 0) {
            scale *= scaleFactor;
        } else {
            scale /= scaleFactor;
        }
        dpim.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    });
});