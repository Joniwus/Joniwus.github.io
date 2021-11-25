export const types = {
    male: 'male',
    female: 'female',
    kitten: 'kitten',
    litter: 'litter'
};

export const cats = [
    {
        type: types.litter,
        name: 'Abby',
        info: [
            {
                title: 'Geburtsdatum',
                value: '28.05.2018'
            },
            {
                title: 'Fellfarbe',
                value: 'amber tabby cl white'
            },

        ],
        image: {
            folder: 'Abbey',
            folderCount: 8,
            files: []
        },
        description: 'Den Vaddah finden sie <a href="https://google.de">hier</a>'
    }
     {
            type: types.females,
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

            ],
            image: {
                folder: 'Casey',
                folderCount: 12,
                files: []
            },
            description: 'Eltern: Benji vom Quellmoor, Askari vom Ahorngarten <a href="https://google.de">hier</a>'
        }
];
