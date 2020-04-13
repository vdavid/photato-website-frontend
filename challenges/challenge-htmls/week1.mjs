export async function getMaterial({formattedDeadline, createPhotoUploadLink}) {
    return `<p>Az első hét témája: <strong>gasztrofotó</strong>!</p>
<p><img src="https://gallery.mailchimp.com/0305d4c45bf55547841755d47/images/34187a74-1735-4b91-8f4c-6da400f58c32.jpg" alt="pizza" style="width:100%; max-width:800px;" /></p>
<p>A gasztrofotózást tökéletes első témának tartjuk, mert kevés lelkesítőbb fotós kihívást ismerünk, mint finom, színes kajákat fényképezni 😋, és mert a legtöbben azért még bőven tanulhatunk arról, hogy hogyan lehet ezt igazán profin csinálni.</p>

<p><strong>Az első heti feladatod</strong> tehát ételeket/italokat fotózni, kiválasztani közülük a legjobbat, és ${formattedDeadline}-ig feltölteni ${await createPhotoUploadLink('ezen a linken')}. A beazonosításhoz fontos, hogy a kép neve az email címed legyen: pl. “krumplipuree12@gmail.com.jpg”.</p>

<p>Hogy mikor jó egy gasztrofotó? Ha aki látja, legszívesebben azonnal beleharapna az ételbe.</p>

<p>Segítségképp itt a 8 legjobb tippünk:</p>

<ol>
    <li><strong>Tálalj.</strong> Válaszd ki a megfelelő tányért, amire/amibe az étel kerül. Jól gondold meg a különböző összetevők sorrendjét és a díszítést. Erre leginkább akkor van lehetőséged, ha te készíted/tálalod az ételt, de ha már tálalva van, az se baj, még van hátra 7 tipp.</li>
    <li><strong>Dekoráld az ételt.</strong> Magvak, levelek, szószok, apró gyümölcsök nagyon sokat tudnak dobni az összhatáson. Próbálj kontrasztos színpárosítást választani (sárga-zöld, piros-sárga, rózsaszín-fekete)</li>
    <li><strong>Figyelj a háttérre.</strong> Ez jelentheti azt, hogy elpakolsz a fotózott tárgy környékéről, de kiegészítheted a képet evőeszközökkel, szalvétával, itallal, konyharuhával, egy stílusos tányérral. Figyelj rá, hogy lehetőleg ne legyen a kép hátterében sok színes dolog, mert ez elveszi a figyelmet a modelledről.</li>
    <li><strong>Komponáld meg a képet.</strong> Sok vagy kevés látszódjon a környezetből? Teljesen kitöltse az étel a képet, vagy megvágod? Keretet adsz neki a kiegészítőkkel? Kísérletezz, forgasd a tányért, keresd meg, hogy honnan néz ki a legjobban a kiszemelt étel. Próbálkozz magasabbról, alacsonyabbról, és játssz a távolsággal. Ha van a gépeden makró (közeli kép) funkció, az külön érdekes lehet.</li>
    <li><strong>Támaszd meg a kezed.</strong> Főleg ha nincs elég fény vagy nem elég stabil a kezed, jobb, ha megtámasztod valamin vagy állványt használsz.</li>
    <li><strong>Kapcsold ki a vakut.</strong> A vaku pontosan szemből világítja meg az ételt, így elveszíted az árnyékokat, és kevésbé lesznek változatosak a színek. Kerüld a direkt napfényt is. Ehelyett ha lehet, használj természetes, szórt fényt. Az ideális beállítás: ablak mellett, felhős napon, késő délelőtt-kora délután.</li>
    <li><strong>Próbálj ki egy derítő lapot.</strong> A derítőlap egy nagy, világos felület, ami visszaveri a fényt az étel árnyékosabb oldalára. Használhatsz erre egy nagyobb, fehér papírlapot, vagy egy alufóliával bevont tepsit. Próbáld ki, milyen derítéssel és derítés nélkül ugyanaz a beállítás, hogy lásd a különbséget.</li>
    <li><strong>Ne várj vele sokat.</strong> Főleg, ha meleg ételt fotózol. Ahogy hűl az étel, először a gőz tűnik el, aztán mattabb lesz az ételek felszíne, majd az élénkebb színek vesznek el. Ha nagyon sokat vársz, meg is penészedik, és akkor még éhen is maradsz. 😉</li>
</ol>
<p>9 ötlet, hogy teret engedjünk a kreativitásnak:</p>
<ul>
    <li>Egyszerű kaja (zsíros kenyér, krumpli) szépen fotózva</li>
    <li>Tányér helyett beton. Vagy vászon, fa, rozsdás tepsi, sötét, zsírpapír, bambusz alátét, kockakő stb.</li>
    <li>Színezd át a kaját</li>
    <li>Kaja fura helyen</li>
    <li>Kajának kinéző dolog, ami nem is kaja</li>
    <li>Kaja a levegőben</li>
    <li>Kaja és kéz (öntesz, szórsz, belenyúlsz)</li>
    <li>Romlott kaja szexin fotózva</li>
    <li>A készítés és elfogyasztás folyamata gifben</li>
</ul>

<p>5 link az érdeklődőknek mások még jobb gasztrofotó-tippjeire:</p>
<ul>
    <li><a href="http://www.mindmegette.hu/az-etelfotozas-fortelyai-47232/">7 tipp a mindmegette.hu-tól</a> – ha valaki, ők értenek a kajákhoz.</li>
    <li><a href="http://blog.fotosarok.hu/2018/11/etelfotos-trukkok-foodstyling-alapok/">10 tipp Jay P. Morgan fotóstól</a> – mobillal fotózóknak különösen ajánlott.</li>
    <li>2-in-1: Tippek <a href="https://blogokrolneked.cafeblog.hu/2015/07/10/gasztro-fotozas-alapjai-12-pontban/">kezdőknek</a> és <a href="https://blogokrolneked.cafeblog.hu/2015/07/24/igy-alapozd-meg-gasztrofotoid-sikeret/">haladóknak</a> – 12+10 tipp, szép képekkel.</li>
    <li>3-in-1: Három gyönyörű videó: <a href="https://vimeo.com/133158982">Környezet és fények</a> [2p], <a href="https://vimeo.com/132959943">Stílus és kiegészítők</a> [1p], <a href="https://vimeo.com/132959942">Komponálás és keretezés</a> [1p]</li>
    <li><a href="https://nlc.hu/eletmod/20161114/profi-etelfoto-trukkok/">5 tipp csaláshoz</a> – a “kajának kinéző dolog, ami nem is kaja” ötletre elég jól rezonál.</li>
</ul>

<p>További profi galériák, nyálcsorgatásra és inspirációul: <a href="https://hu.pinterest.com/search/pins/?rs=ac&len=2&q=food%20photography&eq=food%20ph&etslf=5905&term_meta[]=food%7Cautocomplete%7Cundefined&term_meta[]=photography%7Cautocomplete%7Cundefined">Pinterest kajafotók</a>
| <a href="http://libbyvision.com/">Libby Vision Studio</a>
| <a href="https://www.francescotonelli.com/">Francesco Tonelli</a>
| <a href="http://foodphotography.co.uk/">David Munns</a>
| <a href="https://www.mittongtarestudio.com/">Mittongtare Studio</a>
| <a href="http://clarebarboza.com/">Clare Barboza</a>
| <a href="http://www.keikooikawa.com/food#0">Keiko Oikawa</a>
| <a href="http://www.timhillfoodphotographer.com/">Tim Hill</a></p>`;
}