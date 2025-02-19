document.addEventListener('DOMContentLoaded', function () {
    const imgImportButton = document.getElementById('Import');
    const fileInput = document.getElementById('file-input');
    const dpim = document.getElementById('imbg');
    const imageContainer = document.getElementById('imh');

    let isDragging = false;
    let startX, startY, initialMouseX, initialMouseY, translateX = 0, translateY = 0;
    let scale = 1;

    imgImportButton.addEventListener('click', function () {
        fileInput.click();
    });

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                dpim.src = e.target.result;
                dpim.style.transform = `translate(0, 0) scale(1)`;
                translateX = 0;
                translateY = 0;
                scale = 1;
            };
            reader.readAsDataURL(file);
        }
    });

    function startDrag(e) {
        isDragging = true;
        const event = e.touches ? e.touches[0] : e;
        initialMouseX = event.clientX;
        initialMouseY = event.clientY;
        imageContainer.style.cursor = 'grabbing';
    }

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

    function endDrag() {
        isDragging = false;
        imageContainer.style.cursor = 'grab';
    }

    function zoom(e) {
        e.preventDefault();
        if (e.deltaY) {

            const scaleFactor = 1.1;
            if (e.deltaY < 0) {
                scale *= scaleFactor;
            } else {
                scale /= scaleFactor;
            }
        } else if (e.touches && e.touches.length === 2) {

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
    imageContainer.addEventListener('touchmove', function (e) {
        if (e.touches.length === 2) {
            zoom(e);
        }
    });
    document.addEventListener('touchend', function (e) {
        if (e.touches.length < 2) {
            startDistance = null;
        }
    });
});

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
//                     EXport                      //
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

document.getElementById("Save").addEventListener("click", function () {
    html2canvas(document.getElementById("img"), {
        scale: 6
    }).then(function (canvas) {

        var fileName = prompt("Please enter the file name:", "name");
        if (fileName) {
            var link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = fileName + '.png';
            link.click();
        }
    });
});


//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
//                   World Select                  //
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

const selectElement = document.getElementById('montype');
const selectTypeDiv = document.getElementById('select_type');
const dealW = document.getElementById('world-select-dual');
const selectW = document.getElementById('world-select');
const imgsplselect = document.getElementById('imgspl');
const imgsprselect = document.getElementById('imgspr');

selectElement.addEventListener('change', function () {
    if (this.value === 'dualmon') {
        selectTypeDiv.classList.remove('line');
        selectTypeDiv.classList.add('line_dual');
        dealW.classList.remove('none');
        selectW.classList.add('none');
        imgsplselect.classList.remove('none');
        imgsprselect.classList.remove('none');
    } else {
        selectTypeDiv.classList.remove('line_dual');
        selectTypeDiv.classList.add('line');
        dealW.classList.add('none');
        selectW.classList.remove('none');
        imgsplselect.classList.add('none');
        imgsprselect.classList.add('none');

    }
});

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
//=//=//=//=//=//=// LostSize //=//=//=//=//=//=//=//    
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

const worldMain = document.getElementById('worldMain');
const monsize = document.getElementById('mainsize');

worldMain.addEventListener('change', function () {
    if (this.value === 'ls') {
        monsize.classList.add('none');
    } else {
        monsize.classList.remove('none');
    }
});

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
//                   Chaos|on/off                  //
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

const ChaosSelect = document.getElementById('chaos');
const Chaosimg = document.getElementById('imgchaos');
ChaosSelect.addEventListener('change', function () {
    if (this.value === 'chaoson') {
        ChaosSelect.classList.remove('off');
        ChaosSelect.classList.add('on');
        Chaosimg.classList.remove('none');
    }
    else {
        ChaosSelect.classList.add('off');
        ChaosSelect.classList.remove('on');
        Chaosimg.classList.add('none');
    }
});

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
//                  Hundred|on/off                 //
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

const HundredSelect = document.getElementById('HundredDemon');
const Hundredimg = document.getElementById('imghundred');

