import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  /**
   * button type
   */
  type: 'submit' | 'button';

  /**
   * button color
   */
  color: 'black' | 'white' | 'blue';

  /**
   * button size
   */

  size: 'large' | 'medium' | 'small' | 'xsmall';

  /**
   * click event
   */
  onClick?: (e: any) => void;

  /**
   * disabled
   */
  disabled?: boolean;

  /**
   * button text content
   */
  children?: ReactNode | ReactNode[];
};

const Button = styled.button<ButtonProps>`
  border-radius: ${(props) => (props.size === 'xsmall' ? '50px' : '3px')};
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing6};

  &:disabled {
    cursor: default;
  }

  // color
  ${(props) => {
    switch (props.color) {
      case 'black':
        return css`
          color: #fff;
          background-color: #000;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

          &:disabled {
            background-color: #d1d1d6;
          }
        `;

      case 'white':
        return css`
          color: #000;
          background-color: #fff;
          border: 0.5px solid #d1d1d6;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

          &:disabled {
            color: #d1d1d6;
          }
        `;

      case 'blue':
        return css`
          color: #fff;
          background-color: #0000f4;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

          &:disabled {
            background-color: #d1d1d6;
          }
        `;
    }
  }}

  // size
  ${(props) => {
    switch (props.size) {
      case 'large':
        return css`
          width: 100%;
          padding: 18px 0px;
        `;

      case 'medium':
        return css`
          width: 100%;
          padding: 14px 0px;
        `;

      case 'small':
        return css`
          width: 100%;
          padding: 10px 0px;
        `;

      case 'xsmall':
        return css`
          width: 70px;
          padding: 9px 0px;
        `;
    }
  }}
`;

export default (props: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};
