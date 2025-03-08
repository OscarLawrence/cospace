import { promises as fs } from 'fs';
import path from 'path';
import Translate from '@google-cloud/translate';
import en from './i18n/en'; // Import the English language file
import fr from './i18n/fr'; // Import the French language file
import de from './i18n/de'; // Import the German language file
import es from './i18n/es';

const languages = { 'es': es, 'fr': fr, 'de': de }; // Add other language codes as needed



const translate = new Translate.v2.Translate({ projectId: 'cospace-452918' });

async function translateText(text: string, to: string): Promise<string> {
    try {
        const [translation] = await translate.translate(text, to);
        return translation;
    } catch (error) {
        console.error(`Error translating text: ${text} to ${to}`, error);
        return text; // Fallback to original text if translation fails
    }
}

async function translateObject(obj: any, langCode: string, translatedObj: any = {}): Promise<any> {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            translatedObj[key] = await translateObject(obj[key], langCode, translatedObj[key] || {});
        } else if (!translatedObj[key]) {
            translatedObj[key] = await translateText(obj[key], langCode);
        }
    }
    return translatedObj;
}

async function main() {
    for (const [langCode, langObj] of Object.entries(languages)) {

        const translatedObj = await translateObject(en, langCode, langObj);

        await fs.writeFile(`./i18n/${langCode}.ts`, `export default ${JSON.stringify(translatedObj, null, 2)};`);
    }
}

main().catch(console.error);