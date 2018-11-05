/*!
 *  request-utils
 *  Copyright (c) 2018 tkpphr
 *  Released under the MIT License.
 */

export async function get(url: string, responseType: "arraybuffer"|"blob"|"json"|"document"|"text"): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            }
        };
        xhr.onerror = (_event) => {
            reject(xhr.statusText);
        };
        xhr.open("GET", url);
        xhr.responseType = responseType;
        xhr.send();
    });
}

export async function getArrayBuffer(url: string) {
    return get(url, "arraybuffer");
}

export async function getBlob(url: string) {
    return get(url, "blob");
}

export async function getDocument(url: string) {
    return get(url, "document");
}

export async function getJson(url: string) {
    return get(url, "json");
}

export async function getText(url: string) {
    return get(url, "text");
}
