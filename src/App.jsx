import { useMemo, useState } from 'react';

const WHATSAPP_NUMBER = '923190224901';

const products = [
{
  id: 1,
  name: 'Gold Plated Necklace Set',
  category: 'Necklace',
  price: 9000,
  image: '/Goldplatedset.jpeg',
  material: 'Gold Plated Aritificial Jewellery',
  desc: 'Detailed handcrafted necklace set with matching earrings.'
},
  {
    id: 2,
    name: 'Emerald Signature Ring',
    category: 'Rings',
    price: 6200,
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    material: '925 Sterling Silver',
    desc: 'Statement ring with premium zircon stones and emerald center.'
  },
  {
    id: 3,
    name: 'Noor Pearl Necklace',
    category: 'Necklace',
    price: 7400,
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    material: 'Freshwater Pearls',
    desc: 'Classic pearl string necklace for formal events and gifting.'
  },
  {
    id: 4,
    name: 'Minimal Gold Hoops',
    category: 'Earrings',
    price: 2900,
    image:
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80',
    material: '18K Gold Plated',
    desc: 'Everyday lightweight hoops designed for daily wear comfort.'
  },
  {
    id: 5,
    name: 'Indian Pearl Garland(Mala)',
    category: 'Chains',
    price: 3500,
    image:
      '/mala.jpeg',
    material: 'artificial jewellery',
    desc: 'Set of handcrafted mala for weddings and festive occasions.'
  },
  {
    id: 6,
    name: 'Gold Plated Pearl Set',
    category: 'Necklace',
    price: 5000,
    image:
      '/set.jpeg',
    material: 'Gold Plated Aritificial Jewellery',
    desc: 'Elegant pearl set with matching earrings.'
  }
];

const reviews = [
  {
    name: 'Hina A.',
    text: 'Delivery was fast and the bridal set looked even better than pictures.'
  },
  {
    name: 'Maryam R.',
    text: 'Excellent quality, reasonable rates and very professional customer support.'
  },
  {
    name: 'Sana M.',
    text: 'I ordered 2 rings through WhatsApp and process was super smooth.'
  }
];

const formatPKR = (price) => `Rs. ${price.toLocaleString('en-PK')}`;

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    []
  );

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((current) => current.filter((_, index) => index !== indexToRemove));
  };

  const whatsappProductLink = (productName) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Assalam o Alaikum! I want to order: ${productName}`
    )}`;

  const whatsappCartLink =
    cart.length === 0
      ? '#'
      : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Assalam o Alaikum! Please confirm my order:\n${cart
            .map((item, index) => `${index + 1}. ${item.name} - ${formatPKR(item.price)}`)
            .join('\n')}\n\nTotal: ${formatPKR(cartTotal)}\nName:\nAddress:\nPhone:`
        )}`;

  return (
    <>
      <header className="hero" id="home">
  <nav className="navbar">
    <div className="brand">
      Nayyab Jewellers
      <span className="brand-subtitle"> by Waseem Ahmad</span>
    </div>
    <div className="nav-links">
      <a href="#collection">Collection</a>
      <a href="#why-us">Why Us</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
        <div className="hero-content">
          <p className="eyebrow">Now Taking Online Orders</p>
          <h1>Modern Jewellery Store for Your Signature Style</h1>
          <p>
            Explore timeless gold, silver, and bridal jewellery from Gujranwala, alongside 
            beautifully crafted artificial designs. Experience trusted quality, secure shipping,
            and seamless WhatsApp ordering.
          </p>
          <a className="primary-btn" href="#collection">
            Shop Latest Collection
          </a>
        </div>
      </header>

      <main>
        <section className="collection" id="collection">
          <div className="section-head">
            <h2>Trending Collection</h2>
            <p>Filter by category and add products to your order cart instantly. We offer authentic gold, silver, and artificial jewellery options.</p>
          </div>

          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? 'chip active' : 'chip'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid">
            {filteredProducts.map((product) => (
              <article className="card" key={product.id}>
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="card-body">
                  <h3>{product.name}</h3>
                  <p className="meta">{product.material}</p>
                  <p>{product.desc}</p>
                  <strong>{formatPKR(product.price)}</strong>
                  <div className="actions">
                    <button onClick={() => addToCart(product)} className="primary-btn small">
                      Add to Cart
                    </button>
                    <a href={whatsappProductLink(product.name)} target="_blank" rel="noreferrer" className="ghost-btn">
                      Order Direct
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="why-us" id="why-us">
          <div>
            <h2>Why Nayyab Jewellers?</h2>
            <ul>
              <li>Authentic material details and transparent pricing for all jewellery types.</li>
              <li>Same-day response for online orders on WhatsApp.</li>
              <li>Custom bridal sets available on advance booking.</li>
              <li>Artificial jewellery options for budget-friendly choices.</li>
              <li>Cash on delivery available in selected cities.</li>
            </ul>
          </div>
          <div className="cart-box">
            <h3>Your Order Cart ({cart.length})</h3>
            {cart.length === 0 ? (
              <p>Add products to create your order list.</p>
            ) : (
              <>
                <ul>
                  {cart.map((item, index) => (
                    <li key={`${item.id}-${index}`}>
                      <span>{item.name}</span>
                      <div>
                        <small>{formatPKR(item.price)}</small>
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="total">Total: {formatPKR(cartTotal)}</p>
              </>
            )}
            <a
              className={cart.length === 0 ? 'primary-btn disabled' : 'primary-btn'}
              href={whatsappCartLink}
              target="_blank"
              rel="noreferrer"
              aria-disabled={cart.length === 0}
            >
              Checkout on WhatsApp
            </a>
          </div>
        </section>

        <section className="reviews" id="reviews">
          <h2>Customer Love</h2>
          <div className="review-grid">
            {reviews.map((review) => (
              <blockquote key={review.name}>
                <p>"{review.text}"</p>
                <footer>{review.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <h3>Nayyab Jewellers</h3>
        <p>Nayyab Jewellers By WASEEM AHMAD 
           Madina market 
          Sarafa bazar. Gujranwala</p>
          <p>• WhatsApp: +92 319 0224901</p>
        <p>Open Daily: 11:00 AM - 9:00 PM</p>
        <p>© {new Date().getFullYear()} Nayyab Jewellers. All rights reserved.</p>
      </footer>
    </>
  );
}