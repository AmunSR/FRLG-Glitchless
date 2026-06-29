//im an amateur and not a programmer. i do realize that this whole code could have been probably written way more better. im not responsible for your heart attack caused by looking at this code

const nat = document.querySelector("#nat");
const healpoints = document.querySelector("#healpoints");
const attack = document.querySelector("#attack");
const defense = document.querySelector("#defense");
const spattack = document.querySelector("#spattack");
const spdefense = document.querySelector("#spdefense");
const speed = document.querySelector("#speed");
const lab = document.querySelector("#lab");
const btn = document.querySelector("button");
const ctch = document.querySelector("#ctch");
const speevs = document.querySelector("#speevs");
const xshopping = document.querySelector("#xshopping");

document.querySelectorAll('input[name="moonoptional"]').forEach(radio => {
    radio.addEventListener('change', updateAll);
});

document.querySelector('#ctch').addEventListener('change', updateAll);
document.querySelector('#speevs').addEventListener('input', updateAll);

function updateAll() {
    let nature = nat.value;
    let hp = parseFloat(healpoints.value);
    let atk = parseFloat(attack.value);
    let def = parseFloat(defense.value);
    let spa = parseFloat(spattack.value);
    let spd = parseFloat(spdefense.value);
    let spe = parseFloat(speed.value);



    let slave = ctch.value;
    let evs = parseFloat(speevs.value);
    let checkedRadio = document.querySelector('input[name="moonoptional"]:checked');
    let optional = checkedRadio ? checkedRadio.value : "josh";


    // if (nature === "modest") {
    //     lab.innerHTML = `Bulbasaur: Tail Whip, Tackle spam`;
    // } else {
    //     lab.innerHTML = `Bulbasaur: Tackle spam`;
    // }

    const r1 = document.querySelector("#r1");
    if (nature === "modest" || atk < 21) {
        r1.innerHTML = `
        <ul>
            <li>Can grab the Potion from mart guy.</li>
            <li>Kill any level 2 or 3 Pidgey/Rattata along the way (<b>do not</b> kill level 2 Pidgey + level 2 something).</li>
            <ul>
                <li><b>Do not</b> kill a level 3 Pidgey.</li>
            </ul>
            <li>Swap Tail Whip with Tackle turn 1 before reaching level 7 (Select + A + A).</li>
            <li>Catch Pidgey/Rattata if you come across them (Bubble/Tackle once to weaken).</li>
        </ul>`;
    } else {
        r1.innerHTML = `
        <ul>
            <li>Can grab the Potion from mart guy.</li>
            <li>Kill any level 2 or 3 Pidgey/Rattata along the way (<b>do not</b> kill level 2 Pidgey + level 2 something).</li>
            <li>Swap Tail Whip with Tackle turn 1 before reaching level 7 (Select + A + A).</li>
            <li>Catch Pidgey/Rattata if you come across them (Bubble/Tackle once to weaken).</li>
        </ul>`;
    }

    const viridian = document.querySelector("#viridian");
    let antidote = '';

    if (nature === "mild" && def >= 7 || nature !== "mild" && def <= 6){
        if (hp <= 2){
            antidote = "7";
        } else if (hp === 24 || hp === 31){
            antidote = "5";
        } else {
            antidote = "6";
        }
    } else if (nature !== "mild" && def >= 7) {
        if (hp <= 1){
            antidote = "6";
        } else if (hp === 24){
            antidote = "4";
        } else {
            antidote = "5"
        }
    }

    if (hp < 12) {
        viridian.innerHTML = `
        <ul>
            <li>Grab the Antidote and optionally the Potion.</li>
            <li>Let the Bug Catcher walk to you from the middle tile if not grabbing the Potion.</li>
            <li><h3>Bug Catcher Sammy</h3></li>
            <ul>
                <li>Weedle: Tail Whip, Tackle spam</li>
                <ul>
                    <li>Swap Tail Whip with Tackle turn 1 if you haven't already (Right + Select, A + A).</li>
                    <li>Spam Bubble if level 7.</li>
                    <li>Poison Sting damage: 3(4)</li>
                    <li>Poison damage at level 6: 2</li>
                    <li>Poison damage at level 7: 2</li>
                </ul>
                <li>If poisoned, use Antidote at <b>${antidote} HP</b> after the fight.</li>
            </ul>
        </ul>`;
    } else {
        viridian.innerHTML = `
        <ul>
            <li>Grab the Antidote and optionally the Potion.</li>
            <li>Let the Bug Catcher walk to you from the middle tile if not grabbing the Potion.</li>
            <li><h3>Bug Catcher Sammy</h3></li>
            <ul>
                <li>Weedle: Tail Whip, Tackle spam</li>
                <ul>
                    <li>Swap Tail Whip with Tackle turn 1 if you haven't already (Right + Select, A + A).</li>
                    <li>Spam Bubble if level 7.</li>
                    <li>Poison Sting damage: 3(4)</li>
                    <li>Poison damage at level 6: 2</li>
                    <li>Poison damage at level 7: 3</li>
                </ul>
                <li>If poisoned, use Antidote at <b>${antidote} HP</b> after the fight.</li>
            </ul>
        </ul>`;
    }

    const pewter = document.querySelector("#pewter");
    let liam = '';
    let geodude = '';
    let geodude1 = '';
    let onixt = '';
    let onixt1 = '';
    let onixrt = '';
    let onixrt1 = '';
    let speedtieonix = '';

    switch (nature) {
        case "mild":
            switch (true) {
                case (def < 4):
                    liam = "7-8(9)";
                    break;
                case (def < 26):
                    liam = "6-7(8)";
                    break;
                default:
                    liam = "(5)6(7)";
            }
            switch (true) {
                case (def < 10):
                    geodude = "6-7(8)";
                    geodude1 = "5(6)";
                    break;
                case (def < 20):
                    geodude = "5(6)7";
                    geodude1 = "4(5)";
                    break;
                default:
                    geodude = "5(6)7";
                    geodude1 = "4(5)";
            }
            switch (true) {
                case (def < 7):
                    onixrt = "11-12(13)";
                    onixrt1 = "7-8(9)";
                    onixt = "5(6)";
                    onixt1 = "4(5)";
                    break;
                case (def > 24):
                    onixrt = "10-11(12)";
                    onixrt1 = "7-8(9)";
                    onixt = "5(6)";
                    onixt1 = "3(4)";
                    break;
                default:
                    onixrt = "10-11(12)";
                    onixrt1 = "7-8(9)";
                    onixt = "5(6)";
                    onixt1 = "4(5)";
            }
            break;

        case "rash":
        case "modest":
            switch (true) {
                case (def < 4):
                    liam = "6-7(8)";
                    break;
                default:
                    liam = "(5)6(7)";
            }
            switch (true) {
                case (def < 30):
                    geodude = "(5)6(7)";
                    break;
                default:
                    geodude = "5(6)";
            }
            geodude1 = "4(5)";
            switch (true) {
                case (def < 7):
                    onixrt = "10-11(12)";
                    onixrt1 = "7-8(9)";
                    break;
                default:
                    onixrt = "8-9(10)";
                    onixrt1 = "(5)6(7)";
            }
            switch (true) {
                case (def < 16):
                    onixt = "5(6)";
                    onixt1 = "3(4)";
                    break;
                default:
                    onixt = "4(5)";
                    onixt1 = "3(4)";
            }
    }

    if (spe <= 23){
        speedtieonix = `${spe} Speedties at -1`
    } else {
        speedtieonix = `${spe} Outspeeds at -1`
    }

    pewter.innerHTML = `
    <ul>
        <li><h3>Camper Liam</h3></li>
        <ul>
            <li>Geodude: <span class="torrent">Bubble</span> (x2)</li>
            <li>Sandshrew: <span class="torrent">Bubble</span> x2-4</li>
            <ul>
                <li>Scratch damage: ${liam}</li>
            </ul>
        </ul>
        <li><h3>Brock</h3></li>
        <ul>
            <li>Geodude: <span class="torrent">Bubble</span> (x2)</li>
            <ul>
                <li>87.5% (14/16) to OHKO at level 11 without torrent.</li>
                <li>Can Withdraw turn 1 if needed.</li>
                <li>Tackle damage: ${geodude}</li>
                <li>Tackle damage at +1: ${geodude1}</li>
            </ul>
            <li>
                <div>
                    <span>Onix: <span class="torrent">Bubble</span> (x2)</span>   
                    <span class="speedtie">${speedtieonix}</span> 
                </div>
            </li>
            <ul>
                <li>56.25% (9/16) to OHKO in torrent.</li>
                <li>Teach Water Gun over Tail Whip (Mash A)</li>
                <li>If you drop speed with Bubble, it will Rock Tomb you at 24+ Speed.</li>
                <li>Rock Tomb damage: ${onixrt}</li>
                <li>Tackle damage: ${onixt}</li>
                <li>Rock Tomb damage at +1 Def: ${onixrt1}</li>
                <li>Tackle damage at +1 Def: ${onixt1}</li>
            </ul>
        </ul>
    </ul>`;

    const r3 = document.querySelector("#r3");
    let r3spa = '';
    let r3slaves = '';
    let persim = '';
    let l14 = '';
    let l15 = '';
    let speedtiebug1 = '';

    switch (spa) {
        case 30:
            r3spa = "<li>Both Caterpie are 93.75% (15/16) to OHKO in Torrent.</li>";
            break;
        case 31:
            r3spa = '';
            break;

    }
    switch (slave) {
        case "bird":
            r3slaves = '<li>Catch a <b>BIRD</b> here (Bubble to weaken, Tackle if in torrent).</li>';
            break;
        case "both":
            r3slaves = '<li>Catch a <b>BIRD</b> (Bubble to weaken, Tackle if in torrent) and optionally Nidoran (Bubble to weaken) here.</li>';
            break
    }

    if (optional !== "josh") {
        if (nature === "rash") {
            if ((spd <= 4) || (spd <= 14 && def >= 12) || (spd >= 15 && def >= 27)) {
                persim = 'Grab Persim Berry.'
            } else {
                persim = 'Skip Persim Berry.'
            }
        } else if (nature === "modest") {
            if ((spd <= 19 && def >= 27)) {
                persim = 'Grab Persim Berry.'
            } else {
                persim = 'Skip Persim Berry.'
            }
        } else {
            persim = 'Skip Persim Berry.'
        }
    } else {
        if (nature === "rash") {
            if ((def <= 12 && spd >= 5) || (def >= 13 && def <= 27 && spd >= 15)) {
                persim = 'Skip Persim Berry.'
            } else {
                persim = 'Grab Persim Berry.'
            }
        } else if (nature === "modest") {
            if ((def <= 27)) {
                persim = 'Skip Persim Berry.'
            } else {
                persim = 'Grab Persim Berry.'
            }
        } else {
            persim = 'Skip Persim Berry.'
        }
    }

    if (hp === 27){
        l14 = "3";
    } else {
        l14 = "2";
    }

    if (spe <= 29){
        speedtiebug1 = `${spe} Speedties at -1`
    } else {
        speedtiebug1 = `${spe} Outspeeds at -1`
    }

    r3.innerHTML = `
        <ul>
            <li><h3>Bug Catcher Colton</h3></li>
            <ul>
                <li>Caterpie: <span class="torrent">Water Gun</span> (x2)</li>
                <ul>
                    ${r3spa}
                </ul>
                <li>Weedle: <span class="torrent">Water Gun</span> (x2)</li>
                <li>Caterpie: <span class="torrent">Water Gun</span> (x2)</li>
                <ul>
                <li><b>+${l14} HP</b> after level up.</li>
</ul>
            </ul>
            <li><h3>Bug Catcher Greg</h3></li>
            <ul>
                <li>
                <div>
                    <span>Weedle: <span class="torrent">Water Gun</span> (x2)</span>
                    <span class="speedtie">${speedtiebug1}</span>
                </div>
                </li>
                <li>
                <div>
                    <span>Caterpie: <span class="torrent">Water Gun</span> (x2)</span>
                    <span class="speedtie">${spe} Speedties at -1</span>
                </div>
                </li>
                <li>Kakuna: <span class="torrent">Water Gun</span> (x2)</li>
                <li>
                <div>
                    <span>Metapod: <span class="torrent">Water Gun</span> (x2)</span>
                    <span class="speedtie">${spe} Speedties at -2</span>
                    </div>
                </li>
            </ul>
            <li><h3>Bug Catcher James</h3></li>
            <ul>
                <li>
                <div>
                    <span>Caterpie: <span class="torrent">Water Gun</span> (x2)</span>
                    <span class="speedtie">${spe} Speedties at -1</span>
                </div>
                </li>
                <li>
                <div>
                    <span>Metapod: <span class="torrent">Water Gun</span> (x2)</span>
                    <span class="speedtie">${spe} Speedties at -2</span>
                    </div>
                </li>
            </ul><br>
            ${r3slaves}
            <li>${persim}</li>
        </ul>
     `

    const whichoptional = document.querySelector("#whichoptional");
    const mtmoon = document.querySelector("#mtmoon");
    let caterpiehp = '';
    let ratqa1 = '';
    let ratqa2 = '';
    let wiskyhf = '';
    let wiskyqa = '';
    let poisongas = '';
    let voltorbt = '';
    let voltorbt2 = '';
    let koffingt = '';
    let koffings = '';
    let paras = '';
    let speedtievoltorb = '';
    let s15 = Math.floor(((2 * 44 + hp + Math.floor(3 / 4)) * 15) / 100) + 15 + 10;
    let w16 = Math.floor(((2 * 59 + hp + Math.floor(6 / 4)) * 16) / 100) + 16 + 10;
    let t15 = Math.floor(s15/3);
    let plusfor16 = t15 - (w16 - s15);

    if (spe === 25 || spe === 28 || spe === 29 || spe === 31 && evs === 2){
        whichoptional.innerHTML = `
        <li>Please fight Josh.</li>
        <li>Fight Bug Catcher if your HP ≤ ${plusfor16} in torrent for level 16</li>
        `
    } else {
        whichoptional.innerHTML=`
        <li>Fight Bug Catcher if your HP ≤ ${plusfor16} in torrent for level 16</li>
        `
    }



    if (hp <= 23 || hp >= 26 && hp <= 29){
        caterpiehp = '2';
    } else {
        caterpiehp = '3';
    }

    if (nature === "mild" && def <= 7){
        ratqa1 = '(5)6(7)';
    } else {
        ratqa1 = '5(6)';
    }

    if (nature === "mild" && def <= 27 || nature !== "mild" && def <= 7){
        ratqa2 = '(5)6(7)';
    } else {
        ratqa2 = '5(6)';
    }

    if (nature === "mild"){
        wiskyhf = '12-14(15)';
        wiskyqa = '7-8(9)';
    } else if (nature !== "mild" && def <= 14){
        wiskyhf = '12-14(15)';
        wiskyqa = '7-8(9)';
    } else if (nature !== "mild" && def >= 15){
        wiskyhf = '11-12(13)';
        wiskyqa = '(5)6(7)';
    }

    if (hp <= 18){
        poisongas = '5';
    } else {
        poisongas = '6';
    }


    if (nature !== "mild" && def <= 8){
        voltorbt = '2(3)';
        voltorbt2 = '4(5)';
    } else if (nature !== "mild" && def >= 9){
        voltorbt = '2(3)';
        voltorbt2 = '3(4)';
    } else if (nature === "mild"){
        voltorbt = '2(3)';
        voltorbt2 = '4(5)';
    }

    if (slave === "rat"){
        paras = '<li><b>FireRed</b>: Catch a Paras right before you exit Mt. Moon.</li><img src="img/paras.png" alt="paras">';
    } else if (slave === "both"){
        paras = '<li><b>FireRed</b>: If you havent caught Nidoran before, catch a Paras right before you exit Mt. Moon.</li><img src="img/paras.png" alt="paras">';
    }

    if (optional !== "josh" && spe >= 25 && spe <= 30 || optional === "josh" && spe >= 24 && spe <= 29){
        speedtievoltorb = `${spe} Speedties`
    } else if (optional !== "josh" && spe === 31 || optional === "josh" && spe >= 30){
        speedtievoltorb = `${spe} Outspeeds`
    } else {
        speedtievoltorb = `${spe} Slower`
    }

    mtmoon.innerHTML = `
    <li><h3>Bug Catcher Robby</h3></li>
            <ul>
                <li>Caterpie: <span class="torrent">Water Gun</span></li>
                <li>Caterpie: <span class="torrent">Water Gun</span></li>
                <li>Caterpie: <span class="torrent">Water Gun</span></li>
                <ul>
                    <li>+${caterpiehp} HP upon level up and +5 HP upon evolution</li>
                </ul>
            </ul>
            <li><h3>Youngster Josh</h3></li>
            <ul>
                <li>Rattata: <span class="torrent">Water Gun</span></li>
                <ul>
                    <li>(!) Quick Attack damage: ${ratqa1}</li>
                </ul>
                <li>Rattata: <span class="torrent">Water Gun</span></li>
                <ul>
                    <li>(!) Quick Attack damage: ${ratqa2}</li>
                </ul>
                <li>Zubat: <span class="torrent">Water Gun</span></li>
                <ul>
                    <li>62.5% (10/16) to OHKO in torrent</li>
                </ul>
            </ul>
            <li><h3>Wisky Wocket</h3></li>
            <ul>
                <li>Rattata: <span class="torrent">Water Gun</span> (x2)</li>
                <ul>
                    <li>Hyper Fang damage: ${wiskyhf}</li>
                    <li>(!) Quick Attack damage: ${wiskyqa}</li>
                    <li>62.5% (10/16) to OHKO in torrent</li>
                </ul>
                <li>Sandshrew: <span class="torrent">Water Gun</span></li>
            </ul>
            <li><h3>Rocket Grunt</h3></li>
            <ul>
                <li>Rattata: <span class="torrent">Water Gun</span> (x2)</li>
                <li>Zubat: <span class="torrent">Water Gun</span> (x2)</li>
                <ul><li>Both OHKO in torrent</li></ul>
            </ul>
            <li><h3>Super Nerd Miguel</h3></li>
            <ul>
                <li>Grimer: Water Gun x2</li>
                <ul>
                    <li>If you can survive two turns of Poison and a Tackle then use Antidote on Voltorb.</li>
                    <li>Poison damage : ${poisongas}</li>
                    <li>Pound damage: 4(5)</li>
                </ul>
                <li>
                <div>
                    <span>Voltorb: <span class="torrent">Water Gun</span> (x2)</span>
                    <span class="speedtie">${speedtievoltorb}</span>
                </div>
                </li>
                <ul>
                    <li>56.25% (9/16) to OHKO in Torrent</li>
                    <li>Tackle damage: ${voltorbt}</li>
                    <li>Tackle damage at -2 Def: ${voltorbt2}</li>
                </ul>
                <li>Koffing: <span class="torrent">Water Gun</span> (x2)</li>
                <ul>
                    <li>Swap Water Gun with Tackle (Select + A + A)</li>
                    <li>87.5% (14/16) to OHKO in Torrent</li>
                    <li>If poisoned, Antidote immediately if you need a Rattata/Sandshrew/Paras. Otherwise skip and revive with a Rare Candy in Cerulean City.
                    </li>
                </ul>
            </ul><br>
            ${paras}
    `

    const sandshrew = document.querySelector("#sandshrew")
    let shrew = '';

    if (slave === "both" || slave === "rat"){
        shrew = '<li><b>LeafGreen</b>: If you have no Cut slave, catch a Sandshrew/Rattata in the grass (Tackle to weaken).</li><ul><li>Can teach Strength to Sandshrew later if caught.</li><li>If you died, using a Rare Candy will revive Wartortle.</li></ul>';
    }

    sandshrew.innerHTML = `
    ${shrew}
    `

    const starmiee = document.querySelector("#starmiee")
    let swift = '';
    let starwp = '';

    if (nature === "mild") {
        switch (true) {
            case (def <= 1):
                swift = '13-15(16)';
                break;
            case (def >= 2 && def <= 21):
                swift = '12-14(15)';
                break;
            case (def >= 22):
                swift = '11-13(14)';
                break;
        }
    } else {
        switch (true){
            case (def <= 11): swift = '11-13(14)'; break;
            case (def >= 12 && def <= 26): swift = '11-12(13)'; break;
            case (def >= 27): swift = '10-11(12)'; break;
        }
    }

    if (nature !== "rash"){
        switch (true) {
            case (spd <= 19): starwp = '10-11(12)'; break;
            case (spd >= 20): starwp = '9-10(11)'; break;
        }
    } else {
        switch (true){
            case (spd <= 4): starwp = '11-13(14)'; break;
            case (spd >= 5 && spd <= 14): starwp = '11-12(13)'; break;
            case (spd >= 15): starwp = '10-11(12)'; break;
        }
    }

    starmiee.innerHTML = `
    Starmie: Bite, (Tackle), Bite
    <ul>
        <li>Tackle if low roll on the first Bite</li>
        <li>Swift damage: ${swift}</li>
        <li>Water Pulse damage: ${starwp}</li>
    </ul>
    `

    const rival2 = document.querySelector("#rival2");
    let pidgeotto2 = '';
    let bulba2 = '';
    let ratqa = '';
    let speedtieabra = '';

    if (optional !== "josh"){
        if (nature === "mild" || nature !== "mild" && def <= 13){
            pidgeotto2 = '7-8(9)';
        } else if (nature !== "mild" && def >= 14){
            pidgeotto2 = '5-6(7)'
        }
    } else {
        if (nature === "mild" || nature !== "mild" && def <= 14){
            pidgeotto2 = '7-8(9)';
        } else if (nature !== "mild" && def >= 15){
            pidgeotto2 = '5-6(7)'
        }
    }

    if (nature === "rash"){
        if (spd <= 20){
            bulba2 = "17-19(20)";
        } else if (spd >= 21 || nature !== "rash"){
            bulba2 = "15-17(18)";
        }
    } else {
        bulba2 = "15-17(18)";
    }

    if (optional !== "josh") {
        if (nature === "mild") {
            if (def <= 13) {
                ratqa = "7-8(9)";
            } else {
                ratqa = "5-6(7)";
            }
        } else {
            ratqa = "5-6(7)"
        }
    } else {
        if (nature === "mild"){
            ratqa = "5-6(7)";
        } else{
            ratqa = "5-6(7)";
        }
    }

    if (optional !== "josh" && spe <= 24 || optional === "josh" && spe <= 23){
        speedtieabra = `${spe} Speedties`
    } else {
        speedtieabra = `${spe} Outspeeds`
    }

    let fhp22 = '';
    let fhp23 = '';
    let fhp24 = '';
    let fhp25 = '';
    let fhp26 = '';
    let fhp27 = '';

    if (optional !== "robby"){
        fhp22 = Math.floor(((2 * 59 + hp + Math.floor(5 / 4)) * 22) / 100) + 22 + 10;
        fhp23 = Math.floor(((2 * 59 + hp + Math.floor(6 / 4)) * 23) / 100) + 23 + 10;
        fhp24 = Math.floor(((2 * 59 + hp + Math.floor(7 / 4)) * 24) / 100) + 24 + 10;
        fhp25 = Math.floor(((2 * 59 + hp + Math.floor(8 / 4)) * 25) / 100) + 25 + 10;
        fhp26 = Math.floor(((2 * 59 + hp + Math.floor(8 / 4)) * 26) / 100) + 26 + 10;
        fhp27 = Math.floor(((2 * 59 + hp + Math.floor(8 / 4)) * 27) / 100) + 27 + 10;
    } else {
        fhp22 = Math.floor(((2 * 59 + hp + Math.floor(7 / 4)) * 22) / 100) + 22 + 10;
        fhp23 = Math.floor(((2 * 59 + hp + Math.floor(8 / 4)) * 23) / 100) + 23 + 10;
        fhp24 = Math.floor(((2 * 59 + hp + Math.floor(9 / 4)) * 24) / 100) + 24 + 10;
        fhp25 = Math.floor(((2 * 59 + hp + Math.floor(10 / 4)) * 25) / 100) + 25 + 10;
        fhp26 = Math.floor(((2 * 59 + hp + Math.floor(10 / 4)) * 26) / 100) + 26 + 10;
        fhp27 = Math.floor(((2 * 59 + hp + Math.floor(10 / 4)) * 27) / 100) + 27 + 10;
    }

    let t22 = Math.floor(fhp22/3);
    let t23 = Math.floor(fhp23/3);
    let t24 = Math.floor(fhp24/3);
    let t25 = Math.floor(fhp25/3);
    let t26 = Math.floor(fhp26/3);
    let t27 = Math.floor(fhp27/3);

    let plusfor23 = fhp23 - fhp22;

    let plusfor26 = fhp26 - fhp22;
    let plusfor27 = fhp27 - fhp22;


    rival2.innerHTML = `
    <li>Pidgeotto: Bite, Water Pulse</li>
    <ul>
        <li>Lead with Water Pulse if Quick Attack puts you in torrent</li>
        <li>25% (4/16) to OHKO with Water Pulse Torrent</li>
        <li>(!) Quick Attack damage: ${pidgeotto2}</li>
    </ul>
    <li>Bulbasaur: Bite, Mega Kick</li>
    <ul>
        <li>Vine Whip damage: ${bulba2}</li>
    </ul>
    <li>
    <div>
        <span>Abra: Water Pulse</span>
        <span class="speedtie">${speedtieabra}</span>
    </div>
    </li>
    <ul>
        <li>WATER PULSE IS IN SLOT 1</li>
        <li>81.25% (13/16) to OHKO</li>
    </ul>
    <li>Rattata: Water Pulse</li>
    <ul>
        <li>(!) Quick Attack damage: ${ratqa}</li>
    </ul><br>
    <li>Torrent at level 22: <b>${t22}</b>/${fhp22}</li>
    <ul>
        <li><b>+${plusfor26} HP</b> upon level 26 (Torrent: ${t26}/${fhp26})</li>
        <li><b>+${plusfor27} HP</b> upon level 27 (Torrent: ${t27}/${fhp27})</li>
    </ul>
    
    `

    const torrent23 = document.querySelector("#torrent23");
    torrent23.innerHTML = `
    <li>Torrent at level 23: <b>${t23}</b>/${fhp23}</li>
    `

    const torrent24 = document.querySelector("#torrent24");
    torrent24.innerHTML = `
    <li>Torrent at level 24: <b>${t24}</b>/${fhp24}</li>
    `

    const jeff = document.querySelector("#jeff");
    let jeffqa = '';

    if (nature === "mild" || nature !== "mild" && def <= 10){
        jeffqa = "7-8(9)";
    } else {
        jeffqa = "(5)6(7)";
    }

    jeff.innerHTML = `
    <li>Spearow: Water Pulse</li>
    <li>Raticate: <span class="torrent">Water Pulse</span>/Mega Kick</li>
    <ul><li>(!) Quick Attack damage: ${jeffqa}</li></ul>
    <li>Torrent at level 26: <b>${t26}</b>/${fhp26}</li>
    <li>Torrent at level 27: <b>${t27}</b>/${fhp27}</li>
    `

    const mart = document.querySelector("#mart");
    if (slave === "rat" || slave === "both"){
        mart.innerHTML = `<li>Skip Paralyze Heal if on Paras shopping route.</li><li>Can buy an extra Super Potion here if on Paras shopping route.</li>`
    }

    const ssanne = document.querySelector("#ssanne");
    let r3lvlup = '';
    let qa26 = '';
    let qa27 = '';
    let vw26 = '';
    let vw27 = '';
    let ivyrange26 = '';
    let ivyrange27 = '';
    let ratqa26 = '';
    let ratqa27 = '';
    let kad26 = '';
    let kad27 = '';

    if (hp === 3 || hp === 6 || hp === 10 || hp === 14 || hp === 18 || hp === 21 || hp === 22 || hp === 25 || hp === 26 || hp === 29){
        r3lvlup = 3
    } else {
        r3lvlup = 2
    }

    if (optional !== "josh") {
        switch (true) {
            case (nature === "mild" && def <= 27):
            case (nature === "rash" && def <= 5):
            case (nature === "modest" && def <= 5):
                qa27 = "7-8(9)";
                break;
            case (nature === "mild" && def >= 28):
            case (nature === "rash" && def >= 6):
            case (nature === "modest" && def >= 6):
                qa27 = "(5)6(7)";
                break;
        }
        switch (true) {
            case (nature === "mild"):
            case ((nature === "rash" || nature === "modest") && def <= 12):
                qa26 = "7-8(9)";
                break;
            case ((nature === "rash" || nature === "modest") && def >= 13):
                qa26 = "(5)6(7)";
                break;
        }
    } else {
        switch (true) {
            case (nature === "mild" && def <= 28):
            case (nature === "rash" && def <= 6):
            case (nature === "modest" && def <= 6):
                qa27 = "7-8(9)";
                break;
            case (nature === "mild" && def >= 29):
            case (nature === "rash" && def >= 7):
            case (nature === "modest" && def >= 7):
                qa27 = "(5)6(7)";
                break;
        }
        switch (true) {
            case (nature === "mild"):
            case ((nature === "rash" || nature === "modest") && def <= 13):
                qa26 = "7-8(9)";
                break;
            case ((nature === "rash" || nature === "modest") && def >= 14):
                qa26 = "(5)6(7)";
                break;
        }
    }

    if (nature === "rash"){
        if (spd <= 14){
            vw27 = "20-23(24)";
        } else {
            vw27 = "17-19(20)";
        }
    } else {
        if (spd <= 25){
            vw27 = "17-19(20)";
        } else {
            vw27 = "15-17(18)";
        }
    }

    if (nature === "rash"){
        if (spd <= 20){
            vw26 = "20-23(24)";
        } else {
            vw26 = "17-19(20)";
        }
    } else {
        vw26 = "17-19(20)";
    }

    if (nature === "modest"){
        switch (atk){
            case 21: ivyrange26 = "10.16%"; ivyrange27 = "63.28%"; break;
            case 22: ivyrange26 = "22.66%"; ivyrange27 = "63.28%"; break;
            case 23: ivyrange26 = "22.66%"; ivyrange27 = "63.28%"; break;
            case 24: ivyrange26 = "22.66%"; ivyrange27 = "75.78%"; break;
            case 25: ivyrange26 = "22.66%"; ivyrange27 = "75.78%"; break;
            case 26: ivyrange26 = "50%"; ivyrange27 = "75.78%"; break;
            case 27: ivyrange26 = "50%"; ivyrange27 = "75.78%"; break;
            case 28: ivyrange26 = "50%"; ivyrange27 = "85.94%"; break;
            case 29: ivyrange26 = "50%"; ivyrange27 = "85.94%"; break;
            case 30: ivyrange26 = "64.45%"; ivyrange27 = "85.94%"; break;
            case 31: ivyrange26 = "64.45%"; ivyrange27 = "85.94%"; break;
        }
    } else {
        switch (atk){
            case 3: ivyrange26 = "22.66%"; ivyrange27 = "63.28%"; break;
            case 4: ivyrange26 = "22.66%"; ivyrange27 = "63.28%"; break;
            case 5: ivyrange26 = "22.66%"; ivyrange27 = "63.28%"; break;
            case 6: ivyrange26 = "22.66%"; ivyrange27 = "75.78%"; break;
            case 7: ivyrange26 = "50%"; ivyrange27 = "75.78%"; break;
            case 8: ivyrange26 = "50%"; ivyrange27 = "75.78%"; break;
            case 9: ivyrange26 = "50%"; ivyrange27 = "75.78%"; break;
            case 10: ivyrange26 = "50%"; ivyrange27 = "85.94%"; break;
            case 11: ivyrange26 = "64.45%"; ivyrange27 = "85.94%"; break;
            case 12: ivyrange26 = "64.45%"; ivyrange27 = "85.94%"; break;
            case 13: ivyrange26 = "64.45%"; ivyrange27 = "94.53%"; break;
            case 14: ivyrange26 = "64.45%"; ivyrange27 = "94.53%"; break;
            case 15: ivyrange26 = "76.56%"; ivyrange27 = "94.53%"; break;
            case 16: ivyrange26 = "76.56%"; ivyrange27 = "94.53%"; break;
            case 17: ivyrange26 = "76.56%"; ivyrange27 = "99.22%"; break;
            case 18: ivyrange26 = "76.56%"; ivyrange27 = "99.22%"; break;
            case 19: ivyrange26 = "88.28%"; ivyrange27 = "99.22%"; break;
            case 20: ivyrange26 = "88.28%"; ivyrange27 = "99.22%"; break;
            case 21: ivyrange26 = "88.28%"; ivyrange27 = "100%"; break;
            case 22: ivyrange26 = "96.09%"; ivyrange27 = "100%"; break;
            case 23: ivyrange26 = "96.09%"; ivyrange27 = "100%"; break;
            case 24: ivyrange26 = "96.09%"; ivyrange27 = "100%"; break;
            case 25: ivyrange26 = "96.09%"; ivyrange27 = "100%"; break;
            case 26: ivyrange26 = "100%"; ivyrange27 = "100%"; break;
            case 27: ivyrange26 = "100%"; ivyrange27 = "100%"; break;
            case 28: ivyrange26 = "100%"; ivyrange27 = "100%"; break;
            case 29: ivyrange26 = "100%"; ivyrange27 = "100%"; break;
            case 30: ivyrange26 = "100%"; ivyrange27 = "100%"; break;
            case 31: ivyrange26 = "100%"; ivyrange27 = "100%"; break;
        }
    }

    if (optional !== "josh"){
        if (nature === "mild"){
            ratqa27 = "7-8(9)";
        } else {
            if (def <= 21){
                ratqa27 = "7-8(9)";
            } else {
                ratqa27 = "(5)6(7)";
            }
        }
    } else {
        if (nature === "mild"){
            ratqa27 = "7-8(9)";
        } else {
            if (def <= 22){
                ratqa27 = "7-8(9)";
            } else {
                ratqa27 = "(5)6(7)";
            }
        }
    }

    if (optional !== "josh"){
        if (nature === "mild"){
            ratqa26 = "7-8(9)";
        } else {
            if (def <= 28){
                ratqa26 = "7-8(9)";
            } else {
                ratqa26 = "(5)6(7)";
            }
        }
    }  else {
        if (nature === "mild"){
            ratqa26 = "7-8(9)";
        } else {
            if (def <= 29){
                ratqa26 = "7-8(9)";
            } else {
                ratqa26 = "(5)6(7)";
            }
        }
    }

    if (nature === "rash"){
        if (spd <= 6){
            kad27 = "15-17(18)";
        } else if (spd >= 7 && spd <= 28){
            kad27 = "13-15(16)";
        } else {
            kad27 = "12-14(15)";
        }
    } else {
        if (spd <= 6){
            kad27 = "13-15(16)";
        } else if (spd >= 7 && spd <= 28){
            kad27 = "12-14(15)";
        } else {
            kad27 = "11-12(13)";
        }
    }

    if (nature === "rash"){
        if (spd <= 13){
            kad26 = "15-17(18)";
        } else {
            kad26 = "13-15(16)";
        }
    } else {
        if (spd <= 13){
            kad26 = "13-15(16)";
        } else {
            kad26 = "12-14(15)";
        }
    }

    ssanne.innerHTML = `
    <li>Before fighting the rival:</li>
    <ul>
        <li>Rare Candy to level 27 if you do not level out of torrent.</li>
            <ul><li>+${r3lvlup} HP upon level up</li></ul>
        <li>Ether Mega Kick if you have not already.</li>
        <li>Keep Torrent if you are still in it and will not die to a (!) Quick Attack.</li>
    </ul>
    <li><h3>Rival 3</h3></li>
    <ul>
        <li>Pidgeotto: <span class="torrent">Water Pulse</span> or Water Pulse, Bite</li>
        <ul>
            <li>(!) Quick Attack damage at <b>level 26</b>: ${qa26}</li>
            <li>(!) Quick Attack damage at <b>level 27</b>: ${qa27}</li>
        </ul>
        <li>Ivysaur: Bite, Mega Kick</li>
        <ul>
            <li>Vine Whip damage at <b>level 26</b>: ${vw26}</li>
            <li>Vine Whip damage at <b>level 27</b>: ${vw27}</li>
            <li>${ivyrange26} to 2HKO at <b>level 26</b></li>
            <li>${ivyrange27} to 2HKO at <b>level 27</b></li>
        </ul>
        <li>Raticate: <span class="torrent">Water Pulse</span>/Mega Kick</li>
            <ul>
                <li>(!) Quick Attack damage at <b>level 26</b>: ${ratqa26}</li>
                <li>(!) Quick Attack damage at <b>level 27</b>: ${ratqa27}</li>
            </ul>
            <li>Kadabra (careful – it's faster than you!): Bite/<span class="torrent">Water Pulse</span></li>
            <ul>
                <li>Bite if you used Water Pulse on Raticate (it can Disable)</li>
                <li>Confusion damage at <b>level 26</b>: ${kad26}</li>
                <li>Confusion damage at <b>level 27</b>: ${kad27}</li>
            </ul>
    </ul>
        
    `

    const tucker = document.querySelector("#tucker");
    const surge = document.querySelector("#surge")
    let sw = '';
    let raichuqa = '';
    let raichuqa2 = '';
    let speedtiepika = '';
    let speedtievolt = '';

    if (nature === "rash"){
        if (spd <= 7){
            sw = "(42)43-49(50)";
        } else if (spd >= 8 && spd <= 22){
            sw = "(40)41-47(48)";
        } else {
            sw = "37-43(44)";
        }
    } else {
        if (spd === 0){
            sw = "(40)41-47(48)";
        } else if (spd >= 1 && spd <= 11){
            sw = "37-43(44)";
        } else if (spd >= 12 && spd <= 29){
            sw = "(35)36-41(42)";
        } else {
            sw = "32-37(38)";
        }
    }

    if (nature === "mild"){
        if (def <= 21){
            raichuqa = "7-8(9)";
            raichuqa2 = "14-16(17)";
        } else {
            raichuqa = "7-8(9)";
            raichuqa2 = "13-15(16)";
        }
    } else {
        if (def === 0){
            raichuqa = "7-8(9)";
            raichuqa2 = "14-16(17)";
        } else if (def >= 1 && def <= 14){
            raichuqa = "7-8(9)";
            raichuqa2 = "13-15(16)";
        } else if (def >= 15 && def <= 28){
            raichuqa = "6-7(8)";
            raichuqa2 = "12-14(15)";
        } else {
            raichuqa = "6-7(8)";
            raichuqa2 = "(11)12-13(14)";
        }
    }
    
    if (optional !== "josh"){
        if (spe < 25){
            speedtiepika = `${spe} Slower`
        } else if (spe > 27){
            speedtiepika = `${spe} Outspeeds`
        } else {
            speedtiepika = `${spe} Speedties`
        }
    } else {
        if (spe < 24){
            speedtiepika = `${spe} Slower`
        } else if (spe > 26){
            speedtiepika = `${spe} Outspeeds`
        } else {
            speedtiepika = `${spe} Speedties`
        }
    }
    
    if (optional !== "josh"){
        if (spe < 28){
            speedtievolt = `${spe} Slower`
        } else {
            speedtievolt = `${spe} Speedties`
        }
    } else {
        if (spe < 27){
            speedtievolt = `${spe} Slower`
        } else if (spe === 31){
            speedtievolt = `${spe} Outspeeds`
        } else {
            speedtievolt = `${spe} Speedties`
        }
    }

    tucker.innerHTML=`
    <div>
        <span>Pikachu: Water Pulse</span>
        <span class="speedtie">${speedtiepika}</span>
    </div>
    `

    surge.innerHTML = `
    <li>
    <div>
        <span>Voltorb: Water Pulse</span>
        <span class="speedtie">${speedtievolt}</span>
    </div>
    </li>
    <ul>
        <li>Swap Water Gun with Water Pulse (Select + A + A)</li>
        <li>81.25% (13/16) to OHKO</li>
    </ul>
    <li>Pikachu: Water Pulse</li>
    <li>Raichu: Water Pulse, <span class="torrent">Water Pulse</span> or Water Pulse, Mega Kick</li>
    <ul>
        <li>Shock Wave damage: ${sw}</li>
        <li>(!) Quick Attack damage: ${raichuqa}</li>
        <li>(!) Quick Attack damage at -2 Def: ${raichuqa2}</li>
        <li>Surge has one Super Potion and one Full Heal</li>
    </ul>
    `

    const veno = document.querySelector("#veno");
    let venospa = '';
    let venoatk = '';

    if (spa === 30){
        venospa = "37.5% (6/16) to OHKO without Torrent"
    } else {
        venospa = "43.75% (7/16) to OHKO without Torrent"
    }

    function venomk(nature, atk) {
        if (nature === "modest") {
            if (atk <= 23) return "Don't use Mega Kick";
            if (atk >= 24 && atk <= 27) return "37.5% (6/16) to OHKO with Mega Kick";
            if (atk >= 28 && atk <= 31) return "43.75% (7/16) to OHKO with Mega Kick";
        } else {
            if (atk <= 6) return "Don't use Mega Kick";
            if (atk >= 7 && atk <= 9)   return "37.5% (6/16) to OHKO with Mega Kick";
            if (atk >= 10 && atk <= 13) return "43.75% (7/16) to OHKO with Mega Kick";
            if (atk >= 14 && atk <= 16) return "56.25% (9/16) to OHKO with Mega Kick";
            if (atk >= 17 && atk <= 20) return "68.75% (11/16) to OHKO with Mega Kick";
            if (atk >= 21 && atk <= 23) return "81.25% (13/16) to OHKO with Mega Kick";
            if (atk >= 24 && atk <= 27) return "93.75% (15/16) to OHKO with Mega Kick";
            if (atk >= 28 && atk <= 31) return "100% to OHKO with Mega Kick";
        }
        return '';
    }
    venoatk = venomk(nature, atk);

    veno.innerHTML = `
    <li>${venospa}</li>
    <li>${venoatk}</li>
    `

    const rt = document.querySelector("#rt");
    let sp1 = '';
    let sp2 = '';
    let rtoddish = '';
    let mbulba = '';

    if (spa === 31){
        sp1 = "25% (4/16) to OHKO";
        sp2 = "18.75% (3/16) to OHKO";
    } else {
        sp1 = "12.5% (2/16) to OHKO";
        sp2 = "6.25% (1/16) to OHKO";
    }

    function oddishmk(nature, atk){
        if (nature === "modest") {
            if (atk === 21) return "37.5% (6/16) to OHKO with Mega Kick";
            if (atk >= 22 && atk <= 28) return "50% (8/16) to OHKO with Mega Kick";
            if (atk >= 29) return "56.25% (9/16) to OHKO with Mega Kick";
        } else {
            if (atk >= 4 && atk <= 5) return "37.5% (6/16) to OHKO with Mega Kick";
            if (atk >= 6 && atk <= 8) return "50% (8/16) to OHKO with Mega Kick";
            if (atk >= 9 && atk <= 11) return "56.25% (9/16) to OHKO with Mega Kick";
            if (atk >= 12 && atk <= 15) return "68.75% (11/16) to OHKO with Mega Kick";
            if (atk >= 16 && atk <= 18) return "81.25% (13/16) to OHKO with Mega Kick";
            if (atk >= 19 && atk <= 21) return "87.5% (14/16) to OHKO with Mega Kick";
            if (atk >= 22) return "100% to OHKO with Mega Kick";
        }
    }
    rtoddish = oddishmk(nature, atk);

    if (nature === "rash"){
        if (spd <= 16){
            mbulba = "22-25(26)";
        } else {
            mbulba = "20-23(24)";
        }
    } else {
        if (spd <= 26){
            mbulba = "20-23(24)";
        } else {
            mbulba = "17-19(20)";
        }
    }

    rt.innerHTML = `
    <li>Use Repel as needed.</li>
    <ul>
        <li>Use Elixir on Repel menu if necessary for Mega Kick PP.</li>
    </ul><br>
    <img src="img/rt1.png" alt="rock tunnel 1">
    <li><h3>Pokemaniac Ashton</h3></li>
    <ul>
        <li>Cubone: Water Gun</li>
        <li>Slowpoke: Bite (x2)</li>
        <ul><li>${sp1}</li></ul>
    </ul><br>
    <img src="img/rt2.png" alt="im a great graphic designer">
    <li><h3>Pokemaniac Winston</h3></li>
    <ul>
        <li>Slowpoke: Bite (x2)</li>
        <ul><li>${sp2}</li></ul>
    </ul>
    <li><h3>Jr Trainer Martha</h3></li>
    <ul>
        <li>Oddish: Mega Kick or Bite, Bite</li>
        <ul><li>${rtoddish}</li></ul>
        <li>Bulbasaur: Mega Kick</li>
        <ul><li>Razor Leaf damage: ${mbulba}</li></ul>
    </ul>
    <li><h3>Hiker Allen</h3></li>
    <ul><li>Geodude: Water Gun</li></ul><br>
    <img src="img/rt3.png" alt="rock tunnel 3">
    <li><h3>Hiker Oliver</h3></li>
    <ul>
        <li>Onix: Bite (x2)</li>
        <ul><li>81.3% to OHKO</li></ul>
        <li>Onix: Water Gun</li>
        <li>Geodude: Bite</li>
    </ul><br>
    <img src="img/rt4.png" alt="rock tunnel 4"><br><br>
    <li><u>Elixir now on Repel menu if you haven't before.</u></li><br>
    <li>Jr Trainer Sofia</li>
    <ul>
        <li>Jigglypuff: <span class="torrent">Water Gun</span>/Water Pulse</li>
        <li>Pidgey: <span class="torrent">Water Gun</span>/Water Pulse</li>
        <li>Meowth: <span class="torrent">Water Gun</span>/Water Pulse</li>
    </ul>
    <li><h3>Hiker Dudley</h3></li>
    <ul>
        <li>Geodude: Bite</li>
        <li>Geodude: Bite</li>
        <li>Graveler: Water Gun</li>
    </ul><br>
    <img src="img/rt5.png" alt="rock tunnel 5">
    <li><h3>Jr Trainer Dana</h3></li>
    <ul>
        <li>Meowth: Bite</li>
        <li>Oddish: Mega Kick</li>
        <ul><li>Check how many Mega Kick you have here.</li></ul>
        <li>Pidgey: Bite</li>
    </ul>
    </img>
    `

    const hideout = document.querySelector("#hideout");
    let ratqa3 = '';
    let sandrange1 = '';
    let sandrange2 = '';
    let arbok = '';
    let w35 = '';
    let w36 = '';
    let b36 = '';
    let fhp38 = '';
    let fhp39 = '';
    let fhp40 = '';
    let fhp41 = '';
    let fhp44 = '';

    if (nature === "mild"){
        if (def <= 26){
            ratqa3 = "8-9(10)";
        } else {
            ratqa3 = "7-8(9)";
        }
    } else {
        if (def <= 4){
            ratqa3 = "8-9(10)";
        } else {
            ratqa3 = "7-8(9)";
        }
    }

    if (spa === 31){
        sandrange1 = "100% to OHKO";
        sandrange2 = "62.5% (10/16) to OHKO";
        arbok = "62.5% (10/16) to OHKO";
    } else {
        sandrange1 = "87.5% (14/16) to OHKO";
        sandrange2 = "56.25% (9/16) to OHKO";
        arbok = "43.75% (7/16) to OHKO";
    }

    function kangaskhan1 (optional, nature, def) {
        if (optional !== "josh") {
            if (nature === "mild") {
                if (def <= 22) return "25-29(30)";
                if (def >= 23) return "(23)24-27(28)";
            } else {
                if (def <= 11) return "(23)24-27(28)";
                if (def >= 12 && def <= 25) return "(22)23-26(27)";
                if (def >= 26) return "21-24(25)";
            }
        } else {
            if (nature === "mild") {
                if (def <= 23) return "25-29(30)";
                if (def >= 24) return "(23)24-27(28)";
            } else {
                if (def <= 12) return "(23)24-27(28)";
                if (def >= 13 && def <= 26) return "(22)23-26(27)";
                if (def >= 27) return "21-24(25)";
            }
        }
    }
    let mp1 = kangaskhan1(optional, nature, def);

    function kangaskhan2 (optional, nature, def) {
        if (optional !== "josh") {
            if (nature === "mild") {
                if (def <= 22) return "36-42(43)";
                if (def >= 23) return "(35)36-41(42)";
            } else {
                if (def <= 5) return "(35)36-41(42)";
                if (def >= 6 && def <= 14) return "34-39(40)";
                if (def >= 15 && def <= 25) return "33-38(39)";
                if (def >= 26) return "31-36(37)";
            }
        } else {
            if (nature === "mild") {
                if (def <= 23) return "36-42(43)";
                if (def >= 24) return "(35)36-41(42)";
            } else {
                if (def <= 6) return "(35)36-41(42)";
                if (def >= 7 && def <= 15) return "34-39(40)";
                if (def >= 16 && def <= 26) return "33-38(39)";
                if (def >= 27) return "31-36(37)";
            }
        }
    }
    let mp2 = kangaskhan2(optional, nature, def);

    if (optional !== "robby"){
        w35 = Math.floor(((2 * 59 + hp + Math.floor(13 / 4)) * 35) / 100) + 35 + 10;
        w36 = Math.floor(((2 * 59 + hp + Math.floor(13 / 4)) * 36) / 100) + 36 + 10;
        b36 = Math.floor(((2 * 79 + hp + Math.floor(13 / 4)) * 36) / 100) + 36 + 10;
        fhp38 = Math.floor(((2 * 79 + hp + Math.floor(15 / 4)) * 38) / 100) + 38 + 10;
        fhp39 = Math.floor(((2 * 79 + hp + Math.floor(15 / 4)) * 39) / 100) + 39 + 10;
        fhp40 = Math.floor(((2 * 79 + hp + Math.floor(16 / 4)) * 40) / 100) + 40 + 10;
        fhp41 = Math.floor(((2 * 79 + hp + Math.floor(16 / 4)) * 41) / 100) + 41 + 10;
        fhp44 = Math.floor(((2 * 79 + hp + Math.floor(16 / 4)) * 44) / 100) + 44 + 10;
    } else {
        w35 = Math.floor(((2 * 59 + hp + Math.floor(15 / 4)) * 35) / 100) + 35 + 10;
        w36 = Math.floor(((2 * 59 + hp + Math.floor(15 / 4)) * 36) / 100) + 36 + 10;
        b36 = Math.floor(((2 * 79 + hp + Math.floor(15 / 4)) * 36) / 100) + 36 + 10;
        fhp38 = Math.floor(((2 * 79 + hp + Math.floor(17 / 4)) * 38) / 100) + 38 + 10;
        fhp39 = Math.floor(((2 * 79 + hp + Math.floor(17 / 4)) * 39) / 100) + 39 + 10;
        fhp40 = Math.floor(((2 * 79 + hp + Math.floor(18 / 4)) * 40) / 100) + 40 + 10;
        fhp41 = Math.floor(((2 * 79 + hp + Math.floor(18 / 4)) * 41) / 100) + 41 + 10;
        fhp44 = Math.floor(((2 * 79 + hp + Math.floor(18 / 4)) * 44) / 100) + 44 + 10;
    }

    let plusfor36 = Math.floor(w36 - w35);
    let bevo = Math.floor(b36 - w36);
    let t36 = Math.floor(b36/3);
    let t38 = Math.floor(fhp38/3);
    let t39 = Math.floor(fhp39/3);
    let t40 = Math.floor(fhp40/3);
    let t41 = Math.floor(fhp41/3);
    let t44 = Math.floor(fhp44/3);
    let plusfor40 = Math.floor(fhp40 - b36);
    let plusfor41 = Math.floor(fhp41 - b36);
    let plusfor44 = Math.floor(fhp44 - b36);
    let rplusfor40 = Math.floor(fhp40 - fhp38);
    let rplusfor41 = Math.floor(fhp41 - fhp38);
    let rplusfor44 = Math.floor(fhp44 - fhp38);
    let gyarateller1 = Math.floor(t40 - plusfor40);
    let gyarateller2 = Math.floor(t41 - plusfor41);
    let gyarateller3 = Math.floor(t44 - plusfor44);
    let rocketteller1 = Math.floor(t40 - rplusfor40);
    let rocketteller2 = Math.floor(t41 - rplusfor41);
    let rocketteller3 = Math.floor(t44 - rplusfor44);


    hideout.innerHTML=`
    <li><h3>Rocket Grunt</h3></li>
        <ul>
            <li>Raticate: <span class="torrent">Water Pulse</span>/Mega Kick</li>
            <ul>
                <li><b>WATER PULSE IS IN SLOT 2</b></li>
                <li>(!) Quick Attack damage: ${ratqa3}</li>
            </ul>
            <li>Zubat: Water Pulse</li>
        </ul><br>
        <li><u>Grab the Black Glasses before heading downstairs.</u></li><br>
        <li><u>Grab this Max Ether if low on Mega Kick PP.</u></li>
        <img src="img/mether.png" alt="max ether">
        <li><h3>Rocket Grunt (Lift Key Guy)</h3></li>
        <ul>
            <li>Koffing: <span class="torrent">Water Gun</span>/Water Pulse</li>
            <li>Zubat: <span class="torrent">Water Gun</span>/Water Pulse</li>
        </ul><br>
        <li><u>Grab the Rare Candy on the way back.</u></li><br>
        <li>Head towards the elevator to floor B4 (↓) and fight the left Rocket Grunt first.</li>
        <li><h3>Rocket Grunt (Left)</h3></li>
        <ul>
            <li>Sandshrew: Bite</li>
            <ul><li>${sandrange1}</li></ul>
            <li>Sandslash: Water Gun</li>
            <li>Ekans: <span class="torrent">Water Gun</span>/Water Pulse</li>
        </ul>
        <li><h3>Rocket Grunt (Right)</h3></li>
        <ul>
            <li>Ekans: Water Pulse</li>
            <li>Sandshrew: Bite</li>
            <ul>
                <li>${sandrange2} with Bite</li>
                <li>100% to OHKO with Water Gun</li>
            </ul>
            <li>Arbok: <span class="torrent">Water Pulse</span> or Bite, Water Pulse</li>
             <ul>
                <li>${arbok} with <span class="torrent">Water Pulse</span></li>
                <li><b>+${plusfor36} HP</b> upon level up and <b>+${bevo} HP</b> upon evolution.</li>
             </ul>
        </ul><br>
        <li><u>Rare Candy twice to level 36.</u></li>
        <li>Heal to <b>40-50 HP</b>.</li>
        <li><h3>Giovanni</h3></li>
        <ul>
            <li>Onix: Water Gun</li>
            <li>Rhyhorn: Water Gun</li>
            <li>Kangaskhan: Water Pulse x2-3</li>
            <ul>
                <li>98% to 2HKO with Torrent</li>
                <li>Mega Punch damage: ${mp1}</li>
                <li>Mega Punch damage at -1 Def: ${mp2}</li>
            </ul>
            <li>Torrent at level 36: <b>${t36}</b>/${b36}</li>
        </ul>
    `

    const celadonshopping = document.querySelectorAll('input[name="shopping"]');
    const xshopping = document.getElementById("xshopping");

    celadonshopping.forEach(radio => {
        radio.addEventListener('change', updateAll);
    });

    let shoppingroute = document.querySelector('input[name="shopping"]:checked').value;
    let xspeed = '';
    let xspecial = '';

    if (shoppingroute === "xatk"){
        if (spe < 25){
            xspeed = "6";
            xspecial = "17";
        } else if (spe === 25){
            if (optional === "josh" && evs >= 1 || optional === "rocket" && evs >= 3 || evs >= 4){
                xspeed = "5";
                xspecial = "18";
            } else {
                xspeed = "6";
                xspecial = "17";
            }
        } else if (spe >= 26 && spe <= 28){
            xspeed = "5";
            xspecial = "18";
        } else if (spe === 29){
            if (optional === "josh" || optional === "rocket" && evs >= 2 || evs >= 3){
                xspeed = "4";
                xspecial = "19";
            } else {
                xspeed = "5";
                xspecial = "18";
            }
        } else if (spe >= 30){
            xspeed = "4";
            xspecial = "19";
        }

        if (slave === "rat" || slave === "both"){
            xshopping.innerHTML = `
        <li>1x X Attack</li>
        <li>${xspeed}x X Speed (↓↓)</li>
        <li>${xspecial}x X Special (↓)</li>
        <li>5x X Accuracy (↓)</li>
        <li>3x Guard Spec (↓)</li>
        <ul><li>Buy an extra X Special if on Paras shopping route and didn't buy an extra Super Potion.</li></ul>
        `
        } else {
            xshopping.innerHTML = `
        <li>1x X Attack</li>
        <li>${xspeed}x X Speed (↓↓)</li>
        <li>${xspecial}x X Special (↓)</li>
        <li>5x X Accuracy (↓)</li>
        <li>3x Guard Spec (↓)</li>
        `
        }
    } else {
        if (spe < 25){
            xspeed = "6";
            xspecial = "21";
        } else if (spe === 25){
            if (optional === "josh" && evs >= 1 || optional === "rocket" && evs >= 3 || evs >= 4){
                xspeed = "5";
                xspecial = "21";
            } else {
                xspeed = "6";
                xspecial = "17";
            }
        } else if (spe >= 26 && spe <= 28){
            xspeed = "5";
            xspecial = "21";
        } else if (spe === 29){
            if (optional === "josh" || optional === "rocket" && evs >= 2 || evs >= 3){
                xspeed = "4";
                xspecial = "21";
            } else {
                xspeed = "5";
                xspecial = "21";
            }
        } else if (spe >= 30){
            xspeed = "4";
            xspecial = "21";
        }
        if (slave === "rat" || slave === "both") {
            xshopping.innerHTML = `
        <li>${xspeed}x X Speed (↓↓)</li>
        <li>${xspecial}x X Special (↓)</li>
        <li>5x X Accuracy (↓)</li>
        <li>2x Guard Spec (↓)</li>
        <ul><li>Buy an extra X Special if on Paras shopping route and didn't buy an extra Super Potion.</li></ul>
        `
        } else {
            xshopping.innerHTML = `
        <li>${xspeed}x X Speed (↓↓)</li>
        <li>${xspecial}x X Special (↓)</li>
        <li>4x X Accuracy (↓)</li>
        <li>2x Guard Spec (↓)</li>
        `
        }
    }

    const r4 = document.querySelector("#r4");
    let ivyrl = '';
    let ivyrlo = '';
    let thrash = '';


    if (nature === "rash"){
        if (spd <= 3){
            ivyrl = "25-29(30)";
            ivyrlo = "37-43(44)";
        } else if (spd >= 4 && spd <= 20){
            ivyrl = "25-29(30)";
            ivyrlo = "35-41(42)";
        } else if (spd >= 21 && spd <= 23){
            ivyrl = "25-29(30)";
            ivyrlo = "32-37(38)";
        } else {
            ivyrl = "22-25(26)";
            ivyrlo = "32-37(38)";
        }
    } else {
        if (spd <= 14){
            ivyrl = "22-25(26)";
            ivyrlo = "32-37(38)";
        } else if (spd >= 15 && spd <= 28){
            ivyrl = "22-25(26)";
            ivyrlo = "30-35(36)";
        } else {
            ivyrl = "20-23(24)";
            ivyrlo = "30-35(36)";
        }
    }

    if (nature === "mild"){
        if (def <= 20){
            thrash = "15-19(18)";
        } else {
            thrash = "14-16(17)";
        }
    } else {
        if (def <= 9){
            thrash = "14-16(17)";
        } else if (def >= 10 && def <= 26){
            thrash = "13-15(16)";
        } else {
            thrash = "12-14(15)";
        }
    }

    if (shoppingroute === "xatk"){
        r4.innerHTML=`
        <li>Pidgeotto: Guard Spec, X Accuracy, X Attack, <span class="torrent">Water Pulse</span>/Mega Kick</li>
        <ul><li>(!) Quick Attack damage: 7-8(9)</li></ul>
        <li>Ivysaur: Mega Kick</li>
        <ul>
            <li>Razor Leaf damage: ${ivyrl}</li>
            <li>Razor Leaf damage at ⅓ health: ${ivyrlo}</li>
        </ul>
        <li>Gyarados: Mega Kick</li>
        <ul>
            <li>Stall with Water Gun if no Torrent</li>
            <ul>
                <li>Max HP in torrent for Weezing: <b>${gyarateller1}</b></li>
                <li>Max HP in torrent for Arcanine: <b>${gyarateller2}</b></li>
                <li>Max HP in torrent for Erika: <b>${gyarateller3}</b></li>
            </ul>
            <li>Thrash damage: ${thrash}</li>
        </ul>
        <li>Growlithe: Mega Kick/<span class="torrent">Water Gun</span></li>
        <li>Kadabra: <span class="torrent">Water Gun</span>/Water Pulse</li>
        `
    } else {
        r4.innerHTML=`
        <li>Pidgeotto: X Special x2, Bite</li>
        <ul>
            <li>Only use one X Special if in high enough HP to tank an Overgrow Razor Leaf and Thrash.</li>
            <li>Use an X Accuracy on last turn if you get hit by Sand Attack (Yolo if you get hit by it twice).</li>
            <li>(!) Quick Attack damage: 7-8(9)</li>
        </ul>
        <li>Ivysaur: <span class="torrent">Water Pulse</span>/Bite x2</li>
        <ul>
            <li>Water Pulse with Torrent is 81.25% (13/16) to OHKO at +2.</li>
            <li>Bite is 68.75% (11/16) to OHKO at +2.</li>
            <li>Razor Leaf damage: ${ivyrl}</li>
            <li>Razor Leaf damage at ⅓ health: ${ivyrlo}</li>
        </ul>
        <li>Gyarados: Bite x2</li>
        <ul>
            <li>Stall with Water Gun if no Torrent</li>
            <ul>
                <li>Max HP in torrent for Weezing: <b>${gyarateller1}</b></li>
                <li>Max HP in torrent for Arcanine: <b>${gyarateller2}</b></li>
                <li>Max HP in torrent for Erika: <b>${gyarateller3}</b></li>
            </ul>
            <li>Thrash damage: ${thrash}</li>
        </ul>
        <li>Growlithe: Bite</li>
        <li>Kadabra: Water Gun</li>
        `
    }

    const xacc = document.querySelector("#xacc");
    if (shoppingroute !== "xatk"){
        xacc.innerHTML=`
        <li><u>Backup X Accuracy on the next floor after the Haunter Lady</u></li>
        <img src="img/xacc.png" alt="backup x accuracy">
        `
    } else {
        xacc.innerHTML=``
    }

    const lavender = document.querySelector("#lavender");
    let marowak = '';
    let golbat = '';
    let ratqa4 = '';

    if (nature === "mild"){
        if (def <= 15){
            marowak = "16-18(19)";
        } else {
            marowak = "15-17(18)";
        }
    } else {
        if (def <= 12){
            marowak = "15-17(18)";
        } else {
            marowak = "13-15(16)";
        }
    }

    if (spa === 31){
        golbat = "50% (8/16) to OHKO without Torrent."
    } else {
        golbat = "37.5% (6/16) to OHKO without Torrent."
    }

    if (nature !== "mild" && def >= 23){
        ratqa4 = "(5)6(7)";
    } else {
        ratqa4 = "7-8(9)";
    }

    lavender.innerHTML=`
    <li><h3>Ghost Marowak</h3></li>
    <ul>
        <li>Marowak: <span class="torrent">Water Pulse</span></li>
    <ul>
        <li>Mega Kick/Bite for one turn if not in Torrent.</li>
        <li>Bonemerang damage: ${marowak}</li>
    </ul>
    </ul>
    
    <li><h3>Rocket Grunt</h3></li>
    <ul>
        <li>Zubat: <span class="torrent">Water Gun</span></li>
                <li>Zubat: <span class="torrent">Water Gun</span></li>
        <li>Golbat: <span class="torrent">Water Pulse</span></li>
        <ul>
            <li>${golbat}</li>
            <li>If you need damage it is 1/4 to get a damaging move.</li>
        </ul>
    </ul>
    <li><h3>Rocket Grunt</h3></li>
    <ul>
        <li>Koffing: <span class="torrent">Water Gun</span></li>
        <li>Drowzee: <span class="torrent">Water Pulse</span>/Bite</li>
    </ul>
    <li><h3>Rocket Grunt</h3></li>
    <ul>
        <li>Zubat: <span class="torrent">Water Gun</span></li>
        <li>Zubat: <span class="torrent">Water Gun</span></li>
        <li>Rattata: <span class="torrent">Water Gun</span></li>
        <li>Raticate: <span class="torrent">Water Gun</span>/Water Pulse</li>
    <ul>
        <li>(!) Quick Attack damage: ${ratqa4}</li>
        <li>Max HP in torrent for Weezing: <b>${rocketteller1}</b></li>
        <li>Max HP in torrent for Arcanine: <b>${rocketteller2}</b></li>
        <li>Max HP in torrent for Erika: <b>${rocketteller3}</b></li>
    </ul>
    </ul>
    `
    const koga = document.querySelector("#koga");
    let koganine = t41 - (fhp41 - fhp40);
    let kogarika = t44 - (fhp44 - fhp40);


    function ms (nature, def){
        if (nature === "mild"){
            if (def <= 24) return "28-32(33)";
            else return "26-30(31)";
        } else {
            if (def <= 8) return "26-30(31)";
            if (def >= 9 && def <= 21) return "25-29(30)";
            else return "23-27(28)";
        }
    }
    let muk = ms(nature, def);

    function ws (nature, def){
        if (nature === "mild"){
            if (def <= 25) return "31-36(37)";
            else return "30-35(36)";
        } else {
            if (def === 0) return "31-36(37)";
            if (def >= 1 && def <= 10) return "30-35(36)";
            if (def >= 11 && def <= 20) return "28-33(34)";
            else return "28-32(33)"
        }
    }
    let weezing = ws(nature, def);

    koga.innerHTML=`
    <li>Koffing: Surf</li>
    <li>Muk: <span class="torrent">Surf</span>, (X Special), <span class="torrent">Surf</span></li>
    <ul>
        <li>X Special on Muk if <b>60+ HP</b> or if in Weezing kill range after level up.</li>
        <li>Sludge damage: ${muk}</li>
        <li>Poison damage: pierdol sie</li>
    </ul>
    <li>Koffing: Surf</li>
    <li>Weezing: (Bite), <span class="torrent">Surf</span></li>
    <ul>
        <li>Water Pulse, Surf if no Torrent</li>
        <li>37.5% (6/16) to OHKO in Torrent</li>
        <li>Sludge damage: ${weezing}</li>
    </ul>
    <li>Max HP in torrent for Arcanine: <b>${koganine}</b></li>
    <li>Max HP in torrent for Erika: <b>${kogarika}</b></li>
    `

    const growlithe = document.querySelector("#growlithe");
    let td = '';
    let gfb = '';

    if (nature === "mild"){
        if (def <= 25){
            td = "18-21(22)";
        } else {
            td = "(17)18-20(21)";
        }
    } else {
        if (def <= 1){
            td = "18-21(22)";
        } else if (def >= 2 && def <= 13){
            td = "(17)18-20(21)";
        } else if (def >= 14 && def <= 25){
            td = "17-19(20)";
        } else {
            td = "16-18(19)";
        }
    }

    if (nature === "rash"){
        if (spd <= 4){
            gfb = "21-24(25)";
        } else if (spd >= 5 && spd <= 18){
            gfb = "20-23(24)";
        } else if (spd >= 19 && spd <= 26){
            gfb = "19-22(23)";
        } else {
            gfb = "18-21(22)";
        }
    } else {
        if (spd <= 9){
            gfb = "18-21(22)";
        } else if (spd >= 10 && spd <= 26){
            gfb = "(17)18-20(21)";
        } else {
            gfb = "17-19(20)";
        }
    }

    growlithe.innerHTML=`
    <li>Take Down damage: ${td}</li>
    <li>Fire Blast damage: ${gfb}</li>
    `

    const carbos = document.querySelector("#carbos");
    const carbosblaine = document.querySelector("#carbosblaine");
    const carbossabrina = document.querySelector("#carbossabrina");
    let carbo = '';
    let carboblaine = '';
    let carbosabrina = '';

    if (spe === 25){
        if (optional === "josh" && evs >= 1 || optional === "rocket" && evs >= 3 || evs >= 4){
            carbo = "Grab the Carbos for Blaine's Rapidash."
            carboblaine = "<li>Use Carbos NOW (cursor is on Bird!!!).</li>"
        } else {
            carbo = "Skip the Carbos."
        }
    } else if (spe >= 26 && spe <= 27){
        carbo = "Grab the Carbos for Blaine's Rapidash."
        carboblaine = "<li>Use Carbos NOW (cursor is on Bird!!!).</li>"
    } else if (spe === 28){
        if (optional === "josh" || optional === "rocket" && evs >= 2 || evs >= 3){
            carbo = "Skip the Carbos."
        } else {
            carbo = "Grab the Carbos for Blaine's Rapidash."
            carboblaine = "<li>Use Carbos NOW (cursor is on Bird!!!).</li>"
        }
    } else if (spe === 29){
        if (optional === "josh" || optional === "rocket" && evs >= 2 || evs >= 3){
            carbo = "Grab the Carbos for Sabrina's Alakazam."
            carbosabrina = "Use Carbos NOW (cursor <u>might</u> be on Bird)."
        } else {
            carbo = "Skip the Carbos."
        }
    } else if (spe === 30){
        carbo = "Grab the Carbos for Sabrina's Alakazam."
        carbosabrina = "Use Carbos NOW (cursor <u>might</u> be on Bird)."
    } else if (spe === 31){
        if (optional === "josh" && evs >= 2){
            carbo = "Skip the Carbos."
        } else {
            carbo = "Grab the Carbos for Sabrina's Alakazam."
            carbosabrina = "Use Carbos NOW (cursor <u>might</u> be on Bird)."
        }
    } else {
        carbo = "Skip the Carbos."
    }

    carbos.innerHTML=`
    <u>${carbo}</u>
    `
        carbosblaine.innerHTML=`
        ${carboblaine}
        <li>Use Escape Rope.</li>
        `

    const blaine = document.querySelector("#blaine");
    let bounce = '';

    function rapidash (nature, spd){
        if (nature === "rash"){
            if (spd <= 2) return "24-28(29)";
            if (spd >= 3 && spd <= 7) return "(23)24-27(28)";
            if (spd >= 8 && spd <= 21) return "(22)23-26(27)";
            if (spd >= 22 && spd <= 28) return "22-25(26)";
            else return "21-24(25)";
        } else {
            if (spd <= 2) return "22-25(26)";
            if (spd >= 3 && spd <= 9) return "21-24(25)";
            if (spd >= 10 && spd <= 23) return "20-23(24)";
            else return "19-22(23)";
        }
    }
    let rfp = rapidash(nature, spd)

    if (nature === "mild"){
        if (def <= 25){
            bounce = "(22)23-26(27)";
        } else {
            bounce = "21-24(25)";
        }
    } else {
        if (def <= 1){
            bounce = "22-25(26)";
        } else if (def >= 2 && def <= 11){
            bounce = "21-24(25)";
        } else if (def >= 12 && def <= 20){
            bounce = "20-23(24)";
        } else {
            bounce = "19-22(23)";
        }
    }

    if (spe <= 24){
        blaine.innerHTML=`
        <li>Growlithe: X Speed, (X Special), Surf/<span class="torrent">Water Pulse</span></li>
        <ul>
            <li>Use X Special if no Torrent for Arcanine and can't take a hit from Rapidash.</li>
            <li>Use Water Pulse only if low PP on Surf.</li>
            <li>Take Down damage: ${td}</li>
            <li>Fire Blast damage: ${gfb}</li>
        </ul>
        <li>Ponyta: Surf/<span class="torrent">Water Pulse</span></li>
        <li>Rapidash: Surf/<span class="torrent">Water Pulse</span></li>
        <ul>
            <li>Bounce damage: ${bounce}</li>
            <li>Fire Blast damage: ${rfp}</li>
        </ul>
        <li>Arcanine: <span class="torrent">Surf</span></li>
        `
    } else if (spe === 25){
        if (optional === "josh" && evs >= 1 || optional === "rocket" && evs >= 3 || evs >= 4){
            blaine.innerHTML=`
        <li>Growlithe: (X Special), Surf/<span class="torrent">Water Pulse</span></li>
        <ul>
            <li>Use X Special if no Torrent for Arcanine and can't take a hit from Rapidash.</li>
            <li>Use Water Pulse only if low PP on Surf.</li>
            <li>Take Down damage: ${td}</li>
            <li>Fire Blast damage: ${gfb}</li>
        </ul>
        <li>Ponyta: Surf/<span class="torrent">Water Pulse</span></li>
        <li>Rapidash: Surf/<span class="torrent">Water Pulse</span></li>
        <ul>
            <li>Bounce damage: ${bounce}</li>
            <li>Fire Blast damage: ${rfp}</li>
        </ul>
        <li>Arcanine: <span class="torrent">Surf</span></li>
        `
        } else {
            blaine.innerHTML=`
        <li>Growlithe: X Speed, (X Special), Surf/<span class="torrent">Water Pulse</span></li>
        <ul>
            <li>Use X Special if no Torrent for Arcanine and can't take a hit from Rapidash.</li>
            <li>Use Water Pulse only if low PP on Surf.</li>
            <li>Take Down damage: ${td}</li>
            <li>Fire Blast damage: ${gfb}</li>
        </ul>
        <li>Ponyta: Surf/<span class="torrent">Water Pulse</span></li>
        <li>Rapidash: Surf/<span class="torrent">Water Pulse</span></li>
        <ul>
            <li>Bounce damage: ${bounce}</li>
            <li>Fire Blast damage: ${rfp}</li>
        </ul>
        <li>Arcanine: <span class="torrent">Surf</span></li>
        `
        }
    } else {
        blaine.innerHTML=`
        <li>Growlithe: (X Special), Surf/<span class="torrent">Water Pulse</span></li>
        <ul>
            <li>Use X Special if no Torrent for Arcanine and can't take a hit from Rapidash.</li>
            <li>Use Water Pulse only if low PP on Surf.</li>
            <li>Take Down damage: ${td}</li>
            <li>Fire Blast damage: ${gfb}</li>
        </ul>
        <li>Ponyta: Surf/<span class="torrent">Water Pulse</span></li>
        <li>Rapidash: Surf/<span class="torrent">Water Pulse</span></li>
        <ul>
            <li>Bounce damage: ${bounce}</li>
            <li>Fire Blast damage: ${rfp}</li>
        </ul>
        <li>Arcanine: <span class="torrent">Surf</span></li>
        `
    }

    const l44 = document.querySelector("#l44")
    let fhp42 = '';
    if (optional !== "robby"){
        fhp42 = Math.floor(((2 * 79 + hp + Math.floor(16 / 4)) * 42) / 100) + 42 + 10;
    } else {
        fhp42 = Math.floor(((2 * 79 + hp + Math.floor(18 / 4)) * 42) / 100) + 42 + 10;
    }

    let t42 = Math.floor(fhp42/3);
    let eplusfor44 = t42 - (fhp44 - fhp42);

    l44.innerHTML=`<li><u>Max HP here in torrent for level 44: <b>${eplusfor44}</b></u></li>`

    const erika = document.querySelector("#erika");
    let tangela = '';
    let vileplume = '';


    if (nature === "rash"){
        if (spd <= 8){
            tangela = "22-25(26)";
        } else {
            tangela = "20-23(24)";
        }
    } else {
        if (spd <= 19){
            tangela = "20-23(24)";
        } else {
            tangela = "17-19(20)";
        }
    }

    if (nature === "rash"){
        if (spd <= 3){
            vileplume = "30-35(36)";
        } else {
            vileplume = "27-31(32)";
        }
    } else {
        if (spd <= 3){
            vileplume = "27-31(32)";
        } else {
            vileplume = "25-29(30)";
        }
    }

    erika.innerHTML=`
    <li>Victreebell: <span class="torrent">Surf</span>/Blizzard</li>
    <li>Tangela: (X Special), Bite</li>
    <ul>
        <li>Giga Drain damage: ${tangela}</li>
    </ul>
    <li>Vileplume: Blizzard</li>
    <ul>
        <li><span class="torrent">Surf</span> if you used X Special.</li>
        <li>Giga Drain damage: ${vileplume}</li>
    </ul>        
    `
    const silph = document.querySelector("#silph");
    let heal = '';
    let pidgeotwa = '';
    let pidgeotqa = '';
    let fo = '';
    let mp3 = '';
    let l45 = '';
    let l49 = '';

    if (optional !== "robby"){
        l45 = Math.floor(((2 * 79 + hp + Math.floor(16 / 4)) * 45) / 100) + 45 + 10;
        l49 = Math.floor(((2 * 79 + hp + Math.floor(26 / 4)) * 49) / 100) + 49 + 10;
    } else {
        l45 = Math.floor(((2 * 79 + hp + Math.floor(18 / 4)) * 45) / 100) + 45 + 10;
        l49 = Math.floor(((2 * 79 + hp + Math.floor(28 / 4)) * 49) / 100) + 49 + 10;
    }

    let t45 = Math.floor(l45/3);
    let t49 = Math.floor(l49/3);

    let plusfor49 = t49 - (l49 - l45);


    if (nature === "mild"){
        heal = "80 HP";
    } else {
        if (def <= 4){
            heal = "80 HP";
        } else if (def >= 5 && def <= 25){
            heal = "76 HP";
        } else {
            heal = "74 HP";
        }
    }

    if (nature === "mild"){
        pidgeotwa = "17-20(21)";
    } else {
        if (def <= 4){
            pidgeotwa = "17-20(21)";
        } else if (def >= 5 && def <= 25){
            pidgeotwa = "16-18(19)";
        } else {
            pidgeotwa = "15-17(18)";
        }
    }

    if (nature === "mild"){
        pidgeotqa = "12-14(15)";
    } else {
        if (def <= 5){
            pidgeotqa = "12-14(15)";
        } else {
            pidgeotqa = "11-12(13)"
        }
    }

    if (nature === "mild"){
        fo = "13-15(16)";
    } else {
        if (def <= 10){
            fo = "13-15(16)";
        } else {
            fo = "12-14(15)";
        }
    }

    if (nature === "mild"){
        if (def <= 23){
            mp3 = "26-30(31)";
        } else {
            mp3 = "25-29(30)";
        }
    } else {
        if (def <= 10){
            mp3 = "25-29(30)";
        } else if (def >= 11 && def <= 23){
            mp3 = "(23)24-27(28)";
        } else {
            mp3 = "(22)23-26(27)";
        }
    }


    if (spe === 29){
        if (optional === "josh" || optional === "rocket" && evs >= 2 || evs >= 3){
            silph.innerHTML=`
        <li>Take the 3F teleporter from above, run down 1 and then left until one before the scientist and pause. Run below him unless he starts to walk down.</li><br>
        <li>On spinner bag manip (cursor is on Pokemon):</li>
        <ul>
            <li>Use Max Elixir.</li>
            <li>Heal to around <b>${heal}</b>.</li>
            <li>${carbosabrina}</li>
        </ul>
        <li><h3>Rival 5</h3></li>
        <ul>
            <li>Pidgeot: X Special x2, X Accuracy, <span class="torrent">Water Pulse</span>/Surf</li>
            <ul>
                <li>Wing Attack damage: ${pidgeotwa}</li>
                <li>(!) Quick Attack damage: ${pidgeotqa}</li>
            </ul>
            <li>Venusaur: Blizzard</li>
            <li>Gyarados: Blizzard</li>
            <li>Growlithe: Bite</li>
            <li>Alakazam: <span class="torrent">Water Pulse</span>/Surf</li>
            <ul><li>Max HP in torrent for level 49: <b>${plusfor49}</b></li></ul>
        </ul>
        <li><h3>Rocket Grunt</h3></li>
        <ul>
            <li>Cubone: Bite/Water Pulse</li>
            <ul><li>81.25% (13/16) to OHKO with Bite.</li></ul>
            <li>Marowak: Water Pulse</li>
            <li>Drowzee: <span class="torrent">Water Pulse</span></li>
        </ul>
        <li><h3>Giovanni</h3></li>
        <ul>
            <li>Nidorino: <span class="torrent">Surf</span></li>
            <ul><li>Stall with X Special if no torrent for level 49</li></ul>
            <li>Nidoqueen: <span class="torrent">Surf</span></li>
            <li>Kangaskhan: <span class="torrent">Surf</span></li>
            <ul>
                <li>81.25% (13/16) to OHKO.</li>
                <li>(!) Fake Out damage: ${fo}</li>
                <li>Mega Punch damage: ${mp3}</li>
            </ul>
            <li>Rhyhorn: Water Pulse</li>
        </ul>
        `
        } else {
            silph.innerHTML=`
        <li>Take the 3F teleporter from above, run down 1 and then left until one before the scientist and pause. Run below him unless he starts to walk down.</li><br>
        <li>On spinner bag manip (cursor is on Pokemon):</li>
        <ul>
            <li>Use Max Elixir.</li>
            <li>Heal to around <b>${heal}</b>.</li>
        </ul>
        <li><h3>Rival 5</h3></li>
        <ul>
            <li>Pidgeot: X Special x2, X Accuracy, <span class="torrent">Water Pulse</span>/Surf</li>
            <ul>
                <li>Wing Attack damage: ${pidgeotwa}</li>
                <li>(!) Quick Attack damage: ${pidgeotqa}</li>
            </ul>
            <li>Venusaur: Blizzard</li>
            <li>Gyarados: Blizzard</li>
            <li>Growlithe: Bite</li>
            <li>Alakazam: <span class="torrent">Water Pulse</span>/Surf</li>
            <ul><li>Max HP in torrent for level 49: <b>${plusfor49}</b></li></ul>
        </ul>
        <li><h3>Rocket Grunt</h3></li>
        <ul>
            <li>Cubone: Bite/Water Pulse</li>
            <ul><li>81.25% (13/16) to OHKO with Bite.</li></ul>
            <li>Marowak: Water Pulse</li>
            <li>Drowzee: <span class="torrent">Water Pulse</span></li>
        </ul>
        <li><h3>Giovanni</h3></li>
        <ul>
            <li>Nidorino: <span class="torrent">Surf</span></li>
            <ul><li>Stall with X Special if no torrent for level 49 and damage from Venomoth isn't enough.</li></ul>
            <li>Nidoqueen: <span class="torrent">Surf</span></li>
            <li>Kangaskhan: <span class="torrent">Surf</span></li>
            <ul>
                <li>81.25% (13/16) to OHKO.</li>
                <li>(!) Fake Out damage: ${fo}</li>
                <li>Mega Punch damage: ${mp2}</li>
            </ul>
            <li>Rhyhorn: Water Pulse</li>
        </ul>
        `
        }
    } else if (spe === 30){
        silph.innerHTML=`
        <li>Take the 3F teleporter from above, run down 1 and then left until one before the scientist and pause. Run below him unless he starts to walk down.</li><br>
        <li>On spinner bag manip (cursor is on Pokemon):</li>
        <ul>
            <li>Use Max Elixir.</li>
            <li>Heal to around <b>${heal}</b>.</li>
            <li>${carbosabrina}</li>
        </ul>
        <li><h3>Rival 5</h3></li>
        <ul>
            <li>Pidgeot: X Special x2, X Accuracy, <span class="torrent">Water Pulse</span>/Surf</li>
            <ul>
                <li>Wing Attack damage: ${pidgeotwa}</li>
                <li>(!) Quick Attack damage: ${pidgeotqa}</li>
            </ul>
            <li>Venusaur: Blizzard</li>
            <li>Gyarados: Blizzard</li>
            <li>Growlithe: Bite</li>
            <li>Alakazam: <span class="torrent">Water Pulse</span>/Surf</li>
            <ul><li>Max HP in torrent for level 49: <b>${plusfor49}</b></li></ul>
        </ul>
        <li><h3>Rocket Grunt</h3></li>
        <ul>
            <li>Cubone: Bite/Water Pulse</li>
            <ul><li>81.25% (13/16) to OHKO with Bite.</li></ul>
            <li>Marowak: Water Pulse</li>
            <li>Drowzee: <span class="torrent">Water Pulse</span></li>
        </ul>
        <li><h3>Giovanni</h3></li>
        <ul>
            <li>Nidorino: <span class="torrent">Surf</span></li>
            <ul><li>Stall with X Special if no torrent for level 49</li></ul>
            <li>Nidoqueen: <span class="torrent">Surf</span></li>
            <li>Kangaskhan: <span class="torrent">Surf</span></li>
            <ul>
                <li>81.25% (13/16) to OHKO.</li>
                <li>(!) Fake Out damage: ${fo}</li>
                <li>Mega Punch damage: ${mp3}</li>
            </ul>
            <li>Rhyhorn: Water Pulse</li>
        </ul>
        `
    } else if (spe === 31){
        if (optional === "josh" && evs >= 2){
            silph.innerHTML=`
        <li>Take the 3F teleporter from above, run down 1 and then left until one before the scientist and pause. Run below him unless he starts to walk down.</li><br>
        <li>On spinner bag manip (cursor is on Pokemon):</li>
        <ul>
            <li>Use Max Elixir.</li>
            <li>Heal to around <b>${heal}</b>.</li>
        </ul>
        <li><h3>Rival 5</h3></li>
        <ul>
            <li>Pidgeot: X Special x2, X Accuracy, <span class="torrent">Water Pulse</span>/Surf</li>
            <ul>
                <li>Wing Attack damage: ${pidgeotwa}</li>
                <li>(!) Quick Attack damage: ${pidgeotqa}</li>
            </ul>
            <li>Venusaur: Blizzard</li>
            <li>Gyarados: Blizzard</li>
            <li>Growlithe: Bite</li>
            <li>Alakazam: <span class="torrent">Water Pulse</span>/Surf</li>
            <ul><li>Max HP in torrent for level 49: <b>${plusfor49}</b></li></ul>
        </ul>
        <li><h3>Rocket Grunt</h3></li>
        <ul>
            <li>Cubone: Bite/Water Pulse</li>
            <ul><li>81.25% (13/16) to OHKO with Bite.</li></ul>
            <li>Marowak: Water Pulse</li>
            <li>Drowzee: <span class="torrent">Water Pulse</span></li>
        </ul>
        <li><h3>Giovanni</h3></li>
        <ul>
            <li>Nidorino: <span class="torrent">Surf</span></li>
            <ul><li>Stall with X Special if no torrent for level 49 and damage from Venomoth isn't enough.</li></ul>
            <li>Nidoqueen: <span class="torrent">Surf</span></li>
            <li>Kangaskhan: <span class="torrent">Surf</span></li>
            <ul>
                <li>81.25% (13/16) to OHKO.</li>
                <li>(!) Fake Out damage: ${fo}</li>
                <li>Mega Punch damage: ${mp2}</li>
            </ul>
            <li>Rhyhorn: Water Pulse</li>
        </ul>
        `
        } else {
            silph.innerHTML=`
        <li>Take the 3F teleporter from above, run down 1 and then left until one before the scientist and pause. Run below him unless he starts to walk down.</li><br>
        <li>On spinner bag manip (cursor is on Pokemon):</li>
        <ul>
            <li>Use Max Elixir.</li>
            <li>Heal to around <b>${heal}</b>.</li>
            <li>${carbosabrina}</li>
        </ul>
        <li><h3>Rival 5</h3></li>
        <ul>
            <li>Pidgeot: X Special x2, X Accuracy, <span class="torrent">Water Pulse</span>/Surf</li>
            <ul>
                <li>Wing Attack damage: ${pidgeotwa}</li>
                <li>(!) Quick Attack damage: ${pidgeotqa}</li>
            </ul>
            <li>Venusaur: Blizzard</li>
            <li>Gyarados: Blizzard</li>
            <li>Growlithe: Bite</li>
            <li>Alakazam: <span class="torrent">Water Pulse</span>/Surf</li>
            <ul><li>Max HP in torrent for level 49: <b>${plusfor49}</b></li></ul>
        </ul>
        <li><h3>Rocket Grunt</h3></li>
        <ul>
            <li>Cubone: Bite/Water Pulse</li>
            <ul><li>81.25% (13/16) to OHKO with Bite.</li></ul>
            <li>Marowak: Water Pulse</li>
            <li>Drowzee: <span class="torrent">Water Pulse</span></li>
        </ul>
        <li><h3>Giovanni</h3></li>
        <ul>
            <li>Nidorino: <span class="torrent">Surf</span></li>
            <ul><li>Stall with X Special if no torrent for level 49</li></ul>
            <li>Nidoqueen: <span class="torrent">Surf</span></li>
            <li>Kangaskhan: <span class="torrent">Surf</span></li>
            <ul>
                <li>81.25% (13/16) to OHKO.</li>
                <li>(!) Fake Out damage: ${fo}</li>
                <li>Mega Punch damage: ${mp3}</li>
            </ul>
            <li>Rhyhorn: Water Pulse</li>
        </ul>
        `
        }
    } else {
        silph.innerHTML=`
        <li>Take the 3F teleporter from above, run down 1 and then left until one before the scientist and pause. Run below him unless he starts to walk down.</li><br>
        <li>On spinner bag manip (cursor is on Pokemon):</li>
        <ul>
            <li>Use Max Elixir.</li>
            <li>Heal to around <b>${heal}</b>.</li>
        </ul>
        <li><h3>Rival 5</h3></li>
        <ul>
            <li>Pidgeot: X Special x2, X Accuracy, <span class="torrent">Water Pulse</span>/Surf</li>
            <ul>
                <li>Wing Attack damage: ${pidgeotwa}</li>
                <li>(!) Quick Attack damage: ${pidgeotqa}</li>
            </ul>
            <li>Venusaur: Blizzard</li>
            <li>Gyarados: Blizzard</li>
            <li>Growlithe: Bite</li>
            <li>Alakazam: <span class="torrent">Water Pulse</span>/Surf</li>
            <ul><li>Max HP in torrent for level 49: <b>${plusfor49}</b></li></ul>
        </ul>
        <li><h3>Rocket Grunt</h3></li>
        <ul>
            <li>Cubone: Bite/Water Pulse</li>
            <ul><li>81.25% (13/16) to OHKO with Bite.</li></ul>
            <li>Marowak: Water Pulse</li>
            <li>Drowzee: <span class="torrent">Water Pulse</span></li>
        </ul>
        <li><h3>Giovanni</h3></li>
        <ul>
            <li>Nidorino: <span class="torrent">Surf</span></li>
            <ul><li>Stall with X Special if no torrent for level 49 and damage from Venomoth isn't enough.</li></ul>
            <li>Nidoqueen: <span class="torrent">Surf</span></li>
            <li>Kangaskhan: <span class="torrent">Surf</span></li>
            <ul>
                <li>81.25% (13/16) to OHKO.</li>
                <li>(!) Fake Out damage: ${fo}</li>
                <li>Mega Punch damage: ${mp2}</li>
            </ul>
            <li>Rhyhorn: Water Pulse</li>
        </ul>
        `
    }

    const sabrina = document.querySelectorAll('#sabrina')
    let venomoth = '';

    if (nature === "rash"){
        if (spd <= 16){
            venomoth = "12-14(15)";
        } else {
            venomoth = "(11)12-13(14)";
        }
    } else {
        if (spd <= 11){
            venomoth = "(11)12-13(14)";
        } else {
            venomoth = "11-12(13)";
        }
    }

    if (spe === 29){
        if (optional === "josh" || optional === "rocket" && evs >= 2 || evs >= 3){
            dupa.innerHTML=`
        <li>Kadabra: <span class="torrent">Surf</span></li>
        <li>Mr. Mime: <span class="torrent">Surf</span></li>
        <li>Venomoth: <span class="torrent">Surf</span></li>
        <li>Alakazam: <span class="torrent">Surf</span></li>
        `
        } else {
            dupa.innerHTML=`
        <li>Kadabra: <span class="torrent">Surf</span></li>
        <li>Mr. Mime: <span class="torrent">Surf</span></li>
        <li>Venomoth: X Speed, <span class="torrent">Surf</span></li>
        <ul><li>Psybeam damage: ${venomoth}</li></ul>
        <li>Alakazam: <span class="torrent">Surf</span></li>
        `
        }
    } else if (spe === 30){
        dupa.innerHTML=`
        <li>Kadabra: <span class="torrent">Surf</span></li>
        <li>Mr. Mime: <span class="torrent">Surf</span></li>
        <li>Venomoth: <span class="torrent">Surf</span></li>
        <li>Alakazam: <span class="torrent">Surf</span></li>
        `
    } else if (spe === 31){
        if (optional === "josh" && evs >= 2){
            dupa.innerHTML=`
        <li>Kadabra: <span class="torrent">Surf</span></li>
        <li>Mr. Mime: <span class="torrent">Surf</span></li>
        <li>Venomoth: <span class="torrent">Surf</span></li>
        <li>Alakazam: <span class="torrent">Surf</span></li>
        `
        } else {
            dupa.innerHTML=`
        <li>Kadabra: <span class="torrent">Surf</span></li>
        <li>Mr. Mime: <span class="torrent">Surf</span></li>
        <li>Venomoth: <span class="torrent">Surf</span></li>
        <li>Alakazam: <span class="torrent">Surf</span></li>
        `
        }
    } else {
        dupa.innerHTML=`
        <li>Kadabra: <span class="torrent">Surf</span></li>
        <li>Mr. Mime: <span class="torrent">Surf</span></li>
        <li>Venomoth: X Speed, <span class="torrent">Surf</span></li>
        <ul><li>Psybeam damage: ${venomoth}</li></ul>
        <li>Alakazam: <span class="torrent">Surf</span></li>
        `
    }

    const r6 = document.querySelector("#r6");

    function venu(nature, spd){
        if (nature !== "rash"){
            if (spd <= 5) return "(71)72-83(84)";
            if (spd >= 6 && spd <= 15) return "68-79(80)";
            if (spd >= 16 && spd <= 23) return "(66)67-77(78)";
            else return "(62)63-73(74)";
        } else {
            if (spd <= 5) return "(78)79-91(92)";
            if (spd >= 6 && spd <= 13) return "(76)77-89(90)";
            if (spd >= 14 && spd <= 25) return "73-85(86)";
            else return "(71)72-83(84)";
        }
    }
    let vrl = venu(nature, spd);

    function ala(nature, spd){
        if (nature !== "rash"){
            if (spd === 0) return "(54)55-63(64)";
            if (spd >= 1 && spd <= 8) return "(53)54-62(63)";
            if (spd >= 9 && spd <= 14) return "(51)52-60(61)";
            if (spd >= 15 && spd <= 18) return "51-59(60)";
            if (spd >= 19 && spd <= 26) return "49-57(58)";
            else return "(48)49-56(57)";
        } else {
            if (spd === 0) return "61-71(72)";
            if (spd >= 1 && spd <= 6) return "(59)60-69(70)";
            if (spd >= 7 && spd <= 10) return "(58)59-68(69)";
            if (spd >= 11 && spd <= 16) return "(56)57-66(67)";
            if (spd >= 17 && spd <= 22) return "56-65(66)";
            if (spd >= 23 && spd <= 26) return "(54)55-63(64)";
            else return "(53)54-62(63)";
        }
    }
    let alakazam = ala(nature, spd);

    let pidgeotwa2 = '';
    let ghp = '';

    if (nature !== "mild"){
        if (def <= 9){
            pidgeotwa2 = "(23)24-27(28)"
        } else if (def >= 10 && def <= 23){
            pidgeotwa2 = "(22)23-26(27)";
        } else {
            pidgeotwa2 = "21-24(25)";
        }
    } else {
        if (def <= 21){
            pidgeotwa2 = "25-29(30)";
        } else {
            pidgeotwa2 = "(23)24-27(28)";
        }
    }

    if(nature !== "rash"){
        if (spd <= 16){
            ghp = "15-17(18)";
        } else if (spd >= 17 && spd <= 28){
            ghp = "14-16(17)";
        } else {
            ghp = "13-15(16)";
        }
    } else {
        if (spd <= 2){
            ghp = "(17)18-20(21)"
        } else {
            if (spd >= 3 && spd <= 12){
                ghp = "17-19(20)";
            } else if (spd >= 13 && spd <= 22){
                ghp = "16-18(19)";
            } else {
                ghp = "15-17(18)";
            }
        }
    }

    r6.innerHTML = `
    <li><h3>Rival 6</h3></li>
    <ul>
        <li>Pidgeot: X Special x2, X Accuracy, Surf</li>
        <ul>
            <li>Consider X Accuracy skip if you can live a Razor Leaf.</li>
            <li>Wing Attack damage: ${pidgeotwa2}</li>
        </ul>
        <li>Venusaur: Blizzard</li>
        <ul><li>Razor Leaf damage: ${vrl}</li></ul>
        <li>Rhyhorn: Bite</li>
        <li>Gyarados: Bite, Blizzard/Surf</li>
        <ul>
            <li>If Gyarados uses Rain Dance you can Surf instead of Blizzard.</li>
            <li>Hydro Pump damage: ${ghp}</li>
        </ul>
        <li>Growlithe: (X Speed), Bite</li>
        <ul><li>Skip X Speed if Gyarados used Rain Dance and can tank a Psychic.</li></ul>
        <li>Alakazam: Surf</li>
        <ul><li>Psychic damage: ${alakazam}</li></ul>
    </ul>
    `

    const lapras = document.querySelectorAll('#lapras');
    function bodyslam(nature, def){
        if (nature === "mild"){
            if (def <= 24) return "31-36(37)";
            else return "30-35(36)";
        } else {
            if (def <= 2) return "31-36(37)";
            if (def >= 3 && def <= 8) return "30-35(36)";
            if (def === 9) return "29-34(35)";
            if (def >= 10 && def <= 19) return "28-33(34)";
            if (def >= 20 && def <= 25) return "28-32(33)";
            else return "27-31(32)";
        }
    } let bs = bodyslam(nature, def);

    kurwa.innerHTML=`
    Body Slam damage: ${bs}
    `

    const highmid = document.querySelector("#highmid");
    let rtc = '';
    let eqc = '';
    let l52 = '';
    let l53 = '';
    let l54 = '';

    if (optional !== "robby"){
        l52 = Math.floor(((2 * 79 + hp + Math.floor(29 / 4)) * 52) / 100) + 52 + 10;
        l53 = Math.floor(((2 * 79 + hp + Math.floor(31 / 4)) * 53) / 100) + 53 + 10;
        l54 = Math.floor(((2 * 79 + hp + Math.floor(31 / 4)) * 54) / 100) + 54 + 10;
    } else {
        l52 = Math.floor(((2 * 79 + hp + Math.floor(31 / 4)) * 52) / 100) + 52 + 10;
        l53 = Math.floor(((2 * 79 + hp + Math.floor(33 / 4)) * 53) / 100) + 53 + 10;
        l54 = Math.floor(((2 * 79 + hp + Math.floor(33 / 4)) * 54) / 100) + 54 + 10;
    }

    let t52 = Math.floor(l52/3);
    let t53 = Math.floor(l53/3);
    let t54 = Math.floor(l54/3);

    let plusfrom52to54 = t54 - (l54 - l52);
    let plusfrom53to54 = t54 - (l54 - l53);
    let plusfrom53to542 = l54 - l53;


    if (optional === "robby"){
        if (nature === "mild"){
            rtc = 17
        } else {
            if (def <= 8){
                rtc = 17
            } else {
                rtc = 16
            }
        }
    } else {
        if (nature === "mild"){
            rtc = 17
        } else {
            if (def <= 9){
                rtc = 17
            } else {
                rtc = 16
            }
        }
    }

    if (optional === "robby"){
        if (nature === "mild"){
            if (def <= 23){
                eqc = 34
            } else {
                eqc = 33
            }
        } else {
            if (def <= 8){
                eqc = 33
            } else if (def >= 9 && def <= 19){
                eqc = 31
            } else {
                eqc = 30.5
            }
        }
    } else {
        if (nature === "mild"){
            if (def <= 24){
                eqc = 34
            } else {
                eqc = 33
            }
        } else {
            if (def <= 9){
                eqc = 33
            } else if (def >= 10 && def <= 20){
                eqc = 31
            } else {
                eqc = 30.5
            }
        }
    }

    const bruno = document.querySelector("#bruno");
    let onixrt2 = '';
    let onixeq = '';
    let hmp = '';
    let mpr = '';

    if (optional === "robby"){
        if (nature === "mild"){
            onixrt2 = "16-18(19)";
        } else {
            if (def <= 8){
                onixrt2 = "16-18(19)";
            } else {
                onixrt2 = "15-17(18)";
            }
        }
    } else {
        if (nature === "mild"){
            onixrt2 = "16-18(19)";
        } else {
            if (def <= 9){
                onixrt2 = "16-18(19)";
            } else {
                onixrt2 = "15-17(18)";
            }
        }
    }

    if (optional === "robby"){
        if (nature === "mild"){
            if (def <= 23){
                onixeq = "31-37";
            } else {
                onixeq = "30-36";
            }
        } else {
            if (def <= 8){
                onixeq = "30-36";
            } else if (def >= 9 && def <= 19){
                onixeq = "28-34";
            } else {
                onixeq = "28-33";
            }
        }
    } else {
        if (nature === "mild"){
            if (def <= 24){
                onixeq = "31-37";
            } else {
                onixeq = "30-36";
            }
        } else {
            if (def <= 9){
                onixeq = "30-36";
            } else if (def >= 10 && def <= 20){
                onixeq = "28-34";
            } else {
                onixeq = "28-33";
            }
        }
    }

    if (optional === "robby"){
        if (nature === "mild"){
            if (def <= 25){
                hmp = "26-31";
                mpr = 31;
            } else {
                hmp = "25-30";
                mpr = 31;
            }
        } else {
            if (def === 0){
                hmp = "26-31";
                mpr = 31;
            } else if (def >= 1 && def <= 11){
                hmp = "25-30";
                mpr = 30;
            } else if (def >= 12 && def <= 25){
                hmp = "23-28";
                mpr = 28;
            } else {
                hmp = "22-27";
                mpr = 27;
            }
        }
    } else {
        if (nature === "mild"){
            if (def <= 26){
                hmp = "26-31";
                mpr = 31;
            } else {
                hmp = "25-30";
                mpr = 30;
            }
        } else {
            if (def <= 1){
                hmp = "26-31";
                mpr = 31;
            } else if (def >= 2 && def <= 12){
                hmp = "25-30";
                mpr = 30;
            } else if (def >= 13 && def <= 26){
                hmp = "23-28";
                mpr = 28;
            } else {
                hmp = "22-27";
                mpr = 27;
            }
        }
    }

    let brunodamage = rtc + eqc * 2;
    let intomp = mpr + brunodamage;
    let rtintomp = mpr + rtc * 3;
    let high = intomp + 1;
    let mid = rtintomp + 1;

    if (spe >= 30){
        if (spe === 31 && optional === "josh" && evs === 2){
            highmid.innerHTML=`
            <li><b>${high}+ HP:</b> Do High HP Bruno strategy.</li>
            <li><b>${mid}-${intomp} HP:</b> Do Mid HP Bruno strategy.</li>
            <li><b>${rtintomp}- HP:</b> Full Restore turn 1 and do High HP Bruno strategy.</li>
            <ul><li><b>Need 3x X Speed in your inventory for High HP Bruno strategy.</b></li></ul>
            `
        } else {
            highmid.innerHTML=`
            <li>Do Mid HP Bruno strategy.</li>
            `
        }
    } else {
        highmid.innerHTML=`
            <li><b>${high}+ HP:</b> Do High HP Bruno strategy.</li>
            <li><b>${mid}-${intomp} HP:</b> Do Mid HP Bruno strategy.</li>
            <li><b>${rtintomp}- HP:</b> Full Restore turn 1 and do High HP Bruno strategy.</li>
            <ul><li><b>Need 3x X Speed in your inventory for High HP Bruno strategy.</b></li></ul>
            `
    }

    bruno.innerHTML=`
    <li><b>High HP Strategy</b></li>
    <ul>
        <li>Onix: (Full Restore), X Special x2, X Speed, Surf/Bite</li>
        <ul>
            <li>Use an extra X Special if missed Rock Tomb.</li>
            <li>Bite both Onix at +3 or more.</li>
            <li>Torrent at level 52: <b>${t52}</b>/${l52}</li>
            <li>Rock Tomb damage: ${onixrt2}</li>
            <li>Earthquake damage: ${onixeq}</li>
        </ul>
        <li>Hitmonchan: Surf</li>
        <ul>
            <li>(!) Mach Punch damage: ${hmp}</li>
            <li>Use Super Potion if in (!) Mach Punch range.</li>
        </ul>
        <li>Hitmonlee: Surf</li>
        <li>Machamp: Surf</li>
        <li>Onix: Surf/Bite</li>
    </ul><br>
    <li><b>Mid HP Strategy</b></li>
    <ul>
        <li>Onix: Guard Spec, X Special x2, Surf/Bite</li>
        <ul>
            <li>Continue setting up X Special until +4 or at least +2 and in Torrent.</li>
            <li>Bite both Onix at +3 or more.</li>
            <li>Torrent at level 52: <b>${t52}</b>/${l52}</li>
            <li>Rock Tomb damage: ${onixrt2}</li>
            <li>Earthquake damage: ${onixeq}</li>
        </ul>
        <li>Hitmonchan: Surf</li>
        <ul>
            <li>(!) Mach Punch damage: ${hmp}</li>
            <li>Use Super Potion if in (!) Mach Punch range.</li>
        </ul>
        <li>Hitmonlee: Surf</li>
        <li>Machamp: Surf</li>
        <ul><li>Need at least +2 in torrent or +4 without Torrent to OHKO.</li></ul>
        <li>Onix: Surf/Bite</li>
    </ul>
    `

    const agathatorrent = document.querySelector("#agathatorrent")
    agathatorrent.innerHTML=`<li><u>Max HP here in torrent for Gengar 2: <b>${plusfrom53to54}</u></b></li><ul><li><b>+ ${plusfrom53to542} HP</b> upon level up.</li></ul>`

    const agatha = document.querySelector("#agatha");
    let sp = '';

    if (optional !== "josh"){
        if (nature === "mild"){
            if (def <= 17){
                sp = "30-35(36)";
            } else if (def >= 18 && def <= 28){
                sp = "28-33(34)";
            } else {
                sp = "28-32(33)";
            }
        } else {
            if (def <= 1){
                sp = "28-33(34)";
            } else if (def >= 2 && def <= 15){
                sp = "28-32(33)";
            } else if (def >= 16 && def <= 26){
                sp = "26-30(31)";
            } else {
                sp = "25-29(30)";
            }
        }
    } else {
        if (nature === "mild"){
            if (def <= 18){
                sp = "30-35(36)";
            } else if (def >= 19 && def <= 29){
                sp = "28-33(34)";
            } else {
                sp = "28-32(33)";
            }
        } else {
            if (def <= 2){
                sp = "28-33(34)";
            } else if (def >= 3 && def <= 16){
                sp = "28-32(33)";
            } else if (def >= 17 && def <= 27){
                sp = "26-30(31)";
            } else {
                sp = "25-29(30)";
            }
        }
    }

    agatha.innerHTML=`
    <li>Gengar: X Speed, X Special, <span class="torrent">Surf</span></li>
    <ul>
        <li>Need to be at least +3 from here if you don’t have Torrent.</li>
        <li>Use Super Potion if in Shadow Punch range and haven't finished settting up.</li>
        <li>Shadow Punch damage: ${sp}</li>
    </ul>
    <li>Golbat: <span class="torrent">Surf</span></li>
    <li>Arbok: <span class="torrent">Surf</span></li>
    <li>Gengar: <span class="torrent">Surf</span></li>
    <ul><li>Surf x2 if you leveled out of Torrent.</li></ul>
    <li>Haunter: <span class="torrent">Surf</span></li>
    `

    const lance = document.querySelector("#lance");
    const hyperbeam = document.querySelector("#hyperbeam");
    function ghyperbeam (nature, def){
        if (nature === "mild"){
            if (def === 16) return "79-92(93)";
            if (def >= 17 && def <= 20) return "78-91(92)";
            if (def >= 21 && def <= 23) return "77-90(91)";
            if (def >= 24 && def <= 27) return "75-88(89)";
            if (def >= 28 && def <= 29) return "74-87(88)";
            else return "73-86(87)";
        } else {
            if (def <= 1) return "75-88(89)";
            if (def >= 2 && def <= 3) return "74-87(88)";
            if (def >= 4 && def <= 7) return "73-86(87)";
            if (def >= 8 && def <= 10) return "73-85(86)";
            if (def >= 11 && def <= 12) return "72-84(85)";
            if (def >= 13 && def <= 16) return "71-83(84)";
            if (def >= 17 && def <= 18) return "70-82(83)";
            if (def >= 19 && def <= 20) return "69-81(82)";
            if (def >= 21 && def <= 23) return "68-80(81)";
            if (def >= 24 && def <= 27) return "68-79(80)";
            else return "67-78(79)";
        }
    } let ghb = ghyperbeam (nature, def);

    function dhyperbeam (nature, def){
        if (nature === "mild"){
            if (def === 16) return "(52)53-61(62)";
            if (def >= 17 && def <= 22) return "(51)52-60(61)";
            if (def >= 23 && def <= 25) return "51-59(60)";
            if (def >= 26 && def <= 29) return "50-58(59)";
            else return "49-57(58)";
        } else {
            if (def <= 3) return "50-58(59)";
            if (def >= 4 && def <= 7) return "49-57(58)";
            if (def >= 8 && def <= 12) return "(48)49-56(57)";
            if (def >= 13 && def <= 16) return "(47)48-55(56)";
            if (def >= 17 && def <= 20) return "(46)47-54(55)";
            if (def >= 21 && def <= 25) return "(45)46-53(54)";
            if (def >= 26) return "45-52(53)";
        }
    } let dhb = dhyperbeam(nature, def);

    function ahyperbeam (nature, def){
        if (nature === "mild"){
            if (def <= 17) return "(65)66-76(77)";
            if (def >= 18 && def <= 19) return "(64)65-75(76)";
            if (def >= 20 && def <= 21) return "(63)64-74(75)";
            if (def >= 22 && def <= 24) return "(62)63-73(74)";
            if (def >= 25 && def <= 28) return "62-72(73)";
            else return "61-71(72)";
        } else {
            if (def <= 3) return "62-72(73)";
            if (def >= 4 && def <= 6) return "61-71(72)";
            if (def >= 7 && def <= 10) return "(60)61-70(71)";
            if (def >= 11 && def <= 12) return "(59)60-69(70)";
            if (def >= 13 && def <= 15) return "(58)59-68(69)";
            if (def >= 16 && def <= 19) return "(57)58-67(68)";
            if (def >= 20 && def <= 23) return "(56)57-66(67)";
            if (def >= 24 && def <= 28) return "56-65(66)";
            if (def >= 29 && def <= 30) return "55-64(65)";
            if (def === 31) return "(54)55-63(64)";
        }
    } let ahb = ahyperbeam (nature, def);

    function hyperbeamcalcs(nature, def){
        if (nature === "mild"){
            if (def === 16) return 92;
            if (def >= 17 && def <= 20) return 91;
            if (def >= 21 && def <= 23) return 90;
            if (def >= 24 && def <= 27) return 88;
            if (def >= 28 && def <= 29) return 87;
            else return 86;
        } else {
            if (def <= 1) return 88;
            if (def >= 2 && def <= 3) return 87;
            if (def >= 4 && def <= 7) return 86;
            if (def >= 8 && def <= 10) return 85;
            if (def >= 11 && def <= 12) return 84;
            if (def >= 13 && def <= 16) return 83;
            if (def >= 17 && def <= 18) return 82;
            if (def >= 19 && def <= 20) return 81;
            if (def >= 21 && def <= 23) return 80;
            if (def >= 24 && def <= 27) return 79;
            else return 78;
        }
    } let ghbc = hyperbeamcalcs(nature, def);

    let safe = '';
    let risky2 = '';
    let risky3 = '';
    let ghpr = l54 - 80;

    if (ghpr > ghbc){
        hyperbeam.innerHTML=`<u>Do <b>Cool</b> Lance strategy.</u>`
    } else {
        hyperbeam.innerHTML=`<u>Do <b>Lame</b> Lance strategy.</u>`
    }


    if (spa === 31){
        safe = "41.8% to 2HKO with Blizzard x2"
        risky3 = "85% to 3HKO with Bite x2, Blizzard";
        risky2 = "83% to 2HKO Bite Crit and Blizzard";
    } else {
        safe = "31.25% to 2HKO with Blizzard x2";
        risky3 = "72% to 3HKO with Bite x2, Blizzard";
        risky2 = "72% to 2HKO Bite Crit and Blizzard";
    }

    lance.innerHTML = `
    <li><b>Cool strategy</b></li>
    <ul>
        <li>Gyarados: Bite, X Accuracy, X Special, Blizzard, Blizzard</li>
        <ul>
            <li>${safe}</li>
            <li>Hyper Beam damage: ${ghb}</li>
        </ul>
        <li>Dragonair: Blizzard</li>
        <ul><li>Hyper Beam damage: ${dhb}</li></ul>
        <li>Dragonair: Blizzard</li>
        <ul>
            <li>Use Elixir if you missed a Blizzard.</li>
            <li>Hyper Beam damage: ${dhb}</li>
        </ul>
        <li>Dragonite: Blizzard</li>
        <li>Aerodactyl: Surf</li>
        <ul>
            <li>If Ancient Power boost, Full Restore and <span class="torrent">Surf</span>.</li>
            <li>Hyper Beam damage: ${ahb}</li>
        </ul>
    </ul><br>
    <li><b>Lame strategy</b></li>
    <ul>
        <li>Gyarados: X Special, Bite x2, X Accuracy, Blizzard</li>
        <ul>
            <li>${risky3}</li>
            <li>${risky2}</li>
            <li>Hyper Beam damage: ${ghb}</li>
        </ul>
        <li>Dragonair: Blizzard</li>
        <ul><li>Hyper Beam damage: ${dhb}</li></ul>
        <li>Dragonair: Blizzard</li>
        <ul>
            <li>Use Elixir if you missed a Blizzard.</li>
            <li>Hyper Beam damage: ${dhb}</li>
        </ul>
        <li>Dragonite: Blizzard</li>
        <li>Aerodactyl: Surf</li>
        <ul>
            <li>If Ancient Power boost, Full Restore and <span class="torrent">Surf</span>.</li>
            <li>Hyper Beam damage: ${ahb}</li>
        </ul>
    </ul>
    `

    const champ = document.querySelector("#champ");

    function aerialace(nature, def){
        if (nature === "mild"){
            if (def <= 19) return "36-42(43)";
            if (def >= 20 && def <= 26) return "35-41(42)"
            else return "34-39(40)";
        } else {
            if (def <= 1) return "35-41(42)";
            if (def >= 2 && def <= 10) return "34-39(40)";
            if (def >= 11 && def <= 19) return "33-38(39)";
            if (def >= 20 && def <= 30) return "31-36(37)";
            else return "30-35(36)";
        }
    } let aa = aerialace(nature, def)

    function gyarathrash(nature, def){
        if (nature === "mild"){
            if (def <= 17) return "45-53(54)";
            if (def >= 18 && def <= 22) return "45-52(53)";
            if (def >= 23 && def <= 26) return "44-51(52)";
            else return "43-50(51)";
        } else {
            if (def <= 1) return "44-51(52)";
            if (def >= 2 && def <= 6) return "43-50(51)";
            if (def >= 7 && def <= 9) return "42-49(50)";
            if (def >= 10 && def <= 15) return "41-48(49)";
            if (def >= 16 && def <= 20) return "40-47(48)";
            if (def >= 21 && def <= 26) return "39-46(47)";
            else return "39-45(46)";
        }
    } let thr = gyarathrash(nature, def)

    function extremespeed(nature, def){
        if (nature === "mild"){
            if (def <= 20) return "43-50(51)";
            if (def >= 21 && def <= 24) return "42-49(50)";
            else return "41-48(49)";
        } else {
            if (def <= 4) return "41-48(49)";
            if (def >= 5 && def <= 8) return "40-47(48)";
            if (def >= 9 && def <= 15) return "39-46(47)";
            if (def >= 16 && def <= 20) return "39-45(46)";
            if (def >= 21 && def <= 26) return "38-44(45)";
            else return "37-43(44)";
        }
    } let es = extremespeed(nature, def)

    champ.innerHTML = `
    <li>Pidgeot: Guard Spec, X Special x2, X Speed, (X Special), Surf</li>
    <ul>
        <li>If you get into Torrent, skip the third X Special and heal on Gyarados.</li>
        <li>Can Blizzard at +2 if Guard Spec runs out.</li>
        <li>Aerial Ace damage: ${aa}</li>
    </ul>
    <li>Venusaur: X Accuracy, Blizzard</li>
    <ul>
        <li>Skip X Accuracy if feeling risky.</li>
        <li>Bite and Surf instead if +3 and in Torrent.</li>
    </ul>
    <li>Alakazam: Surf</li>
    <li>Rhydon: Surf</li>
    <li>Gyarados: Bite, Blizzard</li>
    <ul>
        <li>Blizzard x2 if at +2.</li>
        <li>Thrash damage: ${thr}</li>
    </ul>
    <li>Arcanine: Surf</li>
    <ul>
        <li>(!) Extreme Speed damage: ${es}</li>
    </ul><br>
    <li><b>"Yolo" Champ</b></li>
    <ul>
        <li><u>Make sure you have at least 4 Blizzard PP!!</u></li>
        <li>Pidgeot: Guard Spec, X Accuracy X Special x2, X Speed, Blizzard/<span class="torrent">Surf</span></li>
        <li>Venusaur: Blizzard</li>
        <li>Alakazam: Surf</li>
        <ul><li>50% to OHKO without Torrent.</li></ul>
        <li>Rhydon: Surf</li>
        <li>Gyarados: Blizzard, Blizzard</li>
        <li>Arcanine: Surf</li>
    </ul>
    `


    autoFormat(lab);
    autoFormat(r1);
    autoFormat(viridian);
    autoFormat(pewter);
    autoFormat(r3);
    autoFormat(mtmoon);
    autoFormat(sandshrew);
    autoFormat(starmiee);
    autoFormat(rival2);
    autoFormat(jeff);
    autoFormat(mart);
    autoFormat(ssanne);
    autoFormat(tucker);
    autoFormat(surge);
    autoFormat(veno);
    autoFormat(rt);
    autoFormat(hideout);
    autoFormat(xshopping);
    autoFormat(r4);
    autoFormat(xacc);
    autoFormat(lavender);
    autoFormat(koga);
    autoFormat(growlithe);
    autoFormat(carbos);
    autoFormat(carbosblaine);
    autoFormat(carbossabrina);
    autoFormat(blaine);
    autoFormat(erika);
    autoFormat(silph);
    autoFormat(dupa);
    autoFormat(r6);
    autoFormat(kurwa);
    autoFormat(highmid);
    autoFormat(bruno);
    autoFormat(agatha);
    autoFormat(lance);
    autoFormat(champ);
};

document.querySelectorAll('input[type="number"]').forEach(inp => {
    const handler = () => {
        const startType = inp.type;

        inp.type = 'text';
        inp.select();
        inp.setSelectionRange(0, inp.value.length);

        inp.type = startType;
    };

    inp.addEventListener('focus', () => setTimeout(handler, 0));
    inp.addEventListener('click', () => setTimeout(handler, 0));
});

btn.addEventListener("click", updateAll);
updateAll();

