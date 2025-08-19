import { TextStyle } from '@/utils/styled';
import type React from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonTextOverride = {
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  color?: string;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  width?: string;
  overrideStyles?: ButtonTextOverride;
};

const buttonVariantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.color.primary[500]};
    color: ${({ theme }) => theme.color.white};
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.color.primary[600]};
    }
  `,
  secondary: css`
    background-color: rgba(0, 0, 0, 0);
    color: ${({ theme }) => theme.color.primary[500]};
    border: 1px solid ${({ theme }) => theme.color.primary[500]};

    &:hover {
      background-color: ${({ theme }) => theme.color.primary[50]};
    }
  `,
};

const buttonSizeStyles = {
  small: css`
    height: 36px;
    padding: 10px 16px;
    ${TextStyle.bodySmall}
  `,
  medium: css`
    height: 44px;
    padding: 12px 24px;
    ${TextStyle.bodyMedium}
  `,
  large: css`
    height: 52px;
    padding: 14px 32px;
    ${TextStyle.bodyLarge}
  `,
};

const buttonSizeDefaultWidths = {
  small: '160px',
  medium: '240px',
  large: '360px',
};

const StyledButton = styled.button<
  Required<Pick<ButtonProps, 'variant' | 'size' | 'width' | 'overrideStyles'>>
>`
  width: ${(props) => props.width};
  border-radius: 8px;
  ${(props) => buttonVariantStyles[props.variant]}
  ${(props) => buttonSizeStyles[props.size]}
  ${({ overrideStyles }) => css`
    ${overrideStyles.fontSize ? `font-size: ${overrideStyles.fontSize}` : ''};
    ${overrideStyles.fontWeight ? `font-weight: ${overrideStyles.fontWeight}` : ''};
    ${overrideStyles.lineHeight ? `line-height: ${overrideStyles.lineHeight}` : ''};
    ${overrideStyles.letterSpacing ? `letter-spacing: ${overrideStyles.letterSpacing}` : ''};
    ${overrideStyles.color ? `color: ${overrideStyles.color}` : ''};
  `}
`;

function Button({
  children,
  onClick = () => {},
  variant = 'primary',
  size = 'medium',
  width = buttonSizeDefaultWidths[size],
  overrideStyles: override = {},
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      width={width}
      onClick={onClick}
      overrideStyles={override}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
