//============================================================//
//============================================================//
//=========================[legend]===========================//
//============================================================//
//============================================================//
function namelegend() {
    var inputText = document.getElementById('legendnameinput').value;
    document.getElementById('legendname').innerText = inputText;
    document.getElementById('legendnamecopy').innerText = inputText;
}
function attlegend() {
    var inputText = document.getElementById('legendattinput').value;
    document.getElementById('legendatt').innerText = inputText;
}
function atklegend() {
    var inputText = document.getElementById('legendpowerinput').value;
    document.getElementById('Mlegendpower').innerText = inputText;
    document.getElementById('Mlegendpowercopy').innerText = inputText;
}
function crilegend() {
    var inputText = document.getElementById('legendcriinput').value;
    document.getElementById('Mlegendcri').innerText = inputText;
    document.getElementById('Mlegendcricopy').innerText = inputText;
}
function deflegend() {
    var inputText = document.getElementById('legenddefinput').value;
    document.getElementById('Mlegenddef').innerText = inputText;
    document.getElementById('Mlegenddefcopy').innerText = inputText;
}
//============================================================//






//============================================================//
//============================================================//
//=========================[danger]===========================//
//============================================================//
//============================================================//
function namedanger() {
    var inputText = document.getElementById('dangernameinput').value;
    document.getElementById('dangername').innerText = inputText;
    document.getElementById('dangernamecopy').innerText = inputText;
}
function attdanger() {
    var inputText = document.getElementById('dangerattinput').value;
    document.getElementById('dangeratt').innerText = inputText;
}
function atkdanger() {
    var inputText = document.getElementById('dangerpowerinput').value;
    document.getElementById('Mdangerpower').innerText = inputText;
    document.getElementById('Mdangerpowercopy').innerText = inputText;
}
function cridanger() {
    var inputText = document.getElementById('dangercriinput').value;
    document.getElementById('Mdangercri').innerText = inputText;
    document.getElementById('Mdangercricopy').innerText = inputText;
}
function defdanger() {
    var inputText = document.getElementById('dangerdefinput').value;
    document.getElementById('Mdangerdef').innerText = inputText;
    document.getElementById('Mdangerdefcopy').innerText = inputText;
}
//============================================================//





//============================================================//
//============================================================//
//=========================[dungeon]===========================//
//============================================================//
//============================================================//
function namedungeon() {
    var inputText = document.getElementById('dungeonnameinput').value;
    document.getElementById('dungeonname').innerText = inputText;
    document.getElementById('dungeonnamecopy').innerText = inputText;
}
function attdungeon() {
    var inputText = document.getElementById('dungeonattinput').value;
    document.getElementById('dungeonatt').innerText = inputText;
}
function atkdungeon() {
    var inputText = document.getElementById('dungeonpowerinput').value;
    document.getElementById('Mdungeonpower').innerText = inputText;
    document.getElementById('Mdungeonpowercopy').innerText = inputText;
}
function cridungeon() {
    var inputText = document.getElementById('dungeoncriinput').value;
    document.getElementById('Mdungeoncri').innerText = inputText;
    document.getElementById('Mdungeoncricopy').innerText = inputText;
}
function defdungeon() {
    var inputText = document.getElementById('dungeoninput').value;
    document.getElementById('Mdungeondef').innerText = inputText;
    document.getElementById('Mdungeondefcopy').innerText = inputText;
}
//============================================================//










const colorSelector = document.getElementById('color-selector');
const seElement = document.getElementById('se');

colorSelector.addEventListener('change', function () {
    const selectedValue = colorSelector.value;

    seElement.classList.remove('text-white', 'text-black');

    if (selectedValue === 'textblack') {
        seElement.classList.add('text-black');
        seElement.classList.remove('text-white');
    } else if (selectedValue === 'textwhite') {
        seElement.classList.add('text-white');
        seElement.classList.remove('text-black');

    }
});

