const imgImportButton = document.getElementById('img-import');
        const fileInput = document.getElementById('file-input');
        const dpim = document.getElementById('dpim');
        const container = document.getElementById('image-container');
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

       