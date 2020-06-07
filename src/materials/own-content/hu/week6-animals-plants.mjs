import React from '../../../web_modules/react.js';
import ExternalLink from '../../components/ExternalLink.mjs';

// noinspection JSUnusedGlobalSymbols (This file is loaded dynamically.)
/**
 * @returns {ArticleMetadata}
 */
export function getMetadata() {
    // noinspection SpellCheckingInspection (It's in Hungarian.)
    return {
        slug: 'allat-noveny-fotozas-tippek',
        title: 'Állat- és növényfotózás tippek',
        author: 'Photato',
        publishDate: new Date('2020-06-07'),
        publisherName: 'Photato',
    };
}

// noinspection JSUnusedGlobalSymbols (This file is loaded dynamically.)
/**
 * @returns {React.ReactElement}
 */
export default function Article() {
    // noinspection SpellCheckingInspection (It's in Hungarian.)
    return <>
        <p>Tehát állatok és növények. A feladatot értelmezd, ahogyan szeretnéd: fotózhatsz csemegeuborkától hangyákon át elefántfókákig bármit. 😊</p>

        <p>Tippek, cikkek:</p>
        <ul>
            <li>Ha szép, tiszta az idő, valószínűleg kültéri fotókkal jársz a legjobban. Ha borús az idő, próbálkozz állatok helyett növényekkel.</li>
            <li>Ha a kiskutyád/kiscicád/kismalacod fotóznád: <ExternalLink href="https://www.haziallat.hu/allati-trendi/technika/allatok-fotozasa-trukkok/1897/">haziallat.hu</ExternalLink>
            </li>
            <li>Ha az állatkertbe mennél: <ExternalLink href="https://www.origo.hu/techbazis/20080426-fotozas-az-allatkertben.html">origo</ExternalLink>
            </li>
            <li>Ha növényeket fotóznál: <ExternalLink href="https://fotosuli.blog.hu/2017/01/25/unja_a_telet_keszuljon_fel_a_tavaszra_i_resz">fotosuli.blog.hu</ExternalLink>
            </li>
            <li>Egy profi növényfotós egy napja: <ExternalLink href="https://vimeo.com/90952372">Vimeo</ExternalLink>
            </li>
        </ul>

        <p>Inspiráció: <ExternalLink href="https://hu.pinterest.com/search/pins/?q=animal%20photography">Pinterest: állatok</ExternalLink>
            | <ExternalLink href="https://hu.pinterest.com/search/pins/?q=pet%20photography">Pinterest: háziállatok</ExternalLink>
            | <ExternalLink href="https://hu.pinterest.com/search/pins/?q=plant%20photography">Pinterest: növények</ExternalLink>
            | <ExternalLink href="https://mobilephotoawards.com/nature-wildlife-winner-honorable-mentions-7th-annual-mpa/">Mobile Photo Awards 2017</ExternalLink>
            | <ExternalLink href="https://www.nationalgeographic.com/photography/best-of-2017/best-pictures-animals-wildlife-underwater/#/17-best-galapagos-nature-animals-marine-iguanas.jpg">National Geographic 2017</ExternalLink>
        </p>

        <!-- TODO: Add link here! (focus) -->
    </>;
}