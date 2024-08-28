document.getElementById('world-selector').addEventListener('change', updateImage);
document.getElementById('size-selector').addEventListener('change', updateImage);

function updateImage() {
    const world = document.getElementById('world-selector').value;
    const size = document.getElementById('size-selector').value;

    if (world && size) {
        document.getElementById('worlds').src = `./assets/size/${world}${size}.png`;
    } else {
        document.getElementById('worlds').src = '';
    }
}


document.getElementById('chaoscheck').addEventListener('change', function () {
    const chaosImage = document.getElementById('chaos');
    if (this.checked) {
        chaosImage.classList.remove('none');
    } else {
        chaosImage.classList.add('none');
    }
});

document.getElementById('hundemoncheck').addEventListener('change', function () {
    const hundredImage = document.getElementById('hundred');
    if (this.checked) {
        hundredImage.classList.remove('none');
    } else {
        hundredImage.classList.add('none');
    }
});

document.getElementById('world-selector').addEventListener('change', function () {

    //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
    //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
    //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//

    document.getElementById('power-text').classList.add('none');
    document.getElementById('power-text-copy').classList.add('none');
    document.getElementById('cri-text').classList.add('none');
    document.getElementById('cri-text-copy').classList.add('none');
    document.getElementById('def-text').classList.add('none');
    document.getElementById('def-text-copy').classList.add('none');
    document.getElementById('name-text').classList.add('none');
    document.getElementById('name-text-copy').classList.add('none');
    document.getElementById('att-text').classList.add('none');

    //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
    //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
    //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//
    //==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//==//


    document.getElementById('power-text').classList.remove('Mdangerpower');
    document.getElementById('power-text-copy').classList.remove('Mdangerpowercopy');
    document.getElementById('cri-text').classList.remove('Mdangercri');
    document.getElementById('cri-text-copy').classList.remove('Mdangercricopy');
    document.getElementById('def-text').classList.remove('Mdangerdef');
    document.getElementById('def-text-copy').classList.remove('Mdangerdefcopy');
    document.getElementById('name-text').classList.remove('dangername');
    document.getElementById('name-text-copy').classList.remove('dangernamecopy');
    document.getElementById('att-text').classList.remove('dangeratt');


    document.getElementById('power-text').classList.remove('Mdungeonpower');
    document.getElementById('power-text-copy').classList.remove('Mdungeonpowercopy');
    document.getElementById('cri-text').classList.remove('Mdungeoncri');
    document.getElementById('cri-text-copy').classList.remove('Mdungeoncricopy');
    document.getElementById('def-text').classList.remove('Mdungeondef');
    document.getElementById('def-text-copy').classList.remove('Mdungeondefcopy');
    document.getElementById('name-text').classList.remove('dungeonname');
    document.getElementById('name-text-copy').classList.remove('dungeonnamecopy');
    document.getElementById('att-text').classList.remove('dungeonatt');


    document.getElementById('power-text').classList.remove('Mlegendpower');
    document.getElementById('power-text-copy').classList.remove('Mlegendpowercopy');
    document.getElementById('cri-text').classList.remove('Mlegendcri');
    document.getElementById('cri-text-copy').classList.remove('Mlegendcricopy');
    document.getElementById('def-text').classList.remove('Mlegenddef');
    document.getElementById('def-text-copy').classList.remove('Mlegenddefcopy');
    document.getElementById('name-text').classList.remove('legendname');
    document.getElementById('name-text-copy').classList.remove('legendnamecopy');
    document.getElementById('att-text').classList.remove('legendratt');




    document.getElementById('legendW').classList.add('none');
    document.getElementById('div-legend').classList.add('none');

    document.getElementById('div-danger').classList.add('none');

    document.getElementById('div-dungeon').classList.add('none');


    if (this.value === 'mlw') {
        document.getElementById('power-text').classList.remove('none');
        document.getElementById('power-text-copy').classList.remove('none');
        document.getElementById('cri-text').classList.remove('none');
        document.getElementById('cri-text-copy').classList.remove('none');
        document.getElementById('def-text').classList.remove('none');
        document.getElementById('def-text-copy').classList.remove('none');
        document.getElementById('name-text').classList.remove('none');
        document.getElementById('name-text-copy').classList.remove('none');
        document.getElementById('att-text').classList.remove('none');



        document.getElementById('legendW').classList.remove('none');
        document.getElementById('div-legend').classList.remove('none');
        document.getElementById('power-text').classList.add('Mlegendpower');
        document.getElementById('power-text-copy').classList.add('Mlegendpowercopy');
        document.getElementById('cri-text').classList.add('Mlegendcri');
        document.getElementById('cri-text-copy').classList.add('Mlegendcricopy');
        document.getElementById('def-text').classList.add('Mlegenddef');
        document.getElementById('def-text-copy').classList.add('Mlegenddefcopy');
        document.getElementById('name-text').classList.add('legendname');
        document.getElementById('name-text-copy').classList.add('legendnamecopy');
    document.getElementById('att-text').classList.add('legendatt');


    } else if (this.value === 'mdr') {
        document.getElementById('power-text').classList.remove('none');
        document.getElementById('power-text-copy').classList.remove('none');
        document.getElementById('cri-text').classList.remove('none');
        document.getElementById('cri-text-copy').classList.remove('none');
        document.getElementById('def-text').classList.remove('none');
        document.getElementById('def-text-copy').classList.remove('none');
        document.getElementById('name-text').classList.remove('none');
        document.getElementById('name-text-copy').classList.remove('none');
        document.getElementById('att-text').classList.remove('none');


        document.getElementById('div-danger').classList.remove('none');
        document.getElementById('power-text').classList.add('Mdangerpower');
        document.getElementById('power-text-copy').classList.add('Mdangerpowercopy');
        document.getElementById('cri-text').classList.add('Mdangercri');
        document.getElementById('cri-text-copy').classList.add('Mdangercricopy');
        document.getElementById('def-text').classList.add('Mdangerdef');
        document.getElementById('def-text-copy').classList.add('Mdangerdefcopy');
        document.getElementById('name-text').classList.add('dangername');
        document.getElementById('name-text-copy').classList.add('dangernamecopy');
        document.getElementById('att-text').classList.add('dangeratt');


    } else if (this.value === 'mdu') {
        document.getElementById('power-text').classList.remove('none');
        document.getElementById('power-text-copy').classList.remove('none');
        document.getElementById('cri-text').classList.remove('none');
        document.getElementById('cri-text-copy').classList.remove('none');
        document.getElementById('def-text').classList.remove('none');
        document.getElementById('def-text-copy').classList.remove('none');
        document.getElementById('name-text').classList.remove('none');
        document.getElementById('name-text-copy').classList.remove('none');
        document.getElementById('att-text').classList.remove('none');


        document.getElementById('div-dungeon').classList.remove('none');
        document.getElementById('power-text').classList.add('Mdungeonpower');
        document.getElementById('power-text-copy').classList.add('Mdungeonpowercopy');
        document.getElementById('cri-text').classList.add('Mdungeoncri');
        document.getElementById('cri-text-copy').classList.add('Mdungeoncricopy');
        document.getElementById('def-text').classList.add('Mdungeondef');
        document.getElementById('def-text-copy').classList.add('Mdungeondefcopy');
        document.getElementById('name-text').classList.add('dungeonname');
        document.getElementById('name-text-copy').classList.add('dungeonnamecopy');
    document.getElementById('att-text').classList.add('dungeonatt');

    }
});

