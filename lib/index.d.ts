/*!
 *  request-utils
 *  Copyright (c) 2018 tkpphr
 *  Released under the MIT License.
 */
export declare function get(url: string, responseType: "arraybuffer" | "blob" | "json" | "document" | "text"): Promise<any>;
export declare function getArrayBuffer(url: string): Promise<any>;
export declare function getBlob(url: string): Promise<any>;
export declare function getDocument(url: string): Promise<any>;
export declare function getJson(url: string): Promise<any>;
export declare function getText(url: string): Promise<any>;
