import { render } from '@testing-library/react';

import SkdHeaderNavigation from './skd-header-navigation';

describe('SkdHeaderNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkdHeaderNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
