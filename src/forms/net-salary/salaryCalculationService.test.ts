import React from 'react';
import {render, screen} from '@testing-library/react';
import {SalaryCalculationService} from './salaryCalculationService';

test('renders learn react link', () => {
  const {calculate} = SalaryCalculationService();

  expect(calculate(1000)).toBe(764);
  expect(calculate(6430)).toBe(4913);
  expect(calculate(1)).toBe(1);
  expect(calculate(2)).toBe(2);
  expect(calculate(5)).toBe(4);
  expect(calculate(1984)).toBe(1516);
  expect(calculate(76329693)).toBe(58315885);

});