HundredSelect.addEventListener('change', function () {
    if (this.value === 'hunon') {
        HundredSelect.classList.remove('off');
        HundredSelect.classList.add('on');
        Hundredimg.classList.remove('none');
    }
    else {
        HundredSelect.classList.add('off');
        HundredSelect.classList.remove('on');
        Hundredimg.classList.add('none');
    }
});

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
//                  NameAs|on/off                  //
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

const NameAsSelect = document.getElementById('NameAs');
const NameAsDIV = document.getElementById('NameASdiv');
NameAsSelect.addEventListener('change', function () {
    if (this.value === 'nameason') {
        NameAsSelect.classList.remove('off');
        NameAsSelect.classList.add('onn');
        NameAsDIV.classList.remove('none');
    }
    else {
        NameAsSelect.classList.add('off');
        NameAsSelect.classList.remove('onn');
        NameAsDIV.classList.add('none');
    }
});

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
//                    SP|on/off                    //
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

const SPSelect = document.getElementById('SP');
const SPdiv = document.getElementById('spsetting');
const SPtype = document.getElementById('monSP');

const SPhide1 = document.getElementById('tem_');
const SPhide2 = document.getElementById('tem');

SPSelect.addEventListener('change', function () {
    if (this.value === 'SPon') {
        SPSelect.classList.remove('off');
        SPSelect.classList.add('on');
        SPdiv.classList.remove('none');
        SPhide1.classList.remove('none');
        SPhide2.classList.add('none');
        SPtype.classList.remove('none');

    }
    else {
        SPSelect.classList.add('off');
        SPSelect.classList.remove('on');
        SPdiv.classList.add('none');
        SPhide1.classList.add('none');
        SPhide2.classList.remove('none');
        SPtype.classList.add('none');


    }
});


//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

document.getElementById('montype').addEventListener('change', function () {
    let type = this.value;
    if (type === 'dualmon') {

        document.getElementById('world-select-dual').classList.remove('none');
        document.getElementById('world-select').classList.add('none');
    } else {

        document.getElementById('world-select-dual').classList.add('none');
        document.getElementById('world-select').classList.remove('none');
    }
    updateImages();
});

function updateImages() {
    let type = document.getElementById('montype').value;

    if (type === 'dualmon') {

        let worldL = document.getElementById('worldL').value;
        let worldR = document.getElementById('worldR').value;


        document.getElementById('worldl').src = `./assets/size/${worldL}.png`;
        document.getElementById('worldr').src = `./assets/size/${worldR}.png`;
        document.getElementById('imgspl').src = `./assets/size/c${worldL}.png`;
        document.getElementById('imgspr').src = `./assets/size/c${worldR}.png`;


        document.getElementById('world1').classList.add('none');
        document.getElementById('worldl').classList.remove('none');
        document.getElementById('worldr').classList.remove('none');
    } else {

        let worldMain = document.getElementById('worldMain').value;

        document.getElementById('world1').src = `./assets/size/${worldMain}.png`;

        document.getElementById('world1').classList.remove('none');
        document.getElementById('worldl').classList.add('none');
        document.getElementById('worldr').classList.add('none');
    }
}

document.getElementById('worldL').addEventListener('change', updateImages);
document.getElementById('worldR').addEventListener('change', updateImages);
document.getElementById('worldMain').addEventListener('change', updateImages);


//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

function togglesetting() {
    var element = document.getElementById("scaleedit");
    element.classList.toggle("none");
}

/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
//=//=//=//=//       TEXT CHANGE       //=//=//=//=//
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/////////////////////////////////////////////////////
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

function nameinput() {
    var inputText = document.getElementById('Name').value;
    document.getElementById('textname').innerText = inputText;
    document.getElementById('textname2').innerText = inputText;
}
function sizeinput() {
    var inputText = document.getElementById('Size').value;
    document.getElementById('size').innerText = inputText;
    document.getElementById('size2').innerText = inputText;
}
function powerinput() {
    var inputText = document.getElementById('ATK').value;
    document.getElementById('power').innerText = inputText;
    document.getElementById('power2').innerText = inputText;
}
function definput() {
    var inputText = document.getElementById('DEF').value;
    document.getElementById('def').innerText = inputText;
    document.getElementById('def2').innerText = inputText;
}
function criinput() {
    var inputText = document.getElementById('CRI').value;
    document.getElementById('cri').innerText = inputText;
    document.getElementById('cri2').innerText = inputText;
}
function attinput() {
    var inputText = document.getElementById('ATT').value;
    document.getElementById('attibute').innerText = inputText;
    document.getElementById('attibute2').innerText = inputText;
}

