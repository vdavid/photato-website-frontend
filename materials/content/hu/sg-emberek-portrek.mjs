import {createElement} from '../../../web_modules/react.js';
import htm from '../../../web_modules/htm.js';
import TwoEnlargeableFigures from '../../components/TwoEnlargeableFigures.mjs';
const html = htm.bind(createElement);

// noinspection JSUnusedGlobalSymbols (This file is loaded dynamically.)
/**
 * @returns {ArticleMetadata}
 */
export function getMetadata() {
    // noinspection SpellCheckingInspection (It's in Hungarian.)
    return {
        slug: 'sg-emberek-portrek',
        title: 'Emberek, portrék',
        author: 'Gábor Zoltán',
        publishDate: new Date('2014-06-22'),
        publisherName: 'Sg.hu',
        originalUrl: 'https://sg.hu/cikkek/it-tech/45404/hogyan-fotozzunk-emberek-portrek',
        isOriginalUrlBroken: false,
    };
}

// noinspection JSUnusedGlobalSymbols (This file is loaded dynamically.)
/**
 * @returns {React.ReactElement}
 */
export default function Article() {
    // noinspection SpellCheckingInspection (It's in Hungarian.)
    return html`<div>
    <p>A fotográfia egyik legősibb és legelterjedtebb ága az emberek fényképezése, lévén a téma az orrunk előtt van nap mint nap, csak a megfelelő alkalmat és modellt kell megtalálnunk.</p>
    <p>Ebben a műfajban nem számít különösebben, hogy digitális vagy analóg nyersanyagra dolgozunk, nem sokat érnek az extra megapixelek vagy a profi utómunka, hiszen a fotót a pillanat, a modell arckifejezése, tekintete és a fények adják el. Igazság szerint sok alapszabály nem vonatkozik a témára, a digitális viszonylatban pedig pláne nincs sok említésre méltó dolog. Általánosságban azonban érdemes pár dolgot szem előtt tartanunk.</p>
    <h2>Általános tanácsok</h2>
    <p>A legfontosabb a fényképezőgép helyes tartása. Fordítsuk el a gépet 90 fokkal portréállásba, hiszen az emberi arc ezt a képkivágást igényli, így lehet érdekesebb portréfotókat készíteni. Előfordulhatnak olyan esetek azonban, amikor a gép fektetett tartása indokolt. Ilyenek azok a portréfotók, amikben a modell kitekint a képről, illetve a modellre jellemző tárgyat vagy helyet mutatunk be a háttérben. Minden fotó előtt gondoljuk át, hogy milyen képkivágással érhetjük el a jobb hatást.</p>
    <p>Igyekezzünk teleobjektívvel fotózni (vagy a kompakt gépet tele állásban használni)! Először is azért, mert így nem torzítanak az objektívek, nagylátószög állásban viszont igen. Másodsorban azért, mert egy portréfotóhoz nincs szükség az alany arcán kívül másra. A modell tekintete a legfontosabb, annak kell beszélnie, lehetőleg egy jellegzetes, érzelmeket tükröző kifejezést mutatnia. Harmadsorban azért, mert tele állásban az esetleg látszó háttér kellően el lesz nagyolva ahhoz, hogy modellünk kiemelkedjen belőle, és ne zavarjanak be egyéb részletek. A portréfotózáshoz használjunk tág (f2,8-f4) rekeszt, hogy a háttér a lehető legjobban el legyen mosva (érdemes a legtágabb rekesznél egy kicsivel szűkebb értéket beállítani, mivel az objektívek úgy részletesebb képet rajzolnak).</p>
    <${TwoEnlargeableFigures} thumbnailFileName1="0620_portre1_200.jpg" fullSizeFileName1="0620_portre1.jpg" altText1="Portré 1" caption1="Fekete-fehér portréfotó" thumbnailFileName2="0620_portre2_200.jpg" fullSizeFileName2="0620_portre2.jpg" altText2="Portré 2" caption2="Fekete-fehér portréfotó" />
    <p>A technika lényegében bármi lehet, nincs szükségünk drága gépre. Egy egyszerű, háromszoros optikával felvértezett kiskompakt is tökéletes a célra. Természetesen minél nagyobb az objektívünk átfogása, annál messzebbről tudunk észrevétlenül elkapni egy-egy megismételhetetlen pillanatot. Amennyiben olyan digitális kompakt gépünk van, amelyiknél nem tudunk manuálisan rekeszértéket állítani, úgy válasszuk a portré témamódot, ami a legtöbb kompakt gépen megtalálható (de az alsókategóriás DSLR gépeken is megtaláljuk). Amennyiben gépünk képes fekete-fehér képeffekttel dolgozni, próbáljuk ki azt, hiszen a portréfotóknál a színek sokszor elvesznek, mintsem hozzáadnak a mondanivalóhoz.</p>
    <p>Ha nincs elég nagy átfogású objektívünk a távolból készített elkapott pillanatok készítésére, de van egy nagyobb felbontású érzékelővel ellátott gépünk, nyugodtan próbálkozzunk a fotózással, és később vágjuk le a nem kívánatos részleteket a képről, hiszen vágás után is marad még elég felbontásunk a fotó élvezetéhez.</p>
    <${TwoEnlargeableFigures} thumbnailFileName1="0620_portre3_200.jpg" fullSizeFileName1="0620_portre3.jpg" altText1="Portré 3" caption1="Ezt a fotót az oldalról érkező túl erős napfény és zavaró árnyékok rontják el" thumbnailFileName2="0620_portre4_200.jpg" fullSizeFileName2="0620_portre4.jpg" altText2="Portré 4" caption2="A kép meleg színei és a helyes beállítás jó képet eredményeztek" />
    <p>A fények már jóval fontosabbak gépünk tudásánál. Ha a szabadban fotózunk, legyünk körültekintőek! Nem szerencsés a nappal háttal fotóznunk, hiszen a modellünk ilyenkor legtöbb esetben hunyorog. Nappal szemben állva már jobb eredményt kaphatunk, ilyenkor azonban ne felejtkezzünk el a derítő vakuzásról - legyen akármilyen hét ágra sütő napsütés (természetesen csak akkor, ha a modellünk a vaku hatósugarán belül van). Ha izgalmas portrét szeretnénk, fotózzunk oldalról érkező fények mellett. Így a modell arcának egyik oldala árnyékos lesz, de a másik oldalát elegendő fény éri.</p>
    <p>Fontos a jó fénymérés is! Lehetőség szerint spot vagy középre súlyozott fénymérést alkalmazzunk, ellenkező esetben mátrix fénymérést használva a környezet fényei túl- vagy alulexponálást eredményezhetnek., Ha a modell arca teljesen kitölti a képet, akkor természetesen használhatjuk a mátrix fénymérést is. Éles szögből - például naplementekor - készült felvételeknél exponáljuk kicsit alá a képet, mert az erős fények könnyen kiégethetik az arc részeit. Az expozíció -1/3 -2/3-os korrekciója elegendő lehet.</p>
    <${TwoEnlargeableFigures} thumbnailFileName1="0620_portre7_200.jpg" fullSizeFileName1="0620_portre7.jpg" altText1="Portré 7" caption1="Portréfotó" thumbnailFileName2="0620_portre8_200.jpg" fullSizeFileName2="0620_portre8.jpg" altText2="Portré 8" caption2="Portréfotó" />
    <p>Ha nemcsak az arcra koncentrálunk, hanem egy egész alakos fotót szeretnénk modellünkről készíteni, akkor figyeljünk a megfelelő háttérre. Nem szerencsés a nagyon zavaros, kusza háttér, egy homogén tájrészlet sokkal jobb, nyugodtabb, kellemesen kiemelkedik belőle a modell. Ha utazásaink során a helyi embereket akarjuk megörökíteni, figyeljünk a környezetre, komponáljunk a képre jellegzetes tárgyakat, tájelemet, egyebet, ami a megfelelő hangulat átadását segíti elő. Amennyiben lehetőségünk van, használjunk derítőlapot a kellemetlen árnyékok eltüntetésére!</p>
    <p>A derítők segítségével a fényt visszaverhetjük a modellre. Ez lehet egy egyszerű fehér kartonlap, vagy akár egy világos színű esernyő, netán direkt erre a célra gyártott, összehajtható darab. Használhatjuk fehér, ezüst vagy arany színben is, attól függően, hogy milyen hőmérsékletű fényt szeretnék a modellre visszatükrözni. Az aranyszínű derítő sokkal melegebb, míg a fehér derítőlapok hidegebb fénnyel derítik be modellünket. Jobb eredményt érhetünk el, ha több derítőt használunk, melyek több irányból verik vissza a fényt, így az összes kellemetlen árnyékot eltüntethetjük velük.</p>
    <h2>Vaku használata</h2>
    <p>Ha nincs elég fény, nem leszünk jobban kisegítve ha kompakt gépünkön nagyon megemeljük az érzékenységet, ugyanis ez jelenleg még erős képzajjal jár, ami tönkreteszi a felvételt, ráadásul a csúnya, zavaró árnyékokat sem tudjuk eltüntetni úgy. Igyekezzünk alacsony érzékenységgel fotózni, és használjuk derítésre a vakut, akár nappal is. DSLR géppel már bátran fotózhatunk magas érzékenységgel is, a képzaj nem lesz különösebben zavaró. A vaku használatakor körültekintően járjunk el. Sajnos az egyszerű kompakt gépek beépített vakuját használva ne reménykedjünk különösebben művészi portréfotókban, hiszen ezek a vakuk csak egy irányból, direktben képesek bevilágítani a modellt, ami erős és csúnya árnyékokat képez. A beépített vakut maximum fényes nappal, a szabadban használhatjuk eredményesen, kis derítésre.</p>
    <p>Akiknek lehetőségük van rendszervakut használni, sokkal jobban kézben tarthatják a világítást. A legfontosabb szempont, hogy kerüljük a direktbe vakuzást. A legtöbb vaku dönthető, nem ritkán forgatható fejű. Az egyik legkézenfekvőbb indirekt világítás, ha egy fehér falra (pl. plafonra) vakuzunk, és az onnan visszaverődő fénnyel világítjuk meg a modellt. Így nem lesz mögötte ronda árnyék, és kellemesen lágy, egyenletes fényben fog pompázni. Természetesen nem csak a plafonra vakuzhatunk fel, próbálkozhatunk oldalról érkező derítéssel is, vagy helyezhetünk a vaku elé is különböző lágyítókat, fényterelőket.</p>
    <${TwoEnlargeableFigures} thumbnailFileName1="0620_portre9_200.jpg" fullSizeFileName1="0620_portre9.jpg" altText1="Portré 9" caption1="A gép beépített vakujával világítottuk meg a modellt" thumbnailFileName2="0620_portre10_200.jpg" fullSizeFileName2="0620_portre10.jpg" altText2="Portré 10" caption2="Fentről érkező derítéssel, illetve derítőlappal eltüntethetjük vagy lágyíthatjuk a zavaró árnyékokat" />
    <p>Ha nincs lehetőség visszaverődő fénnyel deríteni, használhatunk derítőlapot, más néven bouncert. Ennek lényege, hogy a vaku nem direktben a modellt világítja meg, hanem fénye a ráerősített, világos színű lapról verődik a modellre. Így a vaku fénye jóval lágyabb, gyengébb lesz, akárcsak a modell árnyéka. A legegyszerűbb bouncert egy világos színű, merev papírlap és egy gumi segítségével készíthetjük, hiszen sokszor arcpirító összegeket képesek az üzletekben elkérni egy apró műanyag lapért. Aki komolyabb hatást szeretne, az vásárolhat szándékosan erre gyártott derítőlapokat, amiknek már a formájuk és hatásuk is jóval komolyabb, de a barkácsoló kedvűek rengeteg mindent elkészíthetnek kartondobozok, alufólia, ragasztószalag és egyéb, otthon megtalálható dolgok felhasználásával.</p>
    <p>Ne felejtsük el, hogy a vakuk fényereje a legtöbb esetben szabályozható, sokszor teljesen manuális működésre is állítható. Ha nappal használjuk derítésre a vakut, valószínűleg jobban járunk ha gyengítünk a fényerején (-0,75 és -1,75 között), hiszen nem teljes sötétségben szeretnénk a témát bevilágítani, csupán apró fénykorrekcióra használjuk. Továbbá kezeljük fenntartásokkal az automatika által mért értékeket is, hiszen ahhoz hogy a modellünk helyesen legyen exponálva, valószínűleg expozíció-korrekciót kell végezzünk, hogy a háttér is és a modell is helyesen legyen kiexponálva.</p>
</div>`;
}