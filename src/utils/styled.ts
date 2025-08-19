import { css } from 'styled-components';

export const TextStyle = {
  h1: css`
    font-size: ${({ theme }) => theme.text.h1.fontSize};
    font-weight: ${({ theme }) => theme.text.h1.fontWeight};
    line-height: ${({ theme }) => theme.text.h1.lineHeight};
  `,
  h2: css`
    font-size: ${({ theme }) => theme.text.h2.fontSize};
    font-weight: ${({ theme }) => theme.text.h2.fontWeight};
    line-height: ${({ theme }) => theme.text.h2.lineHeight};
  `,
  h3: css`
    font-size: ${({ theme }) => theme.text.h3.fontSize};
    font-weight: ${({ theme }) => theme.text.h3.fontWeight};
    line-height: ${({ theme }) => theme.text.h3.lineHeight};
  `,
  h4: css`
    font-size: ${({ theme }) => theme.text.h4.fontSize};
    font-weight: ${({ theme }) => theme.text.h4.fontWeight};
    line-height: ${({ theme }) => theme.text.h4.lineHeight};
  `,
  h5: css`
    font-size: ${({ theme }) => theme.text.h5.fontSize};
    font-weight: ${({ theme }) => theme.text.h5.fontWeight};
    line-height: ${({ theme }) => theme.text.h5.lineHeight};
  `,
  h6: css`
    font-size: ${({ theme }) => theme.text.h6.fontSize};
    font-weight: ${({ theme }) => theme.text.h6.fontWeight};
    line-height: ${({ theme }) => theme.text.h6.lineHeight};
  `,
  bodyLarge: css`
    font-size: ${({ theme }) => theme.text.bodyLarge.fontSize};
    font-weight: ${({ theme }) => theme.text.bodyLarge.fontWeight};
    line-height: ${({ theme }) => theme.text.bodyLarge.lineHeight};
  `,
  bodyMedium: css`
    font-size: ${({ theme }) => theme.text.bodyMedium.fontSize};
    font-weight: ${({ theme }) => theme.text.bodyMedium.fontWeight};
    line-height: ${({ theme }) => theme.text.bodyMedium.lineHeight};
  `,
  bodySmall: css`
    font-size: ${({ theme }) => theme.text.bodySmall.fontSize};
    font-weight: ${({ theme }) => theme.text.bodySmall.fontWeight};
    line-height: ${({ theme }) => theme.text.bodySmall.lineHeight};
  `,
  caption: css`
    font-size: ${({ theme }) => theme.text.caption.fontSize};
    font-weight: ${({ theme }) => theme.text.caption.fontWeight};
    line-height: ${({ theme }) => theme.text.caption.lineHeight};
  `,
};
