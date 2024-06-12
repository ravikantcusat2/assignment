import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardDetails from './Component/Card/CardDetails';

describe('CardDetails component', () => {
  const cardData = {
    image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    header: 'Keeve Set',
    description: "Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site.",
    price: '$199.00',
  };

  it('renders card data', () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <CardDetails />
      </MemoryRouter>,
      {
        route: '/card-details',
        state: { cardData },
      }
    );

    expect(getByText(cardData.header)).toBeInTheDocument();
    expect(getByText(cardData.description)).toBeInTheDocument();
    expect(getByText(cardData.price)).toBeInTheDocument();
    
  });

  

  
});