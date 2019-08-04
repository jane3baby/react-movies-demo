export const genres = [
  { _id: '6ye435ccc346w3335', name: 'Comedy' },
  { _id: '6yerfef44seew3335', name: 'Action' },
  { _id: '6yerfefccccwessseew3335', name: 'Thriller' },
  { _id: '6yerfef42234seew3335', name: 'drama' }
]

export function getGenres() {
  return genres.filter(g => g)
}