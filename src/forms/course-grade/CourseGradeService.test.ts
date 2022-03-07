import React from 'react';
import {render, screen} from '@testing-library/react';
import {CourseGradeService} from './CourseGradeService';

test('renders learn react link', () => {
  const {calculate} = CourseGradeService();

  expect(calculate(0,0,0)).toBe("failed");
  expect(calculate(50,50,0)).toBe("failed");
  expect(calculate(0,50,50)).toBe("failed");
  expect(calculate(30,30,30)).toBe("satisfactory");
  expect(calculate(30,40,30)).toBe("satisfactory");
  expect(calculate(35,35,35)).toBe("good");
  expect(calculate(30,50,30)).toBe("good");
  expect(calculate(45,45,45)).toBe("very good");
  expect(calculate(45, 50, 40)).toBe("very good");
  expect(calculate(50,50,50)).toBe("very good");
  
});
