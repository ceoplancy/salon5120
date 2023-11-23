import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Comp15 = () => {
  return (
    <Container>
      <TitleContainer>
        <ImageWrapper>
          <Image
            src={`/image/type3-17/1.jpg`}
            alt={`type3-17/1`}
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageWrapper>
      </TitleContainer>

      <div>
        <PreTag fontSize={'3.2rem'} fontWeight={700} lineHeight={1.4}>
          {`문화살롱 5120 THE SALON 〈호장품〉 안내`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="6rem 0 0 0">
          {`나의 물건에 내가 좋아하는 방식으로 이름을 짓고 불러봅니다. 내 물건에 담긴 이야기를 나누고 기록하면서, 평범한 물건들이 아닌 귀중품 애호가가 되는 과정을 함께합니다. 일상 속의 익숙했던 물건들이 소중하게 느껴지는 즐거운 경험을 함께하고, 자신의 취향을 구체적으로 만들고 설명할 수 있습니다. 박물관의 소장품 등록 절차에 따라 나의 애장품 정보를 카드에 직접 작성해보며 유물등록에 대한 이해를 기반으로 하는 프로그램입니다.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="3rem 0 0 0">
          {`•  내가 가진 물건들의 매력을 찾아볼 수 있습니다. 
•  나의 취향과 선택을 설명할 문장을 만들 수 있습니다. 
•  박물관의 유물등록 과정을 개괄적으로 이해할 수 있습니다. 
•  박물관에 있는 레이블 정보를 풍부하게 해석할 수 있습니다.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="6rem 0 0 0">
          {`날짜 | 23년 11월 11일, 11월 25일, 12월 9일, 12월 23일 (총 4회, 토요일) * 중복 신청 가능 
시간 | 토요일 오후 3시-5시 (매회 2시간)
장소 | 문화살롱 5120 (서울 노원구 공릉로51길 20 지하1층) ※ 주차장이 없습니다. 대중교통 이용을 부탁드립니다.
참여비용 | *무료*`}
        </PreTag>

        <div style={{ display: 'flex' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
            {`신청방법 | `}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} pointer="pointer" textDecoration="underline" onClick={() => window.open('https://bitly.ws/XZ4R', '_blank')}>
            {`https://bitly.ws/XZ4R`}
          </PreTag>
        </div>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="3rem 0 0 0">
          {`* 본 프로그램 특성상 신청자 분들의 참여가 중요합니다. 노쇼가 있을 경우 원활한 진행이 어렵습니다. 일정을 꼼꼼히 확인 후 신청 부탁드립니다.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="6rem 0 0 0">
          {`내용`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`1. 인사ㅣ프로그램 소개와 자기 소개 
2. '어떤 호장품들'ㅣ 파랑~이 소개하는 물건 이야기 
3. 호장품 발굴ㅣ 내가 가져온 물건 소개하기 
4. 호장품 연구ㅣ물건에 대한 이야기 나누기 
5. 호장품 등록ㅣ대화를 기록, 정리하기`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="3rem 0 0 0">
          {`준비물`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`매회 주제에 맞춰 나에게 의미있는 물건 3점을 고릅니다. 선택한 물건을 다른 사람들에게 설명할 수 있도록 사진을 준비합니다. 물건을 고른 기준이 무엇인지 고민한 뒤 모임에 참여합니다.`}
        </PreTag>

        <div style={{ display: 'flex', gap: '1rem', margin: '3rem 0 0 0' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`1회 "기념사진"`}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
            {`(11.11 토) `}
          </PreTag>
        </div>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`휴대전화 앨범에 담긴 사진, 혹은 사진앨범에 꽂혀있는 사진도 좋습니다. 나는 무엇 때문에 사진을 찍었는지 생각하면서 재미있는 사진, 의미있는 사진을 골라주세요.`}
        </PreTag>

        <div style={{ display: 'flex', gap: '1rem', margin: '3rem 0 0 0' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`2회 "옷"`}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
            {`(11.25 토) `}
          </PreTag>
        </div>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`나에게 의미있는 옷 3점을 사진으로 찍어서 설명할 수 있도록 준비합니다. 몸에 착용하는 것이라는 감각으로 장신구, 신발까지 포함가능합니다.`}
        </PreTag>

        <div style={{ display: 'flex', gap: '1rem', margin: '3rem 0 0 0' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`3회 "그릇"`}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
            {`(12.09 토) `}
          </PreTag>
        </div>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`내가 잘 사용하는 그릇 혹은 넓게는 도자기나 유리 재질의 물건, 소재와 상관없이 무언가를 담아내는 것도 좋습니다. ‣ 4회(12월 23일, 토요일, 오후 3시) - "가구" 현재 갖고 있는 가구도 1점 이상 포함하여 과거의 가구, 미래의 가구를 3점 소개해주세요. 추가로 가구의 크기를 꼭 알려주세요. 정확한 가로 세로의 크기 혹은 자신의 신체를 기준으로 설명해도 좋습니다. (어깨 넓이 정도, 팔꿈치가 닿은 정도, 발끝에 맞춘 정도)`}
        </PreTag>

        <div style={{ display: 'flex', gap: '1rem', margin: '3rem 0 0 0' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`4회 "가구"`}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
            {`(12.23 토) `}
          </PreTag>
        </div>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`현재 갖고 있는 가구도 1점 이상 포함하여 과거의 가구, 미래의 가구를 3점 소개해주세요. 추가로 가구의 크기를 꼭 알려주세요. 정확한 가로 세로의 크기 혹은 자신의 신체를 기준으로 설명해도 좋습니다. (어깨 넓이 정도, 팔꿈치가 닿은 정도, 발끝에 맞춘 정도)`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="6rem 0 0 0">
          {`안내자 소개`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`파랑~ (@yhgh0000)
박물관과 미술관에서 일해왔고, 박물관과 문화유산을 기반으로 사람들에게 말을 붙이는 프로그램들을 만들고 진행하고 있습니다. 전문가의 태도보다 애호가의 태도를 사랑하고 다양한 존재들을 대화의 방식으로 만나는 것에 관심이 많습니다.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="6rem 0 0 0">
          {`문의 | 02-948-1217 / culturesalon5120@gmail.com`}
        </PreTag>
      </div>
    </Container>
  );
};

export default Comp15;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  cursor: ${(props) => (props.pointer ? props.pointer : '')};
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : '')};
`;

const Container = styled.div`
  margin-top: 6rem;
  padding-bottom: 6rem;
  width: 100%;
  display: flex;
  gap: 6rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
  }
`;

const TitleContainer = styled.div`
  max-width: 42rem;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 42rem;
  height: 42rem;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
