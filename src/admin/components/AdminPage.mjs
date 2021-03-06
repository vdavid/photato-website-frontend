import React, {useEffect, useState} from '../../web_modules/react.js';
import {useI18n} from '../../i18n/components/I18nProvider.mjs';
import {NavLink} from '../../web_modules/react-router-dom.js';
import {config} from '../../config.mjs';
import {useAuth0} from '../../auth/components/Auth0Provider.mjs';
import {convertObjectToQueryString} from '../../website/httpHelper.mjs';

export default function AdminPage() {
    const {getTokenSilently} = useAuth0();
    const {__} = useI18n();
    const [version, setVersion] = useState('Loading from server...');

    useEffect(() => {
        document.title = 'Admin' + ' - Photato admin';
    }, []);

    useEffect(() => {
        async function getVersionFromServer() {
            setVersion(await _getVersionFromServer());
        }

        getVersionFromServer().then(() => {});
    }, []);

    return <>
        <p><NavLink to="/admin/photos">{__('Photos')}</NavLink></p>
        <p><NavLink to="/admin/messages">{__('Messages')}</NavLink></p>
        <p><NavLink to="/admin/sitemap-generator">{__('Sitemap generator')}</NavLink></p>
        <p>Back end version: {version}</p>
    </>;

    async function _getVersionFromServer() {
        const url = config.backendApi.version.url
        const accessToken = await getTokenSilently();
        try {
            const response = await fetch(url + '?' + convertObjectToQueryString({environment: config.backendApi.environment}), {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                headers: {
                    Authorization: 'Bearer ' + accessToken
                },
            });
            return (await response.text()) || 'Bad response from server.';
        } catch(error) {
            return `Unknown, could not reach back end. (URL: ${url})`;
        }
    }
}