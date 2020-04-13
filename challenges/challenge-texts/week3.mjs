export async function getMaterial({formattedDeadline, createPhotoUploadLink, createFullWidthImage}) {
    return `<p><strong>Röviden:</strong></p>

<p>A harmadik héten egy <strong>makró fotót</strong> várunk tőled, amit ${createPhotoUploadLink('itt tudsz feltölteni')}.</p>

<p><strong>Hosszabban:</strong></p>

<p>${createFullWidthImage('mosquitoes.jpg', 'Légyott')}</p>

<p>Ezen a héten megtanuljuk, mi az a makró, és hogyan érdemes 5 centiről krumplit fotózni.</p>
<p>A legjobb képedet ${formattedDeadline}-ig, ${createPhotoUploadLink('itt tudod feltölteni')}.</p>

<p>A makró fotózás a köznyelvben egyszerűen azt jelenti, hogy közelről fotózunk dolgokat. Ezzel a definícióval most meg is elégszünk. Szóval ezen a héten a részletekre megyünk rá, kültéren vagy beltéren fotózunk élő vagy élettelen témát; a lényeg, hogy közelről.</p>

<p>5 tippet hoztunk neked ehhez:</p>

<ol>
    <li><strong>Válts perspektívát.</strong> Vizsgáld meg az apró részleteket a hétköznapi környezetedben. Hajolj/feküdj le és keresd meg a témád. Gyakran ott találod meg, ahol legkevésbé számítasz rá. Az apró állatok, növények általában részletgazdagabb makró témát adnak, de élettelen dolgokból is tudsz találni izgalmasat.</li>
    <li><strong>Zoomolj, fókuszálj.</strong> Ha olyan a géped, zoomolj rá a témára, és kézzel állítsd be a fókuszt.</li>
    <li><strong>Stabilizálj.</strong> Legyen stabil a gép, mert a legkisebb mozgás is hatalmas ezen a szinten. Ha kell, állíts be egy 2 másodperces időzítőt, hogy a kezed se mozgassa a gépet. Ezt a funkciót gyakorlatilag minden fényképezőgép és kamera app tudja.</li>
    <li><strong>Figyelj a fényre.</strong> Ne takard ki a géppel a fényforrást. Használj természetes szórt fényt; ha kell, deríts egy fehér lappal. Kerüld a direkt napfényt.</li>
    <li><strong>Kísérletezz a háttérrel.</strong> Mivel közelre fókuszálsz, biztosan nem lesz éles a háttér, de például az apró pontszerű fények (levelek között átszűrődő fény vagy a város fénye) gyakran érdekes formákat adnak ki. Ezt hívjuk <a href="https://hu.m.wikipedia.org/wiki/Bokeh">bokeh hatás</a>nak.</li>
</ol>

<p>Kreatív feladatok, variációk, érdekességek:</p>

<ul>
    <li>Tegyél apró figurákat kis dolgok mellé, hogy nagynak hassanak. <a href="https://www.pinterest.com/eileend1948/miniature-figure-photography/">Példa képek</a></li>
    <li>Válts ki makró-hatást normál képekből, miniatűr effekttel. <a href="https://www.awwwards.com/tilt-shift-photography-for-spectacular-miniature-effect.html">Példa képek</a> | Hogyan: <a href="http://webdesignsuli.hu/webdesigner_blog/tilt-shift-azaz-makett-effekt-keszitese-photoshopban/">Photoshoppal (magyarul)</a> | <a href="http://www.instructables.com/id/How-to-Achieve-Miniature-Effect-via-Photoshop/">Photoshoppal (angolul)</a> | <a href="https://www.thoughtco.com/how-to-make-tilt-shift-effect-1701697">GIMP-pel (angolul)</a>. A <a href="https://www.adobe.com/hu/products/photoshop.html">Photoshop</a> (€25/hó) és a <a href="https://www.gimp.org/downloads/">GIMP</a> (ingyenes) fotószerkesztő programok.</li>
    <li>Ha csak egy mobilod és 50ft-od van, itt egy tipp, hogy <a href="https://www.youtube.com/watch?v=W3KhZErpBuo">hogyan gyárts magadnak makró lencsét</a>.</li>
    <li>Egy komolyabb kihívás: <a href="https://tisztaegtisztafold.hu/makrofotozas-forditott-objektiv/">fotózz makrót fordított objektívvel</a></li>
</ul>

<p>Linkek:</p>

<ul>
    <li>Akiket mélyebben érdekel a téma, itt egy rendkívül igényes és részletes <a href="http://www.bykyny.hu/fenykepezes-kozelfenykepezes.shtml">cikk makrofotózásról</a>, Bereczky Péter tollából.</li>
    <li>Tippek az sg.hu-tól <a href="https://sg.hu/cikkek/it-tech/44392/hogyan-fotozzunk-makrofotozas-i">egyszerűbb</a> (kompakt) és <a href="https://sg.hu/cikkek/44443/hogyan_fotozzunk_makrofotozas_ii">komolyabb</a> (tükörreflexes és MILC) gépekhez.</li>
    <li>Tippek a <a href="https://www.canon.hu/get-inspired/tips-and-techniques/macro-photography/">Canontól</a>, röviden</li>
</ul>

<p>Inspiráció: <a href="https://www.pinterest.com/explore/close-up-photography/">Pinterest</a> | <a href="https://mobilephotoawards.com/macro-details-winner-honorable-mentions-6th-annual-mpa/">Mobile Photo Awards</a> | <a href="https://500px.com/krisztinmrkus">Márkus Krisztián bogarai</a> | <a href="https://www.smashingmagazine.com/2009/06/35-examples-of-stunning-macro-photography/">Smashing Magazine</a></p>

<p>Ha még nem küldted be a múlt heti (épületfotós) képedet, ma éjfélig még azt is ${createPhotoUploadLink('megteheted')}. 🕚</p>

<p>A makrós képeket pedig ${createPhotoUploadLink('itt')} várjuk!</p>

<p>Jó fotózást,</p>
<p>--<br />
    a Photato csapata</p>`;
}