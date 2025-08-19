import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    white: '#FFFFFF',
    black: '#000000',
    primary: {
      '500': '#3B82F6',
      '600': '#2563EB',
      '700': '#1D4ED8',
      '400': '#60A5FA',
      '300': '#93C5FD',
      '100': '#DBEAFE',
      '50': '#EFF6FF',
    },
    gray: {
      '900': '#111827',
      '700': '#374151',
      '500': '#6B7280',
      '300': '#D1D5DB',
      '100': '#F3F4F6',
      '50': '#F9FAFB',
    },
    state: {
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      info: '#06B6D4',
    },
  },
  text: {
    h1: {
      fontSize: '2rem', // 32px
      fontWeight: '700',
      lineHeight: '2.5rem', // 40px
    },
    h2: {
      fontSize: '1.75rem', // 28px
      fontWeight: '700',
      lineHeight: '2.25rem', // 36px
    },
    h3: {
      fontSize: '1.5rem', // 24px
      fontWeight: '600',
      lineHeight: '2rem', // 32px
    },
    h4: {
      fontSize: '1.25rem', // 20px
      fontWeight: '600',
      lineHeight: '1.75rem', // 28px
    },
    h5: {
      fontSize: '1.125rem', // 18px
      fontWeight: '500',
      lineHeight: '1.5rem', // 24px
    },
    h6: {
      fontSize: '1rem', // 16px
      fontWeight: '500',
      lineHeight: '1.375rem', // 22px
    },
    bodyLarge: {
      fontSize: '1rem', // 16px
      fontWeight: '400',
      lineHeight: '1.5rem', // 24px
    },
    bodyMedium: {
      fontSize: '0.875rem', // 14px
      fontWeight: '400',
      lineHeight: '1.25rem', // 20px
    },
    bodySmall: {
      fontSize: '0.75rem', // 12px
      fontWeight: '400',
      lineHeight: '1rem', // 16px
    },
    caption: {
      fontSize: '11px',
      fontWeight: '400',
      lineHeight: '14px',
    },
  },
};
