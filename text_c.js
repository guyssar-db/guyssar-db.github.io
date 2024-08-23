
        function namelegend() {
            var inputText = document.getElementById('name_legend').value;
            document.getElementById('lmn').innerText = inputText;
            document.getElementById('lmn1').innerText = inputText;
        }

        function Attributelegend() {
            var inputText = document.getElementById('attribute_legend').value;
            document.getElementById('att').innerText = inputText;
        }
//=====================================================//
        var scalemain = 1;
        var scaleStep = 0.1;

        function updateScale() {
            document.getElementById('lmn').style.transform = 'scaleX(' + scalemain + ')';
            document.getElementById('lmn1').style.transform = 'scaleX(' + scalemain + ')';
        }

        document.getElementById('increaseBTNname').addEventListener('click', function() {
            scalemain += scaleStep;
            updateScale();
        });

        document.getElementById('decreaseBTNname').addEventListener('click', function() {
            scalemain -= scaleStep; 
            updateScale();
        });
//=====================================================//
        var attledend_scalemain = 1;

        function updateScale2() {
            document.getElementById('att').style.transform = 'scaleX(' + attledend_scalemain + ')';
        }

        document.getElementById('increaseBTNnameAttribute').addEventListener('click', function() {
            attledend_scalemain += scaleStep;
            updateScale2();
        });

        document.getElementById('decreaseBTNAttribute').addEventListener('click', function() {
            attledend_scalemain -= scaleStep; 
            updateScale2();
        });
//=====================================================//
var effectledend_scalemain = 1;

        function updateScale3() {
            document.getElementById('skill_legend').style.transform = 'scaleX(' + effectledend_scalemain + ')';
        }

        document.getElementById('decreaseBTNEffect').addEventListener('click', function() {
            effectledend_scalemain -= scaleStep;
            updateScale3();
        });
        document.getElementById('increaseBTNnameEffect').addEventListener('click', function() {
            effectledend_scalemain += scaleStep;
            updateScale3();
        });

        const movableElement = document.getElementById('skill');
        const legendEffectL = document.getElementById('legendEffectL');
        const legendEffectR = document.getElementById('legendEffectR');
        const legendEffectU = document.getElementById('legendEffectU');
        const legendEffectD = document.getElementById('legendEffectD');

        legendEffectL.addEventListener('click', () => {
            let currentLeft = parseFloat(window.getComputedStyle(movableElement).left);
            movableElement.style.left = (currentLeft -= 1) + 'px';
        });

        legendEffectR.addEventListener('click', () => {
            let currentLeft = parseFloat(window.getComputedStyle(movableElement).left);
            movableElement.style.left = (currentLeft += 1) + 'px';
        });
        legendEffectU.addEventListener('click', () => {
            let currentLeft = parseFloat(window.getComputedStyle(movableElement).top);
            movableElement.style.top = (currentLeft -= 1) + 'px';
        });
        legendEffectD.addEventListener('click', () => {
            let currentLeft = parseFloat(window.getComputedStyle(movableElement).top);
            movableElement.style.top = (currentLeft += 1) + 'px';
        });




        let currentTop = 0;

    function Effectlegend() {
        const textarea = document.getElementById('effect_legend');
        const text = textarea.value;
        const skillDiv = document.getElementById('skill');

        // Remove all <p> elements except for the one with id="skill_legend"
        const pElements = skillDiv.querySelectorAll('p:not(#skill_legend)');
        pElements.forEach(p => p.remove());

        // Reset the position
        currentTop = 0;
        skillDiv.style.top = `${currentTop}rem`;

        // Split the text into lines and create new <p> tags
        const lines = text.split('\n');
        lines.forEach((line) => {
            if (line.trim() !== '') {
                const p = document.createElement('p');
                p.innerHTML = line.replace(/ /g, '&nbsp;');
                p.className = 'font-cham text-white legendEffectcss user-none margin-skill';
                p.id = 'p-skill';
                skillDiv.appendChild(p);

                // Move the skillDiv up by 1.2rem
                currentTop -= 1.2;
                skillDiv.style.top = `${currentTop}rem`;
            }
        });
    }

    function handleKey(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // ป้องกันการขึ้นบรรทัดใหม่ใน textarea
            Effectlegend(); 
        }
    }


        
        
        
        
        
        
        