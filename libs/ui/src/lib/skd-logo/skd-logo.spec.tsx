import { render } from '@testing-library/react';

import SkdLogo from './skd-logo';

describe('SkdLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkdLogo />);
    expect(baseElement).toBeTruthy();
  });
});