//============================================================//
//============================================================//
//============================================================//
//============================================================//
//============================================================//
//============================================================//
//============================================================//
//============================================================//
//============================================================//
//============================================================//
//============================================================//
//============================================================//

let scaleXValue = 1;

//============================================================//
//============================================================//
//============================================================//

const legendname = document.getElementById('legendname');
const legendnamecopy = document.getElementById('legendnamecopy');
const legenddecreaseBTN = document.getElementById('legenddecreaseBTNName');
const legendincreaseBTN = document.getElementById('legendincreaseBTNname');

function updateScaleX() {
    legendname.style.transform = `translate(0, 274px) scaleX(${scaleXValue})`;
    legendnamecopy.style.transform = `translate(0, 274px) scaleX(${scaleXValue})`;
}

legenddecreaseBTN.addEventListener('click', () => {
    scaleXValue -= 0.1;
    updateScaleX();
});

legendincreaseBTN.addEventListener('click', () => {
    scaleXValue += 0.1;
    updateScaleX();
});



//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
//////////////////////Effect Position/////////////////////
//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
//==//==//==//==//==//==//==//==//==//==//==//==//==//==//

const nub = document.getElementById('nub');
const btnUp = document.getElementById('BTNEffectUp');
const btnDown = document.getElementById('BTNEffectDown');

let position = 0;

btnUp.addEventListener('click', () => {
    position -= 1; 
    nub.style.transform = `translateY(${position}px)`;
});

btnDown.addEventListener('click', () => {
    position += 1;
    nub.style.transform = `translateY(${position}px)`;
});

//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
//==//==//==//==//==//==//==//==//==//==//==//==//==//==//

const legendatt = document.getElementById('legendatt');
const legenddecreaseBTNAttribute = document.getElementById('legenddecreaseBTNAttribute');
const legendincreaseBTNAttribute = document.getElementById('legendincreaseBTNAttribute');

function AttupdateScaleX() {
    legendatt.style.transform = `translate(-124px, 224px) scaleX(${scaleXValue})`;
}

legenddecreaseBTNAttribute.addEventListener('click', () => {
    scaleXValue -= 0.1;
    AttupdateScaleX();
});

legendincreaseBTNAttribute.addEventListener('click', () => {
    scaleXValue += 0.1;
    AttupdateScaleX();
});

//============================================================//
let scaleXValue2 = 1;
let scaleXValue2name = 1;


const dungeonname = document.getElementById('dungeonname');
const dungeonnamecopy = document.getElementById('dungeonnamecopy');
const dungeondecreaseBTNName = document.getElementById('dungeondecreaseBTNName');
const dungeonincreaseBTNname = document.getElementById('dungeonincreaseBTNname');

function dunNameScaleX() {
    dungeonname.style.transform = `translate(0px, 265px) scaleX(${scaleXValue2name})`;
    dungeonnamecopy.style.transform = `translate(0px, 265px) scaleX(${scaleXValue2name})`;
}

dungeondecreaseBTNName.addEventListener('click', () => {
    scaleXValue2name -= 0.1;
    dunNameScaleX();
});

dungeonincreaseBTNname.addEventListener('click', () => {
    scaleXValue2name += 0.1;
    dunNameScaleX();
});

const dungeondatt = document.getElementById('dungeonatt');
const dungeondecreaseBTNAttribute = document.getElementById('dungeondecreaseBTNAttribute');
const dungeonincreaseBTNAttribute = document.getElementById('dungeonincreaseBTNnameAttribute');

function dunAttupdateScaleX() {
    dungeondatt.style.transform = `translate(-48px, 213px) scaleX(${scaleXValue2})`;
}

dungeondecreaseBTNAttribute.addEventListener('click', () => {
    scaleXValue2 -= 0.1;
    dunAttupdateScaleX();
});

dungeonincreaseBTNAttribute.addEventListener('click', () => {
    scaleXValue2 += 0.1;
    dunAttupdateScaleX();
});

//============================================================//

