export interface SocialTemplate {
    name: string;
    width: number;
    height: number;
    platform: string;
}

export const templates: SocialTemplate[] = [
    { name: "Instagram Post", width: 1080, height: 1080, platform: "Instagram" },
    { name: "Instagram Story", width: 1080, height: 1920, platform: "Instagram" },
    { name: "Facebook Post", width: 1200, height: 630, platform: "Facebook" },
    { name: "Facebook Cover", width: 820, height: 312, platform: "Facebook" },
    { name: "Twitter Post", width: 1600, height: 900, platform: "Twitter" },
    { name: "Twitter Header", width: 1500, height: 500, platform: "Twitter" },
    { name: "LinkedIn Post", width: 1200, height: 627, platform: "LinkedIn" },
    { name: "LinkedIn Cover", width: 1128, height: 191, platform: "LinkedIn" },
    { name: "YouTube Thumbnail", width: 1280, height: 720, platform: "YouTube" },
    { name: "TikTok Video", width: 1080, height: 1920, platform: "TikTok" },
    { name: "Pinterest Pin", width: 1000, height: 1500, platform: "Pinterest" },
    { name: "Twitch Banner", width: 1200, height: 480, platform: "Twitch" },
    { name: "Snapchat Story", width: 1080, height: 1920, platform: "Snapchat" },
];
