import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Collapse, Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Homepage.css'; // Import the custom CSS file
import actions from '../../actions';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item">
      <Button color="transparent" onClick={toggle} className="faq-button">
        <div className="faq-question">
          <FaQuestionCircle className="faq-icon" />
          <h4>{question}</h4>
        </div>
        {isOpen ? <FaChevronUp className="faq-toggle-icon" /> : <FaChevronDown className="faq-toggle-icon" />}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <p>{answer}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

const Homepage = ({ products, filterProducts, match }) => {
  useEffect(() => {
    const slug = match.params.slug;
    filterProducts(slug);
  }, [filterProducts, match.params.slug]);

  return (
    <div className='homepage'>
      <div className='hero-section'>
        <Container className='text-center mt-2'>
          <h1 className='font-weight-bold'>Innovez votre réseau avec la technologie NFC</h1>
        </Container>
      </div>

      <Container className='text-center mt-2'>
        <img src='/images/qr-code.png' alt='QR Code' className='qr-code-img' />
        <p>Scannez le code QR pour découvrir nos services</p>
      </Container>

     
      
      {/* Other sections remain unchanged */}
      <Container className='text-center mt-4'>
        <Row className='info-section'>
          <Col xs='12' md='4'>
            <div className='info-item'>
              <img src='/images/connexion-rapide-icon.png' alt='Connexion Rapide' className='info-icon' />
              <h4>Connexion Rapide</h4>
              <p>Avec ICart, l'avenir des échanges professionnels est là.</p>
            </div>
          </Col>
          <Col xs='12' md='4'>
            <div className='info-item'>
              <img src='/images/fabrication-francaise-icon.png' alt='Fabrication Française' className='info-icon' />
              <h4>Fabrication Tunisienne</h4>
              <p>Fabriqués avec précision et passion en Tunisie.</p>
            </div>
          </Col>
          <Col xs='12' md='4'>
            <div className='info-item'>
              <img src='/images/support-icon.png' alt='24/7 Support' className='info-icon' />
              <h4>24/7 Support</h4>
              <p>Notre équipe est à votre service 24h/24, 7j/7.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='mt-4'>
        <Row>
          <Col xs='12' md='6'>
            <div className='service-item'>
              <img src='/images/digital-cards-icon.png' alt='Cartes Digitales NFC' className='service-icon' />
              <h4>Cartes Digitales ICart</h4>
              <p>Nous sommes fiers d'offrir des solutions novatrices et accessibles pour soutenir la croissance des entreprises dans un monde de plus en plus numérique. Découvrez nos cartes de visite NFC premium et nos cartes d'avis Google NFC.</p>
            </div>
          </Col>
          <Col xs='12' md='6'>
            <div className='service-item'>
              <img src='/images/nfc-plaques-icon.png' alt='Plaques NFC' className='service-icon' />
              <h4>Plaques ICart</h4>
              <p>Découvrez nos plaques ICart polyvalentes, conçues pour générer des avis positifs sur Google et renforcer votre présence sur Facebook, YouTube, Instagram, TikTok, Snapchat, Doctolib, Planity, et bien plus encore.</p>
            </div>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col xs='12' md='6'>
            <div className='service-item'>
              <img src='/images/nfc-stickers-icon.png' alt='Stickers NFC' className='service-icon' />
              <h4>Menu Avanceés</h4>
              <p>Découvrez nos Menu ICart de haute qualité, conçus pour les restaurants. Scannez simplement un QR code sur la table pour accéder au menu et passer commande directement depuis votre smartphone.</p>
            </div>
          </Col>
          <Col xs='12' md='6'>
            <div className='service-item'>
              <img src='/images/custom-nfc-products-icon.png' alt='Vos Produits NFC Personnalisés' className='service-icon' />
              <h4>Vos Produits ICart Personnalisés</h4>
              <p>Nous proposons un service de personnalisation pour aider les entreprises à créer des cartes de visite NFC, des Menu et des Plaques NFC en accord avec leur charte graphique, et ce à des prix avantageux.</p>
            </div>
          </Col>
        </Row>
      </Container>

       {/* New Delivery Section */}
       <Container className='mt-4' style={{ backgroundColor: '#ddeedf' }}>
        <div className='delivery-section'>
          <h2  className='font-weight-bold'>Service Livraison</h2>
          <p><strong>Expédition de vos produits dans un délai de 3 à 5 jours ouvrés.</strong></p>
          <p>Parce que chez ICart, nous ne faisons pas que livrer des produits, nous apportons une touche d’efficacité à chaque commande, mettant votre satisfaction au cœur de notre engagement. Faites l’expérience d’une livraison qui transforme l’attente en anticipation et confirmez pourquoi choisir ICart, c’est choisir l’excellence à chaque étape.</p>
        </div>
      </Container>


      <Container className='mt-5'>
        <h1 className='text-center mb-5'>Questions Fréquentes</h1>
        <Row>
          <Col xs='12' md='6'>
            <img src='images/celleci.png' alt='FAQ Image' className='img-fluid' />
          </Col>
          <Col xs='12' md='6'>
            <div className='faq-section'>
              <FAQItem question="C'est quoi un QR Code ?" answer="Vous connaissez certainement le code-barre à rayures verticales qu'il suffit de scanner pour obtenir un prix ? Eh bien, le QR Code (ou Quick Response Code pour nos amis anglophones) est également un code-barre 2D qui contient des informations plus fournies. Celui-ci est particulièrement utilisé pour transmettre un document entier, comme un menu de restaurant par exemple !" />
              <FAQItem question="Comment se passe la création d'un QR Code ?" answer="La création d'un QR Code est simple et rapide. Il suffit d'utiliser un générateur de QR Code en ligne ou une application dédiée. Vous entrez les informations que vous souhaitez inclure, et le générateur crée un code unique que vous pouvez télécharger et utiliser." />
              <FAQItem question="Peut-on insérer un lien dans notre menu digital ?" answer="Oui, vous pouvez insérer des liens dans votre menu digital. Ces liens peuvent diriger vos clients vers des pages spécifiques, des informations supplémentaires ou même des options de commande en ligne." />
              <FAQItem question="Comment scanner un QR Code avec un smartphone ?" answer="Pour scanner un QR Code avec un smartphone, ouvrez simplement l'application de l'appareil photo et pointez-la vers le QR Code. Un lien ou une notification apparaîtra, vous permettant d'accéder aux informations contenues dans le code." />
              <FAQItem question="Faut-il télécharger une application spéciale ?" answer="Dans la plupart des cas, il n'est pas nécessaire de télécharger une application spéciale pour scanner un QR Code. Les smartphones modernes ont souvent cette fonctionnalité intégrée directement dans l'application de l'appareil photo." />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='testimonials'>
        <h2 className='text-center mb-5'>Témoignage</h2>
        <Row>
          <Col xs='12' md='4'>
            <div className='testimonial-card'>
              <p>Merci Beaucoup al logiciel , yarhem weldikom service tayara !</p>
              <div className='d-flex align-items-center'>
                <img src='/images/monji-bhar.jpg' alt='Monji Bhar' />
                <div className='ml-3'>
                  <p className='name'>Monji Bhar</p>
                  <p className='title'>Gérant Societe AluPro of AluMenuiserie Pro</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs='12' md='4'>
            <div className='testimonial-card'>
              <p>L'optimisation et la facilité d'utilisation sont impressionnantes, je recommande vivement ICart !</p>
              <div className='d-flex align-items-center'>
                <img src='/images/monji-bhar.jpg' alt='Amine Bhar' />
                <div className='ml-3'>
                  <p className='name'>Amine Bhar</p>
                  <p className='title'>PDG ElBhar For Security</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs='12' md='4'>
            <div className='testimonial-card'>
              <p>Nous avons transformé notre façon de faire des affaires grâce à ICart. Hautement recommandé !</p>
              <div className='d-flex align-items-center'>
                <img src='/images/monji-bhar.jpg' alt='Haythem Bhar' />
                <div className='ml-3'>
                  <p className='name'>Haythem Bhar</p>
                  <p className='title'>Directeur BharTech Solutions</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, actions)(Homepage);
