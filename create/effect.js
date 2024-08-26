document.getElementById('teb').addEventListener('input', function() {
    let inputText = this.value;

    inputText = inputText.replace(/1turn/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/1 per Turn Rag.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/1game/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/1 per Game Rag.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/1set/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/1 per set.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/anturn/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Ablility Name.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/cnturn/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Card Name.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/callcost/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Call Cost.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/castcost/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Cast Cost.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/equipcost/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Equip Cost.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/2attack/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Double Attack.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/3attack/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/triple Attack.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/4attack/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Quadruple Attack.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/6attack/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Hextuple Attack.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/counter/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Counter.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/cattack/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Counter Attack.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/move/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Move.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/soulguard/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Soulguard.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/penetrate/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Penetrate.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/ambush/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Ambush.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/life1/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Link 1.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/life2/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Link 2.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/life3/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Link 3.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/life4/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Link 4.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/life5/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Link 5.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/lifelose/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Lose.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/\[\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/nctext.png" alt="Image" class="nctext"></span>');
    inputText = inputText.replace(/\[b\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/bnctext.png" alt="Image" class="nctext"></span>');
    inputText = inputText.replace(/omnilord/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Omni Lord-1.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/darkomni/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Omni Lord-2.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/ovt/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Overturn.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/ovk/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Overkill.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/ovh/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Overthrow.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/weaponlink/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Weaponry Link.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/ambush/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Ambush.png" alt="Image" class="Iskill"></span>');
    inputText = inputText.replace(/<</g, '<a class="skk">《</a>');
    inputText = inputText.replace(/>>/g, '<a class="skk">》</a>');


    let lines = inputText.split('\n');
    let outputHtml = lines.map(line => `<p id='addline'>${line}</p>`).join('');

    document.getElementById('se').innerHTML = outputHtml;

    let worldValue = document.getElementById('world-selector').value;
    let pCount = document.getElementById('se').getElementsByTagName('p').length;
    if (worldValue) {
        document.getElementById('mdu-textbox').src = `./assets/textbox/${worldValue}e${pCount}.png`;
    }

});