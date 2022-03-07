import React from 'react';
import {render, screen} from '@testing-library/react';
import {PaidVacationDaysService} from './PaidVacationDaysService';

test('renders learn react link', () => {
  const {calculate} = PaidVacationDaysService();

  expect(calculate(14, 0)).toBe(27);
  expect(calculate(70,40)).toBe(30);
  expect(calculate(25,4)).toBe(22);
  expect(calculate(25,15)).toBe(24);
  expect(calculate(120,0)).toBe(27);
  expect(calculate(120,120)).toBe(30);
  expect(calculate(60,20)).toBe(29);
  expect(calculate(60,10)).toBe(27);
  expect(calculate(50,0)).toBe(24);
  expect(calculate(50, 50)).toBe(29);
  expect(calculate(0, 0)).toBe(27);
  expect(calculate(70,30)).toBe(30);
});
