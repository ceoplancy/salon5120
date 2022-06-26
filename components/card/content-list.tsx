import Font from 'components/common/font';
import styled from 'styled-components';

type Props = {
  data: string[];
};

const ContentList = ({ data }: Props) => {
  return (
    <Frame>
      <Header>
        <Font size={16} fontWeight={600}>
          목차
        </Font>
      </Header>

      {data.map((x: string, idx: number) => {
        return (
          <Body key={idx}>
            <Font size={16}>
              {idx + 1}. {x}
            </Font>
          </Body>
        );
      })}
    </Frame>
  );
};

export default ContentList;

const Frame = styled.table`
  display: table;
  border-collapse: collapse;
  width: 80%;
  height: 100%;

  p {
    padding: 15px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Header = styled.td`
  display: table-row;
  border: 1px solid #989898;
  background-color: #e5e7e9;
`;

const Body = styled.td`
  display: table-row;
  border: 1px solid #989898;
`;
