import { Feed } from 'feed';
import articleData from '../constants/article-data';
import fs from 'fs';
import path from 'path';

export default function Rss() {
  return null;
}

export async function getServerSideProps({ res }) {
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

  articleData.forEach((post) => {
    feed.addItem({
      title: post.title1,
      id: 'https://www.salon5120.com/',
      link: 'https://www.salon5120.com/',
      description: post.content1,
      date: new Date(post.date),
    });
  });

  const xml = feed.rss2();

  const filePath = path.join(process.cwd(), 'rss.xml');
  fs.writeFileSync(filePath, xml);

  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}
