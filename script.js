//Variavel que guarda uma Array/Lista das imagens dos filmes
var listaJogos = ['https://image.api.playstation.com/vulcan/ap/rnd/202303/0115/fe218552763de9b52d5abd040794879f396a7e16fc5bb755.jpg', 
'https://m.media-amazon.com/images/M/MV5BNzkwZDliNGEtMDNkNi00ODcxLWI1N2UtNDE1NmZlM2QyMTY4XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg', 
'https://image.api.playstation.com/cdn/UP3064/CUSA07511_00/6yEaL43dEig0W3JuUZZWRffPiqYmdz1A.png', 
'https://image.api.playstation.com/vulcan/ap/rnd/202209/0709/dGBogyAgLXm9OewkJ7zlRLtq.jpg', 
'https://upload.wikimedia.org/wikipedia/pt/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png', 
'https://upload.wikimedia.org/wikipedia/pt/thumb/7/7c/Dark_Souls_1_capa.png/270px-Dark_Souls_1_capa.png', 
'https://i.pinimg.com/originals/e8/b2/be/e8b2bef1a553a2516e74e7df07776208.png', 
'https://upload.wikimedia.org/wikipedia/pt/8/8f/Capa_de_Top_Gear.jpg', 
'https://image.api.playstation.com/cdn/UP0002/CUSA07402_00/03ZtrPdjasIxzi8QrzOb2zCIHLMydFbh.png', 
'https://notadogame.com/uploads/game/cover/250x/5bfdc36b22e14.jpg', 
'https://upload.wikimedia.org/wikipedia/en/5/55/SNES_Sailor_Moon_cover_art.jpg', 
'https://m.media-amazon.com/images/M/MV5BZjM5NzRlZmItM2Y1Mi00MTNhLTlhZTEtZWNhN2U5M2U3NzBlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg', 
'https://universonintendo.com/wp-content/uploads/2020/05/Little-Misfortune-KeyartQ.jpg', 
'https://image.api.playstation.com/cdn/UP0700/CUSA05929_00/BCXhBnr9X5jjilzuc5tyv7GOcBukog6V.png', 
'https://upload.wikimedia.org/wikipedia/en/9/94/Ori_and_the_Will_of_the_Wisps.jpg', 
'https://upload.wikimedia.org/wikipedia/en/c/cd/Brothers_A_Tale_of_Two_Sons_cover_art.jpg', 
'https://static-cdn.jtvnw.net/ttv-boxart/21465_IGDB-272x380.jpg', 
'https://image.api.playstation.com/cdn/UP0700/CUSA07136_00/zcAXlt30d5rRQOESkTPGN3zIAzFMOsOi.png', 
'https://www.konami.com/games/castlevania/s/img/history/2020_son_us.jpg', 
'https://m.media-amazon.com/images/M/MV5BYWJlYzgwMWYtMDA4Yi00NzQ1LTlhZDMtY2Y1NjY3NjRiMmY0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg', 
'https://m.media-amazon.com/images/M/MV5BYzQwZmZkMTQtZjFlMS00NDY1LTk5YTUtMTM0ZDQ5MWQwODk4XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg', 
'https://m.media-amazon.com/images/M/MV5BZDMzYzA1ZGYtY2U3MS00Mjk3LWJjN2QtY2U2MzRkZmEyMjRjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg', 
'https://upload.wikimedia.org/wikipedia/en/d/d2/Don%27t_Starve_cover.jpg', 
'https://m.media-amazon.com/images/M/MV5BNGE2ZTgwZjgtMGU4Mi00ZTI0LTllZWMtYWFjN2QxNjViYTJmXkEyXkFqcGdeQXVyNzQwMzAwNTI@._V1_.jpg', 
'https://cdn-products.eneba.com/resized-products/rxwue7h3qpaymbx3cczd_350x200_3x-0.jpg', 
'https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png', 
'https://image.api.playstation.com/cdn/UP0240/CUSA10518_00/Zgjse2LA3r6ZknG2wN4FDAmUuZXwe09g.png', 
'https://s2-ge.glbimg.com/N7BSSNFFK-QSWrgf0n_e0piPtDo=/0x0:2560x1440/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/4/G/xXHeVfTGe4bMldoEdMRQ/valorant-riot-games.jpg', 
'https://play-lh.googleusercontent.com/G6lO1D45U8yXZ-HW_LEAQv8rclCEIJi0VEP8uJ3aYefwForh3LttWDu35M2Qtahl8g=w240-h480-rw', 
'https://static.cdnlive.com.br/uploads/602/etc/16899576502251.jpeg', 
'https://image.jeuxvideo.com/images-sm/jaquettes/00026036/jaquette-perfect-world-international-pc-cover-avant-g.jpg', 
'https://www.konami.com/yugioh/duel_links/en/images/en/mainvisual-sevens_sp.jpg', 
'https://m.media-amazon.com/images/I/B1hKhWpf-+S.png', 
'https://m.media-amazon.com/images/I/815ujcam8yL.jpg', 
'https://upload.wikimedia.org/wikipedia/pt/thumb/0/03/Sfv-logo.png/275px-Sfv-logo.png', 
'https://m.media-amazon.com/images/I/91ZACYSmyeL.jpg', 
'https://static.tvtropes.org/pmwiki/pub/images/sky_title.png'];

//FOR (Criando a VARiável tal;  Repetir ENQUANTO tal coisa;  Quando tudo for executado faz tal coisa;) <-- Explicação
for (var i = 0; i < listaJogos.length; i ++) {
    document.write('<img src=' + listaJogos[i] + '>');
    //Colocando as imagens dos filmes na página através do JavaScript ao invés do HTML com o document.write()
    //Coletando as imágens através do índice[] delas na Lista/Array dos URLs (listaFilmes)
}
