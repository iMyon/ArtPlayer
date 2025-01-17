import type Artplayer from 'artplayer';

export = artplayerPluginHlsQuality;
export as namespace artplayerPluginHlsQuality;

declare const artplayerPluginHlsQuality: (option: {
    control?: boolean;
    setting?: boolean;
    title?: string;
    auto?: string;
}) => (art: Artplayer) => {
    name: 'artplayerPluginHlsQuality';
};
