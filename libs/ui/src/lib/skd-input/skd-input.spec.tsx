import { render } from '@testing-library/react';

import SkdInput from './skd-input';

describe('SkdInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkdInput />);
    expect(baseElement).toBeTruthy();
  });
});
