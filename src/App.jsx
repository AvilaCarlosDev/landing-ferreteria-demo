import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('Todos')

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const categorias = [
    { name: 'Todos', icon: '🏪' },
    { name: 'Construcción', icon: '🏗️' },
    { name: 'Electricidad', icon: '⚡' },
    { name: 'Plomería', icon: '🔧' },
    { name: 'Pintura', icon: '🎨' },
    { name: 'Herramientas', icon: '🔨' },
    { name: 'Seguridad', icon: '🦺' },
    { name: 'Agrícola', icon: '🌾' },
    { name: 'Automotriz', icon: '🚗' },
  ]

  const productos = [
    { name: 'Cemento Gris 42.5 kg', price: '$12', img: 'https://images.unsplash.com/photo-1518709766653-a7b3dc68a297?w=500&q=80', cat: 'Construcción', badge: 'Popular' },
    { name: 'Tubería PVC 1/2"', price: '$3.50', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=80', cat: 'Plomería', badge: '' },
    { name: 'Pintura Profesional Galón', price: '$18', img: 'https://images.unsplash.com/photo-1589939705384-5f4f84a22ea9?w=500&q=80', cat: 'Pintura', badge: 'Oferta' },
    { name: 'Taladro Percutor 650W', price: '$65', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=80', cat: 'Herramientas', badge: 'Nuevo' },
    { name: 'Cable THW #12 (metro)', price: '$1.20', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80', cat: 'Electricidad', badge: '' },
    { name: 'Disco de Corte 4 1/2"', price: '$2.80', img: 'https://images.unsplash.com/photo-1530124564045-248d32178a2d?w=500&q=80', cat: 'Herramientas', badge: 'Popular' },
    { name: 'Casco Seguridad Amarillo', price: '$8', img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777185?w=500&q=80', cat: 'Seguridad', badge: '' },
    { name: 'Varilla Hierro 3/8" x 6m', price: '$9', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=80', cat: 'Construcción', badge: '' },
  ]

  const filtered = activeTab === 'Todos' ? productos : productos.filter(p => p.cat === activeTab)

  return (
    <div className="ferro-app">
      <div className="top-bar">
        <div className="top-bar-inner">
          <span>🏗️ Materiales de calidad para tu obra</span>
          <span>📞 Llámanos: +58 412 000 0000</span>
          <span>🚚 Envíos locales disponibles</span>
        </div>
      </div>

      <header className={`ferro-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="ferro-logo">
            <div className="logo-badge">🏪</div>
            <div>
              <span className="logo-name">ProObra</span>
              <span className="logo-sub">Ferretera Industrial</span>
            </div>
          </a>
          <div className="ferro-search">
            <span>🔍</span>
            <input type="text" placeholder="Cemento, tuberías, herramientas..." />
            <button>Buscar</button>
          </div>
          <nav className="ferro-nav">
            <a href="#catalogo">Catálogo</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a href="https://wa.me/584120000000" className="btn-whatsapp">💬 Cotizar por WhatsApp</a>
        </div>
      </header>

      <main>
        <section className="ferro-hero">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777185?w=1600&q=80" alt="" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-body">
            <div className="hero-left">
              <div className="hero-eyebrow"><span>⚡</span> Ferretera industrial desde 1995</div>
              <h1>Todo para <span>construir</span>,<br />reparar y crear</h1>
              <p>Cemento, herramientas, electricidad, plomería y más.<br />Atención a contratistas y proyectos especiales.</p>
              <div className="hero-actions">
                <a href="#catalogo" className="btn-primary">Ver catálogo completo →</a>
                <a href="https://wa.me/584120000000" className="btn-secondary">💬 Cotizar ahora</a>
              </div>
              <div className="hero-trust">
                <div className="trust-item"><strong>1,200+</strong><span>Productos</span></div>
                <div className="trust-sep" />
                <div className="trust-item"><strong>28 años</strong><span>De experiencia</span></div>
                <div className="trust-sep" />
                <div className="trust-item"><strong>4.9★</strong><span>Valoración</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="catalogo" className="catalogo-section">
          <div className="section-wrap">
            <div className="catalogo-header">
              <h2>Nuestro Catálogo</h2>
              <p>Materiales y herramientas de la mejor calidad</p>
            </div>
            <div className="tabs-scroll">
              {categorias.map((c, i) => (
                <button key={i} className={`tab-btn ${activeTab === c.name ? 'active' : ''}`} onClick={() => setActiveTab(c.name)}>
                  {c.icon} {c.name}
                </button>
              ))}
            </div>
            <div className="productos-grid">
              {filtered.map((p, i) => (
                <div key={i} className="producto-card">
                  <div className="prod-img-wrap">
                    <img src={p.img} alt={p.name} loading="lazy" />
                    {p.badge && <div className={`prod-badge ${p.badge.toLowerCase()}`}>{p.badge}</div>}
                  </div>
                  <div className="prod-body">
                    <span className="prod-cat">{p.cat}</span>
                    <h3>{p.name}</h3>
                    <div className="prod-footer">
                      <span className="prod-price">{p.price}</span>
                      <a href="https://wa.me/584120000000" className="btn-cotizar">Cotizar</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="section-wrap cta-inner">
            <div>
              <h2>¿Tienes un proyecto grande?</h2>
              <p>Cotizaciones especiales para contratistas y obras.</p>
            </div>
            <a href="https://wa.me/584120000000" className="btn-cta-big">💬 Solicitar cotización especial</a>
          </div>
        </section>

        <footer className="ferro-footer">
          <div className="section-wrap footer-inner">
            <div>
              <span style={{color:'white',fontSize:'22px',fontWeight:900}}>🏪 ProObra</span>
              <p>Tu ferretera de confianza desde 1995</p>
            </div>
            <div className="footer-links">
              <h4>Categorías</h4>
              <a href="#">Construcción</a>
              <a href="#">Electricidad</a>
              <a href="#">Herramientas</a>
            </div>
            <div className="footer-links">
              <h4>Empresa</h4>
              <a href="#">Quiénes somos</a>
              <a href="#">Blog</a>
              <a href="#">Contacto</a>
            </div>
          </div>
          <div className="footer-bottom">© 2026 ProObra · Ferretera Industrial</div>
        </footer>
      </main>
    </div>
  )
}

export default App
