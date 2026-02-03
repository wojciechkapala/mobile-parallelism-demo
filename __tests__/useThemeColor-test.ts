import { render } from '@testing-library/react-native';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

jest.mock('@/hooks/useColorScheme', () => ({
  useColorScheme: jest.fn(),
}));

const mockedUseColorScheme = jest.requireMock('@/hooks/useColorScheme')
  .useColorScheme as jest.Mock;

function TestComponent({
  props,
  colorName,
  onColor,
}: {
  props: { light?: string; dark?: string };
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark;
  onColor: (color: string) => void;
}) {
  const color = useThemeColor(props, colorName);
  onColor(color);
  return null;
}

describe('useThemeColor', () => {
  it('returns the explicit color from props when provided for current theme', () => {
    mockedUseColorScheme.mockReturnValueOnce('dark');

    const onColor = jest.fn();

    render(
      <TestComponent
        props={{ dark: '#123456', light: '#ffffff' }}
        colorName="text"
        onColor={onColor}
      />
    );

    expect(onColor).toHaveBeenCalledWith('#123456');
  });

  it('falls back to theme color from Colors when no explicit color is provided', () => {
    mockedUseColorScheme.mockReturnValueOnce('light');

    const onColor = jest.fn();

    render(
      <TestComponent
        props={{}}
        colorName="background"
        onColor={onColor}
      />
    );

    expect(onColor).toHaveBeenCalledWith(Colors.light.background);
  });
});
