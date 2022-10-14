import { render } from '@testing-library/react';

import SkdIcon from './skd-icon';

describe('SkdIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkdIcon />);
    expect(baseElement).toBeTruthy();
  });
});
