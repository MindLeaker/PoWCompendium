

Hooks.on("setup", () => {
  console.log("eliscat | Initializing Categories"),
  CONFIG.PF1.featTypes['veils'] = "Veils"
  CONFIG.PF1.featTypes['mythic'] = "Mythic"
  CONFIG.PF1.featTypes['resources'] = "Resources"
  CONFIG.PF1.featTypes['notes'] = "Notes"
});


Hooks.on("setup", () => {
  console.log("eliscat | Initializing Psionic Schools"),
  CONFIG.PF1.spellSchools['atha'] = "Athanatism"
  CONFIG.PF1.spellSchools['psym'] = "Psychometabolism"
  CONFIG.PF1.spellSchools['psyk'] = "Psychokinesis"
  CONFIG.PF1.spellSchools['psyp'] = "Psychoportation"
  CONFIG.PF1.spellSchools['clrs'] = "Clairsentience"
  CONFIG.PF1.spellSchools['mcre'] = "Metacreativity"
  CONFIG.PF1.spellSchools['tlpt'] = "Telepathy"
});


Hooks.on("setup", () => {
  console.log("eliscat | Initializing Martial Disciplines")
  CONFIG.PF1.spellSchools['blks'] = "Black Seraph"
  CONFIG.PF1.spellSchools['brlb'] = "Broken Blade"
  CONFIG.PF1.spellSchools['bcrc'] = "Brutal Crocodile"
  CONFIG.PF1.spellSchools['crzr'] = "Cursed Razor"
  CONFIG.PF1.spellSchools['eflx'] = "Elemental Flux"
  CONFIG.PF1.spellSchools['egdn'] = "Eternal Guardian"
  CONFIG.PF1.spellSchools['fend'] = "Fool's Errand"
  CONFIG.PF1.spellSchools['glon'] = "Golden Lion"
  CONFIG.PF1.spellSchools['itrt'] = "Iron Tortoise"
  CONFIG.PF1.spellSchools['ipet'] = "Intoxicating Petal"
  CONFIG.PF1.spellSchools['lhyn'] = "Leaden Hyena"
  CONFIG.PF1.spellSchools['mger'] = "Mangled Gear"
  CONFIG.PF1.spellSchools['mcrn'] = "Mithral Current"
  CONFIG.PF1.spellSchools['pthd'] = "Piercing Thunder"
  CONFIG.PF1.spellSchools['pfry'] = "Primal Fury"
  CONFIG.PF1.spellSchools['rdwn'] = "Radiant Dawn"
  CONFIG.PF1.spellSchools['rhog'] = "Riven Hourglass"
  CONFIG.PF1.spellSchools['rmou'] = "Roaring Mouse"
  CONFIG.PF1.spellSchools['sstl'] = "Sagitta Stellaris"
  CONFIG.PF1.spellSchools['sthn'] = "Scarlet Throne"
  CONFIG.PF1.spellSchools['smir'] = "Shattered Mirror"
  CONFIG.PF1.spellSchools['scrn'] = "Silver Crane"
  CONFIG.PF1.spellSchools['sgds'] = "Sleeping Goddess"
  CONFIG.PF1.spellSchools['swnd'] = "Solar Wind"
  CONFIG.PF1.spellSchools['sspt'] = "Steel Serpent"
  CONFIG.PF1.spellSchools['sshk'] = "Surging Shark"
  CONFIG.PF1.spellSchools['tgal'] = "Tempest Gale"
  CONFIG.PF1.spellSchools['tdrg'] = "Thrashing Dragon"
  CONFIG.PF1.spellSchools['uqgv'] = "Unquiet Grave"
  CONFIG.PF1.spellSchools['vmon'] = "Veiled Moon"
});
