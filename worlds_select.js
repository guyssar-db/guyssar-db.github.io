document.getElementById('world-selector').addEventListener('change', updateImage);
document.getElementById('world-selector2').addEventListener('change', updateImage);
document.getElementById('world-selector3').addEventListener('change', updateImage);
document.getElementById('type-selector').addEventListener('change', updateImage);

function updateImage() {
    const TypeSelect = document.getElementById('type-selector').value;
    const world = document.getElementById('world-selector').value;
    const worldl = document.getElementById('world-selector2').value;
    const worldr = document.getElementById('world-selector3').value;
    
    if(TypeSelect == 'dual_monster')
        {
        document.getElementById('worldsduall').src = `./assets/size/${worldl}.png`;
        document.getElementById('worldsdualr').src = `./assets/size/${worldr}.png`;

        document.getElementById('worlds').src = '';

    }
    else if (TypeSelect == 'monster') {
        document.getElementById('worlds').src = `./assets/size/${world}.png`;
        
        document.getElementById('worldsduall').src = '';
        document.getElementById('worldsdualr').src = '';
    }
    else {
        document.getElementById('worlds').src = '';
        document.getElementById('worldsduall').src = '';
        document.getElementById('worldsdualr').src = '';
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

document.getElementById('nameascheck').addEventListener('change', function () {
    const nameasImage = document.getElementById('nameas');
    const textnameasImage = document.getElementById('text-name-as');
    if (this.checked) {
        nameasImage.classList.remove('none');
        textnameasImage.classList.remove('none');
    } else {
        nameasImage.classList.add('none');
        textnameasImage.classList.add('none');
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
    document.getElementById('att-text').classList.remove('legendatt');

    document.getElementById('power-text').classList.remove('dragonpower');
    document.getElementById('power-text-copy').classList.remove('dragonpowercopy');
    document.getElementById('cri-text').classList.remove('dragoncri');
    document.getElementById('cri-text-copy').classList.remove('dragoncricopy');
    document.getElementById('def-text').classList.remove('dragondef');
    document.getElementById('def-text-copy').classList.remove('dragondefcopy');
    document.getElementById('name-text').classList.remove('dragonname');
    document.getElementById('name-text-copy').classList.remove('dragonnamecopy');
    document.getElementById('att-text').classList.remove('dragonatt');



    document.getElementById('legendW').classList.add('none');



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


        document.getElementById('power-text').classList.add('Mdungeonpower');
        document.getElementById('power-text-copy').classList.add('Mdungeonpowercopy');
        document.getElementById('cri-text').classList.add('Mdungeoncri');
        document.getElementById('cri-text-copy').classList.add('Mdungeoncricopy');
        document.getElementById('def-text').classList.add('Mdungeondef');
        document.getElementById('def-text-copy').classList.add('Mdungeondefcopy');
        document.getElementById('name-text').classList.add('dungeonname');
        document.getElementById('name-text-copy').classList.add('dungeonnamecopy');
    document.getElementById('att-text').classList.add('dungeonatt');

    } else if (this.value === 'mdg'){
        document.getElementById('power-text').classList.remove('none');
        document.getElementById('power-text-copy').classList.remove('none');
        document.getElementById('cri-text').classList.remove('none');
        document.getElementById('cri-text-copy').classList.remove('none');
        document.getElementById('def-text').classList.remove('none');
        document.getElementById('def-text-copy').classList.remove('none');
        document.getElementById('name-text').classList.remove('none');
        document.getElementById('name-text-copy').classList.remove('none');
        document.getElementById('att-text').classList.remove('none');

        document.getElementById('power-text').classList.add('dragonpower');
        document.getElementById('power-text-copy').classList.add('dragonpowercopy');
        document.getElementById('cri-text').classList.add('dragoncri');
        document.getElementById('cri-text-copy').classList.add('dragoncricopy');
        document.getElementById('def-text').classList.add('dragondef');
        document.getElementById('def-text-copy').classList.add('dragondefcopy');
        document.getElementById('name-text').classList.add('dragonname');
        document.getElementById('name-text-copy').classList.add('dragonnamecopy');
        document.getElementById('att-text').classList.add('dragonatt');
    }
});

