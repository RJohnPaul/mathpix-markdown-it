import { FootnoteItem, FootnoteMeta } from "./interfaces";
export declare const addFootnoteToListForFootnote: (state: any, token: any, tokens: any, envText: any, numbered: any, isBlock?: boolean) => void;
export declare const addFootnoteToListForFootnotetext: (state: any, token: any, tokens: any, envText: any, numbered: any, isBlock?: boolean) => void;
export declare const getFootnoteItem: (env: any, meta: FootnoteMeta) => FootnoteItem;