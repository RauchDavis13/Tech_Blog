const { Post } = require('../models');

const postdata = [
  {
    title: 'All about the dude',
    content: 'Describes all about dudeness',
    // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'The dude abides',
    content: 'Tales of the dude living in the world',
    // post_url: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'To be the dude',
    content: "The dude's guide to life",
    // post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Dude art',
    content: 'Examples of art by the dude',
    // post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'In quest of the dude',
    content: 'Searchers of dudeness',
    // post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'Favorites of the dude',
    content: 'Talks about favorite foods, drinks and hobbies of the dude',
    // post_url: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'Dudette',
    content: 'Life of the dudette',
    // post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Dudette style',
    content: 'Fashions of the dudette',
    // post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Dudette musings',
    content: 'How the dudette navigates life',
    // post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Dude and dudette tech',
    content: 'Apps of the dude and dudette',
    // post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
