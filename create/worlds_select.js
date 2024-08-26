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


document.getElementById('chaoscheck').addEventListener('change', function() {
    const chaosImage = document.getElementById('chaos');
    if (this.checked) {
        chaosImage.classList.remove('none');
    } else {
        chaosImage.classList.add('none');
    }
});

document.getElementById('hundemoncheck').addEventListener('change', function() {
    const hundredImage = document.getElementById('hundred');
    if (this.checked) {
        hundredImage.classList.remove('none');
    } else {
        hundredImage.classList.add('none');
    }
});

    document.getElementById('world-selector').addEventListener('change', function() {

    document.getElementById('Mlegendpower').classList.add('none');
    document.getElementById('Mlegendpowercopy').classList.add('none');
    document.getElementById('Mlegenddef').classList.add('none');
    document.getElementById('Mlegenddefcopy').classList.add('none');
    document.getElementById('Mlegendcri').classList.add('none');
    document.getElementById('Mlegendcricopy').classList.add('none');
    document.getElementById('legendname').classList.add('none');
    document.getElementById('legendnamecopy').classList.add('none');
    document.getElementById('legendatt').classList.add('none');
    document.getElementById('legendW').classList.add('none');
    document.getElementById('div-legend').classList.add('none');

    document.getElementById('Mdangerpower').classList.add('none');
    document.getElementById('Mdangerpowercopy').classList.add('none');
    document.getElementById('Mdangerdef').classList.add('none');
    document.getElementById('Mdangerdefcopy').classList.add('none');
    document.getElementById('Mdangercri').classList.add('none');
    document.getElementById('Mdangercricopy').classList.add('none');
    document.getElementById('dangeratt').classList.add('none');
    document.getElementById('dangername').classList.add('none');
    document.getElementById('dangernamecopy').classList.add('none');
    document.getElementById('div-danger').classList.add('none');

    document.getElementById('Mdungeonpower').classList.add('none');
    document.getElementById('Mdungeonpowercopy').classList.add('none');
    document.getElementById('Mdungeondef').classList.add('none');
    document.getElementById('Mdungeondefcopy').classList.add('none');
    document.getElementById('Mdungeoncri').classList.add('none');
    document.getElementById('Mdungeoncricopy').classList.add('none');
    document.getElementById('dungeonatt').classList.add('none');
    document.getElementById('dungeonname').classList.add('none');
    document.getElementById('dungeonnamecopy').classList.add('none');
    document.getElementById('div-dungeon').classList.add('none');


    if (this.value === 'mlw') {
        document.getElementById('Mlegendpower').classList.remove('none');
        document.getElementById('Mlegendpowercopy').classList.remove('none');
        document.getElementById('Mlegenddef').classList.remove('none');
        document.getElementById('Mlegenddefcopy').classList.remove('none');
        document.getElementById('Mlegendcri').classList.remove('none');
        document.getElementById('Mlegendcricopy').classList.remove('none');
        document.getElementById('legendname').classList.remove('none');
        document.getElementById('legendnamecopy').classList.remove('none');
        document.getElementById('legendatt').classList.remove('none');
        document.getElementById('legendW').classList.remove('none');
        document.getElementById('div-legend').classList.remove('none');
    } else if (this.value === 'mdr') {
        document.getElementById('Mdangerpower').classList.remove('none');
        document.getElementById('Mdangerpowercopy').classList.remove('none');
        document.getElementById('Mdangerdef').classList.remove('none');
        document.getElementById('Mdangerdefcopy').classList.remove('none');
        document.getElementById('Mdangercri').classList.remove('none');
        document.getElementById('Mdangercricopy').classList.remove('none');
        document.getElementById('dangeratt').classList.remove('none');
        document.getElementById('dangername').classList.remove('none');
        document.getElementById('dangernamecopy').classList.remove('none');
        document.getElementById('div-danger').classList.remove('none');
    }else if (this.value === 'mdu') {
        document.getElementById('Mdungeonpower').classList.remove('none');
        document.getElementById('Mdungeonpowercopy').classList.remove('none');
        document.getElementById('Mdungeondef').classList.remove('none');
        document.getElementById('Mdungeondefcopy').classList.remove('none');
        document.getElementById('Mdungeoncri').classList.remove('none');
        document.getElementById('Mdungeoncricopy').classList.remove('none');
        document.getElementById('dungeonatt').classList.remove('none');
        document.getElementById('dungeonname').classList.remove('none');
        document.getElementById('dungeonnamecopy').classList.remove('none');
        document.getElementById('div-dungeon').classList.remove('none');
    }
});

