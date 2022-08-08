import { StaticImageData } from 'next/image';
import { test1 } from 'public/test';

export type cardDataType = {
  id: number;
  imageUrl: StaticImageData | string;
  title: string;
  subTitle: string;
  createdAt: string;
};

export const cardData = [
  // {
  //   id: 2,
  //   imageUrl: test1,
  //   title: 'title2',
  //   subTitle: 'sub title2',
  //   createdAt: '2022-06-18',
  // },
  // {
  //   id: 3,
  //   imageUrl: test1,
  //   title: 'title3',
  //   subTitle: 'sub title3',
  //   createdAt: '2022-06-18',
  // },
  // {
  //   id: 4,
  //   imageUrl: test1,
  //   title: 'title4',
  //   subTitle: 'sub title4',
  //   createdAt: '2022-06-18',
  // },
  // {
  //   id: 5,
  //   imageUrl: test1,
  //   title: 'title5',
  //   subTitle: 'sub title5',
  //   createdAt: '2022-06-18',
  // },
  // {
  //   id: 6,
  //   imageUrl: test1,
  //   title: 'title6',
  //   subTitle: 'sub title6',
  //   createdAt: '2022-06-18',
  // },
  // {
  //   id: 7,
  //   imageUrl: test1,
  //   title: 'title7',
  //   subTitle: 'sub title7',
  //   createdAt: '2022-06-18',
  // },
  // {
  //   id: 8,
  //   imageUrl: test1,
  //   title: 'title8',
  //   subTitle: 'sub title8',
  //   createdAt: '2022-06-18',
  // },
  // {
  //   id: 9,
  //   imageUrl: test1,
  //   title: 'title9',
  //   subTitle: 'sub title9',
  //   createdAt: '2022-06-18',
  // },
  // {
  //   id: 10,
  //   imageUrl: test1,
  //   title: 'title10',
  //   subTitle: 'sub title10',
  //   createdAt: '2022-06-18',
  // },
  {
    id: 1,
    imageUrl: test1,
    title: 'Font and Button',
    subTitle: '폰트와 버튼 일관성있게 사용하기',
    createdAt: '2022-06-18',
  },
];
