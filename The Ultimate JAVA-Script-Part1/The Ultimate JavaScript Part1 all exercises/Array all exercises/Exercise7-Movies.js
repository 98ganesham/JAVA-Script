const movies =[
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2019, rating: 5},
    {title: 'c', year: 2020, rating: 7.5}
];
const titlemovie = movies.filter(m=> m.year === 2018 && m.rating >=4)
    .sort((a,b) => a.rating-b.rating)
    .reverse().map(m=> m.title);
    console.log(titlemovie);