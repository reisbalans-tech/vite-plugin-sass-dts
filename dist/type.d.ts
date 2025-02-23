import { Options } from 'prettier';
import { ResolvedConfig } from 'vite';
export declare type FinalConfig = ResolvedConfig & {
    prettierOptions: Options;
};
export declare type AdditionalData = string | ((source: string, filename: string) => string | Promise<string>);
export declare type PluginOption = {
    enabledMode?: ('development' | 'production')[];
    global?: {
        generate: boolean;
        outFile: string;
    };
};
export declare type CSS = {
    localStyle: string;
    globalStyle?: string;
};
export declare type CSSJSObj = Record<string, string | Record<string, string> | Record<string, Record<string, string>>[]>;
