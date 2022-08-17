import { StaticImageData } from 'next/image';
import { fontAndButton, formik, reactQuery, ready, test1 } from 'public/test';

export type cardDataType = {
  id: number;
  type: string;
  imageUrl: StaticImageData | string;
  title: string;
  createdAt: string;
  url: string;
  active: boolean;
};

export const cardData = [
  {
    id: 9,
    type: 'retrospect',
    imageUrl: ready,
    title: '회고글은 준비중이랍니다.',
    subTitle: '',
    createdAt: '',
    url: '',
    active: false,
  },
  // {
  //   id: 8,
  //   type: 'tech',
  //   imageUrl: test1,
  //   title: 'Font and Button',
  //   createdAt: '2022-06-18',
  //   url: 'https://rainy-reaper-d5b.notion.site/572c8b79c8df4c888e768e5cb84d2981',
  // },
  // {
  //   id: 7,
  //   type: 'tech',
  //   imageUrl: test1,
  //   title: 'Font and Button',
  //   createdAt: '2022-06-18',
  //   url: 'https://rainy-reaper-d5b.notion.site/572c8b79c8df4c888e768e5cb84d2981',
  // },
  // {
  //   id: 6,
  //   type: 'tech',
  //   imageUrl: test1,
  //   title: 'Font and Button',
  //   createdAt: '2022-06-18',
  //   url: 'https://rainy-reaper-d5b.notion.site/572c8b79c8df4c888e768e5cb84d2981',
  // },
  // {
  //   id: 5,
  //   type: 'tech',
  //   imageUrl: test1,
  //   title: 'Font and Button',
  //   createdAt: '2022-06-18',
  //   url: 'https://rainy-reaper-d5b.notion.site/572c8b79c8df4c888e768e5cb84d2981',
  // },
  // {
  //   id: 4,
  //   type: 'tech',
  //   imageUrl: test1,
  //   title: 'Font and Button',
  //   createdAt: '2022-06-18',
  //   url: 'https://rainy-reaper-d5b.notion.site/572c8b79c8df4c888e768e5cb84d2981',
  // },
  {
    id: 3,
    type: 'tech',
    imageUrl: reactQuery,
    title: 'react-query를 사용하여 서버 상태 관리하기',
    createdAt: '2022-08-17',
    url: 'https://rainy-reaper-d5b.notion.site/react-query-4f1dad849ded4463bbad1f2ed80c2e98',
    active: true,
  },
  {
    id: 2,
    type: 'tech',
    imageUrl: formik,
    title: 'formik으로 form 상태 관리하기(feat. react-select)',
    createdAt: '2022-08-15',
    url: 'https://rainy-reaper-d5b.notion.site/formik-form-data-feat-react-select-412bfb2df33d4ebdbe50400a837f835b',
    active: true,
  },
  {
    id: 1,
    type: 'tech',
    imageUrl: fontAndButton,
    title: '폰트와 버튼 일관성있게 사용하기',
    createdAt: '2022-08-14',
    url: 'https://rainy-reaper-d5b.notion.site/572c8b79c8df4c888e768e5cb84d2981',
    active: true,
  },
];
