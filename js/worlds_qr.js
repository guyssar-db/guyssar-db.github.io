        const worldSelector = document.getElementById('world-selector');
        const imageSelector = document.getElementById('image-selector-Legend');
        const imgElement = document.getElementById('frame');

        // Function to update image source
        function updateImageSrc() {
            const worldValue = worldSelector.value;
            const imageValue = imageSelector.value;

            if (worldValue && imageValue) {
                imgElement.src = `./assets/flag/worlds/size/${worldValue}${imageValue}.png`;

                imgElement.classList.remove('none');
            } else {
                imgElement.src = '';
                imgElement.classList.add('none');
            }
        }

        // Add event listeners
        worldSelector.addEventListener('change', updateImageSrc);
        imageSelector.addEventListener('change', updateImageSrc);
        imgElement.addEventListener('change', updateImageSrc);
