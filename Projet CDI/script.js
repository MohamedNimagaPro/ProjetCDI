/* --- DONNÉES POKÉMON (Familles Complètes & Stats) --- */
const pokemonData = [
    // --- STARTERS ---
    { id: 810, name: "Ouistempo", type: ["Plante"], rarity: "Commune", desc: "Il frappe avec son bâton pour garder le rythme.", evoChain: [810, 811, 812],
      stats: { hp: 50, atk: 65, def: 50 }, attacks: [{name: "Griffure", dmg: 40}, {name: "Fouet Lianes", dmg: 45}] },
    { id: 811, name: "Badabouin", type: ["Plante"], rarity: "Peu Commune", desc: "Il s'entraîne à battre le rythme sur des troncs.", evoChain: [810, 811, 812],
      stats: { hp: 70, atk: 85, def: 70 }, attacks: [{name: "Tranch'Herbe", dmg: 55}, {name: "Double Baffe", dmg: 70}] },
    { id: 812, name: "Gorythmic", type: ["Plante"], rarity: "Rare", desc: "Le maître des percussions de la forêt.", evoChain: [810, 811, 812],
      stats: { hp: 100, atk: 125, def: 90 }, attacks: [{name: "Tambour Bat", dmg: 80}, {name: "Martobois", dmg: 120}] },

    { id: 813, name: "Flambino", type: ["Feu"], rarity: "Commune", desc: "Il court partout pour faire monter sa température.", evoChain: [813, 814, 815],
      stats: { hp: 50, atk: 71, def: 40 }, attacks: [{name: "Charge", dmg: 40}, {name: "Flammèche", dmg: 40}] },
    { id: 814, name: "Lapyro", type: ["Feu"], rarity: "Peu Commune", desc: "Sa fourrure épaisse le protège du froid.", evoChain: [813, 814, 815],
      stats: { hp: 65, atk: 86, def: 60 }, attacks: [{name: "Nitrocharge", dmg: 50}, {name: "Coup d'Boule", dmg: 70}] },
    { id: 815, name: "Pyrobut", type: ["Feu"], rarity: "Rare", desc: "Un buteur exceptionnel avec des pierres brûlantes.", evoChain: [813, 814, 815],
      stats: { hp: 80, atk: 116, def: 75 }, attacks: [{name: "Ball'Brûle", dmg: 120}, {name: "Pied Brûleur", dmg: 85}] },

    { id: 816, name: "Larméléon", type: ["Eau"], rarity: "Commune", desc: "Il pleure des larmes qui font pleurer les autres.", evoChain: [816, 817, 818],
      stats: { hp: 50, atk: 40, def: 40 }, attacks: [{name: "Pistolet à O", dmg: 40}, {name: "Écras'Face", dmg: 40}] },
    { id: 817, name: "Arrozard", type: ["Eau"], rarity: "Peu Commune", desc: "Il crée des ballons d'eau avec ses mains.", evoChain: [816, 817, 818],
      stats: { hp: 65, atk: 60, def: 55 }, attacks: [{name: "Vibraqua", dmg: 60}, {name: "Demi-Tour", dmg: 70}] },
    { id: 818, name: "Lézargus", type: ["Eau"], rarity: "Rare", desc: "Un tireur d'élite caché dans l'eau.", evoChain: [816, 817, 818],
      stats: { hp: 70, atk: 85, def: 65 }, attacks: [{name: "Tir de Précision", dmg: 80}, {name: "Hydrocanon", dmg: 110}] },

    // --- SALARSEN 
    { id: 848, name: "Toxizap", type: ["Électrik", "Poison"], rarity: "Commune", desc: "Il stocke du poison dans sa poche interne.", evoChain: [848, 849],
      stats: { hp: 40, atk: 38, def: 35 }, attacks: [{name: "Acide", dmg: 40}, {name: "Frotte-Frimousse", dmg: 20}] },
    
    // Salarsen Aigüe (JAUNE)
    { id: 849, useUrl: "https://img.pokemondb.net/sprites/home/normal/toxtricity-amped.png", name: "Salarsen (Aigüe)", type: ["Électrik", "Poison"], rarity: "Rare", desc: "Il gratte son torse comme une guitare électrique (Forme Jaune).", evoChain: [848, 849],
      stats: { hp: 75, atk: 98, def: 70 }, attacks: [{name: "Overdrive", dmg: 80}, {name: "Cradovague", dmg: 95}] },
    
    // Salarsen Grave (BLEU)
    { id: 8491, useUrl: "https://img.pokemondb.net/sprites/home/normal/toxtricity-low-key.png", name: "Salarsen (Grave)", type: ["Électrik", "Poison"], rarity: "Rare", desc: "Il génère de l'électricité avec des sons de basse (Forme Bleue).", evoChain: [848, 8491],
      stats: { hp: 75, atk: 98, def: 70 }, attacks: [{name: "Overdrive", dmg: 80}, {name: "Choc Venin", dmg: 65}] },

    // --- SHIFOURS (URSHIFU) ---
    { id: 891, name: "Wushours", type: ["Combat"], rarity: "Rare", desc: "Il s'entraîne dur au Dojo.", evoChain: [891, 8921, 8922],
      stats: { hp: 60, atk: 90, def: 60 }, attacks: [{name: "Casse-Brique", dmg: 75}, {name: "Coup d'Boule", dmg: 70}] },
    
    // Shifours Poing Final
    { id: 8921, displayId: "892", name: "Shifours (Poing Final)", type: ["Combat", "Ténèbres"], rarity: "Légendaire", desc: "Il abat ses ennemis d'un seul coup dévastateur.", evoChain: [891, 8921],
      stats: { hp: 100, atk: 130, def: 100 }, attacks: [{name: "Torracoup", dmg: 80}, {name: "Close Combat", dmg: 120}] },
    
    // Shifours Mille Poings
    { id: 8922, useUrl: "https://img.pokemondb.net/sprites/home/normal/urshifu-rapid-strike.png", name: "Shifours (Mille Poings)", type: ["Combat", "Eau"], rarity: "Légendaire", desc: "Il submerge l'ennemi sous une pluie de coups fluides.", evoChain: [891, 8922],
      stats: { hp: 100, atk: 130, def: 100 }, attacks: [{name: "Torrent de Coups", dmg: 25}, {name: "Aqua-Brèche", dmg: 85}] },

    //  AUTRES FAMILLES 
    { id: 859, name: "Grimalin", type: ["Ténèbres", "Fée"], rarity: "Commune", desc: "Il se nourrit de l'énergie négative.", evoChain: [859, 860, 861],
      stats: { hp: 45, atk: 45, def: 30 }, attacks: [{name: "Fourberie", dmg: 60}, {name: "Vampibaiser", dmg: 50}] },
    { id: 860, name: "Fourbelin", type: ["Ténèbres", "Fée"], rarity: "Peu Commune", desc: "Il utilise ses cheveux comme une lance.", evoChain: [859, 860, 861],
      stats: { hp: 65, atk: 60, def: 45 }, attacks: [{name: "Câlinerie", dmg: 90}, {name: "Coup Bas", dmg: 70}] },
    { id: 861, name: "Angoliath", type: ["Ténèbres", "Fée"], rarity: "Rare", desc: "Il utilise ses cheveux comme des muscles.", evoChain: [859, 860, 861],
      stats: { hp: 95, atk: 120, def: 65 }, attacks: [{name: "Choc Émotionnel", dmg: 75}, {name: "Dark Lariat", dmg: 85}] },

    { id: 837, name: "Charbi", type: ["Roche"], rarity: "Commune", desc: "Il peut rouler sur des terrains accidentés.", evoChain: [837, 838, 839],
      stats: { hp: 30, atk: 40, def: 50 }, attacks: [{name: "Jet-Pierres", dmg: 50}, {name: "Tour Rapide", dmg: 20}] },
    { id: 838, name: "Wagomine", type: ["Roche", "Feu"], rarity: "Peu Commune", desc: "Il transporte du charbon sur son dos.", evoChain: [837, 838, 839],
      stats: { hp: 80, atk: 60, def: 90 }, attacks: [{name: "Éboulement", dmg: 75}, {name: "Nitrocharge", dmg: 50}] },
    { id: 839, name: "Monthracite", type: ["Roche", "Feu"], rarity: "Rare", desc: "Une fournaise vivante.", evoChain: [837, 838, 839],
      stats: { hp: 110, atk: 80, def: 120 }, attacks: [{name: "Goudronnerie", dmg: 0}, {name: "Surchauffe", dmg: 130}] },

    { id: 888, name: "Zacian", type: ["Fée", "Acier"], rarity: "Légendaire", desc: "Le héros à l'épée rouillée.", evoChain: [888],
      stats: { hp: 92, atk: 170, def: 115 }, attacks: [{name: "Lame Sainte", dmg: 90}, {name: "Tête de Fer", dmg: 80}] },
    
    { id: 890, name: "Éthernatos", type: ["Dragon", "Poison"], rarity: "Légendaire", desc: "La source du phénomène Dynamax.", evoChain: [890],
      stats: { hp: 140, atk: 85, def: 95 }, attacks: [{name: "Canon Dynamax", dmg: 100}, {name: "Choc Venin", dmg: 65}] }
];

