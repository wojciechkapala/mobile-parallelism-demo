import { render } from '@testing-library/react-native';
import React from 'react';

import { ThemedText } from '../ThemedText';

jest.mock('@/hooks/useThemeColor', () => ({
  useThemeColor: jest.fn(() => '#ff0000'),
}));

describe('<ThemedText />', () => {
  it('renders children text', () => {
    const { getByText } = render(<ThemedText>Hello world</ThemedText>);

    expect(getByText('Hello world')).toBeTruthy();
  });

  it('applies the correct style for title type', () => {
    const { getByText } = render(<ThemedText type="title">Title text</ThemedText>);

    const text = getByText('Title text');

    const styleArray = Array.isArray(text.props.style) ? text.props.style : [text.props.style];

    const combinedStyle = Object.assign({}, ...styleArray.filter(Boolean));

    expect(combinedStyle.fontSize).toBe(32);
    expect(combinedStyle.fontWeight).toBe('bold');
  });
});
