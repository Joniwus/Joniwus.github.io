export const types = {
    male: 'male',
    female: 'female',
    litter: 'litter'
};

export const cats = [
    {
        type: types.male,
        name: 'Abby',
        info: [
            {
                title: 'Geburtsdatum',
                value: '28.05.2018'
            },
            {
                title: 'Fellfarbe',
                value: 'red silver cl tabby'
            }
        ],
        image: {
            folder: 'Abbey',
            folderCount: 8,
            files: []
        },
        description: 'Eltern: Belminis Stormrider, Fjellbekks Arizona'
    },
    {
        type: types.female,
        name: 'Casey vom Ahorngarten',
        info: [
            {
                title: 'Geburtsdatum',
                value: '02.04.2017'
            },
            {
                title: 'Fellfarbe',
                value: 'blue tabby mc white'
            },
            {
                title: 'Stammbaum',
                value: '<a href=https://www.pawpeds.com/db/?a=p&id=1440868&g=4&p=nfo&o=elastic> Stammbaum </a>'
            }
        ],
        image: {
            folder: 'Casey',
            folderCount: 12,
            files: []
        },
        description: 'Eltern: Benji vom Quellmoor, Askari vom Ahorngarten.<br/> Pkdef: n/n GSD4 IV: frei <br/> HCM Schall: 26.10.18 und 22.04.21 bei Dr. Tobias Hannover.<br/> HCM normal'
    },
    {
        type: types.female,
        name: 'Weserfjord Cherry',
        info: [
            {
                title: 'Geburtsdatum',
                value: '30.07.2019'
            },
            {
                title: 'Fellfarbe',
                value: 'amber tabby cl white'
            },
            {
                title: 'Stammbaum',
                value: '<a https://www.pawpeds.com/db/?a=p&id=1577447&g=4&p=nfo&o=elastic> Stammbaum </a>'
            }
        ],
        image: {
            folder: 'Cherry',
            folderCount: 7,
            files: []
        },
        description: 'Eltern: Keld av Friheten, Casey vom Ahorngarten. Pkdef: n/n GSD4 IV: frei über die Eltern HCM Schall: Juli 2021 bei Dr. Tobias Hannover. HCM normal'
    },
    {
        type: types.female,
        name: 'Fiona vom Ahorngarten',
        info: [
            {
                title: 'Geburtsdatum',
                value: '10.03.2021'
            },
            {
                title: 'Fellfarbe',
                value: 'black silver tortie mc white'
            },
            {
                title: 'Stammbaum',
                value: '<a https://www.pawpeds.com/db/?a=p&ids=3:1440870;2:1473580&g=4&p=nfo&o=elastic> Stammbaum </a>'
            }
        ],
        image: {
            folder: 'Fiona',
            folderCount: 7,
            files: []
        },
        description: 'Eltern: Urmel von den Wölfen, Askari vom Ahorngarten. Pkdef: n/n GSD4 IV: frei über die Eltern HCM Schall:folgt im entsprechendem Alter'
    },
    {
        type: types.male,
        name: 'Keld AV Friheten',
        info: [
            {
                title: 'Geburtsdatum',
                value: '22.06.2018'
            },
            {
                title: 'Fellfarbe',
                value: 'amber tabby cl white'
            },
            {
                title: 'Stammbaum',
                value: '<a https://www.pawpeds.com/db/?a=p&ids=3:1456149;2:1473580&g=4&p=nfo&o=elastic> Stammbaum </a>'
            }
        ],
        image: {
            folder: 'Keld',
            folderCount: 9,
            files: []
        },
        description: ''
    },
    {
        type: types.male,
        name: 'Weserfjord Bärje(Schlappi)',
        info: [
            {
                title: 'Geburtsdatum',
                value: '14.07.2017'
            },
            {
                title: 'Fellfarbe',
                value: 'blue silver cl tabby'
            },
            {
                title: 'Stammbaum',
                value: '<a https://www.pawpeds.com/db/?a=p&ids=3:1456149;2:1473580&g=4&p=nfo&o=elastic> Stammbaum </a>'
            }
        ],
        image: {
            folder: 'Barje',
            folderCount: 12,
            files: []
        },
        description: 'Eltern: Ups vom Wunderstern, Fjelbekks Arizona'
    },
    {
        type: types.male,
        name: 'Fjellbekks Arizona',
        info: [
            {
                title: 'Geburtsdatum',
                value: '25.07.2014'
            },
            {
                title: 'Fellfarbe',
                value: 'brown cl torbie'
            },
            {
                title: 'Stammbaum',
                value: '<a https://www.pawpeds.com/db/?a=p&ids=3:1440870;2:1473580&g=4&p=nfo&o=elastic> Stammbaum </a>'
            }
        ],
        image: {
            folder: 'Arizona',
            folderCount: 9,
            files: []
        },
        description: 'Eltern: Beliminis Zappa, Fjellbekks Lucy'
    },
    {
        type: types.litter,
        name: 'Weserfjords Elaine',
        info: [
            {
                title: 'Geburtsdatum',
                value: 'Platzhalter'
            },
            {
                title: 'Fellfarbe',
                value: 'Platzhalter'
            },
            {
                title: 'Stammbaum',
                value: '<a>Platzhalter </a>'
            }
        ],
        image: {
            folder: 'Elaine',
            folderCount: 6,
            files: []
        },
        description: 'Eltern: Weserfjord Cherry, '
    },
    {
        type: types.litter,
        name: 'Weserfjords Emil',
        info: [
            {
                title: 'Geburtsdatum',
                value: 'Platzhalter'
            },
            {
                title: 'Fellfarbe',
                value: 'Platzhalter'
            },
            {
                title: 'Stammbaum',
                value: '<Platzhalter </a>'
            }
        ],
        image: {
            folder: 'Emil',
            folderCount: 6,
            files: []
        },
        description: 'Eltern: Weserfjord Cherry, '
    },
    {
        type: types.litter,
        name: 'Weserfjords Erwin',
        info: [
            {
                title: 'Geburtsdatum',
                value: 'Platzhalter'
            },
            {
                title: 'Fellfarbe',
                value: 'Platzhalter'
            },
            {
                title: 'Stammbaum',
                value: '<Platzhalter </a>'
            }
        ],
        image: {
            folder: 'Erwin',
            folderCount: 7,
            files: []
        },
        description: 'Eltern: Weserfjord Cherry, '
    }
];
