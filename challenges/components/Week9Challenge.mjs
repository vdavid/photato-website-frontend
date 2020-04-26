import {createElement} from '../../web_modules/react.js';
import htm from '../../web_modules/htm.js';
import FullWidthLocalImage from './FullWidthLocalImage.mjs';
import PhotoUploadLink from './PhotoUploadLink.mjs';
import ExternalLink from '../../materials/components/ExternalLink.mjs';
const html = htm.bind(createElement);

/**
 * @param {string} formattedDeadline
 * @param {string} baseUrl
 * @returns {React.ReactElement}
 */
export default function Week9Challenge({formattedDeadline, baseUrl = ''}) {
// noinspection SpellCheckingInspection
    return html`<p><strong>Röviden:</strong></p>
<p>A 9. héten egy <strong>portrét</strong> várunk tőled, amit <${PhotoUploadLink} label="itt tudsz feltölteni" />.</p>
<p><strong>Hosszabban:</strong></p>

<${FullWidthLocalImage} fileName="mustache-guy.jpg" altText="Bajszos csávó" />

<p>A legtöbbünk életében egészen gyakran előfordul, hogy a barátainkat, családtagjainkat fotózzuk, ezért azt gondoltuk, mindannyiunknak hasznos lehet, ha megpróbálunk szintet lépni az ilyen típusú fotók készítésében. A stúdióban, tökéletesre csiszolt megvilágítással és milliós géppel készült portréfotózást meghagyjuk egy szűk elitnek, a cél inkább az, hogy megkapargassuk a portréfotózás tudományának felszínét. A legjobb képedet ${formattedDeadline}-ig, <${PhotoUploadLink} label="itt tudod majd feltölteni" />.</p>
<p><strong>Egy kis elmélet azoknak, akik fényképezőgéppel fotóznak, meg akiket érdekel:</strong></p>
<p>Volt már szó futólag a látószögről és a gyújtótávolságról. Előbbit fokban, utóbbit milliméterben mérjük, és itt van egy elég beszédes <${ExternalLink} href="${baseUrl}/challenges/linked-images/fov-and-focal-distance.jpg">illusztráció</a>, hogy hogyan függenek össze. Most röviden megnézzük, mit jelentenek ezek a gyakorlatban, a portréval kapcsolatban.</p>
<p>A legfontosabb, hogy az objektív a látószögétől függően torzítja a testet, az arcot. Ez jelenik meg, amikor “kövérít” a kamera, vagy viccesen megnöveli az orrot. Itt egy kép, amin 16mm és 200mm között változik a beállított gyújtótávolság:</p>

<${FullWidthLocalImage} fileName="16mm-200mm.gif" altText="16mm-200mm" />

<p>Figyeld meg, hogy ahogy csökken a gyújtótávolság (egészen 16mm-ig), egyre többet látsz a kissrác környezetéből, viszont egyre torzabb a feje és nagyobb az orra. A másik irányban, a 200mm-es végén viszont már kb. semmit nem látsz a mögötte lévő térből, a srác feje pedig kilapul.</p>
<p>Itt egy másik, stúdióban készült képsorozat is:</p>

<${FullWidthLocalImage} fileName="20mm-200mm.gif" altText="20mm-200mm" />

<p><${ExternalLink} href="${baseUrl}/challenges/linked-images/fov-portrait.png">ugyanez állóképként, 20-85mm-ig</a></p>
<p>Na de hány mm-es beállítás a leghűebb a valósághoz? Erre sajnos nincs egyértelmű válaszunk, mert ez a gépedben lévő érzékelő méretétől függ.</p>
<p>Volt régen a hagyományos, “analóg”, filmes gép. Hosszú ideig az volt a szabvány méret, amekkorában ezek a fényképezőgépek a képet (negatívot) készítették. Ezt hívják “full frame”-nek, azaz teljes méretű képnek. Egy full frame-es gépnél az <strong>50mm-es</strong> gyújtótávolság a leghűebb a valósághoz, mert ez felel meg legjobban az emberi szem látószögéhez. Tehát ha a géped full frame-es, akkor 50mm-es objektívvel a legszerencsésebb portrét fotóznod.</p>
<p>Egy full frame-es gép viszont elég drága, a te géped érzékelője nagy valószínűséggel ennél kisebb. Itt van néhány tipikus érzékelő-méret:</p>

<${FullWidthLocalImage} fileName="sensor-sizes.jpg" altText="Érzékelők" />

<p>A képen a zöld a full frame, a sárga a legtöbb tükörreflexes gép érzékelő-mérete, a piros is gyakori a közepes gépeknél, a két kék pedig a tipikus kompakt kamerák ill. az iPhone 6 szenzormérete.</p>
<p>Ha tudni akarod, hogy a te gépednél mi az emberi szemnek leginkább megfelelő zoom-beállítás, keresd ki a géped érzékelőjének méretét a gép használati utasításában vagy az interneten, aztán keresd ki az érzékelő-méretednek megfelelő oszlopot <${ExternalLink} href="${baseUrl}/challenges/linked-images/sensor-size-table.jpg">ebben a táblázatban</a>, és nézd meg a “Normal” sorban lévő értéket. Ezzel a gyújtótávolság-beállítással lesz a legtermészetesebb a portréd.</p>
<p><strong>A rövid elméleti kitekintés után következzen néhány praktikus tanács portréfotózáshoz:</strong></p>
<ol>
    <li><strong>Válassz helyszínt.</strong> Zárt térben, mesterséges fénynél van a legtöbb lehetőséged beállítani a képet, de végső soron a kreativitásodra (és gyakran a véletlenre) van bízva, hogy hol fotózol.</li>
    <li><strong>Világíts. </strong>Kerüld a direkt napfényt. Helyette használj szórt fényt, az árnyékos oldalak megvilágítására pedig derítőlapot (megint a tepsis trükk).</li>
    <li><strong>Komponálj.</strong> Te döntöd el, hogy csak a modelled arca legyen a képen, vagy az arca és felsőteste, esetleg az egész alakja. Ha több látszik a környezetből, az elvonhatja a figyelmet, de hozzá is adhat a portréhoz. Ez rád van bízva, nincs objektíve jó megoldás.</li>
    <li><strong>Zoomolj.</strong> Ld. az elméleti részt feljebb. Találd meg a megfelelő objektívet (ha több van), zoom-beállítást és távolságot, hogy minél kevesebb torzítással kapd le a modelled.</li>
    <li><strong>Fókuszálj.</strong> A legtöbb esetben az a nyerő beállítás, ha a modell szeme éles, mert a szem a legkifejezőbb része az arcnak. Ügyelj, hogy pontosan fókuszálj.</li>
    <li><strong>Instruálj.</strong> Segíts a modellednek a megfelelő pózba állni, jó irányba nézni stb. Próbálkozz szemből, profilból, enyhén oldalról stb. Kísérletezz.</li>
    <li><strong>Élvezd.</strong> Oldd a hangulatot, hogy fesztelen és őszinte legyen a modell. Beszélgessetek, légy közvetlen, barátságos. 😊</li>
</ol>
<p><strong>Variációk, érdekességek:</strong></p>
<ul>
    <li>Fesd össze a modelled. <${ExternalLink} href="${baseUrl}/challenges/linked-images/body-painting.jpg">Példa egy testfestésre</a></li>
    <li>Photoshoppolj. <${ExternalLink} href="https://www.behance.net/gallery/32763127/Animeyed-(Self-Portraits)">Borsi Flóra állatos önarcképei</a></li>
</ul>
<p><strong>Linkek:</strong></p>
<ul>
    <li><${ExternalLink} href="http://blog.fotosarok.hu/tag/101-portrefoto-tipp/page/2/">101 portréfotó tipp</a> – a Fotósarok Blog 5 részes cikksorozata</li>
    <li><${ExternalLink} href="https://sg.hu/cikkek/it-tech/45404/hogyan-fotozzunk-emberek-portrek">Hogyan fotózzunk - emberek, portrék</a> – az sg.hu cikke a protréfotózásról</li>
    <li><${ExternalLink} href="https://fotosuli.blog.hu/2016/08/03/hogyan_keszitsunk_szep_portrefotot">Hogyan készítsünk szép portréfotót?</a> – a fotosuli.hu rövid cikke</li>
    <li><${ExternalLink} href="https://www.fotobetyar.hu/interaktivanyagok/objektivek-jellemzoi-gyujtotavolsag/">Objektívek, gyújtótávolság, látószög, érzékelő-méretek</a> – remek elméleti összefoglaló a fotobetyar.hu-tól</li>
    <li><${ExternalLink} href="https://www.onlinefototanfolyam.hu/aktualis-cikkek/mi-a-gyujtotavolsag-szorzo-/47545/">Mi a gyújtótávolság-szorzó?</a> – további elmélet a onlinefototanfolyam.hu-n</li>
</ul>
<p><strong>Inspiráció:</strong> <${ExternalLink} href="https://hu.pinterest.com/search/pins/?q=portrait%20photography">Pinterest</a> | <${ExternalLink} href="https://www.boredpanda.com/top-10-photographers-for-travel-portraits/">Bored Panda</a> | <${ExternalLink} href="https://filtergrade.com/best-portrait-photographers-to-inspire-you/">Filtergrade</a> | Mobile Photography Awards <${ExternalLink} href="https://mobilephotoawards.com/portraits/">2015</a> | <${ExternalLink} href="https://mobilephotoawards.com/portraits-winner-honorable-mentions-6th-annual-mpa/">2016</a> | <${ExternalLink} href="https://mobilephotoawards.com/portraits-winner-honorable-mentions-7th-annual-mpa/">2017</a></p>
<p>Ha még nem küldted be a múlt heti (csendéletes) képedet, ma éjfélig még azt is <${PhotoUploadLink} label="megteheted" />. 🕚</p>
<p>A portrékat pedig <${PhotoUploadLink} label="itt" /> várjuk!</p>
<p>Jó fotózást,</p>
<p>--<br />
    a Photato csapata</p>`;
}