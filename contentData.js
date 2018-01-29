var contentData = [{
    title: "Üldised põhimõtted",
    sections: [{
        tags: "O dev",
        content: "Lehe aadress tuleb hoida võimalikult lühikesena, sest mobiilseadmetel veebilehitsejasse aadressi trükkimine on ebamugav. Lühike aadress, näiteks <b>firma.ee</b> peab suunama lehele <b>http://www.firma.ee/index.html</b> ja <b>firma.ee/leht</b> lehele <b>http://www.firma.ee/leht.html</b>. Lehe aadress peab avama alati sama temaatikaga lehe, olenemata seadmest."
    }, {
        tags: "AA dev",
        content: "Veebileht peab olema kasutatav vähemalt 320 CSS piksli laiuses puutetundlikes mobiilseadmetes. (WCAG 2.1 1.4.10) Soovitatav on disainida leht kohanduvalt (<i>responsive</i>) ja esmalt mobiilile (<i>mobile first</i>). Lehte peab olema võimalik mobiilis suurendada – ei tohiks kasutada <b>&lt;meta&gt;</b> märgendi <b>user-scalable=”no”</b> atribuuti. (WCAG 1.4.4)"
    }, {
        tags: "O dev",
        content: "Soovitatav on kasutada HTML5 struktuurielemente: <b>&lt;article&gt;</b> suure iseseisva sisuosa jaoks, <b>&lt;section&gt;</b> sektsioonide eristamiseks, <b>&lt;header&gt;</b> päise esitamiseks, <b>&lt;main&gt;</b> põhisisu märkimiseks, <b>&lt;footer&gt;</b> jaluse märkimiseks, <b>&lt;nav&gt;</b> menüü jaoks, <b>&lt;aside&gt;</b> külgriba jaoks, <b>&lt;address&gt;</b> kontaktinfo (soovitatavalt e-posti aadressi) jaoks. Elementidele tuleks lisada pealkiri <b>aria-label=”...”</b> atribuudiga või kirjutada vastava pealkirja id <b>aria-labelledby=”...”</b> atribuuti.<figure><img alt='Näide struktuurielementide kasutamisest' class='single' src='img/struktuurielemendid.jpg'></figure>"
    }, {
        tags: "O dev",
        content: "Vältida tuleks raame nagu <b>&lt;frameset&gt;</b> või <b>&lt;iframe&gt;</b>, sest paljud mobiilseadmed ei toeta neid ning nad on üldiselt vananenud ja problemaatilised. Kui siiski kasutatakse raame, tuleb neile anda kirjeldavad <b>title=”...”</b> atribuudid."
    }, {
        tags: "A dev",
        content: "Kujundus tuleks luua kasutades laadilehti (<i>stylesheets</i>), mitte <b>style=“…”</b> atribuute. Sisu peab olema kättesaadav ja loogilises järjekorras ka laadilehti kasutamata. (WCAG 1.3.2)"
    }, {
        tags: "O dev",
        content: "Peidetud elemendile tuleb anda CSS-is nii <b>display: none</b> kui ka <b>visibility: hidden</b> stiilid, et ükski ekraanilugeja ei näeks peidetud elementi.<pre>.hidden &#123;<br>   display: none;<br>   visibility: hidden;<br>&#125;</pre>"
    }, {
        tags: "O dev",
        content: "Elementide suurused tuleb määrata relatiivsetes ühikutes nagu <b>rem</b> ja <b>em</b>. Eranditeks on veerised, raamid ja vooderdus (<i>margin</i>, <i>border</i> ja <i>padding</i>) ning pildi suurused, mis võivad olla määratud pikslites."
    }, {
        tags: "A dev",
        content: "Lehel peab olema võimalik teha kõiki tegevusi (välja arvatud nt joonistamine) kasutades <b>ainult klaviatuuri</b> - <i>tab</i> klahvi või nooleklahve - (WCAG 2.1.1) ja ka <b>ainult hiirt</b>. Lehel ei tohi leiduda <b>klaviatuurilõkse</b> ehk olukordi, kus klaviatuuriga mingi funktsiooni juurde minna on võimalik, kuid sealt ära enam mitte. (WCAG 2.1.2)"
    }, {
        tags: "O dev",
        content: "Kasutajalt ei tohi nõuda <b>hõljutamist</b> (<i>hover</i>), <b>lohistamist</b> (<i>drag</i>) ega <b>libistamist</b> (<i>slide</i>), vaid peab lubama ka tavalist <b>hiireklõpsu</b>. Lohistamise asemel peab lubama kopeerimist ja kleepimist."
    }, {
        tags: "A dev",
        content: "Päästiksündmustena tuleb vältida hiire allavajutust (<b>onmousedown</b>), lahtilaskmist (<b>onmouseup</b>), topeltklõpsu (<b>ondblclick</b>), kursori peale viimist (<b>onmouseover</b>) ja kursori eemaldamist (<b>onmouseout</b>), sest need pole juurdepääsetavad klaviatuuri ja tugitehnoloogiatega. (WCAG 4.1.2)"
    }, {
        tags: "A dev",
        content: "Ettevaatlik tuleb olla <b>robotilõksude</b> kasutamises, sest CAPTCHA pildid on ekraanilugejaga loetamatud ning nupud ja lohistamisribad ei luba tihti turvakaalutlustel hiireklõpsu simuleerimist olles seega samuti ekraanilugejaga kasutamatud. Parem variant on robotilõksuna kasutada lihtsaid, kuid vastamisel inimlikku loogikat vajavaid küsimusi, näiteks 'Kas päike on kollane või sinine?' (WCAG 1.1.1)<br><div class='examples'><figure class='good'><img alt='Robotilõks küsib kasutajalt, kui palju on 2 + 2' src='img/logical.jpg'><figcaption>Kasutajalt küsitakse loogiline küsimus</figcaption></figure><figure class='bad'><img alt='Robotilõks palub kasutajal lohistada nupp ühest kohast teise' src='img/drag.jpg'><figcaption>Kasutajat sunnitakse lohistama</figcaption></figure></div>"
    }, {
        tags: "AA dev",
        content: "Kerimist peaks lubama vaid ühes suunas (ülevalt-alla või vasakult-paremale). Erandiks on näiteks galeriid. (WCAG 2.1 1.4.10)"
    }, {
        tags: "A dev",
        content: "Leht ei tohi ennast <b>automaatselt värskendada</b>, sest see võib kustutada kasutaja pooleli jäänud töö ning kasutada piiratud mobiilse interneti mahtu. (WCAG 2.2.1)"
    }, {
        tags: "A dev",
        content: "Kui lehel on <b>ajalimiit</b> (lühem kui 20 tundi), peab kasutajat sellest hoiatama, lubama limiidi välja lülitamist või pikendamist (selleks peab andma vähemalt 20 sekundit aega). (WCAG 2.2.1)"
    }, {
        tags: "A dev",
        content: "Pole soovitatav kasutada <b>animatsioone</b>, kus info tekib ja kaob, sest kasutaja ei pruugi jõuda piiratud ajaga infot kätte saada. Kui neid siiski kasutatakse, peab olema võimalik neid välja lülitada. (WCAG 2.2.1) Kui veebilehe sisu laetakse osade kaupa, võib olla ekraanilugejatel keeruline lugemisjärge hoida. (WCAG 1.3.2)"
    }, {
        tags: "O dev",
        content: "Vältida tuleks <b>hüpikaknaid</b> ja <b>modaale</b>. Kui neid siiski kasutatakse, peab olema selgelt arusaadav, kuidas neid sulgeda."
    }, {
        tags: "O dev",
        content: "Kui võimalik, vältida kaasapandud objekte (nt pistikprogramme) ja skripte, sest need ei pruugi olla toetatud ning võivad pikendada lehe laadimisaega. Kui leht ei tööta ilma JavaScriptita, tuleb kasutajat sellest teavitada."
    }, {
        tags: "A dev",
        content: "Miski veebilehel ei tohi miski <b>sähvida</b> rohkem kui 3 korda sekundis, sest see võib tekitada haigushooge. (WCAG 2.3.1) Sähvimist peab saama välja lülitada. (WCAG 2.2.2)"
    }, {
        tags: "A dev",
        content: "Elementi fokuseerides ei tohi juhtuda midagi ettearvamatut – fookus ei tohi minna mõnele teisele elemendile, vorm ei tohi ennast ise ära saata jne. (WCAG 3.2.1)"
    }, {
        tags: "A dev",
        content: "Märgistuskeeles kirjutatud kood peab valideeruma formaalseid validaatoreid (näiteks <a href='http://validator.w3.org' target='_blank'>W3 validaator</a>) kasutades. (WCAG 4.1.1)"
    }]
}, {
    title: "Lehe andmed",
    sections: [{
        tags: "A dev",
        content: "Lehe keel peab olema märgitud ISO 639-1 koodiga <b>&lt;html&gt;</b> elemendi <b>lang=“…”</b> atribuudis, näiteks <b>&lt;html lang=”et”&gt;</b>. (WCAG 3.1.1)"
    }, {
        tags: "A dev",
        content: "Igal lehel peal olema informatiivne ja lehte kirjeldav tiitel <b>&lt;title&gt;</b> märgendina. (WCAG 2.4.2)<pre>&lt;head&gt;<br>   &lt;title&gt;<br>      Kontakt - Firmanimi OÜ<br>   &lt;/title&gt;<br>&lt;/head&gt;</pre>"
    }, {
        tags: "O dev",
        content: "Mõistlik on alustada tiitlit alamlehe nimega. Nt: “<b>Kontakt | Firmanimi OÜ</b>” mitte “Firmanimi OÜ | Kontakt”, sest kui vahelehed on kitsad, pole viimasel juhul võimalik alamlehti üksteisest eristada.<br><div class='examples'><figure class='good'><img alt='Alamlehtede tiitlid algavad alamlehe nimega' src='img/tabs.png'><figcaption>Vahelehed algavad alamlehe nimega</figcaption></figure><figure class='bad'><img alt='Alamlehe tiitlid algavad lehe nimega' src='img/bad_tabs.png'><figcaption>Kõik vahelehed algavad sama sõnaga</figcaption></figure></div>"
    }, {
        tags: "O dev",
        content: "Kui lehel on teateid või vigu, võiks need kirjutada tiitli algusesse. Nt: “<b>1 uus sõnum | Foorum</b>”."
    }]
}, {
    title: "Navigatsioon",
    sections: [{
        tags: "AA des",
        content: "Navigatsioon peab olema lihtne ja ühtne üle terve veebilehe. Navigatsioon peab lehele minnes kohe näha olema. Soovitatav on paigutada menüü lehe ülaserva või vasakule. Menüü, otsing, keelevalik ja sulgemisnupp peavad olema veebilehel oodatavas kohas, igal alamlehel sarnases kohas. (WCAG 3.2.3)"
    }, {
        tags: "O des",
        content: "Tihedamini külastatavad lehed tuleb teha kiiresti kättesaadavaks, kuid harvem kasutatavate lehtedeni jõudmiseks võib minna rohkem aega."
    }, {
        tags: "M des",
        content: "Mobiilsetel lehtedel on mugav kasutada lisaks menüüle ka väikest hulka kerimisel kaasaliikuvaid kiirvalikuid lehe all- või ülaservas.<figure class='single'><img alt='Kiirvalikutega mobiilimenüü mobiili alumises servas' src='img/mobile-nav.png'><figcaption>Kiirvalikud mobiili alumises servas.</figcaption></figure>"
    }, {
        tags: "M des",
        content: "Mobiilis võiks olla lisaks menüü ikoonile ka kiri “<b>Menüü</b>”.<br><div class='examples'><figure class='good'><img alt='Mobiili menüü nupu kõrvale on kirjutatud Menüü' src='img/mobile_menu.png'><figcaption>Lisaks ikoonile on olemas ka tekst</figcaption></figure><figure class='bad'><img alt='Mobiili menüü ikoon asub lehe keskel logo kõrval' src='img/mobile.png'><figcaption>Menüü ikooni võib pidada logo osaks</figcaption></figure></div>"
    }, {
        tags: "AA des",
        content: "Konkreetse lehe leidmiseks peab olema vähemalt kaks võimalust: lisaks menüüle näiteks <b>otsing</b>, <b>sisukaart</b> (mis töötab ilma JavaScriptita) või <b>jäljerada</b> (<i>breadcrumbs</i>). Erandiks on leht, mis on mingi protsessi samm või tulemus. (WCAG 2.4.5)<pre>&lt;nav aria-label=“Asud siin:”&gt;<br>   &lt;a href=“…”&gt;Avaleht&lt;/a&gt;<br>   &lt;a href=“…”&gt;Raamatud&lt;/a&gt;<br>   &lt;span aria-label=“Avatud leht: Looduse lood”&gt;Looduse lood&lt;/span&gt;<br>&lt;/nav&gt;"
    }, {
        tags: "O des",
        content: "Otsingukasti juures peab olema selgelt arusaadav, kuidas otsingut käivitada - kas vajutada mingit nuppu või <i>enter</i> kahvi.<br><div class='examples'><figure class='good'><img alt='Otsingukasti sisse on kirjutatud Otsi ning selle kõrval on nupp kirjaga Mine' src='img/search_g.jpg'><figcaption>On selge, et vajutada tuleb nuppu</figcaption></figure><figure class='bad'><img alt='Otsingukasti sees on ainult luubi ikoon' src='img/search_b.jpg'><figcaption>Ei ole selge, kuidas otsingut käivitada</figcaption></figure></div>"
    }, {
        tags: "O dev",
        content: "Otsing peab leidma vasteid ka lähedastele otsingusõnadele. Näiteks vaste “nina-kõrva-kurguarst” peab leidma ka kasutades otsingusõna “kurgu-nina-kõrvaarst”."
    }, {
        tags: "O dev",
        content: "Juurdepääsetavaim viis navigatsioon esitamiseks on <b>&lt;nav role=“navigation” aria-label=“...”&gt;</b> märgendiga, mille sees on <b>&lt;ul&gt;</b> märgendiga esitatud nimekiri. Alammenüüga elemendile võiks lisada <b>aria-haspopup=“true”</b> atribuudi.<pre>&lt;nav role=“navigation” aria-label=“Menüü”&gt;<br>   &lt;ul&gt;<br>      &lt;li&gt;<br>         &lt;a href=“...”&gt;Avaleht&lt;/a&gt;<br>      &lt;/li&gt;<br>      &lt;li&gt;<br>         &lt;a href=“...” aria-haspopup=“true”&gt;Portfoolio&lt;/a&gt;&lt;/li&gt;<br>         &lt;ul&gt;<br>            &lt;li&gt;&lt;a href=“...”&gt;Maal&lt;/a&gt;&lt;/li&gt;<br>            &lt;li&gt;&lt;a href=“...”&gt;Foto&lt;/a&gt;&lt;/li&gt;<br>         &lt;/ul&gt;<br>      &lt;/li&gt;<br>      &lt;li&gt;<br>         &lt;a href=“...”&gt;Kontakt&lt;/a&gt;<br>      &lt;/li&gt;<br>   &lt;/ul&gt;<br>&lt;/nav&gt;</pre>"
    }, {
        tags: "A sis",
        content: "Menüüpunktid peavad olema sõnastatud nii, et oleks selge, mis nende all leidub. (WCAG 2.4.4, 2.4.6)"
    }, {
        tags: "O des",
        content: "Vältida tuleks mitmetasemelisi menüüsid – jääda ühe või kahe taseme juurde."
    }, {
        tags: "O dev",
        content: "Menüü peab avanema sellele vajutades. Ei tohi nõuda kasutajalt <b>hõljutamist</b> (<i>hover</i>) või <b>libistamist</b> (<i>slide</i>). Menüü ei tohi iseenesest mingi aja järel sulguda."
    }, {
        tags: "A dev",
        content: "Lehe kõige esimene element peab olema link “Liigu põhisisu juurde”, mis teeb tabuleerivate kasutajate jaoks infoni jõudmise lihtsamaks. Sisu, mis kordub mitmel leheküljel, peab saama vahele jätta kasutades mugavaid <b>ülehüppamislinke</b>, näiteks “Jäta … vahele”. Kuigi need lingid võiksid olla alati nähtavad (nägijate jaoks, kellel on raske klaviatuuri kasutada), võib need ka visuaalselt peita. (WCAG 2.4.1) <pre>&lt;a href=“#sisu”&gt;Liigu põhisisu juurde&lt;/a&gt;<br>...<br>&lt;main id=“sisu”&gt;</pre><figure><img alt='Ülehüppamislink ministeeriumi kodulehe alguses' class='single' src='img/pohisisu.png'><figcaption>Ülehüppamislink tuleb nähtavale fokuseerides</figcaption></figure>"
    }]
}, {
    title: "Pealkirjad",
    sections: [{
        tags: "O des",
        content: "Pealkirjad peavad olema visuaalselt hästi eristatavad - suured ja selged."
    }, {
        tags: "A dev",
        content: "Pealkirjad tuleb eristada märgenditega <b>&lt;h1&gt;</b> kuni <b>&lt;h6&gt;</b>, mitte ainult kujundusega. Pealkirjadena <b>&lt;h1&gt;</b> kuni <b>&lt;h6&gt;</b> ei tohi esitada teksti, mis pole tegelikult pealkiri. (WCAG 1.3.1)"
    }, {
        tags: "AA sis",
        content: "Pealkiri peab olema lühike, kuid sisukas ning kirjeldama sellele pealkirjale järgnevat sisu. (WCAG 2.4.6) Pealkiri peab algama kõige tähtsama ja sisukama sõnaga."
    }, {
        tags: "O dev",
        content: "Igal lehel peaks olema vähemalt üks <b>&lt;h1&gt;</b>."
    }, {
        tags: "A dev",
        content: "Pealkirjad peavad järgnema üksteisele hierarhiliselt korrektses järjekorras. Järjekorra korrektsust saab kontrollida näiteks <a href='http://wave.webaim.org' target='_blank'>WAVE</a> tööriistaga. (WCAG 4.1.1)<pre>&lt;h1&gt;Esimese taseme pealkiri&lt;/h1&gt;<br />&lt;h2&gt;Teise taseme pealkiri&lt;/h2&gt;<br />&lt;h3&gt;Kolmanda taseme pealkiri&lt;/h3&gt;<br />&lt;h3&gt;Kolmanda taseme pealkiri&lt;/h3&gt;<br />&lt;h2&gt;Teise taseme pealkiri&lt;/h2&gt;<br />&lt;h2&gt;Teise taseme pealkiri&lt;/h2&gt;</pre>"
    }]
}, {
    title: "Sisu paigutus",
    sections: [{
        tags: "O sis",
        content: "Kasutaja peab lehelt leidma selle ja ainult selle sisu, mida ta sealt ootas."
    }, {
        tags: "O des",
        content: "Prioriteetne info peaks asuma lehe keskel ning olema visuaalselt esile tõstetud."
    }, {
        tags: "M des",
        content: "Mobiilseadme kasutajad peaksid eeskätt pääsema ligi kõige vajalikumale informatsioonile, kuid kogu lehe sisu peaks olema siiski kättesaadav. Väikesel ekraanil peab olema olemas sama sisu ja funktsionaalsus, mis suurel ekraanil."
    }, {
        tags: "O des",
        content: "Lehe sisu tuleb jagada mõistlike suurustega alamlehtedeks, et näidata kasutajale vaid seda, mille järgi ta on tulnud. Liiga pikad lehed võtavad kaua aega laadimiseks, liiga lühikesed lehed nõuavad kasutajalt edasi-tagasi navigeerimist."
    }, {
        tags: "A dev",
        content: "Sisu kordamist ühe lehe ulatuses tuleb vältida, sest see võib olla ekraanilugejaga kasutajale olla segadusseajav ja tüütu. Korduvat sisu peab saama ülehüppamislinkidega vahele jätta. (WCAG 2.4.1)"
    }, {
        tags: "A dev",
        content: "Tabuleerimisjärjekord peab ühtima sisu loogilise järjekorraga: kasutaja võib olla sunnitud navigeerima klaviatuuriga ning vales järjekorras sisu kaotab oma mõtte. (WCAG 2.4.3)"
    }]
}, {
    title: "Tekst",
    sections: [{
        tags: "O sis",
        content: "Kasutada tuleb lihtsat ja selget keelt, sest veebi kasutavad erineva kultuurilise ja haridusliku taustaga inimesed."
    }, {
        tags: "M sis",
        content: "Laused peaksid olema lühikesed ja konkreetsed, sest näiteks mobiiliekraanile ei mahu palju teksti ning mobiilseadmele keskendumine võib mõnes olukorras kasutaja ohtu seada."
    }, {
        tags: "O sis",
        content: "Märkide (näiteks “-“) asemel on soovituslik kasutada sõnu (näiteks “kuni”), sest tugitehnoloogiad võivad neid valesti lugeda (näiteks “miinus”)."
    }, {
        tags: "O sis",
        content: "Lühendite kasutamisel tuleks nende seletus esimesel korral välja kirjutada. (WCAG AAA, kuid siiski soovituslik)"
    }, {
        tags: "O des",
        content: "Ühes reas tohib olla kuni 90 tähemärki, mobiilis kuni 70 tähemärki. (WCAG AAA, kuid siiski soovituslik)"
    }, {
        tags: "O des",
        content: "Tekst peab olema joondatud vasakule."
    }, {
        tags: "O des",
        content: "Soovituslik on kasutada seriifideta fonti, näiteks Helvetica või Arial."
    }, {
        tags: "O des",
        content: "Kaldkirjas ja paksu allajoonitud kirja tuleb vältida, sest neid on raske lugeda."
    }, {
        tags: "O des",
        content: "Soovitustlik on vältida sõnades läbivaid suurtähti, sest selliseid sõnu on raskem lugeda. Kui aga läbivaid suurtähti siiski kasutatakse, tuleb seda teha CSS-is text-transform: uppercase reegli abil, sest caps-lock’iga kirjutatud sõnu loevad ekraanilugejad täht haaval mitte tervikuna."
    }, {
        tags: "O des",
        content: "Sisutekst peab olema minimaalselt 14px suur, soovitatav suurus on 16px."
    }, {
        tags: "O des",
        content: "Kui lehele on sisseehitatud teksti suurendamise võimalus, peaks see asuma päise keskosas, et see lehe suurendamisel ekraanilt ära ei kaoks."
    }, {
        tags: "AA dev",
        content: "Teksti suurused tuleb määrata rem ühikutes, et veebilehitseja seadetes teksti suurust muutes muutuks vastavalt ka veebilehe teksti suurused. Teksti (v.a subtiitreid) peab saama suurendada 200% ilma, et sisu ekraanilt kaoks või kattuks. (WCAG 1.4.4)<pre>p &#123;<br>   font-size: 1rem;<br>&#125;</pre>"
    }, {
        tags: "O dev",
        content: "Reavahe tuleb määrata ilma ühikuta. Soovituslik universaalne reavahe on 1.5.<pre>p &#123;<br>   line-height: 1.5;<br>&#125;</pre>"
    }, {
        tags: "O dev",
        content: "Lõikude vahe tuleks määrata rem ühikutes. Soovituslik universaalne lõikude vahe on võrdne teksti suurusega.<pre>p &#123;<br>   margin-top: 1rem;<br>&#125;</pre>"
    }, {
        tags: "O des",
        content: "Tekst ei tohiks lehel liikuda (olla animeeritud), sest seda võib olla raske lugeda."
    }, {
        tags: "A dev",
        content: "Teksti peab olema võimalik korrektses järjekorras aktiveerida ning kopeerida. (WCAG 1.3.2)"
    }, {
        tags: "AA dev",
        content: "Teksti asemel ei tohiks kasutada pilti, millel on tekst, sest seda ei saa kopeerida ega lugeda ekraanilugejaga. Erandiks on logod, millele tuleb lihtsalt lisada alt=”…”. Erand tehakse ka olukorras, kus teksti esitamine pildina on mõtte edasi andmiseks ainus võimalus ning olukorras, kus kasutaja saab pildil oleva teksti suurust ja värvi muuta. (WCAG 1.4.5)"
    }, {
        tags: "O des",
        content: "Kui osa tekstist on märgistatud tärni või mõne muu sümboliga, peab sümboli seletus asuma enne teksti. Seletuses peab sisalduma “[sümbol] tähistab …”."
    }, {
        tags: "AA dev",
        content: "Kui osa tekstist on lehe üldisest keelest erinevas keeles, peab see olema märgitud näiteks ISO 639-1 koodiga lang=“…” atribuudis. (WCAG 3.1.2)<pre>&lt;span lang='en'&gt;Hello&lt;/span&gt;</pre>"
    }]
}, {
    title: "Lingid",
    sections: [{
        tags: "A des",
        content: "Lingid peavad olema muust tekstist visuaalselt eristatavad ning mitte ainult teist värvi, vaid näiteks allajoonitud, paksemad või suuremas kirjas. (WCAG 1.4.1)"
    }, {
        tags: "O des",
        content: "<b>Külastatud</b> ja <b>külastamata</b> lingid peaksid olema visuaalselt eristatavad."
    }, {
        tags: "AA des",
        content: "<b>Fokuseeritud link</b> peab olema teistest visuaalselt eristatav. (WCAG 2.4.7)"
    }, {
        tags: "A sis",
        content: "Lingi tekstist (ning seda ümbristevast kontekstist) peab saama selgelt aru, mis sellele vajutades juhtub. (WCAG 2.4.4) Lingi tekst peaks algama kõige tähtsama ja sisukama sõnaga. Lingi tekst ei tohiks olla lihtsalt <b>“Kliki siia”</b> või <b>“Rohkem”</b> ega lihtsalt <b>URL</b>, sest ekraanilugeja loeb selle ette täht haaval. Lingi tekst ei tohiks sisaldada sõna <b>“link”</b>, sest ekraanilugejad ütlevad, et tegu on lingiga."
    }, {
        tags: "O dev",
        content: "Sama tekstiga lingid ei tohi viia erinevatele lehtedele."
    }, {
        tags: "O dev",
        content: "Ebavajalikke ja kordavaid linke tuleb vältida - näiteks pilt ja “Loe rohkem” tekst, mis viivad samale lehele kui link ise, tuleb panna kõik ühte &lt;a&gt; märgendisse."
    }, {
        tags: "O dev",
        content: "Lehel ei tohi olla <b>katkiseid linke</b>, mis ei vii kasutajat õigesse kohta."
    }, {
        tags: "O dev",
        content: "Kui linke on väga palju, võiks need grupeerida nimekirja &lt;ul&gt; või &lt;ol&gt; märgendiga."
    }, {
        tags: "O des",
        content: "Lingid ei tohi paikneda üksteisele liiga lähedal ega ka liiga kaugel."
    }, {
        tags: "O dev",
        content: "<h3>Link, mis laeb alla faili</h3><br>Teavitus, et algab faili allalaadimine, peab olema lingi tekstis näha. Ära tuleks märkida ka faili suurus ning formaat, et aeglase või piiratud mahuga interneti kasutajad saaksid vältida aja- ja rahakulu.<pre>&lt;a href=“doc.pdf”&gt;Lae alla dokumendi fail (1MB PDF)&lt;/a&gt;</pre>"
    }, {
        tags: "O dev",
        content: "<h3>Link, mis avaneb uues aknas</h3><br>Lingid ei tohiks ettehoiatamata avaneda uues aknas või uuel vahelehel. Kasutaja ei pruugi aru saada, et on sattunud uuele lehele ning võib proovida tulutult veebilehitseja “Tagasi” nuppu kasutada. Mobiilseadmes pole tavaliselt näha, mitu akent on avatud ning nende vahel navigeerimine on ebamugav.Üks võimalus on lisada lingile informatiivne ikoon, peita see ekraanilugejate eest atribuudiga <b>aria-hidden=”true”</b> ning lisada sama infot edasi andev tekstiline kirjeldus, mida visuaalselt pole näha, aga mida ekraanilugejad saavad lugeda. Ikoon tuleb alati paigutada peale linki, et lugemisjärjekord oleks loogiline.<pre>&lt;a href=“…” target=“_blank”&gt;<br>   Company<br>   &lt;span class=“invisible'&gt;Link avaneb uuel lehel&lt;/span&gt;<br>   &lt;i aria-hidden=“true” class=“icon-external”&gt;&lt;/i&gt;<br>&lt;/a&gt;<br><br>.invisible&#123;<br>   position: absolute !important;<br>   height: 1px;<br>   width: 1px;<br>   overflow: hidden;<br>   clip: rect(1px 1px 1px 1px); //Internet Explorer 6 ja 7<br>   clip: rect(1px, 1px, 1px, 1px);<br>&#125;</pre>Teine võimalus on esitada lisainformatsioon lingi atribuudis <b>aria-label=“…”</b> ning dubleerida lingi tekst atribuudis <b>title=“…”</b>, et kõik ekraanilugejad loeksid välja kogu vajaliku informatsiooni.<pre>&lt;a href=“…” target=“_blank” title=“Company” aria-label=“Link avaneb uuel lehel”&gt;<br>   Company<br>   &lt;i aria-hidden=“true” class=“icon-external”&gt;&lt;/i&gt;<br>&lt;/a&gt;</pre>"
    }, {
        tags: "O dev",
        content: "<h3>Link, mis viib sama lehe teise kohta</h3><br>Soovitatav on kasutada ülehüppamislingi tekstis nt “Liigu sisuni: …” või lisada lisainformatsioon atribuudis aria-label=“…” ning dubleerida lingi tekst atribuudis title=”...”.<pre>&lt;a href=“#pt2”&gt;Liigu sisuni: Peatükk 2&lt;/a&gt;</pre>"
    }]
}, {
    title: "Värvid",
    sections: [{
        tags: "A des",
        content: "Elemendid ja nende olekud ei tohi olla eristatud ainult värviga. Info, mida antakse edasi värvidega, peab olema kättesaadav ka ilma värvideta. (WCAG 1.3.3, 1.4.1)<br><div class='examples'><figure class='good'><img alt='Graafik sektoritega, kus iga sektori juures on silt' src='img/graafik_labels.png'><figcaption>Lisaks värvidele on ka sildid</figcaption></figure><figure class='bad'><img alt='Graafik sektoritega, mis on erinevat värvi' src='img/graafik.png'><figcaption>Sektorid on eristatavad ainult värviga</figcaption></figure></div>"
    }, {
        tags: "AA des",
        content: "<b>Fookuses olev element</b> peab olema selgelt visuaalselt eristatav, et klaviatuuriga navigeerijatel oleks selge, mille juures nad lehel asuvad. (WCAG 2.4.7)<figure><img alt='Menüü, milles üks element on fokuseeritud' class='single' src='img/menu_focus.jpg'></figure>"
    }, {
        tags: "A des",
        content: "<b>Aktiivne element</b> (näiteks menüüpunkt, mis viitab lehele, kus hetkel asutakse) peab olema selgelt eristatav ka värve nägemata. (WCAG 1.4.1)<figure><img alt='Menüü, milles üks element on aktiivne' class='single' src='img/menu.jpg'></figure>"
    }, {
        tags: "AA des",
        content: "Esiplaani (teksti või kujutise) ja tagaplaani (tausta) värvid peavad olema piisavalt erinevad, et nende <b>kontrastsus</b> oleks minimaalselt: kui font on kuni 18pt ja regular - 4,5:1 ning kui font on vähemalt 18pt ja regular või vähemalt 14pt ja bold - 3:1. Erandiks on kiri logol ja dekoratsioonina kasutatav kiri. Värvide kontrastsust saab kontrollida nende HEX koodide järgi näiteks <a href='http://webaim.org/resources/contrastchecker/' target='_blank'>WebAIMi kontrolltööriistaga</a>. (WCAG 1.4.3)<br><div class='examples'><figure class='good'><img alt='Must tekst valgel taustal' src='img/high_contrast.png'><figcaption>Kõrge kontrastsus 14.79:1</figcaption></figure><figure class='bad'><img alt='Helehall tekst valgel taustal' src='img/low_contrast.png'><figcaption>Liiga madal kontrastsus 2.21:1</figcaption></figure></div>"
    }, {
        tags: "O des",
        content: "Kui lehele on sisseehitatud kontrastsuse muutmise võimalus, peaks see asuma päise ülemises vasakus nurgas, et see lehe suurendamisel ekraanilt ära ei kaoks."
    }]
}, {
    title: "Pildid",
    sections: [{
        tags: "A dev",
        content: "Igal pildil peab olema märgitud tekstiline alternatiiv <b>alt=“…”</b> atribuudiga. Tekstiline alternatiiv peab kandma edasi sama informatsiooni kui pilt ise. Tekstiline alternatiiv ei tohi olla lihtsalt <b>“Pilt”</b> või <b>“Tabel”</b>. Tekstilisse alternatiivi pole vaja kirjutada <b>“Pildi peal on…”</b>, sest ekraanilugeja ütleb, et tegu on pildiga. (WCAG 1.1.1) <pre>&lt;img alt=“Tallinna Tehnikaülikooli logo” src=“tty.jpg”&gt;</pre><div class='examples'><figure class='good'><img alt='Uudiste lehel on päikese pilt, mille tekstiline alternatiiv ütleb Selge ilm' src='img/alt.png'><figcaption>Tekstiline alternatiiv annab edasi sama infot, mis pilt.</figcaption></figure><figure class='bad'><img alt='Pildil pole tekstilist alternatiivi' src='img/No_alt.png'><figcaption>Info läheb kaduma.</figcaption></figure></div>"
    }, {
        tags: "O dev",
        content: "Pildile võiks lisada allkirja <b>&lt;figcaption&gt;</b> märgendiga. Pildi tekstiline alternatiiv ei tohi korrata pildi allkirja, vaid andma lisainfot.<pre>&lt;figure&gt;<br />   &lt;img alt=“Tallinna Tehnikaülikooli logo” src=“tty.jpg”&gt;<br>   &lt;figcaption&gt;TTÜ - Sinu elustiil&lt;/figcaption&gt;<br>&lt;/figure&gt;</pre>"
    }, {
        tags: "O des",
        content: "Vältida tuleb <b>hüperpilte</b> (<i>image map</i>), mille eri osadele vajutades avanevad erinevad lingid."
    }, {
        tags: "A dev",
        content: "Kui kasutatakse <b>animeeritud galeriid</b> (nt karusell), peab kasutajal olema võimalik animatsiooni peatada. (WCAG 2.2.2) Galerii peab olema kasutatav klaviatuuri abil. (WCAG 2.1.1) Aktiivne galerii element peab olema eristatav ka tugitehnoloogiatega – sellele võib lisada visuaalselt peidetud teksti <b>&lt;div aria-live=”polite”&gt;Esimene pilt kuuest&lt;/div&gt;</b>. (WCAG 1.3.3)"
    }, {
        tags: "A dev",
        content: "<h3>Pilt, mis ei kanna edasi vajalikku infot</h3><br>Kui tegu on illustreeriva pildiga, mida informatsiooni kätte saamiseks näha pole vaja, tuleb lisada pildile tühi <b>alt=“”</b> atribuut, sest siis jätavad ekraanilugejad selle pildi vahele. Kui alt atribuuti ei lisata, loeb ekraanilugeja ette pildi faili nime. Illustreerivate piltide puhul tuleks kasutada CSS-i <b>background</b>, <b>:before</b> või <b>:after</b> reegleid HTML-i <b>&lt;img&gt;</b> märgendite asemel. (WCAG 1.1.1)"
    }, {
        tags: "O des",
        content: "<h3>Taustapilt</h3><br>Taustapiltide kasutamisel tuleb kindlaks teha, et tekst on pildi pealt loetav. Sisu peab loetavaks jääma ka taustapildi eemaldamisel.Taustapildi fail peab olema võimalikult väikesemahuline, et lehe laadimisaeg oleks võimalikult lühike."
    }]
}, {
    title: "Ikoonid",
    sections: [{
        tags: "O des",
        content: "Ikoonid peavad olema lihtsad, selged, äratuntavad ja üheselt mõistetavad. <div class='examples'><figure class='good'><img alt='Tööriistaikoon' src='img/os.png'><figcaption>Tööriista ikoon avab lisafiltrid.</figcaption></figure><figure class='bad'><img alt='Menüü ikoon' src='img/sys.png'><figcaption>Menüü ikoon ei ava menüüd, vaid lisafiltrid.</figcaption></figure></div>"
    }, {
        tags: "O dev",
        content: "<h3>Illustreeriv ikoon</h3><br>Kui ikoon on pelgalt illustreeriv ega kanna endas lisainformatsiooni, tuleks see ekraanilugejate eest peita atribuudiga <b>aria-hidden=”true”</b>. Antud atribuut ei mõjuta elemendi visuaalset nähtavust, vaid võimaldab ekraanilugejatel antud elemendi vahele jätta.<figure class='single'><img alt='Lisaks ikoonile on olemas sama infot edasi andev tekst' src='img/help.png'></figure><pre>&lt;a href=“…”&gt;<br>   &lt;i class=“icon-help” aria-hidden=“true”&gt;&lt;/i&gt;Help<br>&lt;/a&gt;</pre>"
    }, {
        tags: "A dev",
        content: "<h3>Informatiivne ikoon</h3><br>Kui ikoon annab edasi tähtsat informatsiooni, mida tekstiliselt kirja ei taheta panna, tuleks see ekraanilugejate eest peita atribuudiga <b>aria-hidden=”true”</b> ning lisada sama infot edasi andev tekstiline kirjeldus, mida visuaalselt pole näha, aga mida ekraanilugejad saavad lugeda. Ikoonile võib lisada ka atribuudi <b>title=“…”</b>, mis annab nägijatele lisainformatsiooni, kui kursoriga elemendi peale liikuda. (WCAG 1.3.3)<figure class='single'><img alt='Infot annab edasi ainult ikoon' src='img/phone.png'></figure><pre>&lt;i class=“icon-phone” aria-hidden=“true” title=“Phone number”&gt;&lt;/i&gt;<br>&lt;span class=“invisible”&gt;Phone number&lt;/span&gt;<br><br>.invisible&#123;<br>   position: absolute !important;<br>   height: 1px; <br>   width: 1px; <br>   overflow: hidden;<br>   clip: rect(1px, 1px, 1px, 1px);<br>&#125;<br></pre>"
    }, {
        tags: "A dev",
        content: "<h3>Ikoon lingi teksti asemel</h3><br>Kui ikooniga on tähistatud linki, tuleks lingile lisada atribuut <b>aria-label=“…”</b>. Antud atribuut võimaldab ekraanilugejatel kasutajale lisainformatsiooni lugeda. Ikoonile võib lisada ka atribuudi <b>title=“…”</b>, mis annab nägijatele lisainformatsiooni, kui kursoriga elemendi peale liikuda. (WCAG 1.3.3)<figure class='single'><img alt='Ikoon näitab, kuhu link viib' src='img/bag.png'></figure><pre>&lt;a class=“button” href=“…” aria-label=“Vaata ostukorvi”&gt;<br>   &lt;i class=“icon-bag” aria-hidden=“true” title=“Ostukorv”&gt;&lt;/i&gt;<br>&lt;/a&gt;<br></pre>"
    }]
}, {
    title: "Heli ja video",
    sections: [{
        tags: "A dev",
        content: "Heli (mis kestab kauem kui 3 sekundit), videot ja animatsiooni (kerimine, vilkumine, liikumine, mis kestab kauem kui 5 sekundit) peab saama <b>katkestada</b>, <b>kinni panna</b> (WCAG 2.2.2) ning <b>heli tugevust muuta</b>. (WCAG 1.4.2)"
    }, {
        tags: "A dev",
        content: "Veebilehel olevale helile ja videole peab lisama kirjeldava <b>title=”...”</b> atribuudi. (WCAG 1.1.1)"
    }, {
        tags: "A dev",
        content: "<b>Eellindistatud</b> videofailile tuleb lisada <b>sünkroonsed subtiitrid</b>, kui kogu edastatav info pole lehelt teisiti kättesaadav. (WCAG 1.2.2)"
    }, {
        tags: "A dev",
        content: "Eellindistatud heli- ja videofailidele tuleb lisada <b>tekstiline sisukirjeldus</b>, mis asub või millele viidatakse faili vahetus läheduses. Näiteks võib videole lisada tekstilise kirjelduse <b>&lt;track&gt;</b> märgendiga <b>&lt;video&gt;</b> märgendi sees. Ilma helita videole või animatsioonile võib tekstiline alternatiivi asemel lisada sama sisu edasi andva <b>helifaili</b>. (WCAG 1.2.1, 1.2.3)<pre>&lt;video controls&gt;<br>   &lt;source src=“video.mp4” srclang=“et” type=“video/mp4”&gt;<br>   &lt;track src=“description.vtt” kind=“descriptions” srclang=“et” label=“Video kirjeldus”&gt;<br>&lt;/video&gt;</pre>"
    }, {
        tags: "AA dev",
        content: "<b>Reaalajas</b> edastatavale helifailile tuleb lisada <b>sünkroonsed subtiitrid</b> kasutajate jaoks, kes ei kuule või kuulevad halvasti. (WCAG 1.2.4)"
    }, {
        tags: "AA dev",
        content: "Eellindistatud videofailile tuleb lisada <b>heliline sisukirjeldus</b>, sest selle kuulamine on nägemispuudega kasutajatele mugavam. (WCAG 1.2.5)"
    }]
}, {
    title: "Vormid",
    sections: [{
        tags: "O des",
        content: "Vajalike vajutuste hulk tuleb hoida minimaalsena. Sisestuskastide asemel võiks kasutada valikukaste, raadionuppe või märkeruute, sest need on mugavamad, eriti mobiilseadmel."
    }, {
        tags: "A dev",
        content: "Igal vormiväljal peab olema täpselt üks pealkirja <b>&lt;label&gt;</b>, mis on temaga seotud <b>id=“…”</b> ja <b>for=“…”</b> atribuutide kaudu. Pealkiri peab  visuaalselt paiknema vormivälja suhtes nii, et nende kokkukuuluvus oleks selge. (WCAG 1.3.1, 4.1.2) Pealkiri peab selgitama, millist infot on vaja sisestada. (WCAG 3.3.2)<pre>&lt;label for=“nimi”&gt;Nimi:&lt;/label&gt;<br>&lt;input type=“text” name=“nimi” id=“nimi”&gt;</pre>"
    }, {
        tags: "O dev",
        content: "Kokkukuuluvad vormiväljad nagu raadionupud, märkeruudud ja sisestuskastid tuleb grupeerida <b>&lt;fieldset&gt;</b> elemendi sisse ning anda grupile üldine pealkiri <b>&lt;legend&gt;</b> elemendi abil.<pre>&lt;fieldset&gt;<br>   &lt;legend&gt;Millist kontaktviisi eelistate?&lt;/legend&gt;<br>   &lt;input type=“radio” name=“contact” id=“email” value=“email”&gt;<br>   &lt;label for=“email”&gt;E-post&lt;/label&gt;<br>   &lt;input type=“radio” name=“contact” id=“phone” value=“phone”&gt;<br>   &lt;label for=“phone”&gt;Telefon&lt;/label&gt;<br>&lt;/fieldset&gt;</pre><div class='examples'><figure class='good'><img alt='Eraldi on grupeeritud kauba saaja ja kauba maksja andmed' src='img/fieldset.png'><figcaption>Lahtrid on grupeeritud</figcaption></figure><figure class='bad'><img alt='Kauba saaja ja kauba maksja andmed on koos, mistõttu esineb palju sõnakordust' src='img/no_fieldset.png'><figcaption>Lahtrid pole grupeeritud</figcaption></figure></div>"
    }, {
        tags: "O des",
        content: "Kasutajalt ei tohiks nõuda sisestatud andmete meelde jätmist, vaid tuleks näidata tema eelmisi valikuid ja varem sisestatud andmeid."
    }, {
        tags: "O dev",
        content: "Kui vorm on jaotatud sammudeks, mis asuvad mitmel lehel, tuleks kirjutada lehe <b>&lt;title&gt;</b> märgendisse, mitmenda sammu juures ollakse."
    }, {
        tags: "A dev",
        content: "Vormielementi fokuseerides või klikkides ei tohi juhtuda midagi ettearvamatut ega muutuda lehe kontekst, välja arvatud juhul, kui kasutajat on sellest eelnevalt teavitatud. (WCAG 3.2.1, 3.2.2)"
    }, {
        tags: "AA dev",
        content: "Kui vormi ära saatmisel on õiguslikud või finantsilised tagajärjed, peab kasutajal olema võimalik sisestatud info üle vaadata, seda parandada ning vajadusel vormi ärasaatmine tagasi võtta. (WCAG 3.3.4)"
    }, {
        tags: "O dev",
        content: "<h3>Sisestuskastid</h3><br>Soovitatav on kasutada võimalusel sisestuskasti tüüpe <b>search</b>, <b>email</b>, <b>url</b>, <b>number</b>, <b>tel</b>, <b>range</b>, <b>date</b> või <b>time</b>, et valideerida sisestatud infot automaatselt ning vältida vigu. Mobiilseadmes kuvatakse sisestuskasti tüübi olemasolul ka vastav klaviatuur, mis teeb sisestamise mugavamaks. Sisestuskasti tüübid pole hetkel veel kõigis veebilehitsejates toetatud.<pre>&lt;label for=“vahemik”&gt;Määra maksimaalne hind: &lt;/label&gt;<br>&lt;input type=&quot;range&quot; name=&quot;vahemik&quot; id=&quot;vahemik&quot; min=&quot;0&quot; max=&quot;100&quot; step=“10”&gt;</pre><div class='examples'><figure class='good'><img alt='Kasutajale kuvatakse numbriklaviatuur.' src='img/tel_good.png'><figcaption>Välja tüübiks on 'tel'.</figcaption></figure><figure class='bad'><img alt='Kasutajale kuvatakse täheklaviatuur.' src='img/tel_bad.png'><figcaption>Välja tüübiks on 'text'.</figcaption></figure></div>"
    }, {
        tags: "A dev",
        content: "Kui info tuleb sisestada mingil kindlal kujul, tuleb seda kuju kirjeldada sisestuskastiga seotud <b>&lt;label&gt;</b> märgendis. Soovitud kuju võib kirjutada ka sisestuskasti <b>placeholder=“…”</b> atribuuti, kuid see ei tohi asendada <b>&lt;label&gt;</b> märgendit. <b>Placeholder=“…”</b> atribuuti ei loe välja paljud ekraanilugejad ning enamus veebilehitsejaid kuvavad seda madala kontrastsusega värvides, mida vaegnägijad ei pruugi näha. (WCAG 1.4.3)"
    }, {
        tags: "O dev",
        content: "Sisendile võib seada piiranguid <b>min=“…”</b>, <b>max=“…”</b>, <b>maxlength=“…”</b> ja <b>steps=“…”</b> atribuutidega. Veelgi täpsema piirangu saab seada mustrikontrolli ehk <b>pattern=“…”</b> atribuudiga, mis võimaldab kontrollida kasutaja sisendi vastavust regulaaravaldisele ning vältida vigu.<pre>&lt;label for=“aeg”&gt;Sisesta aeg (tt:mm)&lt;/label&gt;<br>&lt;input type=&quot;text&quot; id=“aeg” pattern=“[0-9]{2}(:)[0-9]{2}”&gt;</pre>"
    }, {
        tags: "O des",
        content: "Parim võimalus on paigutada pealkirjad sisestuskastide kohale, sest selline paigutus töötab hästi nii arvutis kui ka mobiilis."
    }, {
        tags: "O dev",
        content: "Kui sisestuskasti funktsioon on visuaalselt piisavalt arusaadav, et ei vaja <b>&lt;label&gt;</b> elementi, tuleb kasutada <b>aria-label=“…”</b> atribuuti, et selgitust saaksid lugeda ainult ekraanilugejad.<figure class='single'><img alt='Otsingukast, mille kõrval on nupp kirjaga Otsi' src='img/otsi.png'></figure><pre>&lt;input type=&quot;text&quot; name=&quot;otsi&quot; aria-label=“Sisest märksõnad, mida soovid otsida”&gt;<br>&lt;button type=“submit”&gt;Otsi&lt;/button&gt;</pre>"
    }, {
        tags: "A dev",
        content: "<h3>Raadionupud</h3><br>Kokkukuuluvatele raadionuppudele tuleb anda ühine name=“…” atribuut, et korraga saaks valida ainult ühe raadionupu. (WCAG 4.1.2)<pre>&lt;input type=&quot;radio&quot; name=&quot;contact&quot; id=&quot;email&quot; value=&quot;email&quot;&gt;<br>&lt;label for=“email”&gt;E-post&lt;/label&gt;<br>&lt;input type=&quot;radio&quot; name=&quot;contact&quot; id=&quot;phone&quot; value=&quot;phone&quot;&gt;<br>&lt;label for=“phone&quot;&gt;Telefon&lt;/label&gt;</pre>"
    }, {
        tags: "O des",
        content: "<h3>Valikukastid</h3><br>Kasutajale ei tohiks näidata korraga liiga palju valikuid ja võimalusi, sest see võib olla segadusseajav ja frustreeriv. Valikud tuleks jagada väiksemateks gruppideks. Pikast valikute nimekirjast võiks pakkuda otsimisvõimalust."
    }, {
        tags: "O dev",
        content: "Kokkukuuluvad valikud võib grupeerida <b>&lt;optgroup&gt;</b> märgendi abil, et soovitud valiku leidmine oleks kiirem.<pre>&lt;select&gt;<br>   &lt;optgroup label=“Gluteenivabad toidud”&gt;<br>      &lt;option value=“kinoa”&gt;Kinoa juurviljadega&lt;/option&gt;<br>      &lt;option value=“salat”&gt;Kevadine salat&lt;/option&gt;<br>   &lt;/optgroup&gt;<br>   &lt;optgroup label=“Vegan toidud”&gt;<br>      &lt;option value=“burger”&gt;Kikerherne burger&lt;/option&gt;<br>      &lt;option value=“supp”&gt;Porgandisupp&lt;/option&gt;<br>   &lt;/optgroup&gt;<br>&lt;/select&gt;</pre>"
    }, {
        tags: "O dev",
        content: "<h3>Kohustuslikud väljad</h3><br>Kohustuslikud väljad peavad olema esitatud <b>&lt;input required&gt;</b> märgendiga. Soovituslik on lisada ka atribuut <b>aria-required=“true”</b>, sest kõik tugitehnoloogiad ei pruugi arvestada <b>required</b> atribuuti."
    }, {
        tags: "A des",
        content: "Kohustuslikud väljad peavad olema visuaalselt eristatavad mittekohustuslikest väljadest, kuid mitte ainult värvi abil. (WCAG 1.4.1)"
    }, {
        tags: "A des",
        content: "Kui kohustuslikku välja tähistatakse tärniga, peab sellekohane selgitus asuma enne esimest vormivälja. Näiteks “* tähistab kohustuslikku välja”. (WCAG 3.3.2)<div class='examples'><figure class='good'><img alt='Selgitus asub enne välju' src='img/exp_first.png'><figcaption>Selgitus asub enne välju.</figcaption></figure><figure class='bad'><img alt='Selgitus asub peale välju' src='img/exp_last.png'><figcaption>Selgitus asub peale välju.</figcaption></figure></div>"
    }]
}, {
    title: "Veateated",
    sections: [{
        tags: "O dev",
        content: "Kasutajat tuleks teavitada, kui tekkis viga ning ka siis, kui kõik õnnestus."
    }, {
        tags: "A des",
        content: "Vigaselt täidetud väljad või täitmata jäetud kohutuslikud väljad peavad olema visuaalselt eristatavad. (WCAG 3.3.1) Vigaseid välju ei tohi eristada ainult värviga. (WCAG 1.4.1)<div class='examples'><figure class='good'><img alt='Iga välja järel on kas korrektne või vigane ikoon' src='img/input_icon.png'><figcaption>Lisaks värvile on vigane väli tähistatud ka ikooniga</figcaption></figure><figure class='bad'><img alt='Korrektselt täidetud väljade piirjoon on roheline ja vigaste väljade piirjoon punane' src='img/input.png'><figcaption>Vigane väli on tähistatud ainult värviga</figcaption></figure></div>"
    }, {
        tags: "O dev",
        content: "Kasulik on veateadet kuvada välja juures kohe, kui fookus sellelt ära läheb (kasutaja järgmisele väljale liigub). Veateatele võiks lisada <b>aria-live=“assertive”</b> atribuudi, sest siis katkestab ekraanilugeja oma töö ning loeb koheselt ette veateate.<pre>&lt;input type=“text” aria-describedby=“message”&gt;<br>&lt;span id=“message” aria-live=“assertive”&gt;Sisesta parool!&lt;span&gt;</pre>"
    }, {
        tags: "AA sis",
        content: "Vigaselt täidetud välja juures peab olema tekstiline veateade. (WCAG 3.3.1) Veateatest peab olema selgelt arusaadav, <b>miks viga tekkis</b> ja <b>kuidas seda parandada</b>. Peab olema kirjas, kas probleem on <b>ajutine või püsiv</b> ning kas kasutaja saab probleemi <b>ise</b> lahendada või tegeleb sellega <b>teenusepakkuja</b> (sellisel juhul peaks lisama teenusepakkuja või kasutajatoe kontakti). (WCAG 3.3.3)"
    }, {
        tags: "A des",
        content: "Veateade tuleb kuvada võimalikult lähedal kohale, kus viga tekkis. (WCAG 1.3.1)<figure class='single'><img alt='Veateade kuvatakse vastava sisestuskasti juures.' src='img/error_msg.png'></figure>"
    }, {
        tags: "O des",
        content: "Kui veateade kuvatakse eraldi lehel, peab seal olema vähemalt üks järgmistest: <b>“Tagasi”</b> link eelmisele lehele (käitub nagu veebilehitseja “Tagasi” nupp), <b>“Proovi uuesti”</b> link (käitub nagu veebilehitseja “Värskenda” nupp) või <b>link avalehele</b> saamiseks."
    }]
}, {
    title: "Nupud",
    sections: [{
        tags: "AA des",
        content: "Nupud ja muud funktsionalsed elemendid peavad kogu lehe ulatuses olema sarnased ja äratuntavad. (WCAG 3.2.4)"
    }, {
        tags: "AA des",
        content: "Nupud peavad olema vähemalt <b>44 x 22</b> CSS piksli suurused ja piisavalt suurte vahedega, et neid oleks puutetundlikul ekraanil mugav vajutada. (WCAG 2.1 2.5.3)"
    }, {
        tags: "M des",
        content: "Mobiilivaates peaksid nupud asuma võimalikult ekraani keskel."
    }, {
        tags: "O dev",
        content: "Nupud tuleb esitada <b>&lt;button&gt;</b> või <b>&lt;input type=“button”&gt;</b> märgendiga. Mitte kasutada <b>&lt;a role=“button”&gt;</b> märgendit nupu esitamiseks, sest ekraanilugejaga kasutaja võib nupu vajutamiseks kasutada space klahvi, mis linki aga ei aktiveeri. Nuppu ei tohi esitada <b>&lt;div&gt;</b> või <b>&lt;span&gt;</b> märgendiga, sest tugitehnoloogiad ei pruugi selliseid nuppe ära tunda."
    }, {
        tags: "O dev",
        content: "Nupp peab olema vajutatav kogu oma ulatuses, mitte ainult nupul olev tekst.<div class='examples'><figure class='good'><img alt='Korrektne nupp' src='img/curs.png'><figcaption>Kogu nupu pind on klikitav.</figcaption></figure><figure class='bad'><img alt='Vigane nupp' src='img/No_curs.png'><figcaption>Ainult tekst on klikitav.</figcaption></figure></div>"
    }, {
        tags: "AA des",
        content: "Nupul peavad olema selgelt visuaalselt eristatavad fokuseeritud (WCAG 2.4.7) ja aktiivne olek.<pre>button:focus &#123;<br>   border: 2px dashed black;<br>&#125;<br>button:active &#123;<br>   border: 2px solid black;<br>&#125;"
    }, {
        tags: "AA dev",
        content: "Kui nupu sees on teksti asemel ikoon, pilt või üksik täht, tuleb nupule anda atribuut <b>aria-label=“…”</b>, et nupu funktsioon oleks ekraanilugejat kasutavale inimesele mõistetav. (WCAG 1.3.3)<pre>&lt;button aria-label=“Sulge aken”&gt;x&lt;/button&gt;</pre>"
    }]
}, {
    title: "Tabelid",
    sections: [{
        tags: "O dev",
        content: "Tabeleid ei tohi kasutada lehe sisu paigutamiseks ja kujundamiseks."
    }, {
        tags: "A dev",
        content: "Tabel tuleks esitada kasutades <b>&lt;table&gt;</b>, <b>&lt;thead&gt;</b> (päiselahtrite grupeerimiseks), <b>&lt;tbody&gt;</b> (sisuosa eraldamiseks), <b>&lt;tfoot&gt;</b> (kokkuvõtvate lahtrite grupeerimiseks), <b>&lt;tr&gt;</b>, <b>&lt;td&gt;</b>, <b>&lt;th&gt;</b> märgendeid. (WCAG 1.3.1)"
    }, {
        tags: "A dev",
        content: "Tabelil peab olema päis. Horisontaalse päise lahtrid tuleb märkida <b>&lt;th scope=“col”&gt;</b> ja vertikaalse päise lahtrid <b>&lt;th scope=“row”&gt;</b>. (WCAG 1.3.1)"
    }, {
        tags: "O dev",
        content: "Tabelile tuleks anda pealkiri <b>&lt;caption&gt;</b> märgendiga."
    }, {
        tags: "O dev",
        content: "Keerulisele tabelile tuleks lisada pikem kirjeldus <b>aria-describedby=”…”</b> atribuudiga.<pre>&lt;p id=“kirjeldus”&gt;Keerulise tabeli kirjeldus&lt;/p&gt;<br>&lt;table aria-describedby=“kirjeldus”&gt;<br>   &lt;caption&gt;Tabeli pealkiri&lt;/caption&gt;<br>   &lt;thead&gt;<br>      &lt;tr&gt;<br>         &lt;th scope=“col”&gt;Päis&lt;/th&gt;<br>      &lt;/tr&gt;<br>   &lt;/thead&gt;<br>   &lt;tbody&gt;<br>      &lt;tr&gt;<br>         &lt;td&gt;Lahter&lt;/td&gt;<br>      &lt;/tr&gt;<br>   &lt;/tbody&gt;<br>&lt;/table&gt;</pre>"
    }]
}];
