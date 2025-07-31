import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Homepage.css';

const Homepage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Scroll animation trigger
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('section-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const categories = [
    'Maison et déco',
    'Aliments et boissons',
    'Femme',
    'Beauté et bien-être',
    'Bijoux',
    'Papeterie et articles fantaisie',
    'Enfant et bébé',
    'Animaux',
    'Homme'
  ];

  const bestSellers = [
    { 
      name: 'Product 1', 
      detail: 'Short detail',
      image: 'https://cdn.faire.com/fastly/2bc4d97018ef06e79731c8fbbfa201b4a440837c450a5725d323c344f4676645.jpeg?dpr=1&fit=crop&format=jpg&height=260&width=260'
    },
    { 
      name: 'Product 2', 
      detail: 'Short detail',
      image: 'https://cdn.faire.com/fastly/f28fda81e75209633f57367c1f0a46f1fe6148b0001dc50ca12e751aa2ae9811.jpeg?dpr=1&fit=crop&format=jpg&height=260&width=260'
    },
    { 
      name: 'Product 3', 
      detail: 'Short detail',
      image: 'https://cdn.faire.com/fastly/4fa9be357b08c6ee07517a66256380f0315bf38ceb05c0bf969dff9f548c4b0c.jpeg?dpr=1&fit=crop&format=jpg&height=260&width=260'
    },
    { 
      name: 'Product 4', 
      detail: 'Short detail',
      image: 'https://cdn.faire.com/fastly/9d389feb08a0d51bb991417050e2e120cf536e20785109edecf87fa7c7758b73.jpeg?dpr=1&fit=crop&format=jpg&height=260&width=260'
    }
  ];

  const values = [
    'Marques dirigées par des femmes',
    'Marques dirigées par des personnes LGBTQI+',
    'Produits écoresponsables',
    'Produits bio',
    'Produits faits main',
    'Produits non disponibles sur Amazon',
    'Marques solidaires'
  ];

  const features = [
    {
      title: "Essayez de nouvelles marques en toute confiance",
      desc: "vous bénéficiez des retours gratuits et simplifiés sur toutes vos premières commandes."
    },
    {
      title: "Achetez de nouveaux produits pour votre boutique maintenant et payez vos factures dans 60 jours, sans frais."
    },
    {
      title: "Bénéficiez de la livraison gratuite auprès de milliers de marques grâce à un abonnement Insider sur Faire."
    }
  ];

