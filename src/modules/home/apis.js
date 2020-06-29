export const fetchCategory = ({token}) => {
  if (token) {
    return [
      {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspirations'],
        count: 147,
        image: require('@assets/icons/plants.png'),
      },
      {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'shop'],
        count: 16,
        image: require('@assets/icons/seeds.png'),
      },
      {
        id: 'flowers',
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        count: 68,
        image: require('@assets/icons/flowers.png'),
      },
      {
        id: 'sprayers',
        name: 'Sprayers',
        tags: ['products', 'shop'],
        count: 17,
        image: require('@assets/icons/sprayers.png'),
      },
      {
        id: 'pots',
        name: 'Pots',
        tags: ['products', 'shop'],
        count: 47,
        image: require('@assets/icons/pots.png'),
      },
      {
        id: 'fertilizers',
        name: 'fertilizers',
        tags: ['products', 'shop'],
        count: 47,
        image: require('@assets/icons/fertilizers.png'),
      },
    ];
  }
  throw 'error';
};

export const fetchImages = ({token}) => {
  if (token) {
    return [
      require('@assets/images/explore_1.png'),
      require('@assets/images/explore_2.png'),
      require('@assets/images/explore_3.png'),
      require('@assets/images/explore_4.png'),
      require('@assets/images/explore_5.png'),
      require('@assets/images/explore_6.png'),
    ];
  }

  throw 'error';
};