const texteffectcolorSelect = document.getElementById('texteffectcolor');
const nubElement = document.getElementById('nub');

texteffectcolorSelect.addEventListener('change', function () {
    const selectedValue = this.value;
    if (selectedValue === 'text-cw') {
        nubElement.classList.add('text-white');
    } else {
        nubElement.classList.remove('text-white');
    }
});

fetch('keywords.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('fetchtr');

        data.forEach(item => {
            const divItem = document.createElement('div');
            divItem.classList.add('keyword-item');

            const tdKeywords = document.createElement('div');
            tdKeywords.textContent = item.keywords;
            tdKeywords.classList = "tdKeywords";

            const tdImg = document.createElement('div');
            const img = document.createElement('img');
            tdKeywords.classList = "tdKeywords";
            img.src = item.keyimg;
            img.alt = item.keywords;

            tdImg.appendChild(img);
            divItem.appendChild(tdKeywords);
            divItem.appendChild(tdImg);

            tableBody.appendChild(divItem);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));

const worldMainl = document.getElementById('worldL');
const Effectline = document.getElementById('Effectline');
const ms = document.getElementById('mainsize');
const att = document.getElementById('att');
const nn = document.getElementById('divname');
const p1 = document.getElementById('power');
const p2 = document.getElementById('power2');
const c1 = document.getElementById('cri');
const c2 = document.getElementById('cri2');
const d1 = document.getElementById('def');
const d2 = document.getElementById('def2');
const tn1 = document.getElementById('textname');
const tn2 = document.getElementById('textname2');

function removeAllClasses() {
    const classesToRemove = [
        'smcs', 'smdr', 'smdn', 'smdu', 'smdg', 'smgr_c', 'smgr', 'smhw', 
        'smhm', 'smkn', 'smlw', 'smls', 'smmw', 'smst_c', 'smst','smaw'
    ];
    classesToRemove.forEach(cls => ms.classList.remove(cls));
}
function removeAllatt(){
    const classesToRemove = [
        'attcs', 'attdr', 'attdn', 'attdu', 'attdg', 'attgr_c', 'attgr', 'atthw',
        'atthm', 'attkn', 'attlw', 'attls', 'attmw', 'attst_c', 'attst','attdual'
    ];
    classesToRemove.forEach(cls => att.classList.remove(cls));
}

function removeAllname(){
    const classesToRemove = [
        'namecs', 'namedr', 'namedn', 'namedu', 'namedg', 'namegr_c', 'namegr', 'namehw',
        'namehm', 'namekn', 'namelw', 'namels', 'namemw', 'namest_c', 'namest','nameaw','namedual'
    ];
    classesToRemove.forEach(cls => nn.classList.remove(cls));
}
function removeAllnamel(){
    const classesToRemove = [
        'namecsl', 'namedrl', 'namednl', 'namedul', 'namedgl', 'namegrl_c', 'namegrl', 'namehwl',
        'namehml', 'nameknl', 'namelwl', 'namelsl', 'namemwl', 'namestl_c', 'namestl','namedual','nameaw'
    ];
    classesToRemove.forEach(cls => nn.classList.remove(cls));
}


function removeAllClassesl() {
    const classesToRemove = [
        'smcsl', 'smdrl', 'smdnl', 'smdul', 'smdgl', 'smgrl_c', 'smgrl', 'smhwl', 
        'smhml', 'smknl', 'smlwl', 'smlsl', 'smmwl', 'smst_cl', 'smstl','smawl'
    ];
    classesToRemove.forEach(cls => ms.classList.remove(cls));
}
function removeAllattl(){
    const classesToRemove = [
        'attcsl', 'attdrl', 'attdnl', 'attdul', 'attdgl', 'attgrl_c', 'attgrl', 'atthwl',
        'atthml', 'attknl', 'attlwl', 'attlsl', 'attmwl', 'attstl_c', 'attstl','attdual'
    ];
    classesToRemove.forEach(cls => att.classList.remove(cls));
}

const montype = document.getElementById('montype');
montype.addEventListener('change', function () {
    let montypeValue = this.value;
    if (montypeValue === 'mon') {
        worldMain.dispatchEvent(new Event('change'));
    }
    else if (montypeValue === 'dualmon'){
        worldMainl.dispatchEvent(new Event('change'));
    }


});

worldMain.addEventListener('change', function () {
    switch (this.value) {
        case 'cs':
            Effectline.classList.add('z3');
            Effectline.classList.remove('z5');
            removeAllClasses();
            removeAllatt();
            removeAllClassesl()
            removeAllattl()
            removeAllname()
            removeAllnamel()
            ms.classList.add('smcs');
            att.classList.add('attcs');
            nn.classList.add('namecs');
            break;
        case 'dn':
            Effectline.classList.add('z3');
            Effectline.classList.remove('z5');
            removeAllClasses();
            removeAllatt();
            removeAllClassesl()
            removeAllattl()
            removeAllname()
            removeAllnamel()
            ms.classList.add('smdn');
            att.classList.add('attdn');
            nn.classList.add('namedn');
            break;
        case 'aw':
        case 'dr':
        case 'du':
        case 'dg':
        case 'gr_c':
        case 'gr':
        case 'hw':
        case 'hm':
        case 'kn':
        case 'lw':
        case 'ls':
        case 'mw':
        case 'st_c':
        case 'st':
            Effectline.classList.add('z5');
            Effectline.classList.remove('z3');
            removeAllClasses();
            removeAllatt();
            removeAllClassesl()
            removeAllattl()
            removeAllname()
            removeAllnamel()
            ms.classList.add('sm'+this.value);
            att.classList.add('att'+this.value);
            nn.classList.add('name'+this.value);
            break;
        default:
            Effectline.classList.add('z3');
            Effectline.classList.remove('z4');
            removeAllClasses();
            removeAllatt();
            removeAllattl()
            removeAllname()
            removeAllnamel()
            break;
    }
});

worldMainl.addEventListener('change', function () {
    switch (this.value) {
        case 'csl':
            Effectline.classList.add('z3');
            Effectline.classList.remove('z5');
            removeAllClasses();
            removeAllatt();
            removeAllClassesl()
            removeAllattl()
            removeAllname()
            removeAllnamel()
            ms.classList.add('smcsl');
            att.classList.add('attdual');
            nn.classList.add('namedual');
            break;
        case 'dnl':
            Effectline.classList.add('z3');
            Effectline.classList.remove('z5');
            removeAllClasses();
            removeAllatt();
            removeAllClassesl()
            removeAllattl()
            removeAllname()
            removeAllnamel()
            ms.classList.add('smdnl');
            att.classList.add('attdual');
            nn.classList.add('namedual');            
            break;
        case 'awl':
        case 'drl':
        case 'dul':
        case 'dgl':
        case 'grl_c':
        case 'grl':
        case 'hwl':
        case 'hml':
        case 'knl':
        case 'lwl':
        case 'lsl':
        case 'mwl':
        case 'st_cl':
        case 'stl':
            Effectline.classList.add('z5');
            Effectline.classList.remove('z3');
            removeAllClasses();
            removeAllatt();
            removeAllClassesl()
            removeAllattl()
            removeAllname()
            removeAllnamel()
            ms.classList.add('sm'+this.value);
            att.classList.add('attdual');
            nn.classList.add('namedual');
            break;
        default:
            Effectline.classList.add('z3');
            Effectline.classList.remove('z4');
            removeAllClasses();
            removeAllatt();
            removeAllattl()
            removeAllname()
            removeAllnamel()
            break;
    }
});
