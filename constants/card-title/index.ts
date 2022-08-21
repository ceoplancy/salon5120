import { StaticImageData } from 'next/image';
import { permission } from 'public/image';
import { filterCategory, fontButton, formik, reactQuery } from 'public/svg';

export type cardDataType = {
  id: number;
  type: string;
  imageUrl: StaticImageData | string;
  title: string;
  createdAt: string;
  url: string;
};

export const cardData = [
  {
    id: 5,
    type: 'tech',
    imageUrl: permission,
    title: '사용자 권한에 따른 페이지 및 기능 접근 제한하기',
    createdAt: '2022-08-21',
    url: 'https://rainy-reaper-d5b.notion.site/aa92b97ad2ea46438681bc61ade42d98',
  },
  {
    id: 4,
    type: 'tech',
    imageUrl: filterCategory,
    title: '필터와 카테고리 기능 구현하기',
    createdAt: '2022-08-19',
    url: 'https://rainy-reaper-d5b.notion.site/Filter-and-Category-96acbd70dce946ea966c069b365dd0f4',
  },
  {
    id: 3,
    type: 'tech',
    imageUrl: reactQuery,
    title: 'react-query를 사용하여 서버 상태 관리하기',
    createdAt: '2022-08-17',
    url: 'https://rainy-reaper-d5b.notion.site/react-query-4f1dad849ded4463bbad1f2ed80c2e98',
  },
  {
    id: 2,
    type: 'tech',
    imageUrl: formik,
    title: 'formik으로 form 상태 관리하기(feat. react-select)',
    createdAt: '2022-08-15',
    url: 'https://rainy-reaper-d5b.notion.site/formik-form-data-feat-react-select-412bfb2df33d4ebdbe50400a837f835b',
  },
  {
    id: 1,
    type: 'tech',
    imageUrl: fontButton,
    title: '폰트와 버튼 일관성있게 사용하기',
    createdAt: '2022-08-14',
    url: 'https://rainy-reaper-d5b.notion.site/572c8b79c8df4c888e768e5cb84d2981',
  },
];
