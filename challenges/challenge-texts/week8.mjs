export async function getMaterial({formattedDeadline, createPhotoUploadLink}) {
    return `<p><strong>Röviden:</strong></p>
<p>Ezen a héten egy <strong>csendélet-jellegű fotót</strong> várunk tőled, amit ${await createPhotoUploadLink('itt tudsz feltölteni')}.</p>
<p><strong>Hosszabban:</strong></p>

<p style="width:100%; max-width:800px; text-align:center; font-size:smaller;"><img style="width:100%;" src="/challenges/illustrations/jama.jpg" alt="Jama" /><br />
    © <a href="https://hu.wikipedia.org/wiki/Farkas_Antal_(fot%C3%B3m%C5%B1v%C3%A9sz)">Farkas Antal Jama</a></p>

<p>Az elmúlt 3 hétben sokan kültéren, komfortzónán kívüli helyzetekben fotóztatok dinamikus, nehéz témákat. Tudjuk, hogy ez gyakran trükkös volt, és ezúton gratulálunk a bátor próbálkozásokhoz és a jól sikerült fotókhoz!</p>
<p>Sunyi módon, miközben a fotózást gyakoroltad ezekben az éles helyzetekben, a fényképezőgép legbonyolultabb beállításai is bejöttek a képbe (záridő, blende és ISO érték), és gyakoroltad őket egy kicsit. A tanulás nehezén ezzel túl vagy, gratulálunk! 😊</p>
<p>Ezen a héten eggyel békésebb vizekre evezünk és biztosítjuk, hogy a fotótémád ne szaladjon el. Ami pedig az elméletet illeti, egyetlen igazán fontos beállítás van hátra: a <em>fehéregyensúly</em>.</p>
<p><strong>Mi az a fehéregyensúly?</strong></p>
<p>Képzelj el egy fehérre festett házat. Képzeld el, hogy ránézel erre a házra egy nap négyszer: hajnalban, déli napfényben, felhős délutáni időben és szürkületben. A házról a szemedbe jutó fény a négy esetben egészen különböző lesz, mégis, mind a négy alkalommal fehérnek fogod látni a házat.</p>
<p>Ez azért van, mert az agyad a fényviszonyoknak megfelelően, automatikusan korrigálja, hogy milyen színűnek látja a környezeted. Mint pl. ebben a klasszikus optikai illúzióban:</p>

<p><img src="/challenges/illustrations/illusion.png" alt="Optikai illúzió" style="width:100%; max-width:800px;" /></p>

<p>Az “A” és “B” négyszög színe pontosan ugyanaz, valószínűleg mégis jóval sötétebbnek látod az “A”-t, mert az agyad értelmezi a képet és korrigál. Ez az optikai illúzió ennek a képességnek a határait mutatja be, de ez a képesség a hétköznapokban nagyon hasznos: például a napszaktól függetlenül meg tudod állapítani, hogy a fentebb elképzelt házad fehér. 😀</p>
<p>Amit a szemed/agyad ilyen remekül megold, azt a fényképezőgépedben egy közepesen okos automatika próbálja lekövetni. Ez időnként hibázik, és ilyenkor a géped segítségre szorul: kézzel kell megtalálnod a tiszta fehér színt, hogy az elkészült kép színei hűek legyenek a fotótémád valódi színeihez. Ezt hívják fehéregyensúly-beállításnak.</p>
<p>A cél, hogy a fehér szín tényleg fehér legyen, ne pedig sárga, kékes stb. Bővebb infókért jó szívvel ajánljuk a témában <a href="https://studioeszkozok.hu/blog/feheregyensuly-es-szinhomerseklet-a-digitalis-fotoknal">a studioeszkozok.hu cikkét</a>.</p>
<p>A fehéregyensúlyhoz kapcsolódó fogalom a <em>színhőmérséklet</em>, melyet <em>Kelvin</em>ben mérnek, jele “K”. Az egyes fehéregyensúly-beállításokhoz bizonyos színhőmérsékletek tartoznak. Itt van néhány példa, amikor valószínűleg a fényképezőgéped is támogat, mint alapbeállításokat:</p>
<ul>
    <li>Hagyományos izzó (3200 K)</li>
    <li>Fénycső (3800-4000 K)</li>
    <li>Tiszta napsütés (5000-5600 K)</li>
    <li>Vaku (5500-5600 K)</li>
    <li>Felhős idő (5600-6000 K)</li>
    <li>Árnyék (6200-8000 K)</li>
</ul>
<p>Itt van pl. ugyanaz a karó különböző fehéregyensúly-beállításokkal fényképezve, napos időben:</p>

<p><img src="/challenges/illustrations/temperature.jpg" alt="Oszlopok" style="width:100%; max-width:800px;" /></p>

<p>Ahhoz, hogy helyes színeket kapj, a gép fehéregyensúlyát a fényforrásnak megfelelően kell beállítani. A legtöbb esetben a gép AWB (Automatic White Balance – automatikus fehéregyensúly) beállítása jól működik. A leggyakrabban mesterséges fényforrásoknál szokott hibázni: itt érdemes kézzel kiválasztani a megfelelő alapbeállítást, vagy ha egyik sem stimmel, egyéni (“custom”) fehéregyensúlyt választani.</p>
<p>Ha többféle fényforrás van egy helyen (pl. lámpa és az ablakon besütő napfény, vagy lámpa és TV), az még nehezebb eset. Ilyenkor érdemes elfogadni, hogy nem lesz tökéletes a kép, és eldönteni, hogy melyik fényforráshoz igazítod (manuálisan) a fehéregyensúlyt; vagy ha Photoshop-guru vagy, akkor utómunkával megoldani.</p>
<p>Ha tömörített (JPG) formátumban fotózol, akkor különösen érdemes figyelni a jó beállításra, mert nehéz lesz utólag kijavítani a képet. Ha nyers (RAW) formátumban fotózol, akkor kisebb a rizikó: ilyenkor utólag is pontosan be lehet állítani a fehéregyensúlyt. (A formátum beállítása gépenként változó, a géped használati utasítása segíthet, vagy csak turkálj kicsit a menürendszerben, 5 perc és meglesz.) Itt van még egy jó cikk <a href="https://fotozasblog.hu/feher-egyensuly-beallitas-viszlat-sarga-fotok/">a fehéregyensúly-beállításról</a>.</p>
<p><strong>Néhány tipp a csendélethez</strong></p>
<p>A csendélet igen komplex feladat tud lenni, de egyben kellemesen ráérős is, mert a fotómodellek garantáltan nem tűnnek/másznak/fáradnak el. A tippek:</p>
<ol>
    <li><strong>Válaszd ki a témát.</strong> Mi az, ami érdekes neked, és miért? Mit akarsz mondani a képpel? Lehet, hogy rögtön rátalálsz a témádra a lakásodban vagy az utcán. De lehet, hogy keresgélned kell, vagy akár szobrászkodnod, barkácsolnod, festened érdemes hozzá.</li>
    <li><strong>Készítsd elő a környezetet.</strong> Ügyelj rá, hogy ne vonja el a figyelmet a háttér. Pakolj el, esetleg helyezd a tárgyakat papírra vagy semleges színű szövetre. Játssz a színekkel vagy éppen fogd vissza őket, hogy ne zavarják a fő témád.</li>
    <li><strong>Képezz fényt – fényképezz.</strong> Az épületfotók, utcai képek és sportfotók után most végre teljes kontrollod van a megvilágítás felett! Fontos, hogy egyféle fényforrást használj: ha többfélét használsz egyszerre, nem tudod majd beállítani a megfelelő fehéregyensúlyt. Használhatsz természetes szórt fényt, direkt napfényt, derítő lapot (egy nagy világos felület, ami ráveti a fényt a tárgy árnyékos oldalára – ld. tepsi+alufólia tipp még az első hétről). Használhatsz lámpákat is, de figyelj arra, hogy egyféle izzó legyen bennük. Egy LED izzónak nagyon más a színhőmérséklete, mint egy neon fénycsőnek.</li>
    <li><strong>Komponálj.</strong> Gondolj a harmadolási szabályra, de ne erőltesd rá mindenre. A különböző komponálási technikákról <a href="https://tisztaegtisztafold.hu/komponalas-geometria/">itt olvashatsz</a>.</li>
    <li><strong>Exponálj helyesen.</strong> Gondolj az előző hetekben tanultakra. Ha kevés a fény, a gépnek több idő kell a helyes exponáláshoz. Ilyenkor használj állványt és ha kell, 2 másodperces időzítőt. Figyelj rá, hogy alacsony ISO értéket használj, hogy ne legyen szemcsés a kép.</li>
    <li><strong>Végezz utómunkát.</strong> Ez nem kötelező, ráadásul egy elég komplex téma, megérdemelne egy külön tanfolyamot. Ha szívesen kísérleteznél, ajánlunk azért néhány programot, amiket érdemes kipróbálnod:
        <ul>
            <li><a href="https://pixlr.com/editor/">Pixlr</a> (ingyenes, online),</li>
            <li><a href="https://www.gimp.org/">Gimp</a> (ingyenes, letölthető),</li>
            <li><a href="https://affinity.serif.com/en-gb/photo/">Affinity Photo</a> (18e ft, letölthető),</li>
            <li>Adobe <a href="https://www.adobe.com/hu/products/photoshop.html">Photoshop</a> és <a href="https://www.adobe.com/hu/products/photoshop-lightroom.html">Lightroom</a> (drágák).</li>
        </ul>
    </li>
</ol>
<p><strong>Linkek további infókra, tippekre</strong></p>
<ul>
    <li>A studioeszkozok.hu cikke <a href="https://studioeszkozok.hu/blog/feheregyensuly-es-szinhomerseklet-a-digitalis-fotoknal">a fehéregyensúlyról</a>.</li>
    <li>A fotozasblog.hu cikke szintén <a href="https://fotozasblog.hu/feher-egyensuly-beallitas-viszlat-sarga-fotok/">a fehéregyensúlyról</a></li>
    <li>10 remek tipp <a href="https://photography.tutsplus.com/hu/tutorials/10-tips-to-get-started-with-still-life-photography--photo-8278">a csendélet-fotózás elkezdéséhez</a></li>
    <li>A komponálási technikákról: <a href="https://tisztaegtisztafold.hu/komponalas-geometria/">6 komponálási és geometriai tipp</a></li>
</ul>
<p><strong>Ötletek, variációk</strong></p>
<ul>
    <li>Gyűjtemények: <a href="https://hu.pinterest.com/pin/424464333613794639/">egyszínű dolgok</a>, egy témához kapcsolódó tárgyak összerendezve</li>
    <li><a href="https://hu.pinterest.com/pin/439171401157788730/">Lebegő tárgyak</a></li>
</ul>
<p><strong>Inspiráció:</strong> <a href="https://hu.pinterest.com/search/pins/?q=still%20life%20photography">Pinterest csendéletek</a> | <a href="https://www.pexels.com/search/still%20life/">Pexels</a> | Mobile Photo Awards épületfotó győztesek: <a href="https://mobilephotoawards.com/3rd-annual-mobile-photography-awards-winners-honorable-mentions/">2013</a> | <a href="https://mobilephotoawards.com/still-life-2014-mpa-results/">2014</a> <a href="https://mobilephotoawards.com/still-life/">2015</a> | <a href="https://mobilephotoawards.com/still-life-winner-honorable-mentions-6th-annual-mpa/">2016</a> | <a href="https://mobilephotoawards.com/still-life-winner-honorable-mentions-7th-annual-mpa/">2017</a></p>
<p>Ha még nem küldted be a múlt heti (hosszú exponálási idejű) képedet, ma éjfélig még azt is ${await createPhotoUploadLink('megteheted')}. 🕚</p>
<p>A csendéleteket pedig ${formattedDeadline}-ig, ${await createPhotoUploadLink('itt tudod feltölteni')}.</p>
<p>Jó fotózást,</p>
<p>--<br />
    a Photato csapata</p>`;
}