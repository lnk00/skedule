import { render } from '@testing-library/react';

import SkdNavbar from './skd-navbar';

describe('SkdNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkdNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
