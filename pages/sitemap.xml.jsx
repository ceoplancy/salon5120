import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  const posts = await fetcher('/posts');
  const categories = await fetcher('/categories');
  const lastmod = new Date().toISOString();

  const defaultFields = [
    {
      loc: process.env.URL,
      changefreq: 'daily',
      priority: '0.8',
      lastmod,
    },
    {
      loc: `${process.env.URL}/example`,
      changefreq: 'daily',
      priority: '0.8',
      lastmod,
    },
  ];

  const categoryFields = categories.map((category) => ({
    loc: `${process.env.URL}/${category}`,
    changefreq: 'daily',
    priority: '0.9',
    lastmod,
  }));

  const boardFields = boards.map((board) => ({
    loc: `${process.env.URL}/${board.category}/${board.id}`,
    changefreq: 'daily',
    priority: '1.0',
    lastmod,
  }));

  const fields = [...defaultFields, ...categoryFields, ...boardFields];

  return getServerSideSitemap(ctx, fields);
};

export default () => {
  return;
};
