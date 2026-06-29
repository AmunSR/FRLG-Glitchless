const rules = [
    // pokemons
    ["Bulbasaur", "grass"],
    ["Pidgey", "normal"],
    ["Rattata", "poison"],
    ["Weedle", "antidote"],
    ["Geodude", "rock"],
    ["Onix", "rock"],
    ["Sandshrew", "ground"],
    ["Paras", "red"],
    ["Caterpie", "bug"],
    ["Kakuna", "antidote"],
    ["Metapod", "bug"],
    ["Zubat", "blue"],
    ["Golbat", "blue"],
    ["Grimer", "poison"],
    ["Koffing", "poison"],
    ["Voltorb", "red"],
    ["Wartortle", "water"],
    ["Staryu", "ground"],
    ["Starmie", "poison"],
    ["Pidgeotto", "normal"],
    ["Abra", "psychic"],
    ["Oddish", "grass"],
    ["Bellsprout", "bug"],
    ["Ekans", "poison"],
    ["Nidoran M", "poison"],
    ["Nidoran F", "nidoranf"],
    ["Nidoran", "poison"],
    ["Mankey", "fighting"],
    ["Hitmonlee", "fighting"],
    ["Hitmonchan", "fighting"],
    ["Drowzee", "psychic"],
    ["Raticate", "normal"],
    ["Spearow", "spearow"],
    ["Machop", "normal"],
    ["Ivysaur", "grass"],
    ["Kadabra", "psychic"],
    ["Pikachu", "electric"],
    ["Raichu", "antidote"],
    ["Venonat", "potion"],
    ["Cubone", "ground"],
    ["Slowpoke", "psychic"],
    ["Jigglypuff", "normal"],
    ["Meowth", "normal"],
    ["Graveler", "rock"],
    ["Growlithe", "fire"],
    ["Vulpix", "fire"],
    ["Sandslash", "rock"],
    ["Arbok", "poison"],
    ["Rhyhorn", "normal"],
    ["Kangaskhan", "rock"],
    ["Gyarados", "water"],
    ["Gastly", "ghost"],
    ["Haunter", "ghost"],
    ["Gengar 2", "ghost"],
    ["Gengar", "ghost"],
    ["Ghost Marowak", "elixir"],
    ["Marowak", "ground"],
    ["Muk", "poison"],
    ["Weezing", "poison"],
    ["Alakazam", "psychic"],
    ["Rapidash", "fire"],
    ["Ponyta", "fire"],
    ["Arcanine", "fire"],
    ["Victreebell", "bug"],
    ["Tangela", "blue"],
    ["Vileplume", "grass"],
    ["Exeggcute", "psychic"],
    ["Pidgeot", "normal"],
    ["Venusaur", "grass"],
    ["Nidorino", "poison"],
    ["Nidoking", "poison"],
    ["Nidorina", "nidoranf"],
    ["Nidoqueen", "nidoranf"],
    ["Mr. Mime", "psychic"],
    ["Venomoth", "bug"],
    ["Machoke", "fighting"],
    ["Dugtrio", "ground"],
    ["Dewgong", "water"],
    ["Cloyster", "ghost"],
    ["Slowbro", "psychic"],
    ["Jynx", "poison"],
    ["Lapras", "water"],
    ["Machamp", "normal"],
    ["Dragonair", "dragon"],
    ["Dragonite", "fire"],
    ["Aerodactyl", "rock"],
    ["Rhydon", "normal"],


    // moves
    ["Bubble", "water"],
    ["Withdraw", "water"],
    ["Tackle", "normal"],
    ["Scratch", "normal"],
    ["Poison Sting", "poison"],
    ["Poison", "poison"],
    ["Tail Whip", "normal"],
    ["Water Gun", "water"],
    ["Rock Tomb", "rock"],
    ["Quick Attack", "normal"],
    ["Hyper Fang", "normal"],
    ["Growl", "normal"],
    ["Pound", "normal"],
    ["Mega Kick", "normal"],
    ["Strength", "normal"],
    ["Bite", "dark"],
    ["Swift", "normal"],
    ["Water Pulse", "water"],
    ["Vine Whip", "grass"],
    ["Headbutt", "normal"],
    ["Confusion", "psychic"],
    ["Cut", "normal"],
    ["Shock Wave", "electric"],
    ["Razor Leaf", "grass"],
    ["Mega Punch", "normal"],
    ["Fly", "blue"],
    ["Thrash", "normal"],
    ["Sand Attack", "ground"],
    ["Bonemerang", "ground"],
    ["Surf", "water"],
    ["Sludge", "poison"],
    ["Fire Blast", "fire"],
    ["Take Down", "normal"],
    ["Bounce", "blue"],
    ["Disable", "normal"],
    ["Blizzard", "nidoranf"],
    ["Giga Drain", "grass"],
    ["Wing Attack", "blue"],
    ["Fake Out", "normal"],
    ["Psybeam", "psychic"],
    ["Psychic", "psychic"],
    ["Hydro Pump", "water"],
    ["Rain Dance", "water"],
    ["Body Slam", "normal"],
    ["Earthquake", "ground"],
    ["Mach Punch", "fighting"],
    ["Shadow Punch", "ghost"],
    ["Dragon Rage", "dragon"],
    ["Hyper Beam", "normal"],
    ["Ancient Power", "rock"],
    ["Extreme Speed", "normal"],
    ["Aerial Ace", "blue"],
    ["Absorb", "grass"],

    // items
    ["Antidote", "antidote"],
    ["Awakening", "awakening"],
    ["Super Potion", "red"],
    ["Potion", "potion"],
    ["Repel", "repel"],
    ["Persim Berry", "persim"],
    ["Paralyze Heal", "paralyze"],
    ["Rare Candy", "blue"],
    ["Max Elixir", "elixir"],
    ["Elixir", "elixir"],
    ["Oran Berry", "oddish"],
    ["Ether", "elixir"],
    ["Sitrus Berry", "antidote"],
    ["Full Heal", "antidote"],
    ["Escape Rope", "rock"],
    ["Super Repel", "normal"],
    ["Black Glasses", "elixir"],
    ["Max Ether", "elixir"],
    ["X Attack", "red"],
    ["X Special", "antidote"],
    ["X Speed", "blue"],
    ["X Accuracy", "psychic"],
    ["Guard Spec", "grass"],
    ["Moon Stone", "normal"],
    ["Full Restore", "antidote"],
    ["Revive", "antidote"],
    ["Carbos", "elixir"],
    ["TM14", "nidoranf"],
    ["Secret Key", "elixir"],

    ["(!)", "red"],
];



