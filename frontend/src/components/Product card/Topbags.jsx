import React from 'react';
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Topbags.css'; // Import custom CSS for additional styles

const Topbags = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Hollister Colostomy Bag',
      image: '/Image/image1 hollister.jpg',
      offer: 'NEW',
      pouches:'1 piece',
      rating: 4.8,
      price: 1200,
    },
    {
      id: 2,
      name: 'Coloplast Colostomy Bag',
      image: '/Image/image2 coloplast.jpg',
      offer: 'NEW',
      pouches:'2 piece',
      rating: 4.9,
      price: 2500,
    },
    {
      id: 3,
      name: 'Alterna Colostomy Bag',
      image: '/Image/image 3 alterna.jpg',
      offer: 'NEW',
      pouches:'2 piece',
      rating: 4.9,
      price: 1674,
    },
    {
      id: 4,
      name: 'SenSura Colostomy Bag',
      image: '/Image/image4 sensura.jpg',
      offer: 'NEW',
      pouches:'1 piece',
      rating: 4.9,
      price: 2544,
    },
  ];

  const handleCardClick = (productId) => {
    navigate(`/products?category=${productId}`);
  };

  return (
    <div className="background-section">
      <Container className="my-5">
        <h2 className="text-center mb-4">Up To  Bestsellers</h2>
        <Row>
          {products.map((product) => (
            <Col md={4} lg={3} className="mb-4" key={product.id}>
              <div className="card-wrapper">
                <Card
                  onClick={() => handleCardClick(product.id)}
                  className="product-card"
                >
                  {product.offer && <Badge className="offer-badge">{product.offer}</Badge>}
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body className="text-center">
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <div className="product-rating">
                      <span className="rating">{product.rating}★</span>
                      <span className="reviews">({product.reviews})</span>
                    </div>
                    <div className="product-pouches">{product.pouches}</div>
                    <div className="product-price">₹{product.price}</div>
                    <Button variant="outline-primary" onClick={() => handleCardClick(product.id)}>
                      View Product
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Topbags;
