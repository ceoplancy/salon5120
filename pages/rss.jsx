import { Feed } from 'feed';
import articleData from '../constants/article-data';

const generateRssFeed = async (posts) => {
  const feed = new Feed({
    title: '문화살롱 5120',
    description: '문화살롱 5120',
    id: 'https://www.salon5120.com/',
    link: 'https://www.salon5120.com/',
    language: 'en',
    image: '/logo.png',
    favicon: 'favicon/favicon.ico',
    author: {
      name: 'salon5120',
      email: 'ceo@plan-cy.com',
      link: 'https://www.salon5120.com/about',
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title1,
      id: post.url,
      link: post.url,
      description: post.description,
      date: new Date(post.date),
    });
  });

  return feed.rss2();
};

const Rss = () => {};

export async function getServerSideProps({ res }) {
  const rss = await generateRssFeed(articleData);

  res.setHeader('Content-Type', 'text/xml');
  res.write(rss);
  res.end();

  return { props: {} };
}

export default Rss;
