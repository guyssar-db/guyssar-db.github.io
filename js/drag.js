const imgImportButton = document.getElementById('img-import');
        const fileInput = document.getElementById('file-input');
        const dpim = document.getElementById('dpim');
        const container = document.getElementById('imh');
        let scale = 1;

        imgImportButton.addEventListener('click', function() {
            fileInput.click();
        });

        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    dpim.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imh');
    const dpim = document.getElementById('dpim');
    
    let isDragging = false;
    let startX, startY, initialMouseX, initialMouseY;
    
    // Handling drag start
    imageContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = dpim.offsetLeft;
        startY = dpim.offsetTop;
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
        imageContainer.style.cursor = 'grabbing'; // Change cursor to grabbing
    });
    
    
    // Handling drag move
    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const deltaX = e.clientX - initialMouseX;
            const deltaY = e.clientY - initialMouseY;
            dpim.style.left = startX + deltaX + 'px';
            dpim.style.top = startY + deltaY + 'px';
        }
    });
    
    // Handling drag end
    document.addEventListener('mouseup', function() {
        isDragging = false;
        imageContainer.style.cursor = 'grab'; // Change cursor to grab
    });
    
    // Handling zoom
    imageContainer.addEventListener('wheel', function(e) {
        e.preventDefault(); // ป้องกันการเลื่อนปกติ
        const scaleFactor = 1.1;
        let scale = parseFloat(dpim.style.transform.replace(/[^0-9.]/g, '')) || 1;
        if (e.deltaY < 0) {
            scale *= scaleFactor;
        } else {
            scale /= scaleFactor;
        }
        dpim.style.transform = `scale(${scale})`;
    });
});


       