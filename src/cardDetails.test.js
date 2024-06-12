import React from 'eact';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'eact-router-dom';
import Card from './Component/Card/Card';

describe('Card component', () => {
  it('renders card data', () => {
    const cardData = [
      {
        header: "Coombes",
        price: "$199.00",
        image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        subtext: "LOUNGE",
        description: "Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
      },
    ];

    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <Card cardData={cardData} />
      </MemoryRouter>
    );

    expect(getByText(cardData[0].header)).toBeInTheDocument();
    expect(getByText(cardData[0].price)).toBeInTheDocument();
    expect(getByAltText(cardData[0].image)).toBeInTheDocument();
  });

  it('renders multiple cards', () => {
    const cardData = [
      {
        header: "Coombes",
        price: "$199.00",
        image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        subtext: "LOUNGE",
        description: "Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
      },
      {
        header: "Keeve Set",
        price: "$199.00",
        image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        subtext: "TABLE & CHAIRS",
        description: "Vass Shoes makes handcrafted men's shoes in the heart of Budapest. i made a concept product pagefor practice which in my opinion representstheir qualities better than their current site."
      },
    ];

    const { getAllByRole } = render(
      <MemoryRouter>
        <Card cardData={cardData} />
      </MemoryRouter>
    );

    const cards = getAllByRole('article');
    expect(cards).toHaveLength(2);
  });
});