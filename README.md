# Product Review Application

A React web application that allows customers to provide feedback on a product.

## Features

- Star rating system for various criteria (quality, price, design, durability, satisfaction)
- Global rating out of 10
- Quality/Price ratio evaluation
- Product recommendation (Yes/No)
- Comment section for detailed feedback
- Weighted average rating calculation
- Modern and responsive user interface

## Technologies Used

- React.js
- Material-UI (MUI)
- Yarn

## Installation

```bash
# Clone the repository
git clone [REPO_URL]

# Install dependencies
yarn install

# Start the application
yarn start
```

## Rating Structure

The evaluation criteria are weighted as follows:
- Quality: 25%
- Price: 25%
- Design: 20%
- Durability: 20%
- Satisfaction: 10%

## Customization

To change the product image, place your image in the `public/images/` directory and update the reference in `src/components/ProductReview.js`.

## Deployment

The application is configured for deployment on the Render platform.

## Development

The application is built with modern React practices and uses Material-UI for a consistent and professional look. All user interface elements are responsive and mobile-friendly.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT
