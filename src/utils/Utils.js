import {pl, en} from './Content';

export const getContent = (lang, page, text) => {
    let content;

    switch(lang){
        case "en": 
            content = en[page][text];
            break;
        
        default:
            content = pl[page][text];
    }

    return content;
}