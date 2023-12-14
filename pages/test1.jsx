import { Feed } from 'feed';
import fs from 'fs';
import path from 'path';

export default function Rss() {
  return null;
}

export async function getServerSideProps({ res }) {
  const feed = new Feed({
    title: 'Your RSS Feed Title',
    description: 'Description of Your RSS Feed',
    id: 'Feed ID',
    link: 'Link to Your Website',
    language: 'en', // Language of the feed
    // Add more options as needed
  });

  // Add items to the feed
  feed.addItem({
    title: 'Item Title 1',
    id: 'Unique ID for Item 1',
    link: 'Link to Item 1',
    description: 'Description of Item 1',
    // Add more item options as needed
  });

  // Add more items as needed

  // Generate XML feed
  const xml = feed.rss2();

  // Write the XML content to rss.xml file
  const filePath = path.join(process.cwd(), 'rss.xml');
  fs.writeFileSync(filePath, xml);

  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}
