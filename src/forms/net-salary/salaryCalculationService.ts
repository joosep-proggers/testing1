import {injectableHook} from '../../core/inject';

type SalaryCalculationServiceData = {
  calculate: (salary: number) => number;
};

export const SalaryCalculationService = (): SalaryCalculationServiceData => {
  const calculate = (salary: number) => {
    let result = salary;
    
    if (isNaN(result)) return 0;

    return Math.round(result - (result * 0.02) - (result * 0.016) - (result * 0.2));
  };
  
  return {calculate};
};

export const useSalaryCalculationService = injectableHook(SalaryCalculationService);