document.addEventListener('DOMContentLoaded', () => {
    //  THÈME
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'night') {
        body.classList.add('night-mode');
        if(themeBtn) themeBtn.innerText = '☀️';
    } else {
        if(themeBtn) themeBtn.innerText = '🌙';
    }

    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('night-mode');
            if (body.classList.contains('night-mode')) {
                themeBtn.innerText = '☀️';
                localStorage.setItem('theme', 'night');
            } else {
                themeBtn.innerText = '🌙';
                localStorage.setItem('theme', 'day');
            }
        });
    }

    // 2. GESTION DONNÉES 
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let inventory = JSON.parse(localStorage.getItem('inventory')) || []; // Tableau d'IDs

    // Mise à jour des compteurs sur le profil
    function updateCounters() {
        const invCount = document.getElementById('inventory-count');
        const favCount = document.getElementById('fav-count');
        if(invCount) invCount.innerText = `Cartes possédées : ${inventory.length}`;
        if(favCount) favCount.innerText = `Favoris : ${favorites.length}`;
    }

    //  FONCTION DE CRÉATION DE CARTE HTML 
    function createCardHTML(pokemon) {
        const isFav = favorites.includes(pokemon.id);
        const isOwned = inventory.includes(pokemon.id);
        const favClass = isFav ? 'active' : '';
        const ownClass = isOwned ? 'owned' : '';
        const ownText = isOwned ? '✓' : '◓';

        // Image L
        let imgUrl = "";
        if (pokemon.useUrl) {
            imgUrl = pokemon.useUrl;
        } else {
            let imgId = pokemon.displayId ? pokemon.displayId : pokemon.id;
            imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgId}.png`;
        }

        const typesHTML = pokemon.type.map(t => `<span class="badge badge-${t}">${t}</span>`).join(' ');

        // HTML des Attaques
        let attacksHTML = "";
        if(pokemon.attacks) {
            attacksHTML = pokemon.attacks.map(atk => `
                <div class="attack-item">
                    <span>${atk.name}</span>
                    <span class="attack-dmg">${atk.dmg}</span>
                </div>
            `).join('');
        }

        // HTML des Stats 
        let statsHTML = "";
        if(pokemon.stats) {
            statsHTML = `
                <table class="stats-table">
                    <tr><td>PV</td><td><div class="stat-bar"><div class="stat-fill" style="width:${(pokemon.stats.hp/150)*100}%"></div></div> ${pokemon.stats.hp}</td></tr>
                    <tr><td>ATK</td><td><div class="stat-bar"><div class="stat-fill" style="width:${(pokemon.stats.atk/170)*100}%"></div></div> ${pokemon.stats.atk}</td></tr>
                    <tr><td>DEF</td><td><div class="stat-bar"><div class="stat-fill" style="width:${(pokemon.stats.def/150)*100}%"></div></div> ${pokemon.stats.def}</td></tr>
                </table>
            `;
        }

        // Barre Évolution
        let evoHTML = '';
        if (pokemon.evoChain && pokemon.evoChain.length > 1) {
            evoHTML = `<div class="evo-chain">`;
            pokemon.evoChain.forEach((evoId, index) => {
                let evoSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${evoId}.png`;
                
                
                if(evoId === 8921) evoSrc = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/892.png";
                if(evoId === 8922) evoSrc = "https://img.pokemondb.net/sprites/home/normal/urshifu-rapid-strike.png";
                if(evoId === 849) evoSrc = "https://img.pokemondb.net/sprites/home/normal/toxtricity-amped.png";
                if(evoId === 8491) evoSrc = "https://img.pokemondb.net/sprites/home/normal/toxtricity-low-key.png";

                const currentClass = (evoId === pokemon.id) ? 'current' : '';
                evoHTML += `<img src="${evoSrc}" class="evo-img ${currentClass}" alt="Evo">`;
                if (index < pokemon.evoChain.length - 1) evoHTML += `<span class="evo-arrow">➜</span>`;
            });
            evoHTML += `</div>`;
        }

        return `
            <article class="card ${pokemon.type[0]}">
                <div class="card-visual">
                    <img src="${imgUrl}" alt="${pokemon.name}" loading="lazy">
                    <div class="card-desc-overlay">
                        <p class="desc">${pokemon.desc}</p> ${statsHTML}
                        <div class="attacks-list">
                            ${attacksHTML}
                        </div>
                        <p class="rarity">${pokemon.rarity}</p>
                    </div>
                </div>
                <div class="card-info">
                    <div class="card-header-row">
                        <h3>${pokemon.name}</h3>
                        <div class="card-actions">
                            <button class="capture-btn ${ownClass}" data-id="${pokemon.id}" title="Capturer">${ownText}</button>
                            <button class="fav-btn ${favClass}" data-id="${pokemon.id}">❤</button>
                        </div>
                    </div>
                    <div class="types-row">${typesHTML}</div>
                    ${evoHTML}
                </div>
            </article>
        `;
    }

    // AFFICHAGE DES GRILLES 
    const collectionGrid = document.getElementById('collection-grid');
    const inventoryGrid = document.getElementById('inventory-grid');
    const favGrid = document.getElementById('favorites-grid');

    if (collectionGrid) {
        renderPokemons(pokemonData, collectionGrid);
        
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const type = btn.dataset.type;
                if (type === 'all') renderPokemons(pokemonData, collectionGrid);
                else renderPokemons(pokemonData.filter(p => p.type.includes(type)), collectionGrid);
            });
        });
        const searchInput = document.getElementById('search-input');
        if(searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                renderPokemons(pokemonData.filter(p => p.name.toLowerCase().includes(term)), collectionGrid);
            });
        }
    }

    if (inventoryGrid && favGrid) {
        updateCounters();
        
        const myPokemons = pokemonData.filter(p => inventory.includes(p.id));
        if (myPokemons.length > 0) {
            renderPokemons(myPokemons, inventoryGrid);
        } else {
            document.getElementById('no-inv-msg').style.display = 'block';
        }

        const favPokemons = pokemonData.filter(p => favorites.includes(p.id));
        if (favPokemons.length > 0) {
            renderPokemons(favPokemons, favGrid);
        }
    }

    function renderPokemons(list, container) {
        container.innerHTML = list.map(p => createCardHTML(p)).join('');
        attachEventListeners(container);
    }

    //  CLICS 
    function attachEventListeners(container) {
        container.querySelectorAll('.fav-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const id = parseInt(this.dataset.id);
                if (favorites.includes(id)) {
                    favorites = favorites.filter(favId => favId !== id);
                    this.classList.remove('active');
                } else {
                    favorites.push(id);
                    this.classList.add('active');
                }
                localStorage.setItem('favorites', JSON.stringify(favorites));
                if (favGrid) location.reload();
            });
        });

        container.querySelectorAll('.capture-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const id = parseInt(this.dataset.id);
                if (!inventory.includes(id)) {
                    inventory.push(id);
                    this.classList.add('owned');
                    this.innerText = '✓';
                    localStorage.setItem('inventory', JSON.stringify(inventory));
                    alert("Pokémon capturé !");
                }
            });
        });
    }

    //   ÉCHANGE
    const fabTrade = document.getElementById('fab-trade');
    const modal = document.getElementById('trade-modal');
    const closeModal = document.querySelector('.close-modal');
    const tradeForm = document.getElementById('trade-form');
    const tradeSelect = document.getElementById('trade-select');

    if (fabTrade && modal) {
        fabTrade.addEventListener('click', () => {
            modal.classList.remove('hidden');
            tradeSelect.innerHTML = '<option value="">-- Sélectionnez une carte --</option>';
            const myCards = pokemonData.filter(p => inventory.includes(p.id));
            if(myCards.length === 0) {
                const opt = document.createElement('option');
                opt.text = "Inventaire vide !";
                opt.disabled = true;
                tradeSelect.add(opt);
            } else {
                myCards.forEach(card => {
                    const opt = document.createElement('option');
                    opt.value = card.id;
                    opt.text = card.name;
                    tradeSelect.add(opt);
                });
            }
        });

        closeModal.addEventListener('click', () => modal.classList.add('hidden'));
        window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

        if (tradeForm) {
            tradeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const givenCardId = parseInt(tradeSelect.value);
                if(!givenCardId) return;

                inventory = inventory.filter(id => id !== givenCardId);
                const availableCards = pokemonData.filter(p => !inventory.includes(p.id));
                const pool = availableCards.length > 0 ? availableCards : pokemonData;
                const randomCard = pool[Math.floor(Math.random() * pool.length)];
                
                inventory.push(randomCard.id);
                localStorage.setItem('inventory', JSON.stringify(inventory));

                alert(`Échange réussi !\nReçu : ${randomCard.name}`);
                modal.classList.add('hidden');
                location.reload();
            });
        }
    }

    //  SIDENAV MOBILE 
    const burgerBtn = document.getElementById('burger-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    if (burgerBtn) burgerBtn.addEventListener('click', () => sidebar.classList.add('active'));
    if (closeBtn) closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));
});