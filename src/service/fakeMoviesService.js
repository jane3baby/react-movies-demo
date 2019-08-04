// import * as genresAPI from './fakeGenreService';

const movies = [
  {
    _id: '5FdcCdew4345336366',
    title: 'Terminator',
    genre: {
      _id: '6ye435ccc346w3335', name: 'Comedy'
    },
    numberInStock: 6,
    dailyRentalRate: 2.6,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: false
  }, {
    _id: '5FdcCdew435336366',
    title: 'Get Out',
    genre: {
      _id: '6yerfef44seew3335', name: 'Action'
    },
    numberInStock: 4,
    dailyRentalRate: 9.6,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: false
  }, {
    _id: '5ydcCdew43453wefsf2366',
    title: 'Trip to Italy',
    genre: {
      _id: '6yerfefccccwessseew3335', name: 'Thriller'
    },
    numberInStock: 9,
    dailyRentalRate: 4.6,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: true
  }, {
    _id: '51FdcC1dew4w245336236',
    title: 'Airplane',
    genre: {
      _id: '6ye435ccc346w3335', name: 'Comedy'
    },
    numberInStock: 8,
    dailyRentalRate: 2.3,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: false
  }, {
    _id: '5FdcCdew43453322166',
    title: 'Die Hard',
    genre: {
      _id: '6yerfef44seew3335', name: 'Action'
    },
    numberInStock: 7,
    dailyRentalRate: 2.9,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: true
  }, {
    _id: '51FdcCdew4345332266',
    title: 'Green Book',
    genre: {
      _id: '6yerfef42234seew3335', name: 'drama'
    },
    numberInStock: 8,
    dailyRentalRate: 2.9,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: false
  }, {
    _id: '5FdcCdew41345332266',
    title: 'The Piano Tuner',
    genre: {
      _id: '6yerfef42234seew3335', name: 'drama'
    },
    numberInStock: 8,
    dailyRentalRate: 2.9,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: true
  }, {
    _id: '5FdcCd1ew114345332266',
    title: 'The Wandering Earth',
    genre: {
      _id: '6yerfef42234seew3335', name: 'drama'
    },
    numberInStock: 8,
    dailyRentalRate: 2.9,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: false
  }, {
    _id: '5FdcCd11ew4345332266',
    title: 'Spirited Away',
    genre: {
      _id: '6ye435ccc346w3335', name: 'Comedy'
    },
    numberInStock: 8,
    dailyRentalRate: 2.9,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: false
  }, {
    _id: '5FdcCd11ew41345332266',
    title: 'Spirited Away1',
    genre: {
      _id: '6ye435ccc346w3335', name: 'Comedy'
    },
    numberInStock: 8,
    dailyRentalRate: 2.9,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: true
  }, {
    _id: '5ydcC11dew43453wefsf2366',
    title: 'Trip to Italy',
    genre: {
      _id: '6yerfefccccwessseew3335', name: 'Thriller'
    },
    numberInStock: 9,
    dailyRentalRate: 4.6,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: false
  }, {
    _id: '5FdcCd1ew114312266',
    title: 'The Wandering1 Earth',
    genre: {
      _id: '6yerfef42234seew3335', name: 'drama'
    },
    numberInStock: 8,
    dailyRentalRate: 2.9,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: false
  }, {
    _id: '5F1dcCd1ew114312266',
    title: 'The Wandering1 Earth',
    genre: {
      _id: '6yerfef42234seew3335', name: 'drama'
    },
    numberInStock: 8,
    dailyRentalRate: 2.9,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: false
  }, {
    _id: '5Fdc22d1ew114312266',
    title: 'The Wandering1 Earth',
    genre: {
      _id: '6yerfef42234seew3335', name: 'drama'
    },
    numberInStock: 8,
    dailyRentalRate: 2.9,
    publishDate: '2018-01-04T18:09:28.089Z',
    love: false
  }
]


export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(ele => ele._id === id);
}