return (
    <div >
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundColor: '#595604' }}>
        <Container fluide>
          <Row className="align-items-center">
            <Col md="6" className="hero-content">
              <p className="hero-title animate-fadein">
                Achetez des produits qui plairont aux clients de votre boutique.
              </p>
              <div className="testimonial mt-4 animate-fadein" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://cdn.faire.com/fastly/6f174ccfd78008a0bf37fe8a7af31a8bf6a430b52f6acf75eef426258816441c.jpeg" 
                  alt="Caroline Kim-Rodrigues" 
                  className="testimonial-img"
                />
                <div>
                  <p className="testimonial-name"><strong>Caroline Kim-Rodrigues, fondatrice de Merci Milo</strong></p>
                  <p className="testimonial-location">Los Angeles, Californie et Portland, Oregon</p>
                </div>
              </div>
            </Col>
            <Col md="6" className="text-center hero-image-container">
              <img
                src="https://cdn.faire.com/fastly/6f174ccfd78008a0bf37fe8a7af31a8bf6a430b52f6acf75eef426258816441c.jpeg?dpr=1&format=jpg&height=264&width=355"
                alt="Hero"
                className="hero-image animate-float"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Category Section */}
      <section className="category-section py-5">
        <Container>
          <div className="text-center mb-4">
            <p className="lead mb-1 animate-fadein">Les meilleures marques pour les meilleures boutiques.</p>
            <p className="lead animate-fadein" style={{ animationDelay: '0.2s' }}>Retrouvez-les sur Faire !</p>
          </div>
          
          <div className="d-flex flex-wrap justify-content-center animate-slideup">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>
          
          {selectedCategory && (
            <div className="products-grid mt-5">
              <Row className="g-4 justify-content-center">
                {bestSellers.map((product, i) => (
                  <Col md="3" key={i} className="text-center animate-fadein" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="product-image-container">
                      <img src={product.image} alt={product.name} className="product-img" />
                    </div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-detail">{product.detail}</p>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Container>
      </section>

      {/* Best-Sellers Section */}
      <section className="best-sellers py-6" style={{ backgroundColor: '#5b2a25' }}>
        <Container>
          <Row className="align-items-center">
            <Col md="6">
              <Row className="g-4">
                {bestSellers.slice(0,4).map((product, i) => (
                  <Col md="6" key={i} className="text-center">
                    <div className="product-image-container animate-scalein" style={{ animationDelay: `${i * 0.15}s` }}>
                      <img src={product.image} alt={product.name} className="product-img" />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md="6" className="text-white text-end">
              <h2 className="section-title animate-fadein">Découvrez votre prochain best-seller</h2>
              <p className="section-subtitle animate-fadein" style={{ animationDelay: '0.2s' }}>
                Parcourez des produits que les commerçants du monde entier adorent sur Faire.
              </p>
              <button className="btn-cta animate-fadein" style={{ animationDelay: '0.3s' }}>Découvrir tous les best-sellers</button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values py-6 bg-white">
        <Container>
          <div className="text-center mb-4">
            <h2 className="section-title animate-fadein">
              Parcourez des produits selon les valeurs qui vous tiennent le plus à cœur
            </h2>
          </div>

          <div className="d-flex flex-wrap justify-content-center mb-5">
            {values.map((value, i) => (
              <button 
                key={i} 
                className="value-btn animate-slidein"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {value}
              </button>
            ))}
          </div>

          <Row className="align-items-center">
            <Col md="6" className="animate-slidein">
              <img 
                src="https://cdn.faire.com/fastly/6f174ccfd78008a0bf37fe8a7af31a8bf6a430b52f6acf75eef426258816441c.jpeg" 
                alt="Bathing Culture" 
                className="img-fluid rounded"
              />
            </Col>
            <Col md="6" className="animate-fadein" style={{ animationDelay: '0.3s' }}>
              <h3 className="brand-title">Bathing Culture</h3>
              <p className="brand-location">San Francisco, Californie</p>
              <blockquote className="brand-quote">
                « Nous fabriquons chacun de nos produits en pensant à son impact carbone, son utilisation, 
                sa réutilisation et sa fin de vie. Notre approche repose sur notre programme de recharge 
                pour notre produit Mind and Body Wash, qui vous permet de recharger votre distributeur 
                de savon dans plus de 200 magasins à travers le pays. »
              </blockquote>
              <button className="btn-cta">Acheter des produits écoresponsables</button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features py-6" style={{ backgroundColor: '#f1f29f' }}>
        <Container>
          <Row className="align-items-center">
            <Col md="6" className="text-center animate-slidein">
              <img 
                src="https://cdn.faire.com/fastly/6f174ccfd78008a0bf37fe8a7af31a8bf6a430b52f6acf75eef426258816441c.jpeg" 
                alt="Features" 
                className="img-fluid rounded"
              />
            </Col>
            <Col md="6" className="animate-slidein" style={{ animationDelay: '0.2s' }}>
              <h2 className="section-title">Nous simplifions les choses.<br/>Vous vous les appropriez.</h2>
              
              <div className="feature-list">
                {features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="feature-item animate-fadein"
                    style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                  >
                    <div className="feature-number">0{i+1}</div>
                    <div>
                      <h4 className="feature-title">{feature.title}</h4>
                      {feature.desc && <p>{feature.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );

};

export default Homepage;