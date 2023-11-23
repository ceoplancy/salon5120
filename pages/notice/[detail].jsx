import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import articleData from '../../constants/article-data';
import { useRouter } from 'next/router';
import Comp10 from '../../components/notice/10';
import Comp14 from '../../components/notice/14';
import Comp15 from '../../components/notice/15';
import Comp16 from '../../components/notice/16';
import Comp17 from '../../components/notice/17';

const NoticeDetail = ({ query }) => {
  const router = useRouter();
  const [makeData, setMakeData] = useState({});

  const makeAricleData = (articleData, id) => {
    return [...articleData].filter((x) => x.id === id);
  };

  useEffect(() => {
    const confirmArticle = makeAricleData(articleData, Number(query.detail));
    if (confirmArticle[0]?.type !== 'type3') {
      setMakeData([]);
      return;
    }

    setMakeData(makeAricleData(articleData, Number(query.detail)));
  }, []);

  return (
    <>
      {makeData.length === 0 ? (
        <NoArticle>존재하지 않는 게시물입니다.</NoArticle>
      ) : (
        <div style={{ width: '100%' }}>
          {Number(router.query.detail) === 10 && <Comp10 />}
          {Number(router.query.detail) === 14 && <Comp14 />}
          {Number(router.query.detail) === 15 && <Comp15 />}
          {Number(router.query.detail) === 16 && <Comp16 />}
          {Number(router.query.detail) === 17 && <Comp17 />}
        </div>
      )}
    </>
  );
};

export default NoticeDetail;

const NoArticle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  margin-top: 10rem;
`;

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
}
