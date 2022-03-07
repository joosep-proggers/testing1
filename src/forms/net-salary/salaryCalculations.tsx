import React, {useState} from 'react';
import {useSalaryCalculationService} from './salaryCalculationService';

export const SalaryCalculations: React.FC = () => {
  const {calculate} = useSalaryCalculationService();
  const [salary, setSalary] = useState<string>('');
  const [result, setResult] = useState<number>();
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setResult(calculate(+salary));
  };
  
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <p><strong>04</strong> | Salary calculation</p>
      <div className="row align-items-center">
        <div className="col col-4">
          <label className="Label">Gross salary</label>
          <input type="number" className="Input" value={salary} onChange={e => setSalary(e.target.value)} />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <button type="submit" className="Button">Calculate</button>
        </div>
        <div className="col">
          <div className="Poster">
            <strong>Net salary:</strong> {result ?? '-'}
          </div>
        </div>
      </div>
    </form>
  );
};
