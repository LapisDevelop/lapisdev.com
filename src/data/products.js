export const discordUrl = 'https://discord.gg/MvWQKV3ht8';

export const categoryConfigs = {
    calagopus: {
        id: 'calagopus',
        name: 'Calagopus Extension',
        label: 'Calagopus Extensions',
        badgeClass: 'border border-cyan-500/30 text-cyan-400 bg-cyan-950/30',
        cardBorderClass: 'border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]',
        accentBorderClass: 'border-l-4 border-l-cyan-500',
        buttonClass: 'hover:bg-cyan-600 hover:border-cyan-500',
        pillActiveClass: 'bg-cyan-600 text-white shadow-sm',
        accentColor: '#06b6d4'
    },
    minecraft: {
        id: 'minecraft',
        name: 'Minecraft Plugin',
        label: 'Minecraft Plugins',
        badgeClass: 'border border-emerald-500/30 text-emerald-400 bg-emerald-950/30',
        cardBorderClass: 'border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.12)]',
        accentBorderClass: 'border-l-4 border-l-emerald-500',
        buttonClass: 'hover:bg-emerald-600 hover:border-emerald-500',
        pillActiveClass: 'bg-emerald-600 text-white shadow-sm',
        accentColor: '#10b981'
    },
    discord: {
        id: 'discord',
        name: 'Discord & Tools',
        label: 'Discord & Tools',
        badgeClass: 'border border-indigo-500/30 text-indigo-400 bg-indigo-950/30',
        cardBorderClass: 'border-white/[0.08] hover:border-indigo-500/40 hover:shadow-[0_0_24px_rgba(99,102,241,0.12)]',
        accentBorderClass: 'border-l-4 border-l-indigo-500',
        buttonClass: 'hover:bg-indigo-600 hover:border-indigo-500',
        pillActiveClass: 'bg-indigo-600 text-white shadow-sm',
        accentColor: '#6366f1'
    }
};

export function getCategoryConfig(categoryId) {
    return (
        categoryConfigs[categoryId] || {
            id: categoryId || 'all',
            name: 'Software Utility',
            label: 'All Software',
            badgeClass: 'border border-blue-500/30 text-blue-400 bg-blue-950/30',
            cardBorderClass: 'border-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.12)]',
            accentBorderClass: 'border-l-4 border-l-blue-500',
            buttonClass: 'hover:bg-blue-600 hover:border-blue-500',
            pillActiveClass: 'bg-blue-600 text-white shadow-sm',
            accentColor: '#3b82f6'
        }
    );
}

export const filterCategories = [
    { id: 'featured', label: 'Featured Software' },
    { id: 'calagopus', label: 'Calagopus Extensions' },
    { id: 'minecraft', label: 'Minecraft Plugins' },
    { id: 'tools', label: 'Discord & Tools' }
];

