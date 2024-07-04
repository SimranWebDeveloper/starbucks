
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

let value=localStorage.getItem('langMode')

if (value=="undefined" || value==null) {
    value='en'
}
i18n
    .use(initReactI18next)
    .use(Backend)
    .init(
        {

            lng: value,
            // resources
        }
    )

    //lng -only this language selected
    // fallbackLng - did not find any language and selected this language
    




    export default i18n;

