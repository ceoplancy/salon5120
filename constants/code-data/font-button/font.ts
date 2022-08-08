export const fontTypeString = `type FontProps = {
  /**
   * font size 지정을 위한 필수 값
   */
  size: 36 | 32 | 28 | 26 | 24 | 21 | 18 | 16 | 15 | 14 | 13 | 12 | 11 | 10;

  /**
   * font color 지정을 위한 선택 값 (default #000)
   */
  color?: string;

  /**
   * fontWeight: font weight 지정을 위한 선택 값 (default 400)
   */
  fontWeight?: 400 | 600 | 700;

  /**
   * letterSpacing: letterSpacing 조절이 필요한 경우 선택 값
   */
  letterSpacing?: string;

  /**
   * lineHeight: lineHeight 조절이 필요한 경우 선택 값
   */
  lineHeight?: string;

  /**
   * translateY: translateY 속성을 이용하여 font의 높이를 조절해야 하는 경우
   */
  translateY?: number;

  /**
   * click event
   */
  onClick?: () => void;

  /**
   * disabled
   */
  disabled?: boolean;

  /**
   * pointer: 커서 포인터가 필요한 경우
   */
  pointer?: boolean;

  /**
   * text decoration: 텍스트 언더라인이 필요한 경우
   */
  textDecoration?: 'underline';

  /**
   * p태그 안에서 span을 이거 붙여 써야하는 경우
   */
  useSpan?: false | boolean;

  /**
   * text content
   */
  children?: ReactNode | ReactNode[];

  /**
   * margin 조절이 필요한 경우 ex) 10px 10px 10px 10px
   */
  margin?: string;
};`;

export const fontCompString = `
    const test = case 36:
    &#36;{}
    return css\`
      font-size: 3.6rem;
    \`;
`;
