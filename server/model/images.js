let images = [
  {
    id: 1,
    url: 'images/KT2020-00.jpg',
    title: 'Vorstellung',
  },
  {
    id: 2,
    url: 'images/KT2020-2.jpg',
    title: 'Vorstellung',
  },
  {
    id: 3,
    url: 'images/KT2020-4.jpg',
    title: 'Präsentation',
  },
  {
    id: 4,
    url: 'images/KT2020-12.jpg',
    title: 'Präsentation',
  },
  {
    id: 5,
    url: 'images/KT2020-15.jpg',
    title: 'Vorstellung',
  },
  {
    id: 6,
    url: 'images/KT2020-1.jpg',
    title: 'Vorstellung',
  },

  {
    id: 7,
    url: 'images/KT2020-7.jpg',
    title: 'Präsentation',
  },

  {
    id: 8,
    url: 'images/KT2020-14.jpg',
    title: 'Vorstellung',
  },
  {
    id: 9,
    url: 'images/KT2020-5.jpg',
    title: 'Vorstellung',
  },
];

function getImages() {
  function compare(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }
  images.sort(compare);
  return images;
}

module.exports = {
  getImages,
};
