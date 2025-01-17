onEvent('tags.items', event => {
    let blStorage = []

    //Might be a better way to do this, but this works for now.
    const unifyTags = [
        ['carrot', 'farmersdelight:carrot_crate'],
        ['carrot', 'quark:carrot_crate'],
        ['carrot', 'thermal:carrot_block'],
        ['potato', 'farmersdelight:potato_crate'],
        ['potato', 'quark:potato_crate'],
        ['potato', 'thermal:potato_block'],
        ['beetroot', 'farmersdelight:beetroot_crate'],
        ['beetroot', 'quark:beetroot_crate'],
        ['beetroot', 'thermal:beetroot_block'],
        ['onion', 'farmersdelight:onion_crate'],
        ['onion', 'thermal:onion_block'],
        ['tomato', 'farmersdelight:tomato_crate'],
        ['tomato', 'thermal:tomato_block'],
        ['sugar_cane', 'farmers_bundle:bale_sugarcane'],
        ['sugar_cane', 'quark:sugar_cane_block'],
        ['sugar_cane', 'thermal:sugar_cane_block'],
        ['bamboo', 'farmers_bundle:bundle_bamboo'],
        ['bamboo', 'quark:bamboo_block'],
        ['bamboo', 'thermal:bamboo_block'],
        ['cocoa_beans', 'farmers_bundle:crate_cocoabean'],
        ['cocoa_beans', 'quark:cocoa_beans_sack'],
        ['glow_berries', 'farmers_bundle:crate_glowberry'],
        ['glow_berries', 'quark:glowberry_sack'],
        ['gunpowder', 'quark:gunpowder_sack'],
        ['gunpowder', 'thermal:gunpowder_block'],
        ['flax', 'thermal:flax_block'],
        ['flax', 'supplementaries:flax_block'],
        ['golden_apple', 'farmers_bundle:crate_goldenapple'],
        ['golden_apple', 'quark:golden_apple_crate'],
        ['sugar', 'farmers_bundle:bag_sugar'],
        ['sugar', 'supplementaries:sugar_cube'],
        ['chorus_fruit', 'endersdelight:chorus_crate'],
        ['chorus_fruit', 'quark:chorus_fruit_block'],
        ['sweet_berries', 'farmers_bundle:crate_sweetberry'],
        ['sweet_berries', 'quark:berry_sack'],
        ['rice', 'farmersdelight:rice_bag'],
        ['rice', 'thermal:rice_block'],
        ['apple', 'farmers_bundle:crate_apple'],
        ['apple', 'quark:apple_crate'],
        ['apple', 'thermal:apple_block'],
        ['strawberry', 'neapolitan:strawberry_basket'],
        ['strawberry', 'thermal:strawberry_block'],
        ['adzuki', 'neapolitan:adzuki_crate'],
        ['adzuki', 'bundledelight:adzuki_bean_crate'],
        ['raw_irradium', EEt`raw_irradium_block`],
        ['raw_bismuth', EEt`raw_bismuth_block`],
        ['bismuth', EEt`bismuth_block`],
        ['irradium', EEt`irradium_block`],
        ['depleted_irradium', EEt`depleted_irradium_block`],
        ['adamantite', EEt`adamantite_block`],
        ['starsteel', EEt`starsteel_block`],
        ['leather', 'quark:bonded_leather'],
        ['overcharged_alloy_block', CDDt`overcharged_alloy_block`],
        ['blaze_gold_block', CDDt`blaze_gold_block`],
        ['egg_crate', 'farmers_bundle:crate_egg'],
        ['egg_crate', 'incubation:chicken_egg_crate']
    ]

    const starter_candies = [
        'supplementaries:candy',
        'create_confectionery:candy_cane',
        'create_confectionery:honey_candy',
        FD + ':melon_popsicle',
        'neapolitan:mint_chocolate',
        'neapolitan:strawberry_bean_bonbons'
    ]

    const starter_meal = [
        'brewinandchewin:pizza_slice',
        'farmersdelight:stuffed_potato',
        'thermal:pbj_sandwich',
        'farmersdelight:cabbage_rolls',
        'nethersdelight:nether_skewer',
        'alexsdelight:bison_burger',
        'berry_good:glowgurt',
        'farmersdelight:salmon_roll',
        'thermal:sushi_maki',
        'farmersdelight:dumplings',
        'neapolitan:banana_bread'
    ]

    event.add('forge:mazestone', [
        TF + ':mazestone',
        TF + ':mazestone_brick',
        TF + ':cracked_mazestone',
        TF + ':mossy_mazestone',
        TF + ':decorative_mazestone',
        TF + ':cut_mazestone',
        TF + ':mazestone_border',
        TF + ':mazestone_mosaic'
    ])

    event.add(TF + ':banned_uncraftables', [
        INF + ':mycelial_meatallurgic',
        INF + ':mycelial_culinary',
        'alexsmobs:animal_dictionary'
    ])
    event.add(TF + ':banned_uncrafting_ingredients', [
        'aquaculture:neptunes_bounty',
        TCON + ':sledge_hammer',
        INF + ':pink_slime',
        'minecraft:turtle_egg',
        'ae2:ender_dust',
        'quark:blank_rune'
    ])

    colors.forEach(color => event.add(TF + ':banned_uncrafting_ingredients', 'minecraft:' + color + '_dye'))

    event.add('forge:blocks/bronze', 'thermal:bronze_block')
    event.add('forge:blocks/steel', 'thermal:steel_block')

    event.remove('curios:charm', 'magicfeather:magicfeather')

    event.remove(TF + ':portal/activator', '#forge:gems/diamond')
    event.add(TF + ':portal/activator', 'ae2:spatial_cell_component_2')

    //Purging extractinator's tags.
    event.removeAll('extractinator:common_drops')
    event.removeAll('extractinator:rare_drops')
    event.removeAll('extractinator:very_rare_drops')
    event.removeAll('extractinator:common_gravel_drops')
    event.removeAll('extractinator:common_snow_drops')
    event.removeAll('extractinator:rare_sand_drops')

    event.removeAll('sapience:piglins_barter_cheap')
    event.removeAll('sapience:piglins_barter_expensive')

    function extract(id, type, items) { event.add(`twilight:extract_${id}_${type}`, items) }

    extract('minecraft', 'raw', ['minecraft:raw_iron', 'minecraft:raw_copper', 'minecraft:raw_gold'])
    extract('thermal', 'raw', ['thermal:raw_tin', 'thermal:raw_nickel', 'thermal:raw_lead', 'thermal:raw_silver'])
    extract('thermal', 'dust', ['thermal:apatite_dust', 'thermal:cinnabar_dust', 'thermal:niter_dust', 'thermal:sulfur_dust'])
    extract('elemental', 'powder', ['thermal:basalz_powder', 'thermal:blitz_powder', 'thermal:blizz_powder', 'minecraft:blaze_powder'])
    extract('rare', 'gem', ['minecraft:emerald', 'minecraft:diamond'])
    extract('common', 'gem', ['minecraft:lapis_lazuli', 'minecraft:amethyst_shard', 'minecraft:coal'])
    extract(TF, 'material', [TF + ':borer_essence', TF + ':torchberries', TF + ':transformation_powder', TF + ':armor_shard', TF + ':carminite', TF + ':liveroot'])
    extract('dirt', 'misc', ['minecraft:clay_ball', 'farmersdelight:tree_bark', 'farmersdelight:straw', 'minecraft:rotten_flesh', 'minecraft:bone_meal', 'thermal:slag'])

    event.add('forge:fertilizer', 'waterstrainer:fertilizer')
    event.add('twilight:extract_dirt_misc', ['waterstrainer:fertilizer', INF + ':fertilizer'])
    event.add('curios:magicfeather', 'magicfeather:magicfeather')
    event.add('forge:plates', 'createdeco:zinc_sheet')
    event.add('forge:slimeballs', 'thermal_extra:sticky_ball')
    event.add('minecraft:iron_ores', 'infernalexp:basalt_iron_ore')
    event.add('forge:crops', 'neapolitan:strawberries')
    event.add('forge:crops/strawberry', 'neapolitan:strawberries')
    event.add('forge:crops', 'neapolitan:banana')
    event.add('forge:crops/banana', 'neapolitan:banana')
    event.add('forge:crops', 'neapolitan:adzuki_beans')
    event.add('forge:crops/adzuki', 'neapolitan:adzuki_beans')
    event.add('twilight:forging_tool', 'stalwart_dungeons:netherite_hammer')
    event.add('twilight:tnts', ['tnt', EEt`nuclear_bomb`])
    event.add('twilight:cakes', 'cake')
    event.add('twilight:starter_cake', FDt`cake_slice`)
    event.add('forge:concrete_powders', 'pfm:raw_concrete_powder')
    event.add('forge:concrete_powder', 'pfm:raw_concrete_powder')
    event.add('forge:raw/rubber', ['thermal:rubber', CDDt`raw_rubber`])
    event.add('forge:cured/rubber', ['thermal:cured_rubber', CDDt`rubber`])
    event.add('forge:eggs/cooked', '#forge:cooked_eggs')

    event.add('tconstruct:seared_blocks', global.mossySmelteryBlocks)
    event.add('tconstruct:smeltery', global.mossySmelteryBlocks)
    event.add('tconstruct:smeltery_bricks', global.mossySmelteryBlocks)
    event.add('tconstruct:structure_debug/smeltery', global.mossySmelteryBlocks)

    event.add('twilight:moss_components', ['quark:moss_paste', TFt`moss_patch`, 'moss_block'])

    let chestNBarrel = Ingredient.of([event.get("forge:chests").objectIds.toArray(), event.get("chipped:barrel").objectIds.toArray()])
    let toExclude = Ingredient.of([Ingredient.of(event.get("forge:chests/trapped").objectIds.toArray()), "ender_chest", "aquaculture:neptunes_bounty", "framedblocks:framed_chest"]).not()
    event.add('twilight:patience_challenge_suitable', chestNBarrel.filter(toExclude).itemIds.toArray())

    event.add('forge:tools/chorundum', Ingredient.of(/^stalwart_dungeons:chorundum_(sword|pickaxe|shovel|axe|hoe)$/))
    event.add('forge:tools/flux', Ingredient.of(/^redstone_arsenal:flux_(sword|pickaxe|shovel|axe|hammer|excavator|sickle)$/))

    let blTools = Ingredient.of(['@tconstruct', '@tinkers_reforged']).not()
    event.add('forge:tools/sickles', Ingredient.of(/\w+:\w+_sickle$/))
    Ingredient.of(/\w+:\w+_sword$/).filter(blTools).itemIds.forEach(sword => event.add('forge:tools/swords', sword))
    Ingredient.of(/\w+:\w+_pickaxe$/).filter(blTools).itemIds.forEach(pickaxe => event.add('forge:tools/pickaxes', pickaxe))
    Ingredient.of(/\w+:\w+_axe$/).filter(blTools).itemIds.forEach(axe => event.add('forge:tools/axes', axe))
    Ingredient.of(/\w+:\w+_shovel$/).filter(blTools).itemIds.forEach(shovel => event.add('forge:tools/shovels', shovel))
    Ingredient.of(/\w+:\w+_hoe$/).filter(blTools).itemIds.forEach(hoe => event.add('forge:tools/hoes', hoe))
    Ingredient.of(/\w+:\w+_excavator$/).filter(Ingredient.of(['@redstone_arsenal', '@tools_complement'])).itemIds.forEach(excavator => event.add('forge:tools/excavators', excavator))
    Ingredient.of(/\w+:\w+_hammer$/).filter(Ingredient.of(['@redstone_arsenal', '@stalwart_dungeons', '@tools_complement'])).itemIds.forEach(hammer => event.add('forge:tools/hammers', hammer))
    Ingredient.of(/\w+:\w+_(knife|dagger)$/).itemIds.forEach(knife => event.add('forge:tools/knives', knife))

    event.add('sapience:piglins_barter', 'thermal:gold_coin')
    event.add('sapience:piglins_barter', Ingredient.of('#forge:plates/gold').itemIds.toArray())

    Ingredient.of(/(dustrial_decor|create_sa|tools_complement):\w+_chestplate/).filter(Ingredient.of([event.get('create_sa:fillable').objectIds.toArray(), event.get('create_sa:fuelable').objectIds.toArray()]).not()).itemIds.forEach(chestplate => event.add('twilight:starter_chestplate', chestplate))
    Ingredient.of(/(dustrial_decor|create_sa|tools_complement):\w+_boots/).filter(Ingredient.of('create_sa:slime_boots').not()).itemIds.forEach(boots => event.add('twilight:starter_boots', boots))

    Ingredient.of(/\w+:\w+tea$/).itemIds.forEach(tea => event.add('twilight:starter_tea', tea))
    Ingredient.of(/\w+:\w+(juice|cider|custard|coffee|milkshake|drink)$/).itemIds.forEach(juice => event.add('twilight:starter_juice', juice))
    Ingredient.of(/\w+:\w+pie_slice$/).itemIds.forEach(pie => event.add('twilight:starter_pie', pie))
    Ingredient.of(/\w+:\w+cake_slice$/).itemIds.forEach(cake => event.add('twilight:starter_cake', cake))
    Ingredient.of(/\w+:\w+salad$/).itemIds.forEach(salad => event.add('twilight:starter_salad', salad))
    Ingredient.of(/\w+:\w+soup$/).filter(Ingredient.of('oceansdelight:guardian_soup').not()).itemIds.forEach(soup => event.add('twilight:starter_soup', soup))
    Ingredient.of(/\w+:\w+ice_cream$/).itemIds.forEach(ice_cream => event.add('twilight:starter_ice_cream', ice_cream))
    Ingredient.of(/\w+:\w+tnt$/).itemIds.forEach(tnt => event.add('twilight:tnts', tnt))
    Ingredient.of(/\w+:\w+cake$/).filter(Ingredient.of(['@create', '@tconstruct', '@create_factory', 'exquisito:battenberg_cake']).not()).itemIds.forEach(cake => { if (!cake.includes('incomplete')) event.add('twilight:cakes', cake) })
    Ingredient.of(/\w+:\w+cookie$/).itemIds.forEach(cookie => event.add('twilight:cookies', cookie))
    starter_candies.forEach(candy => event.add('twilight:starter_candy', candy))
    starter_meal.forEach(meal => event.add('twilight:starter_meal', meal))

    event.add('twilight:cookies', ['endersdelight:uncanny_cookies', 'cookie'])
    event.add('supplementaries:cookies', '#twilight:cookies')

    let tag_nuggets = [
        EEt`adamantite_nugget`, EEt`starsteel_nugget`, EEt`bismuth_nugget`
    ].forEach(nugget => {
        event.add('forge:nuggets', nugget)
        event.add('forge:nuggets/' + new ResourceLocation(nugget).getPath().split('_').slice(0, -1).join('_'), nugget)
    })
    /* let tag_ingots = [

    ].forEach(ingot => {
        event.add('forge:ingots', ingot)
        event.add('forge:ingots/' + new ResourceLocation(ingot).getPath().split('_').slice(0, -1).join('_'), ingot)
    }) */
    let tag_ores = [
        EEt`malachite_ore`,
        EEt`irradium_ore`,
        EEt`bismuth_ore`,
        "stalwart_dungeons:chorundum_ore",
        "stalwart_dungeons:tungsten_ore"
    ].forEach(ore => {
        event.add('forge:ores', ore)
        event.add('forge:ores/' + new ResourceLocation(ore).getPath().split('_').slice(0, -1).join('_'), ore)
    })
    dyenamiColors.forEach(color => {
        event.add('forge:concrete_powders', 'dyenamics:' + color + '_concrete_powder')
        event.add('forge:concrete_powder', 'dyenamics:' + color + '_concrete_powder')
    })

    Ingredient.getAll().itemIds.forEach(id => {
        if (global.canEquip(id, EquipmentSlot.HEAD, null)) {
            event.add('twilight:head_wearable', id)
            event.add('twilight:wearable', id)
        }
        if (global.canEquip(id, EquipmentSlot.CHEST, null)) {
            event.add('twilight:chest_wearable', id)
            event.add('twilight:wearable', id)
        }
        if (global.canEquip(id, EquipmentSlot.LEGS, null)) {
            event.add('twilight:legs_wearable', id)
            event.add('twilight:wearable', id)
        }
        if (global.canEquip(id, EquipmentSlot.FEET, null)) {
            event.add('twilight:feet_wearable', id)
            event.add('twilight:wearable', id)
        }
    })

    for (let i of colors) {
        event.add('comforts:sleeping_bags', 'comforts:sleeping_bag_' + i)
        event.add('comforts:hammocks', 'comforts:hammock_' + i)
        event.add('twilight:chair', 'interiors:' + i + '_chair')
        event.add('twilight:floor_chair', 'interiors:' + i + '_floor_chair')
    }
    for (let i of dyenamiColors) {
        event.add('comforts:sleeping_bags', DNF + ':comforts_' + i + '_sleeping_bag')
        event.add('comforts:hammocks', DNF + ':comforts_' + i + '_hammock')
        event.add('twilight:chair', KJS + ':' + i + '_chair')
        event.add('twilight:floor_chair', KJS + ':' + i + '_floor_chair')
        event.add('forge:shulker_boxes', 'dyenamics:' + i + '_shulker_box')
    }

    function addUnifyTag(material, item) {
        event.add(`forge:storage_blocks`, item)
        event.add(`forge:storage_blocks/${material}`, item)
    }

    blStorage.push('tconstruct:rose_gold_block')
    blStorage.push('thermal:ruby_block')
    blStorage.push('thermal:sapphire_block')
    unifyTags.forEach(entry => {
        addUnifyTag(entry[0], entry[1])
        if (entry[1].includes('thermal')) blStorage.push(entry[1])
    })

    event.removeAllTagsFrom('thermal:onion_seeds')
    event.removeAllTagsFrom('thermal:tomato_seeds')
    event.removeAllTagsFrom('thermal:rice_seeds')

    global.blStorage = blStorage
    global.unifyTags = unifyTags
})

//Fixing recipes. Idk why it is here.
onEvent('recipes', event => {
    event.shaped(FD + ':beetroot_crate', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: '#forge:crops/beetroot'
    }).id(FD + ':beetroot_crate')
    event.shaped(FD + ':carrot_crate', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: '#forge:crops/carrot'
    }).id(FD + ':carrot_crate')
    event.shaped(FD + ':potato_crate', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: '#forge:crops/potato'
    }).id(FD + ':potato_crate')

    erId(event, 'farmers_bundle:recipe_bag_sugar')
    erId(event, 'farmers_bundle:recipecrategoldenapple')
    erId(event, 'farmers_bundle:recipe_crate_apple')
    erId(event, 'farmers_bundle:recipe_crate_glowberry')
    erId(event, 'farmers_bundle:recipe_crate_sweetberry')
    erId(event, 'farmers_bundle:recipebalecane')
    erId(event, 'farmers_bundle:recipebundlebamboo')
    erId(event, 'farmers_bundle:recipecratecocoabean')
})