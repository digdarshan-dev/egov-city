import { render } from '@testing-library/react';

import TradeLicense from './tradeLicense';

describe('TradeLicense', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TradeLicense />);
    expect(baseElement).toBeTruthy();
  });
});
