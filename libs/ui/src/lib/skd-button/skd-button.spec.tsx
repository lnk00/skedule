import { render } from '@testing-library/react';

import SkdButton from './skd-button';

describe('SkdButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkdButton />);
    expect(baseElement).toBeTruthy();
  });
});
