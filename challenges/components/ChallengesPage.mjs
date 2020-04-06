import {createElement} from '../../web_modules/react.js';
import ChallengeList from './ChallengeList.mjs';
import {useI18n} from '../../i18n/components/I18nProvider.mjs';

export default function ChallengesPage() {
    const {__} = useI18n();

    return [
        createElement('h1', {}, __('Challenges')),
        createElement(ChallengeList)
    ];
}