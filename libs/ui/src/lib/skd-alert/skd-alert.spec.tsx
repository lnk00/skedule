import { render } from '@testing-library/react';

import SkdAlert from './skd-alert';

describe('SkdAlert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkdAlert />);
    expect(baseElement).toBeTruthy();
  });
});
