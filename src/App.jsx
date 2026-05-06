import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const images = {
    hero: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777185?w=1200&q=80',
    categorias: [
      { name: 'Construcción', icon: '🏗️', color: 'from-yellow-500 to-orange-500' },
      { name: 'Electricidad', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
      { name: 'Plomería', icon: '🔧', color: 'from-green-500 to-emerald-500' },
      { name: 'Pintura', icon: '🎨', color: 'from-purple-500 to-pink-500' },
      { name: 'Herramientas', icon: '🔨', color: 'from-red-500 to-orange-500' },
      { name: 'Agrícola', icon: '🌾', color: 'from-yellow-600 to-green-600' },
      { name: 'Automotriz', icon: '🚗', color: 'from-gray-600 to-gray-800' },
      { name: 'Seguridad', icon: '🦺', color: 'from-orange-500 to-yellow-500' },
    ],
    productos: [
      { name: 'Cemento Gris 42.5 kg', price: 'Consultar', img: 'https://images.unsplash.com/photo-1518709766653-a7b3dc68a297?w=400&q=80' },
      { name: 'Tubería PVC 1/2"', price: 'Consultar', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80' },
      { name: 'Pintura Profesional Galón', price: 'Consultar', img: 'https://images.unsplash.com/photo-1589939705384-5f4f84a22ea9?w=400&q=80' },
      { name: 'Taladro Percutor 650W', price: 'Consultar', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80' },
      { name: 'Cable THW #12', price: 'Consultar', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { name: 'Disco de corte 4 1/2"', price: 'Consultar', img: 'https://images.unsplash.com/photo-1530124564045-248d32178a2d?w=400&q=80' },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-6 lg:px-12 text-sm">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <span>🏗️ Construimos contigo</span>
          <span>💬 Cotizaciones por WhatsApp</span>
          <span>🚚 Envíos locales</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-4 border-yellow-500">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🏪</div>
              <div>
                <div className="text-2xl font-black text-gray-900">ProObra</div>
                <div className="text-xs text-gray-500">Ferretería</div>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 max-w-xl">
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar cemento, pintura, herramientas..." className="w-full bg-gray-100 border-2 border-gray-200 rounded-l-xl px-6 py-3 outline-none focus:border-yellow-500 transition" />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 rounded-r-xl font-bold transition">🔍</button>
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#catalogo" className="text-sm font-bold hover:text-yellow-600 transition">Catálogo</a>
              <a href="#categorias" className="text-sm font-bold hover:text-yellow-600 transition">Categorías</a>
              <a href="#aliados" className="text-sm font-bold hover:text-yellow-600 transition">Aliados</a>
              <a href="#contacto" className="text-sm font-bold hover:text-yellow-600 transition">Contacto</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="hidden lg:block text-sm font-bold hover:text-yellow-600 transition">Iniciar sesión</a>
              <a href="https://wa.me/584120000000" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition transform hover:scale-105 flex items-center gap-2">
                💬 Cotizar
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center bg-gradient-to-br from-yellow-500 via-orange-500 to-yellow-600">
        <div className="absolute inset-0">
          <img src={images.hero} alt="Ferretería" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Todo para tu proyecto<br/>
              <span className="text-black">en un solo lugar</span>
            </h1>
            <p className="text-xl text-white/90 mb-10">
              Materiales, herramientas y soluciones para construir, reparar y mejorar. Atención a contratistas y proyectos grandes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalogo" className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-xl">
                Ver catálogo
              </a>
              <a href="https://wa.me/584120000000" className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-bold text-lg transition border-2 border-black hover:bg-gray-100">
                Solicitar cotización
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Categorías</h2>
            <p className="text-gray-600 text-lg">Encuentra lo que necesitas</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {images.categorias.map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-6xl mb-4 transition transform group-hover:scale-105 group-hover:shadow-xl`}>
                  {cat.icon}
                </div>
                <h3 className="text-center font-bold text-lg">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="catalogo" className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Productos destacados</h2>
            <p className="text-gray-600 text-lg">Calidad y confianza</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.productos.map((prod, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">{prod.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-yellow-600">{prod.price}</span>
                    <a href="https://wa.me/584120000000" className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2.5 rounded-xl font-bold transition transform hover:scale-105">
                      Consultar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '👷', title: 'Atención a contratistas', desc: 'Precios especiales' },
              { icon: '💬', title: 'Cotizaciones rápidas', desc: 'Respuesta inmediata' },
              { icon: '📦', title: 'Amplio inventario', desc: 'Todo en un lugar' },
              { icon: '🚚', title: 'Despacho local', desc: 'Envíos a obra' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6">
            ¿Tienes un proyecto?
          </h2>
          <p className="text-xl text-gray-600 mb-10">Cotiza por WhatsApp y recibe atención personalizada</p>
          <a href="https://wa.me/584120000000" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl transition transform hover:scale-105 shadow-xl">
            💬 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-16 px-6 lg:px-12 border-t-4 border-yellow-500">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🏪</div>
                <div>
                  <div className="text-2xl font-black">ProObra</div>
                  <div className="text-xs text-gray-400">Ferretería</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">Ferretería y proveedor de materiales para construcción, hogar, agricultura y proyectos profesionales en Punto Fijo.</p>
            </div>
            <div>
              <h4 className="font-black text-lg mb-6">Categorías</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition">Construcción</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Electricidad</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Plomería</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Herramientas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-6">Contacto</h4>
              <ul className="space-y-3 text-gray-400">
                <li>💬 WhatsApp: +58 412-000-0000</li>
                <li>📍 Punto Fijo, Falcón</li>
                <li>🕒 Lun-Sáb: 7AM - 6PM</li>
                <li>✉️ ventas@proobra.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">© 2026 ProObra Ferretería. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪</div>
        </div>
      </footer>
    </div>
  )
}

export default App
