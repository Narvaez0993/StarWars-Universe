import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShowItems from '../../../../../src/shared/presentation/components/showItems/index';

describe('ShowItems component', () => {
  const filteredData = [
    { id: 1, url: 'https://swapi.info/api/people/1', name: 'sebas', category: 'Especial' },
    { id: 2, url: 'https://swapi.info/api/people/2', name: 'sebas2', category: 'Especial' },
  ]; 

  test('Mostrar componente con title correcto', () => {
    const { getByText } = render(<ShowItems title="Info card" filteredData={filteredData} />);
    expect(getByText('Info card')).toBeTruthy();
  });

  test('Mostrar el número correcto de tarjetas con datos', () => {
    const { getAllByTestId, getByText } = render(<ShowItems title="Info card" filteredData={filteredData} dataSize={2} />);
    const cards = getAllByTestId('card');
    expect(cards).toHaveLength(filteredData.length);
  
    cards.forEach((_, index) => {
      const data = filteredData[index];
      const nameElement = getByText(data.name);
      
      expect(nameElement).toBeTruthy();
    });
  });
});