export const products = [
    {
        id: 'calagopus-installer',
        name: 'Calagopus Installer',
        category: 'calagopus',
        categoryName: 'Calagopus Tool',
        shortDesc: 'The easiest way to install and manage the Calagopus panel to your host network.',
        fullDesc: 'Calagopus Installer is a lightweight build script that automates the installation and configuration of the Calagopus panel on your server, ensuring a smooth setup process and optimal performance.',
        tags: ['Calagopus', 'Extension Management', 'Plugin'],
        price: 'Free',
        version: 'Calagopus 1.6 - latest',
        storeUrl: 'https://github.com/LapisDevelop/CalagopusInstaller',
        featured: true,
        inDevelopment: true,
        specs: [
            'Automates the installation of the Calagopus panel on your server',
            'Configures necessary dependencies and settings for optimal performance',
            'Ensures compatibility with various server environments and configurations'
        ],
    },
    {
        id: 'lapis-panel',
        name: 'Lapis Panel',
        category: 'minecraft',
        categoryName: 'Minecraft Plugin & Web Panel',
        version: '26.1 - latest',
        shortDesc: 'The ultimate panel plugin for server admin, moderation and configuration - access from any device.',
        fullDesc: 'Lapis Panel is a web-based control panel for Minecraft servers, allowing administrators to manage server settings, monitor performance, and perform moderation tasks directly from their browser - with a one-click install.',
        tags: ['Web Panel', 'Admin Tools', 'Moderation', 'Plugin'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/LapisPanel',
        featured: true,
        inDevelopment: true,
        specs: [
            'Web-based control panel accessible from any device',
            'One-click installation and configuration for server admins',
            'Real-time monitoring of server performance and player activity',
            'Integrated moderation tools for managing players and chat',
            'Supports multiple Minecraft server instances from a single panel',
            'Plugin installer, file manager, highly-specialised tools - what more could you need?',
            'Everything in one place: no more juggling between multiple plugins and web panels.',
            'Features no other panel has: stop using 3rd party web panels for any in-game features, Lapis Panel is fully integrated with your server and plugin ecosystem'
        ],
    },
    {
        id: 'profile-migration',
        name: 'Lapis Profile Migration',
        category: 'tools',
        categoryName: 'Minecraft Tool',
        version: 'all versions',
        shortDesc: 'Switch between online-mode and offline-mode without player data loss.',
        fullDesc: 'Lapis Profile Migration allows server operators to seamlessly migrate player data between their online-mode and offline-mode UUID without losing inventory, stats, or permissions.',
        tags: ['Offline Mode', 'Player Data', 'Migration'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/ProfileMigration',
        featured: true,
        inDevelopment: true,
        specs: [
            'Preserves player inventory, stats, and permissions during migration',
            'Supports both online-mode to offline-mode and offline-mode to online-mode migrations',
            'Command-line interface and GUI tool for easy operation',
            'Compatible with all major Minecraft server software',
            'Switch between cracked and premium without the reset'
        ],
    },
    {
        id: 'spectate',
        name: 'Lapis Spectate',
        category: 'minecraft',
        categoryName: 'Minecraft Plugin',
        version: '26.1 - latest',
        shortDesc: 'Spectate players and return to your original location with a single command.',
        fullDesc: 'Lapis Spectate allows server staff to spectate players and return to their original location with a single command, without needing gamemode permissions.',
        tags: ['Spectate', 'Staff Tools', 'Moderation'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Spectate',
        featured: false,
        inDevelopment: true,
        specs: [
            'Spectate players without needing gamemode permissions',
            'Return to your original location with a single command',
            'Ideal for staff moderation and monitoring player activity',
            'Lightweight and easy to install on any Minecraft server'
        ],
    },
    {
        id: 'protect',
        name: 'Lapis Protect',
        category: 'minecraft',
        categoryName: 'Minecraft Plugin',
        version: '26.1 - latest',
        shortDesc: 'Free and fast protection plugin for Paper servers, featuring powerful SQL-based lookups & rollbacks.',
        fullDesc: 'Lapis Protect is a free and fast protection plugin for Paper servers, providing powerful SQL-based lookups and rollbacks for any player action or event, ensuring your server remains secure and manageable.',
        tags: ['Protection', 'SQL Lookups', 'Rollbacks', 'Paper'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Protect',
        featured: true,
        inDevelopment: true,
        specs: [
            'SQL-based lookups for player actions and events',
            'Rollback capabilities for any changes made by players',
            'Lightweight and optimized for performance on Paper servers',
            'Easy to configure and manage through in-game commands or config files'
        ],
    },
    {
        id: 'craftgui',
        name: 'CraftGUI',
        category: 'tools',
        categoryName: 'Minecraft Plugin Developer Library',
        version: '26.1 - latest',
        shortDesc: 'Easy-to-use GUI library for Minecraft plugin developers.',
        fullDesc: 'CraftGUI is a lightweight and easy-to-use GUI library for Minecraft plugin developers, allowing them to create custom graphical interfaces for their plugins with minimal effort.',
        tags: ['GUI Library', 'Plugin Development', 'Minecraft'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/CraftGUI',
        featured: true,
        inDevelopment: true,
        specs: [
            'Lightweight and easy to integrate into any Minecraft plugin',
            'Provides a simple API for creating custom GUIs',
            'Supports various GUI elements such as buttons, menus, inventories and configuration screens',
            'Compatible with all major Paper-based Minecraft server software',
            'Helps developers create a more engaging user experience for their plugins'
        ],
    },
    {
        id: 'vanish',
        name: 'Lapis Vanish',
        category: 'minecraft',
        categoryName: 'Minecraft Plugin',
        version: '26.1 - latest',
        shortDesc: 'Simple yet effective vanish plugin for server moderation.',
        fullDesc: 'Lapis Vanish gives staff members complete invisibility and stealth capabilities to monitor player behavior and enforce server rules effectively without detection.',
        tags: ['Vanish', 'Moderation', 'Staff Tools'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Vanish',
        featured: false,
        inDevelopment: true,
        specs: [
            'Complete visibility toggling for server staff members',
            'Hides staff from tab list, player count, and join/leave messages',
            'Prevents accidental interaction with chests, pressure plates, and pickups while vanished',
            'Seamless integration with server moderation workflows'
        ],
    },
    {
        id: 'mobgrief',
        name: 'Lapis MobGrief',
        category: 'minecraft',
        categoryName: 'Minecraft Plugin',
        version: '26.1 - latest',
        shortDesc: 'Fine-tune mob griefing and control mob behavior on your server.',
        fullDesc: 'Lapis MobGrief is a plugin that allows server administrators to prevent mob griefing and control mob behavior, for example, disabling ghast and enderman griefing but still allowing creeper explosions to destroy blocks. It provides granular control over mob interactions that the /gamerule mob_griefing command simply can\'t do.',
        tags: ['Mob Griefing', 'Server Control', 'Minecraft'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/MobGrief',
        featured: false,
        inDevelopment: true,
        specs: [
            'Granular control over mob griefing behavior',
            'Disable specific mob griefing while allowing others',
            'Easy to configure through in-game commands or config files',
            'Enhances server management and player experience by preventing unwanted mob damage'
        ],
    },
    {
        id: 'market',
        name: 'Lapis Market',
        category: 'minecraft',
        categoryName: 'Minecraft Plugin',
        version: '26.1 - latest',
        shortDesc: 'Build a better, player-run item economy for your server with stock tracking and vanilla integration.',
        fullDesc: 'Lapis Market is a plugin that allows server administrators to create a player-run item economy, complete with stock tracking and integration with vanilla Minecraft containers (a shop is just a chest!). Players can buy and sell items, and the plugin tracks stock levels and prices, creating a dynamic in-game economy.',
        tags: ['Economy', 'Player Market', 'Stock Tracking', 'Vanilla Integration'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Market',
        featured: true,
        inDevelopment: true,
        specs: [
            'Create a player-run item economy with a physical currency system, like diamonds or emeralds',
            'Stock tracking for items in player-run shops',
            'Integration with vanilla Minecraft containers for easy shop setup',
            '/market command for players to browse and buy items from shops - intelligently filtered by distance, stock and price',
            'Easy to configure and manage in-game',
            'Easy for players to use without needing to read complex documentation or commands'
        ],
    },
    {
        id: 'tasks',
        name: 'Lapis Tasks',
        category: 'tools',
        categoryName: 'Minecraft Plugin Developer Library',
        version: '26.1 - latest',
        shortDesc: 'Developer dependency to simplify sync, async, delayed and repeating task management.',
        fullDesc: 'Lapis Tasks simplifies concurrency management for Minecraft plugin developers by providing fluid wrappers around synchronous, asynchronous, delayed, and repeating task scheduling.',
        tags: ['Task Management', 'Async', 'Plugin Development'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Tasks',
        featured: false,
        inDevelopment: true,
        specs: [
            'Simplifies sync and async scheduler execution',
            'Easy builder syntax for delayed and repeating tasks',
            'Thread-safe execution and lifecycle management',
            'Reduces boilerplate code in plugin development'
        ],
    },
    {
        id: 'ban',
        name: 'Lapis Ban',
        category: 'minecraft',
        categoryName: 'Minecraft Plugin',
        version: '26.1 - latest',
        shortDesc: 'Ban plugin with ban history statistics, default reasons, developer API support, and more.',
        fullDesc: 'Lapis Ban provides complete ban management with detailed punishment histories, customizable default reasons, and developer API hooks for custom integrations.',
        tags: ['Ban', 'Moderation', 'Staff Tools', 'Statistics'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Ban',
        featured: false,
        inDevelopment: true,
        specs: [
            'Tracks player ban histories and detailed moderation stats',
            'Pre-configurable default ban reasons and durations',
            'Developer API support for external integration',
            'Clean in-game lookup commands for server staff'
        ],
    },
    {
        id: 'kick',
        name: 'Lapis Kick',
        category: 'minecraft',
        categoryName: 'Minecraft Plugin',
        version: '26.1 - latest',
        shortDesc: 'Kick plugin with kick history statistics, default reasons, developer API support, and more.',
        fullDesc: 'Lapis Kick streamlines staff action logging with kick statistics tracking, default kick reasons, and developer API integration.',
        tags: ['Kick', 'Moderation', 'Staff Tools', 'Statistics'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Kick',
        featured: false,
        inDevelopment: true,
        specs: [
            'Comprehensive kick logging and history tracking',
            'Configurable default reasons for quick enforcement',
            'Full developer API for custom event handling',
            'Lightweight overhead with instant enforcement'
        ],
    },
    {
        id: 'database',
        name: 'Lapis Database',
        category: 'tools',
        categoryName: 'Java / Minecraft Developer Library',
        version: 'all versions',
        shortDesc: 'The simplest ORM for managing databases in Java.',
        fullDesc: 'Lapis Database is a lightweight and easy-to-use Object-Relational Mapping (ORM) library for Java developers, particularly those working on Minecraft plugins. It simplifies database interactions by allowing developers to work with Java objects instead of SQL queries, so you can focus on what really matters: features / gameplay.',
        tags: ['ORM', 'Database Management', 'Java', 'Minecraft'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Database',
        featured: false,
        inDevelopment: true,
        specs: [
            'Lightweight and easy to integrate into any Java project',
            'Simplifies database interactions by using Java objects instead of SQL queries',
            'Supports multiple database types, including MySQL, PostgreSQL, and SQLite',
            'Ideal for Minecraft plugin developers looking for a simple database solution',
            'Helps developers focus on features and gameplay rather than complex database management'
        ],
    },
    {
        id: 'maintenance',
        name: 'Lapis Maintenance',
        category: 'minecraft',
        categoryName: 'Minecraft Plugin',
        version: '26.1 - latest',
        shortDesc: 'Stop players from joining your server while you\'re working on it.',
        fullDesc: 'Lapis Maintenance allows administrators to toggle server maintenance mode, restricting player access while maintaining staff bypass privileges and custom kick messages.',
        tags: ['Maintenance', 'Server Admin', 'Access Control'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Maintenance',
        featured: false,
        inDevelopment: true,
        specs: [
            'Toggles maintenance state instantly with an in-game command or config',
            'Customizable kick screen message and server list MOTD override',
            'Bypass permissions for staff and designated testers',
            'Prevents player logins safely during updates or maintenance windows'
        ],
    },
    {
        id: 'leaderboard',
        name: 'Lapis Leaderboard',
        category: 'minecraft',
        categoryName: 'Minecraft Plugin',
        version: '26.1 - latest',
        shortDesc: 'Track and display player statistics and top rankings across your server.',
        fullDesc: 'Lapis Leaderboard tracks player performance and statistics, delivering customizable rankings and dynamic displays for competitive server communities.',
        tags: ['Leaderboard', 'Statistics', 'Rankings'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Leaderboard',
        featured: false,
        inDevelopment: true,
        specs: [
            'Tracks and calculates top player stats automatically',
            'Customizable display options and rankings',
            'Efficient query engine with minimal performance impact',
            'Flexible configuration for varied stats tracking'
        ],
    },
    {
        id: 'argument',
        name: 'Lapis Argument',
        category: 'tools',
        categoryName: 'Minecraft Plugin Developer Library',
        version: '26.1 - latest',
        shortDesc: 'Argument parsing and command handling library for Minecraft plugins.',
        fullDesc: 'Lapis Argument is an internal developer utility and library designed to streamline argument parsing, validation, and execution flow for custom Minecraft plugin commands.',
        tags: ['Command Parsing', 'Plugin Development', 'Java'],
        price: 'Free',
        storeUrl: 'https://github.com/LapisDevelop/Argument',
        featured: false,
        inDevelopment: true,
        specs: [
            'Simplifies command argument parsing and validation',
            'Type-safe input processing for Java plugin development',
            'Reduces boilerplate code in command handlers',
            'Lightweight developer dependency'
        ],
    }
];

export const teamMembers = [
    {
        name: 'Dylan',
        role: 'Lead Backend Engineer & Algorithm Architect',
        specialty: 'With 8 years of experience, I specialise in low-level code, including networking, logic and database management.',
        handle: '@dylancode',
        link: 'https://dylancode.dev',
        shortRole: 'Founder',
    },
    {
        name: 'Finlay',
        role: 'Lead Plugin Developer & Frontend Engineer',
        specialty: 'Specialising in plugin engineering, frontend development and user experience for Minecraft panels and plugins.',
        handle: '@bozbozza',
        link: 'https://github.com/bozbozza',
        shortRole: 'Founder',
    },
    {
        name: 'Zorav',
        role: 'Head of Panel Frontend & Discord Bot Development',
        specialty: 'Specialising in Discord bot development, frontent panel extension development with React, and UI/UX design.',
        handle: '@zorvedafolf',
        link: 'https://github.com/zorvedafolf',
        shortRole: 'Developer',
    }
];

export const testimonials = [
    // Fake testimonials, these are AI slop - not real and not actually shown on the site. It's to show the layout of the testimonials section - THE COMPONENT MUST NOT BE REFERENCED IN PRODUCTION.
    {
        quote: 'Running LapisCore on our 250-player SMP stabilized our TPS firmly at 20.0 during peak weekend siege battles. Memory consumption dropped by 3.2GB compared to our previous framework.',
        author: 'DreadNet Gaming',
        network: 'Survival Network • 800+ Peak CCU',
        metric: '20.0 TPS Fixed'
    },
    {
        quote: 'The Calagopus Dynamic Realmer saved our studio months of custom network plumbing. Asynchronous dimension instancing handles our multi-server dungeon raids without a single tick hitch.',
        author: 'Valoria MMORPG',
        network: 'Custom MMORPG Realm • 1,200 CCU',
        metric: '80ms Dungeon Spin-up'
    },
    {
        quote: 'Sentinel Bot Suite replaced three disjointed Discord bots and gives our moderation team instant live logs, console execution, and audit telemetry directly in our staff channels.',
        author: 'BlockHaven Network',
        network: 'Minigames & SMP Network • 450 CCU',
        metric: '99.99% Uptime'
    }
];

export const studioStats = [
    { value: '15+', label: 'LAPIS PROJECTS BUILT' },
    { value: '8+', label: 'YEARS PROGRAMMING EXPERIENCE' },
    { value: '<10m', label: 'AVERAGE SUPPORT RESPONSE TIME' }
];

export const studioPrinciples = [
    {
        title: 'Lag Spikes - Eliminated',
        description: 'Zero lag spikes, ever. Our software is hyper-optimized for performance.'
    },
    {
        title: 'Unmatched Reliability',
        description: 'Battle-tested with high-traffic. Proven to handle loads without failure.'
    },
    {
        title: 'Engineered For The Long Run',
        description: 'Robust architecture built to survive platform updates & scale seamlessly.'
    }
];
