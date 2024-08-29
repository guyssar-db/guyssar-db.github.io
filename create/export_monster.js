
function div_img() {
    var Se_ = document.querySelector('.se_');

    // ================================== Legend ================================== //
    var d_ = document.getElementById('img_');
    var legendname = document.querySelector('.legendname');
    var legendnamecopy = document.querySelector('.legendnamecopy');
    var legendatt = document.querySelector('.legendatt');
    var legendW = document.querySelector('.legendW');
    var legendPower = document.querySelector('.Mlegendpower');
    var legendPowercopy = document.querySelector('.Mlegendpowercopy');
    var legendDef = document.querySelector('.Mlegenddef');
    var legendDefcopy = document.querySelector('.Mlegenddefcopy');
    var legendCri = document.querySelector('.Mlegendcri');
    var legendCricopy = document.querySelector('.Mlegendcricopy');
    // ================================== Danger ================================== //
    var dangername = document.querySelector('.dangername');
    var dangernamecopy = document.querySelector('.dangernamecopy');
    var dangeratt = document.querySelector('.dangeratt');
    var dangerPower = document.querySelector('.Mdangerpower');
    var dangerPowercopy = document.querySelector('.Mdangerpowercopy');
    var dangerDef = document.querySelector('.Mdangerdef');
    var dangerDefcopy = document.querySelector('.Mdangerdefcopy');
    var dangerCri = document.querySelector('.Mdangercri');
    var dangerCricopy = document.querySelector('.Mdangercricopy');
    // ================================== Dungeon ================================== //
    var dungeonname = document.querySelector('.dungeonname');
    var dungeonnamecopy = document.querySelector('.dungeonnamecopy');
    var dungeonatt = document.querySelector('.dungeonatt');
    var dungeonPower = document.querySelector('.Mdungeonpower');
    var dungeonPowercopy = document.querySelector('.Mdungeonpowercopy');
    var dungeonDef = document.querySelector('.Mdungeondef');
    var dungeonDefcopy = document.querySelector('.Mdungeondefcopy');
    var dungeonCri = document.querySelector('.Mdungeoncri');
    var dungeonCricopy = document.querySelector('.Mdungeoncricopy');
    var dragonatt = document.querySelector('.dragonatt');




    function moveUp(element) {
        if (element) {
            var style = window.getComputedStyle(element);
            var matrix = new WebKitCSSMatrix(style.transform);
            var currentY = matrix.m42;
            element.style.transform = `translate(${matrix.m41}px, ${currentY - 12.25}px)`;
        }
    }

    function moveUp2(element) {
        if (element) {
            var style = window.getComputedStyle(element);
            var matrix = new WebKitCSSMatrix(style.transform);
            var currentY = matrix.m42; 
            element.style.transform = `translate(${matrix.m41}px, ${currentY - 10}px)`;
        }
    }

    function moveDown(element) {
        if (element) {
            var style = window.getComputedStyle(element);
            var matrix = new WebKitCSSMatrix(style.transform);
            var currentY = matrix.m42; 
            element.style.transform = `translate(${matrix.m41}px, ${currentY + 10}px)`;
        }
    }

    function moveLeft(element) {
        if (element) {
            var style = window.getComputedStyle(element);
            var matrix = new WebKitCSSMatrix(style.transform);
            var currentX = matrix.m41;
            element.style.transform = `translate(${currentX - 25.5}px, ${matrix.m42}px) rotate(-90deg)`;
        }
    }

    function dangermoveLeft(element) {
        if (element) {
            var style = window.getComputedStyle(element);
            var matrix = new WebKitCSSMatrix(style.transform);
            var currentX = matrix.m41;
            element.style.transform = `translate(${currentX - 17}px, ${matrix.m42}px) rotate(-90deg)`;
        }
    }
    function gungeonmoveLeft(element) {
        if (element) {
            var style = window.getComputedStyle(element);
            var matrix = new WebKitCSSMatrix(style.transform);
            var currentX = matrix.m41;
            element.style.transform = `translate(${currentX - 20}px, ${matrix.m42}px) rotate(-90deg)`;
        }
    }
    function gungeonmoveCriLeft(element) {
        if (element) {
            var style = window.getComputedStyle(element);
            var matrix = new WebKitCSSMatrix(style.transform);
            var currentX = matrix.m41;
            element.style.transform = `translate(${currentX - 25}px, ${matrix.m42}px) rotate(-90deg)`;
        }
    }
    function gungeonmovedown(element) {
        if (element) {
            var style = window.getComputedStyle(element);
            var matrix = new WebKitCSSMatrix(style.transform);
            var currentY = matrix.m42;
            element.style.transform = `translate(${matrix.m41}px, ${currentY +10}px) rotate(-90deg)`;
        }
    }
    function gungeonmoveUp(element) {
        if (element) {
            var style = window.getComputedStyle(element);
            var matrix = new WebKitCSSMatrix(style.transform);
            var currentY = matrix.m42;
            element.style.transform = `translate(${matrix.m41}px, ${currentY -10}px) rotate(-90deg)`;
        }
    }
    // ================================== Legend ================================== //
    moveUp(legendname);
    moveUp(legendnamecopy);
    moveUp2(legendatt);
    moveUp2(legendW);
    moveLeft(legendPower);
    moveLeft(legendPowercopy);
    moveLeft(legendDef);
    moveLeft(legendDefcopy);
    moveLeft(legendCri);
    moveLeft(legendCricopy);
    // ================================== Legend ================================== //
    moveUp(dangername);
    moveUp(dangernamecopy);
    moveUp2(dangeratt);
    dangermoveLeft(dangerPower);
    dangermoveLeft(dangerPowercopy);
    dangermoveLeft(dangerDef);
    dangermoveLeft(dangerDefcopy);
    dangermoveLeft(dangerCri);
    dangermoveLeft(dangerCricopy);
    
    moveUp(dungeonname);
    moveUp(dungeonnamecopy);
    moveUp2(dungeonatt);

    moveUp2(dragonatt);

    gungeonmoveLeft(dungeonPower);
    gungeonmoveLeft(dungeonPowercopy);
    gungeonmovedown(dungeonPower);
    gungeonmovedown(dungeonPowercopy);

    gungeonmoveUp(dungeonDef);
    gungeonmoveUp(dungeonDefcopy);
    gungeonmoveLeft(dungeonDef);
    gungeonmoveLeft(dungeonDefcopy);

    gungeonmoveCriLeft(dungeonCri);
    gungeonmoveCriLeft(dungeonCricopy);


    moveUp2(Se_);



    document.querySelectorAll('.Iskill, .nctext, .Iskill2').forEach(function(element) {
        moveDown(element);
    });


    document.querySelectorAll('.Iskill').forEach(function(element) {
        element.style.width = '70px';
    });
    document.querySelectorAll('.Iskill2').forEach(function(element) {
        element.style.width = '92px';
    });

    d_.style.border = '0';

    var fileName = prompt('Please Enter File Name');
    html2canvas(d_, { scale: 6.665, backgroundColor: null }).then(function(canvas) {
        var image = new Image();
        image.src = canvas.toDataURL();

        var link = document.createElement('a');
        link.href = image.src;
        link.download = `${fileName}.png`;
        link.click();

        // ================================== Legend ================================== //
        // Reset positions
        if (legendname) legendname.style.transform = '';
        if (legendnamecopy) legendnamecopy.style.transform = '';
        if (legendatt) legendatt.style.transform = '';
        if (legendW) legendW.style.transform = '';
        if (legendPower) legendPower.style.transform = '';
        if (legendPowercopy) legendPowercopy.style.transform = '';
        if (legendDef) legendDef.style.transform = '';
        if (legendDefcopy) legendDefcopy.style.transform = '';
        if (legendCri) legendCri.style.transform = '';
        if (legendCricopy) legendCricopy.style.transform = '';
        // ================================== Legend ================================== //
        if (Se_) Se_.style.transform = '';
        
        if (dangername) dangername.style.transform = '';
        if (dangernamecopy) dangernamecopy.style.transform = '';
        if (dangeratt) dangeratt.style.transform = '';
        if (dangerPower) dangerPower.style.transform = '';
        if (dangerPowercopy) dangerPowercopy.style.transform = '';
        if (dangerDef) dangerDef.style.transform = '';
        if (dangerDefcopy) dangerDefcopy.style.transform = '';
        if (dangerCri) dangerCri.style.transform = '';
        if (dangerCricopy) dangerCricopy.style.transform = '';
        
        if (dungeonname) dungeonname.style.transform = '';
        if (dungeonnamecopy) dungeonnamecopy.style.transform = '';
        if (dungeonatt) dungeonatt.style.transform = '';
        if (dungeonPower) dungeonPower.style.transform = '';
        if (dungeonPowercopy) dungeonPowercopy.style.transform = '';
        if (dungeonDef) dungeonDef.style.transform = '';
        if (dungeonDefcopy) dungeonDefcopy.style.transform = '';
        if (dungeonCri) dungeonCri.style.transform = '';
        if (dungeonCricopy) dungeonCricopy.style.transform = '';

        if (dragonatt) dragonatt.style.transform = '';

        document.querySelectorAll('.Iskill,.Iskill2').forEach(function(element) {
            element.style.width = '';
        });

        document.querySelectorAll('.Iskill, .nctext, .Iskill2').forEach(function(element) {
            element.style.transform = '';
        });
        document.querySelectorAll('.Iskill, .nctext,.Iskill2').forEach(function(element) {
            element.style.marginRight = ''; 
        });

        d_.style.border = '';
    });
}

document.getElementById('exp').addEventListener('click', div_img);