const pattern = rules.map(([word]) => {
    const escaped = escapeRegExp(word);
    const startBoundary = /^\w/.test(word) ? "\\b" : "";
    const endBoundary = /\w$/.test(word) ? "\\b" : "";
    return `${startBoundary}${escaped}${endBoundary}`;
}).join("|");

const regex = new RegExp(`(${pattern})`, "gi");

const classMap = {};
rules.forEach(([word, cls]) => {
    classMap[word.toLowerCase()] = cls;
});

function autoFormat(root) {
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];

    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }

    textNodes.forEach(node => {
        const parent = node.parentElement;
        if (!parent) return;

        if (parent.closest("script, style, textarea, input, select, option, .no-format")) return;
        if (parent.hasAttribute("data-af") || parent.closest("[data-af]")) return;

        const original = node.nodeValue;
        if (!regex.test(original)) return;
        regex.lastIndex = 0;

        const fragment = document.createDocumentFragment();
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(original)) !== null) {
            if (match.index > lastIndex) {
                fragment.appendChild(
                    document.createTextNode(original.slice(lastIndex, match.index))
                );
            }

            const span = document.createElement("span");
            const cls = classMap[match[0].toLowerCase()];
            span.className = cls;
            span.setAttribute("data-af", "1");
            span.textContent = match[0];
            fragment.appendChild(span);

            lastIndex = regex.lastIndex;
        }

        if (lastIndex < original.length) {
            fragment.appendChild(
                document.createTextNode(original.slice(lastIndex))
            );
        }

        node.replaceWith(fragment);
    });
}

window.autoFormat = autoFormat;

document.addEventListener("DOMContentLoaded", () => {
    autoFormat(document.querySelector("main"));
});

function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
