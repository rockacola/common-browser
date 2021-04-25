export declare type UserAgentSoftware = string;
export declare type UserAgentOs = 'Android' | 'Linux' | 'Windows' | 'iOS' | 'macOS';
export declare type UserAgentEngine = 'Blink' | 'EdgeHTML' | 'Gecko' | 'Trident' | 'WebKit';
export interface UserAgentDataItem {
    rank: number;
    ua: string;
    software: UserAgentSoftware;
    os: UserAgentOs;
    engine: UserAgentEngine;
}
