export const getContent = (content, lang) => {
    return content[lang];
}

export const getOffset = () => {
    if (typeof window.scrollY != 'undefined') {
        return window.scrollY;
    }
    if (typeof window.pageYOffset != 'undefined') {
        return window.pageYOffset;
    }

    let doc = document.documentElement;
    doc = doc.clientHeight ? doc : document.body;
    return doc.scrollTop;
}

export const getViewportHeight = () => {
    var a = document.documentElement.clientHeight, b = window.innerHeight;
    return a < b ? b : a;
}

export const findElemPosY = (elem) => {
    let curtop = 0;
    if (elem.offsetParent) {
        while (elem.offsetParent) {
            curtop += elem.offsetTop;
            elem = elem.offsetParent;
        }
    }
    else if (elem.y)
        curtop += elem.y;
    return curtop;
}