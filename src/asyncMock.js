const categories = [
    {
        id: 1,
        name: "Flowers",
    },
    {
        id: 2,
        name: "Bouquets",
    },
    {
        id: 3,
        name: "Plants",
    },
]

const flowers = [
    {
        id: 1,
        category: 1,
        name: "Rose",
        price: 100,
        description: "One single rose",
        stock: 10,
    },
    {
        id: 2,
        category: 1,
        name: "Sunflower",
        price: 60,
        description: "One single sunflower",
        stock: 20,
    },
    {
        id: 3,
        category: 1,
        name: "Tulip",
        price: 75,
        description: "One single tulip",
        stock: 15,
    },
    {
        id: 4,
        category: 1,
        name: "Lily",
        price: 75,
        description: "One single lily",
        stock: 0,
    },
    {
        id: 5,
        category: 1,
        name: "Daisy",
        price: 50,
        description: "One single daisy",
        stock: 25,
    },
    {
        id: 6,
        category: 1,
        name: "Orchid",
        price: 150,
        description: "One single orchid",
        stock: 0,
    },
    {
        id: 7,
        category: 1,
        name: "Carnation",
        price: 70,
        description: "One single carnation",
        stock: 18,
    },
    {
        id: 8,
        category: 1,
        name: "Peony",
        price: 90,
        description: "One single peony",
        stock: 12,
    },
    {
        id: 9,
        category: 1,
        name: "Lavender",
        price: 65,
        description: "One single lavender",
        stock: 30,
    },
    {
        id: 10,
        category: 1,
        name: "Chrysanthemum",
        price: 80,
        description: "One single chrysanthemum",
        stock: 22,
    },
    {
        id: 11,
        category: 1,
        name: "Gardenia",
        price: 110,
        description: "One single gardenia",
        stock: 0,
    },
    {
        id: 12,
        category: 1,
        name: "Marigold",
        price: 55,
        description: "One single marigold",
        stock: 17,
    }
];

const bouquets = [
    {
        id: 13,
        category: 2,
        name: "Romantic Rose Bouquet",
        price: 350,
        description: "A bouquet of 12 red roses, baby's breath, and green fillers",
        stock: 5,
    },
    {
        id: 14,
        category: 2,
        name: "Sunflower Delight",
        price: 300,
        description: "A bouquet of 6 sunflowers, white daisies, and eucalyptus",
        stock: 8,
    },
    {
        id: 15,
        category: 2,
        name: "Tulip Dreams",
        price: 320,
        description: "A bouquet of 10 tulips, pink carnations, and greenery",
        stock: 10,
    },
    {
        id: 16,
        category: 2,
        name: "Lily Elegance",
        price: 400,
        description: "A bouquet of 5 lilies, white roses, and green foliage",
        stock: 3,
    },
    {
        id: 17,
        category: 2,
        name: "Daisy Fresh",
        price: 250,
        description: "A bouquet of 15 daisies, yellow roses, and fern leaves",
        stock: 12,
    },
    {
        id: 18,
        category: 2,
        name: "Orchid Fantasy",
        price: 600,
        description: "A bouquet of 3 orchids, purple tulips, and greenery",
        stock: 0,
    },
    {
        id: 19,
        category: 2,
        name: "Carnation Charm",
        price: 280,
        description: "A bouquet of 10 carnations, white lilies, and green fillers",
        stock: 7,
    },
    {
        id: 20,
        category: 2,
        name: "Peony Perfection",
        price: 400,
        description: "A bouquet of 8 pink peonies, lavender, and green foliage",
        stock: 5,
    },
    {
        id: 21,
        category: 2,
        name: "Lavender Bliss",
        price: 300,
        description: "A bouquet of 10 lavender stems, white roses, and eucalyptus",
        stock: 15,
    },
    {
        id: 22,
        category: 2,
        name: "Chrysanthemum Cascade",
        price: 350,
        description: "A bouquet of 8 chrysanthemums, pink roses, and green fillers",
        stock: 6,
    },
];

const plants = [
    {
        id: 23,
        category: 3,
        name: "Snake Plant",
        price: 150,
        description: "A hardy indoor plant with tall, stiff leaves",
        stock: 10,
    },
    {
        id: 24,
        category: 3,
        name: "Peace Lily",
        price: 120,
        description: "An easy-to-care-for plant with beautiful white blooms",
        stock: 15,
    },
    {
        id: 25,
        category: 3,
        name: "Spider Plant",
        price: 90,
        description: "A popular indoor plant with arching green and white leaves",
        stock: 20,
    },
    {
        id: 26,
        category: 3,
        name: "Aloe Vera",
        price: 100,
        description: "A succulent plant known for its healing properties",
        stock: 12,
    },
    {
        id: 27,
        category: 3,
        name: "Pothos",
        price: 80,
        description: "A low-maintenance plant with trailing vines",
        stock: 25,
    },
    {
        id: 28,
        category: 3,
        name: "Fiddle Leaf Fig",
        price: 250,
        description: "A popular houseplant with large, glossy leaves",
        stock: 8,
    },
    {
        id: 29,
        category: 3,
        name: "ZZ Plant",
        price: 200,
        description: "A tough plant with thick, waxy leaves",
        stock: 10,
    },
];

const allItems = [...flowers, ...bouquets, ...plants];

const itemMap = new Map([
    ["1", flowers],
    ["2", bouquets],
    ["3", plants],
]);

export const getAllItems = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(allItems);
        }, 2000);
    });
}

export const getItem = async (itemId) => {
    return new Promise((resolve) => {
        const item = allItems.find(item => item.id.toString() === itemId);
        setTimeout(() => {
            resolve(item);
        }, 1000);
    });
}

export const getItems = async (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(itemMap.get(categoryId));
        }, 1500);
    });
}

export const getCategories = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories);
        }, 500);
    });
}
