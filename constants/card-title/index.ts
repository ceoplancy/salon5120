import { StaticImageData } from 'next/image';
import { hooks, kakaoMap, nextjs, permission, responsive, table, upload } from 'public/image';
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
    id: 11,
    type: 'tech',
    imageUrl: hooks,
    title: '2022년도에 만든 hooks와 functions 친구들',
    createdAt: '2022-08-28',
    url: 'https://rainy-reaper-d5b.notion.site/2022-hooks-functions-8d355e8dfe8c4e63916b46230f933de0',
  },
  {
    id: 10,
    type: 'tech',
    imageUrl: upload,
    title: '이미지 리사이징과 업로드 순서 보장하기',
    createdAt: '2022-08-27',
    url: 'https://rainy-reaper-d5b.notion.site/11bc6a72d4f441ffbfdb091e910624fb',
  },
  {
    id: 9,
    type: 'tech',
    imageUrl: table,
    title: 'react-table을 활용하여 다재다능한 테이블 만들기',
    createdAt: '2022-08-25',
    url: 'https://rainy-reaper-d5b.notion.site/react-table-23596c0ec8c9480a93987ff69040818e',
  },
  {
    id: 8,
    type: 'tech',
    imageUrl: responsive,
    title: '반응형 레이아웃 (feat. flex box, grid, rem)',
    createdAt: '2022-08-24',
    url: 'https://rainy-reaper-d5b.notion.site/feat-rem-cacdeacb782d4d97bf77a96d65765b7f',
  },
  {
    id: 7,
    type: 'tech',
    imageUrl: nextjs,
    title: 'Next.js 도입기 (feat.server side rendering)',
    createdAt: '2022-08-23',
    url: 'https://rainy-reaper-d5b.notion.site/Next-js-3c4277bbe5f24e798bb03dcebce3b240',
  },
  {
    id: 6,
    type: 'tech',
    imageUrl: kakaoMap,
    title: '카카오 맵 API를 활용한 지도 컴포넌트 만들기',
    createdAt: '2022-08-22',
    url: 'https://rainy-reaper-d5b.notion.site/API-26cad80686df41d889be27eeb13ca8df',
  },
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
