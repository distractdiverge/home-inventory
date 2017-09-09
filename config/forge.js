module.exports = {
    make_targets: {
        win32: [
            'squirrel',
            'zip'
        ],
        darwin: [
            'dmg'
        ],
        linux: [
            'deb',
            'rpm',
            'flatpak'
        ]
    },
    electronPackagerConfig: {},
    electronWinstallerConfi: {
        name: 'Home Inventory'
    },
    electronInstallerDebian: {},
    electronInstallerRedhat: {},
    github_repository: {
        owner: 'alexlapinski',
        name: 'home-inventory'
    },
    windowsStoreConfig: {
        packageName: 'Home Inventory'
    }
};
