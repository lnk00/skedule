import { render } from '@testing-library/react';

import SkdSearch from './skd-search';

describe('SkdSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkdSearch />);
    expect(baseElement).toBeTruthy();
  });
});
