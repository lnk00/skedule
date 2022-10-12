import { render } from '@testing-library/react';

import SkdCheckbox from './skd-checkbox';

describe('SkdCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkdCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
