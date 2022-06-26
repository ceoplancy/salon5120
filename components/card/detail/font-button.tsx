import styled from 'styled-components';
import Font from 'components/common/font';
import ContentList from 'components/card/content-list';
import { FontButtonData } from 'constants/content-list';

const FontButton = () => {
  return (
    <Frame>
      <FontWrapper>
        <Font size={36} fontWeight={600}>
          폰트와 버튼 공용컴포넌트 만들기
        </Font>
      </FontWrapper>

      <ContentList data={FontButtonData} />

      <Font size={32} fontWeight={600} margin="64px 0px 0px 0px">
        들어가며
      </Font>

      <MainText>
        {`
현재 프로젝트를 진행하기 전에 사용했던 폰트와 버튼을 만드는 방식에 문제가 있다고 생각했고 이를 개선하면서 느꼈던 부분들을 기록 해보려고 합니다.

첫째로는 일관성이 없었습니다.
기본적인 font size를 고정으로 하고 font weight 정도만 prop으로 받아서 사용했습니다. 그외에 font에서 고려해야할 여러가지 속성들이 개발자마다 다르게 작성하여 페이지를 전체적으로 봤을때 일관성이 없어보였습니다.
이는 버튼도 비슷했습니다. 명확하게 우리 서비스에서 사용하는 버튼의 크기가 명확하지 않아 같은 '확인' 버튼의 사이즈가 약간씩은 다른 결과를 나타냈습니다.

둘째로는 불편하다 였습니다.
이후 한번 개선을 했지만 개선한 방향이 개발하면서 사용하는데 굉장히 불편함을 느꼈습니다.
이유는 각 페이지에서 쓰는 버튼들의 사이즈, 정렬, 색상을 모두 정의하고 버튼들 각각에 이름을 붙혀서 사용하려고 하다보니 그 버튼들의 이름만 보고는 사용하기가 어려웠고 결국 정의한 부분을 다시보고사용해야했기 때문입니다.

이런 부분들이 결국 전체적인 서비스의 완성도를 떨어뜨리는 것 같아 보였습니다. 해결방법을 생각했을 때 당시 여러 이제 막 오픈소스들을 사용하여 페이지를 구현하던 때라서 그랬는지 문득 버튼과 폰트도 오픈소스를 사용하는 것 처럼 import 하고 사용 가능한 속성들을 타입으로 정의 해놓고 사용하면 해결할 수 있지 않을까? 라는 생각이 들었습니다.
결과는 나름 만족스러웠고 이전 보다 일관성도 지키면서 사용성도 편리한 방향으로 개선 되었습니다.

다른 서비스에서는 이러한 부분들을 어떤식으로 활용하는지 궁금하기도 하고 어떤 방향이 더 나은 방법일까 생각해보면서 폰트와 버튼 공용 컴포넌트를 만들었던 과정을 기록해보려고 합니다.
`}
      </MainText>

      <FontWrapper>
        <Font size={32} fontWeight={600} margin="64px 0px 0px 0px">
          font 새로운 공용 컴포넌트를 설계하며 고려한 사항
        </Font>
      </FontWrapper>
    </Frame>
  );
};

export default FontButton;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

const FontWrapper = styled.div`
  margin: 64px 0px 24px 0px;
`;

const MainText = styled.pre`
  width: 80%;
  font-size: 1.8rem;
  line-height: 2.5rem;
  white-space: pre-wrap;
  word-break: break-all;
`;
