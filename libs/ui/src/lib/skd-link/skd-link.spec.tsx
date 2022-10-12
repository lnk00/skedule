import { render } from '@testing-library/react';

import SkdLink from './skd-link';

describe('SkdLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkdLink />);
    expect(baseElement).toBeTruthy();
  });
});
