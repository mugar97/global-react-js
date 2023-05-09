import { IMovie } from './interfaces';

export const testMovie: IMovie = {
  id: '123',
  name: 'Test Title',
  imageUrl: 'http://test.url',
  releaseYear: '2015',
  genres: ['genre 1', 'genre 2'],
  description: 'Test description',
  length: '123',
  raiting: 5.2,
};

export const PULP_FICTION: IMovie = {
  ...testMovie,
  imageUrl:
    'https://s3-alpha-sig.figma.com/img/89fa/22b0/9af0f226591250d0c0dc45e952d8c0a6?Expires=1684713600&Signature=qWkvcB1AEXJbDZlf5rqAwIV2zmaM9~BRY2ULgt4mqKrj~HdoRrONHrPehApkighm-BE1MzqGDmEFgOBfCKhJI1djBn-y8QU5IC6dS0fHUQoOP1GDo4fTH~xY70BrKTWWKmekd6LUOe8-EubalZjNUQ2jB7FnJ9Gi5R~3UzELSZXN5FK~tC26kSv4HTsCc00hRGe3BaFKbHlUqjQP-CN1O2hDI7uPr8OGvseFtZKNWDXt~5yqz9nPfzhknBGu-dz4cXa6z2Au5rw0Kl5KVnRdqHrbxs9UhU4kJFE1NpANnrXknJJh5GEYoastMJ3~G0nywomc7H5hhGq5psdUL~xL1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  name: 'Pulp Fiction',
  releaseYear: '1994',
  genres: ['Action & Adventure'],
  raiting: 8.9,
  length: '2h 34min',
  description:
    'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
};
export const BOHEMIAN_RHAPSODY: IMovie = {
  ...testMovie,
  imageUrl:
    'https://s3-alpha-sig.figma.com/img/aa4f/8cf6/f7fefb9582bc23c7847baf1f5f863fb0?Expires=1684713600&Signature=nMcKvkhQzE5aWveQUsBkrHeNNeEIFAtqOCtbgYByznwfEQ0Kymbu-fjQ-UgEekvydbHkFD-PBaeskYRSbMdrNGJY29ve5HZluvZdhueOmpM8-uFBnPhoyzm01xVQ9YKrU1Ua3e172XOd565O4G48ov5oFy-BbE8M4k88h8uwRCkh8ITgnMAz940TeU9vGcAeNBt555DF-WhMrgjNmZPj~hT-miQyxZfpmU-l4zAHmvQbQoMTKYBZ-yJzs3Or3F1CHIOA09pT8iLID2DpYAvahowbLl~zG~tmDSkElRR~yiOned32Ow0BJdOtmLvufoMqfnGvOf2j7KweqyGWtN93WA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  name: 'Bohemian Rhapsody',
  releaseYear: '2018',
  genres: ['Drama', 'Biography', 'Music'],
  raiting: 7.9,
  length: '2h 14min',
  description:
    'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.—Twentieth Century Fox',
};