document.getElementById('world-selector').addEventListener('change', function () {
    var seElement = document.getElementById('se');
    var selectedValue = this.value;

    switch (selectedValue) {
        case 'mlw':
            seElement.classList.add('effect-legend');
            seElement.classList.remove('effect-chaos','effect-danger','effect-dragon','effect-generic-classic','effect-lost','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mdn':
            seElement.classList.add('effect-darkness');
            seElement.classList.remove('effect-chaos','effect-danger','effect-dragon','effect-legend','effect-generic-classic','effect-lost','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mcs':
            seElement.classList.add('effect-chaos');
            seElement.classList.remove('effect-danger','effect-dragon','effect-legend','effect-generic-classic','effect-lost','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mdr':
            seElement.classList.add('effect-danger');
            seElement.classList.remove('effect-chaos','effect-dragon','effect-legend','effect-generic-classic','effect-lost','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-darkness','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mdu':
            seElement.classList.add('effect-dungeon');
            seElement.classList.remove('effect-chaos','effect-dragon','effect-legend','effect-generic-classic','effect-lost','effect-hero','effect-hundemon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mdg':
            seElement.classList.add('effect-dragon');
            seElement.classList.remove('effect-chaos','effect-legend','effect-generic-classic','effect-lost','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mgr_c':
            seElement.classList.add('effect-generic-classic');
            seElement.classList.remove('effect-chaos','effect-dragon','effect-legend','effect-lost','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mhw':
            seElement.classList.add('effect-hero');
            seElement.classList.remove('effect-chaos','effect-dragon','effect-legend','effect-generic-classic','effect-lost','effect-hundemon', 'effect-dungeon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mhm':
            seElement.classList.add('effect-hundemon');
            seElement.classList.remove('effect-chaos','effect-dragon','effect-legend','effect-generic-classic','effect-lost','effect-hero', 'effect-dungeon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mls':
            seElement.classList.add('effect-lost');
            seElement.classList.remove('effect-chaos','effect-dragon','effect-legend','effect-generic-classic','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mmw':
            seElement.classList.add('effect-magic');
            seElement.classList.remove('effect-chaos','effect-dragon','effect-legend','effect-generic-classic','effect-lost','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-darkness', 'effect-danger', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
        case 'mst_c':
            seElement.classList.add('effect-star-classic');
            seElement.classList.remove('effect-chaos','effect-dragon','effect-legend','effect-generic-classic','effect-lost','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star', 'effect-ancient');
            break;
        case 'mst':
            seElement.classList.add('effect-star');
            seElement.classList.remove('effect-chaos','effect-dragon','effect-legend','effect-generic-classic','effect-lost','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-ancient');
            break;
        default:
            seElement.classList.remove('effect-chaos','effect-dragon','effect-legend','effect-generic-classic','effect-lost','effect-hero','effect-hundemon', 'effect-dungeon', 'effect-darkness', 'effect-danger','effect-magic', 'effect-star-classic', 'effect-star', 'effect-ancient');
            break;
    }
});

document.getElementById('world-selector').addEventListener('change', function () {
    var nubElement = document.getElementById('textbox');
    var selectedValue = this.value;

    switch (selectedValue) {
        case 'mlw':
            nubElement.classList.add('z1');
            nubElement.classList.remove('z2');
            break;
        case 'mdu':
            nubElement.classList.add('z2');
            nubElement.classList.remove('z1');
            break;
        case 'mdr':
            nubElement.classList.add('z2');
            nubElement.classList.remove('z1');
            break;
        case 'mhw':
            nubElement.classList.add('z2');
            nubElement.classList.remove('z1');
            break;
        case 'mst_c':
            nubElement.classList.add('z2');
            nubElement.classList.remove('z1');
            break;
        case 'mst':
            nubElement.classList.add('z2');
            nubElement.classList.remove('z1');
            break;
        case 'maw':
            nubElement.classList.add('z2');
            nubElement.classList.remove('z1');
            break;
        default:
            nubElement.classList.remove('z1', 'z2');
            break;
    }
});