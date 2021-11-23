export const types = {
    male: 'male',
    female: 'female',
    kitten: 'kitten',
    litter: 'litter'
};

export const cats = [
    {
        type: types.female,
        name: 'Abbey',
        info: [
            {
                title: 'Geburtsdatum',
                value: '01.01.1997'
            },
            {
                title: 'Fell',
                value: 'Grau'
            },
            {
                title: 'Augenfarbe',
                value: 'Grün'
            }
        ],
        image: {
            folder: 'Abbey',
            folderCount: 8,
            files: []
        },
        description: 'Den Vaddah finden sie <a href="https://google.de">hier</a>'
    }
];
