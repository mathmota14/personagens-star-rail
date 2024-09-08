let dados = [
    {
      nome: 'Acheron',
      caminho: 'Inexistência',
      elemento: 'Raio',
      link: 'https://honkai-star-rail.fandom.com/wiki/Acheron',
      imagem: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/03/21/167256510/9e5e909a1f5c01fd09a3d5ad0037519f_4410911773968957827.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Argenti',
      caminho: 'Erudição',
      elemento: 'Físico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Argenti',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/12/05/0e2afe2fd46c9699a4e73807bf63e794_4690802445219194102.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Arlan',
      caminho: 'Destruição',
      elemento: 'Raio',
      link: 'https://honkai-star-rail.fandom.com/wiki/Arlan',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/2fa2a29d45df6b229d2525f720b831c1_4357389817891565749.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Asta',
      caminho: 'Harmonia',
      elemento: 'Fogo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Asta',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/6678fe8d31a180e31a1e04ef1d8eadaf_7231314384566776724.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Aventurine',
      caminho: 'Preservação',
      elemento: 'Imaginário',
      link: 'https://honkai-star-rail.fandom.com/wiki/Aventurine',
      imagem: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/03/29/167256510/140b3f8d174401ea209c3b00a0571194_5769917387842057798.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Bailu',
      caminho: 'Abundância',
      elemento: 'Raio',
      link: 'https://honkai-star-rail.fandom.com/wiki/Bailu',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/05/02/6799252/a87103d439cf99141f069c5b0c636e60_3049776634154189326.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Black Swan',
      caminho: 'Inexistência',
      elemento: 'Vento',
      link: 'https://honkai-star-rail.fandom.com/wiki/Black_Swan',
      imagem: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/01/29/5308864/38b8751c03fae5f57727485edda3a9d0_7959367183558512564.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Blade',
      caminho: 'Destruição',
      elemento: 'Vento',
      link: 'https://honkai-star-rail.fandom.com/wiki/Blade',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/07/10/6799252/9e33b8db3ced5f981c1427a842052e8a_9007039100645382605.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Boothill',
      caminho: 'Caça',
      elemento: 'Físico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Boothill',
      imagem: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/05/24/90b1764276960d7f7d53fde956be50aa_6987640505724242005.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Bronya',
      caminho: 'Harmonia',
      elemento: 'Vento',
      link: 'https://honkai-star-rail.fandom.com/wiki/Bronya',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/57c5d042f75dbb37b1e78b211cf645c9_6343871253887740107.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Clara',
      caminho: 'Destruição',
      elemento: 'Físico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Clara',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/e29a90c94a312c8c3630484be112281f_1321403954333962126.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Dan Heng',
      caminho: 'Caça',
      elemento: 'Vento',
      link: 'https://honkai-star-rail.fandom.com/wiki/Dan_Heng',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/5906dd1fb682903b2c8fa6b3a314febf_918735250537819040.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Dan Heng Imbibitor Lunae',
      caminho: 'Destruição',
      elemento: 'Imaginário',
      link: 'https://honkai-star-rail.fandom.com/wiki/Dan_Heng_%E2%80%A2_Imbibitor_Lunae',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/25/250281765/274e4d01efb391334126171753e400d7_2691687760360431628.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Dr. Ratio',
      caminho: 'Caça',
      elemento: 'Imaginário',
      link: 'https://honkai-star-rail.fandom.com/wiki/Dr._Ratio',
      imagem: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2023/12/25/167256510/c72a1d9e62b2935a8b36fdf968a3d34f_7639598452661147263.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Feixiao',
      caminho: 'Caça',
      elemento: 'Vento',
      link: 'https://honkai-star-rail.fandom.com/wiki/Feixiao',
      imagem: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/09/05/5308864/6c6334ce932d4b6122ab600ce6d05bbe_6402162139893943158.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Firefly',
      caminho: 'Destruição',
      elemento: 'Fogo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Firefly',
      imagem: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/06/19/5308864/e4a585ed5dad231872aa0a28ed9a362d_741920743195644551.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Fu Xuan',
      caminho: 'Preservação',
      elemento: 'Quântico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Fu_Xuan',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/25/250281765/a519d2e49b5bbefb2f189a80c30571cd_2101569505693000965.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Gallagher',
      caminho: 'Abundância',
      elemento: 'Fogo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Gallagher',
      imagem: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/02/04/167256510/1a7d7b3004c41e55447a626d6d11f3ec_6649405654609661308.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Gepard',
      caminho: 'Preservação',
      elemento: 'Gelo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Gepard',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/e8affe99a96952944134a87057777439_1944942577070479685.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Guinaifen',
      caminho: 'Inexistência',
      elemento: 'Fogo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Guinaifen',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/11/19/167256510/a456df12439bf48602745abaf0faefe8_3738571763511981481.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Hanya',
      caminho: 'Harmonia',
      elemento: 'Físico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Hanya',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/24cdcb5829ccaeaf564f9d143e13fd27_3463177043058966924.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Herta',
      caminho: 'Erudição',
      elemento: 'Gelo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Herta',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/78bdd2715945e3f1e87dc677d50f481e_7231314384566776724.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Himeko',
      caminho: 'Erudição',
      elemento: 'Fogo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Himeko',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/e4aaa93b8aec53396fdcf6296388597f_8571278187657403042.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Hook',
      caminho: 'Destruição',
      elemento: 'Fogo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Hook',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/e35c7c440672f1a6626f7b379b2da5a0_4357389817891565749.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Huohuo',
      caminho: 'Abundância',
      elemento: 'Vento',
      link: 'https://honkai-star-rail.fandom.com/wiki/Huohuo',
      imagem: 'https://starrail.honeyhunterworld.com/img/item/night-of-fright-item_icon_thumbnail_large.webp?x57444'
    },
    {
      nome: 'Jade',
      caminho: 'Erudição',
      elemento: 'Quântico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Jade',
      imagem: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/06/19/5308864/40ba19555b72a9afcd6ae1d6575d76b3_3012193814954879296.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Jiaoqiu',
      caminho: 'Inexistência',
      elemento: 'Fogo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Jiaoqiu',
      imagem: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/08/07/5308864/cbe8cac203d76000a9d5d438f8b972bc_8191996132171974467.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Jing Yuan',
      caminho: 'Erudição',
      elemento: 'Raio',
      link: 'https://honkai-star-rail.fandom.com/wiki/Jing_Yuan',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/ac79e739072fa86b2f6d5f851bb2c916_952669953280599733.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Jingliu',
      caminho: 'Destruição',
      elemento: 'Gelo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Jingliu',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/10/01/6799252/0f027ac017c57d6b62617d379e3087fc_2587795555586038708.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Kafka',
      caminho: 'Inexistência',
      elemento: 'Raio',
      link: 'https://honkai-star-rail.fandom.com/wiki/Kafka',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/07/10/6799252/3e4d37ab610e9d0270e4dc4507f9809d_3445322774549689808.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Lingsha',
      caminho: 'Abundância',
      elemento: 'Fogo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Lingsha',
      imagem: 'https://starrail.honeyhunterworld.com/img/item/scent-alone-stays-true-item_icon_thumbnail_large.webp?x57444'
    },
    {
      nome: 'Luka',
      caminho: 'Inexistência',
      elemento: 'Físico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Luka',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/05/02/6799252/2e50faa47bb9477dd844966d41b28d66_7042493184714914992.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Luocha',
      caminho: 'Abundância',
      elemento: 'Imaginário',
      link: 'https://honkai-star-rail.fandom.com/wiki/Luocha',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/06/08/6799252/b57ba07be186c25b2e98010303d723f4_7753175512192545273.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Lynx',
      caminho: 'Abundância',
      elemento: 'Quântico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Lynx',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/142eb386d41e9d22c53702acd5d7cafe_4815329713662711142.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'March 7th',
      caminho: 'Preservação',
      elemento: 'Gelo',
      link: 'https://honkai-star-rail.fandom.com/wiki/March_7th',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/d30f1640606c482d1dde06f5234be0b2_4059157342224776055.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'March 7th (Hunt)',
      caminho: 'Caça',
      elemento: 'Imaginário',
      link: 'https://honkai-star-rail.fandom.com/wiki/March_7th/Combat/The_Hunt',
      imagem: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/08/07/5308864/c9b8c0096542b655c41817d66de877c9_2034944704908814926.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Misha',
      caminho: 'Destruição',
      elemento: 'Gelo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Misha',
      imagem: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/02/04/3d2c000744065606335224819b4c2c8e_1440791885639005208.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Moze',
      caminho: 'Caça',
      elemento: 'Raio',
      link: 'https://honkai-star-rail.fandom.com/wiki/Moze',
      imagem: 'https://starrail.honeyhunterworld.com/img/item/shadowed-by-night-item_icon_thumbnail_large.webp?x57444'
    },
    {
      nome: 'Natasha',
      caminho: 'Abundância',
      elemento: 'Físico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Natasha',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/bbc831d2b1685bc85083551e51047e3f_2901581893313933971.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Pela',
      caminho: 'Inexistência',
      elemento: 'Gelo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Pela',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/fb3acf8862148ccc99297b9c2669502c_7824066832447018591.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Qingque',
      caminho: 'Erudição',
      elemento: 'Quântico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Qingque',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/2170522acf2fc7e6a657b0f26a81f7b0_8571278187657403042.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Robin',
      caminho: 'Harmonia',
      elemento: 'Físico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Robin',
      imagem: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/05/07/ca03ae75713f4ef7dbd4c68d671d1b0f_4402507865225057642.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Ruan Mei',
      caminho: 'Harmonia',
      elemento: 'Gelo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Ruan_Mei',
      imagem: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2023/12/25/9abbea4b755e183768a9a2a30600cad0_964949891846795661.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Sampo',
      caminho: 'Inexistência',
      elemento: 'Vento',
      link: 'https://honkai-star-rail.fandom.com/wiki/Sampo',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/1c7c012eeb05699acc8c2ad33cee412a_9207997407084704522.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Seele',
      caminho: 'Caça',
      elemento: 'Quântico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Seele',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/f342952758193dcdcd8dd1dde1cc969d_4815329713662711142.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Serval',
      caminho: 'Erudição',
      elemento: 'Raio',
      link: 'https://honkai-star-rail.fandom.com/wiki/Serval',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/0d119463b9a6b8fbbc03d4b0de786994_5214933404516381671.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Silver Wolf',
      caminho: 'Inexistência',
      elemento: 'Quântico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Silver_Wolf',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/06/05/6799252/dd30c9e39b8126dde54946cf2581215f_7869576066016102864.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Sparkle',
      caminho: 'Harmonia',
      elemento: 'Quântico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Sparkle',
      imagem: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/02/27/08f28fd17c7293362ce7db20de8df1df_4242746970141722423.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Sushang',
      caminho: 'Caça',
      elemento: 'Físico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Sushang',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/2f53efe41f6c16ce298f0bbafc170949_1511327361354317201.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Tingyun',
      caminho: 'Harmonia',
      elemento: 'Raio',
      link: 'https://honkai-star-rail.fandom.com/wiki/Tingyun',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/09f103a321dcd967fa90049b49997560_1511327361354317201.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Topaz',
      caminho: 'Caça',
      elemento: 'Fogo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Topaz_and_Numby',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/10/01/6799252/4f2ab7074d519b215cd150b8cf1f433a_3257119075936702359.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Trailblazer (Destruction)',
      caminho: 'Destruição',
      elemento: 'Físico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Trailblazer/Combat/Destruction',
      imagem: 'https://starrail.honeyhunterworld.com/img/character/trailblazer-character_cut_in_front.webp?x57444'
    },
    {
      nome: 'Trailblazer (Preservation)',
      caminho: 'Preservação',
      elemento: 'Fogo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Trailblazer/Combat/Preservation',
      imagem: 'https://starrail.honeyhunterworld.com/img/character/trailblazer-character-3_gacha_result_bg.webp?x57444'
    },
    {
      nome: 'Trailblazer (Harmony)',
      caminho: 'Harmonia',
      elemento: 'Imaginário',
      link: 'https://honkai-star-rail.fandom.com/wiki/Trailblazer/Combat/Harmony',
      imagem: 'https://starrail.honeyhunterworld.com/img/character/trailblazer-character-5_cut_in_front.webp?x57444'
    },
    {
      nome: 'Welt',
      caminho: 'Inexistência',
      elemento: 'Imaginário',
      link: 'https://honkai-star-rail.fandom.com/wiki/Welt',
      imagem: 'https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/e83831b4e3d1b31683d2ab65a934d305_7267104140862379789.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Xueyi',
      caminho: 'Destruição',
      elemento: 'Quântico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Xueyi',
      imagem: 'https://starrail.honeyhunterworld.com/img/character/xueyi-character_gacha_result_bg.webp?x57444'
    },
    {
      nome: 'Yanqing',
      caminho: 'Caça',
      elemento: 'Gelo',
      link: 'https://honkai-star-rail.fandom.com/wiki/Yanqing',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/30/6799252/93e00be069bfa6857d2e16c231b25c18_7105069081961934676.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      nome: 'Yukong',
      caminho: 'Harmonia',
      elemento: 'Imaginário',
      link: 'https://honkai-star-rail.fandom.com/wiki/Yukong',
      imagem: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/30/6799252/681844310640e780ebc65d47266a103a_4962334823232189410.png?x-oss-process=image%2Fformat%2Cwebp',
    },
    {
      nome: 'Yunli',
      caminho: 'Destruição',
      elemento: 'Físico',
      link: 'https://honkai-star-rail.fandom.com/wiki/Yunli',
      imagem: 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/07/30/4f112f0dbb53f86def1d68b607875b82_2698456100476958626.png?x-oss-process=image%2Fformat%2Cwebp',
    },
]