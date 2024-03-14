import { render } from '@testing-library/react';

import Bpa from './bpa';

describe('Bpa', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bpa />);
    expect(baseElement).toBeTruthy();
  });
});
