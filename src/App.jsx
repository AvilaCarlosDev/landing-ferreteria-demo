import { useState } from 'react'

function App() {
  // Imágenes reales de Unsplash - Herramientas y ferretería
  const images = {
    hero: 'https://source.unsplash.com/random/600x400/?tools,hardware',
    hero2: 'https://source.unsplash.com/random/600x400/?tools,hardware',
    hero3: 'https://source.unsplash.com/random/600x400/?tools,hardware',
    hero4: 'https://source.unsplash.com/random/600x400/?tools,hardware',
    categorias: [
      'https://source.unsplash.com/random/600x400/?tools,hardware', // Herramientas manuales
      'https://source.unsplash.com/random/600x400/?tools,hardware', // Eléctrico
      'https://source.unsplash.com/random/600x400/?tools,hardware', // Fontanería
      'https://source.unsplash.com/random/600x400/?tools,hardware', // Pinturas
      'https://source.unsplash.com/random/600x400/?tools,hardware', // Seguridad
      'https://source.unsplash.com/random/600x400/?tools,hardware', // Construcción
    ],
    productos: [
      { img: 'https://source.unsplash.com/random/600x400/?tools,hardware', name: 'Taladro Percutor', price: '$45', oldPrice: '$55' },
      { img: 'https://source.unsplash.com/random/600x400/?tools,hardware', name: 'Set 50 Piezas', price: '$35', oldPrice: '$45' },
      { img: 'https://source.unsplash.com/random/600x400/?tools,hardware', name: 'Sierra Circular', price: '$65', oldPrice: '$80' },
      { img: 'https://source.unsplash.com/random/600x400/?tools,hardware', name: 'Compresor', price: '$120', oldPrice: '$150' },
    ],
    proyectos: [
      'https://source.unsplash.com/random/600x400/?tools,hardware',
      'https://source.unsplash.com/random/600x400/?tools,hardware',
      'https://source.unsplash.com/random/600x400/?tools,hardware',
    ],
  }

  return (
    <div className="min-h-[80vh] lg:min-h-[90vh] bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white sticky top-0 z-50 shadow-2xl">
        <div className="bg-blue-950 py-2 text-xs">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              ENVÍOS GRATIS $50+
            </span>
            <span>📞 0412-000-0000 | 📍 Punto Fijo, Falcón</span>
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-4xl font-black text-white shadow-lg transform -rotate-6">
                ⚙️
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tight">FERRO<span className="text-orange-400">MAX</span></h1>
                <p className="text-xs text-blue-300 tracking-widest">DESDE 1995</p>
              </div>
            </div>

            <div className="flex-1 max-w-2xl hidden lg:block">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar herramientas, materiales, equipos..."
                  className="w-full bg-white/10 border-2 border-blue-700 rounded-xl px-6 py-4 pl-12 text-white placeholder-blue-300 focus:outline-none focus:border-orange-500 transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition">
                  Buscar
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="hidden lg:block text-center">
                <div className="text-2xl">👤</div>
                <div className="text-xs text-blue-300">Cuenta</div>
              </a>
              <a href="#" className="text-center">
                <div className="text-2xl">🛒</div>
                <div className="text-xs text-blue-300">Carrito</div>
              </a>
              <a href="https://wa.me/584120000000" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition flex items-center gap-2">
                <span>💬</span>
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <nav className="border-t border-blue-700">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="flex gap-8 overflow-x-auto py-4 text-sm font-bold">
              <a href="#hero-section" className="whitespace-nowrap hover:text-orange-400 transition">🏠 Inicio</a>
              <a href="#categorias" className="whitespace-nowrap hover:text-orange-400 transition">🔧 Herramientas</a>
              <a href="#ofertas" className="whitespace-nowrap hover:text-orange-400 transition text-orange-400">⚡ Ofertas</a>
              <a href="#proyectos" className="whitespace-nowrap hover:text-orange-400 transition">🏗️ Proyectos</a>
              <a href="#marcas" className="whitespace-nowrap hover:text-orange-400 transition">🏷️ Marcas</a>
              <a href="#contacto" className="whitespace-nowrap hover:text-orange-400 transition">📞 Contacto</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero-section" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold mb-8 animate-pulse">
                🔥 OFERTA ESPECIAL -40%
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-none">
                HERRAMIENTAS<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">PROFESIONALES</span>
              </h2>

              <p className="text-xl text-blue-200 mb-10 max-w-xl">
                Equipamiento industrial para construcción, reparación y mantenimiento. 
                Calidad garantizada con los mejores precios de Paraguaná.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#ofertas" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-xl">
                  🛒 Ver Ofertas
                </a>
                <a href="#categorias" className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-10 py-5 rounded-xl font-bold text-lg transition border-2 border-white/30">
                  Explorar Catálogo
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-700">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚚</div>
                  <div className="text-blue-200 text-sm font-bold">Envío 24h</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">✅</div>
                  <div className="text-blue-200 text-sm font-bold">Garantía</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💳</div>
                  <div className="text-blue-200 text-sm font-bold">Pago Fácil</div>
                </div>
              </div>
            </div>

            {/* Hero Images - Collage con fotos reales */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-orange-500/50 shadow-2xl transform -rotate-3">
                    <img src={images.hero} alt="Herramientas profesionales" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-blue-500/50 shadow-xl transform rotate-2">

      {/* Social Proof - Stats */}
      <section className="bg-blue-900 py-12 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">+20K</div>
              <div className="text-sm lg:text-base font-bold text-blue-200">Productos vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">4.8★</div>
              <div className="text-sm lg:text-base font-bold text-blue-200">Calificación</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">+15</div>
              <div className="text-sm lg:text-base font-bold text-blue-200">Años en el mercado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">5K+</div>
              <div className="text-sm lg:text-base font-bold text-blue-200">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </section>
                    <img src={images.hero2} alt="Equipos de ferretería" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-red-500/50 shadow-xl transform rotate-3">
                    <img src={images.hero3} alt="Set de herramientas" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-yellow-500/50 shadow-2xl transform -rotate-2">
                    <img src={images.hero4} alt="Sierra profesional" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl transform rotate-12">
                <div className="text-4xl font-black">-40%</div>
                <div className="text-sm font-bold">DSCTO</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Categories */}
      <section id="categorias" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              📂 Categorías Principales
            </span>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6">TODO PARA TU<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">PROYECTO</span></h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Herramientas Manuales', count: '500+ productos', img: images.categorias[0], icon: '🔨', color: 'from-orange-500 to-red-600' },
              { name: 'Eléctrico', count: '300+ productos', img: images.categorias[1], icon: '⚡', color: 'from-yellow-500 to-orange-600' },
              { name: 'Fontanería', count: '250+ productos', img: images.categorias[2], icon: '💧', color: 'from-blue-500 to-cyan-600' },
              { name: 'Pinturas', count: '200+ productos', img: images.categorias[3], icon: '🎨', color: 'from-purple-500 to-pink-600' },
              { name: 'Seguridad', count: '180+ productos', img: images.categorias[4], icon: '🦺', color: 'from-green-500 to-teal-600' },
              { name: 'Construcción', count: '400+ productos', img: images.categorias[5], icon: '🧱', color: 'from-amber-500 to-orange-600' },
            ].map((cat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-xl">
                  <img 
                    src={cat.img} 
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-0 group-hover:opacity-90 transition duration-500`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-5xl mb-4 opacity-0 group-hover:opacity-100 transition duration-500 transform translate-y-4 group-hover:translate-y-0">{cat.icon}</div>
                    <h3 className="text-3xl font-black text-white mb-2 opacity-0 group-hover:opacity-100 transition duration-500 delay-100">{cat.name}</h3>
                    <p className="text-white/90 font-bold opacity-0 group-hover:opacity-100 transition duration-500 delay-200">{cat.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="ofertas" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-bold text-sm mb-4 animate-pulse">
                ⏰ TIEMPO LIMITADO
              </span>
              <h2 className="text-6xl lg:text-7xl font-black text-gray-900">OFERTAS<br/><span className="text-red-500">FLASH</span></h2>
            </div>
            <div className="flex gap-4">
              {['02', '14', '35', '60'].map((num, i) => (
                <div key={i} className="bg-gray-900 text-white p-4 rounded-2xl text-center min-w-[80px]">
                  <div className="text-3xl font-black">{num}</div>
                  <div className="text-xs text-gray-400">{['HRS', 'MIN', 'SEG', 'MS'][i]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.productos.map((prod, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={prod.img} 
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    -{Math.round((1 - prod.price / prod.oldPrice) * 100)}%
                  </div>
                  <button className="absolute top-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-50 shadow-lg">
                    ❤️
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="font-black text-xl mb-3 text-gray-900">{prod.name}</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-gray-400 line-through text-lg">${prod.oldPrice}</span>
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">${prod.price}</span>
                  </div>
                  <a href="https://wa.me/584120000000" className="block w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-4 rounded-xl font-bold text-center transition transform hover:scale-105">
                    🛒 COMPRAR
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-10 py-5 rounded-xl font-bold transition">
              Ver todas las ofertas →
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              🏗️ Casos de Uso
            </span>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900">PARA CADA<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">PROYECTO</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Construcción', desc: 'Todo para obra gris y acabados', img: images.proyectos[0], tools: '500+ herramientas' },
              { title: 'Reparaciones', desc: 'Mantenimiento del hogar', img: images.proyectos[1], tools: '300+ equipos' },
              { title: 'Industrial', desc: 'Equipamiento profesional', img: images.proyectos[2], tools: '800+ productos' },
            ].map((proj, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-4xl font-black text-white mb-2">{proj.title}</h3>
                    <p className="text-white/80 text-lg mb-4">{proj.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-400 font-bold">{proj.tools}</span>
                      <span className="text-white text-2xl transform group-hover:translate-x-2 transition">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="marcas" className="py-24 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">MARCAS DE CONFIANZA</h2>
            <p className="text-gray-400 text-xl">Trabajamos con los mejores fabricantes mundiales</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Stanley', 'Bosch', 'Makita', 'DeWalt', 'Milwaukee', 'Craftsman', 'Black+Decker', 'Husqvarna', 'Ryobi', 'Festool', 'Hilti', 'Metabo'].map((brand, index) => (
              <div key={index} className="bg-gray-800 hover:bg-gray-700 p-8 rounded-2xl flex items-center justify-center transition transform hover:scale-105">
                <span className="text-2xl font-black text-gray-300">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contacto" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-7xl mb-8 block">📞</span>
          <h2 className="text-6xl lg:text-7xl font-black mb-8">¿NECESITAS AYUDA?</h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Nuestro equipo de expertos te asesora gratis para elegir las herramientas correctas para tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/584120000000" className="bg-white hover:bg-gray-100 text-orange-600 px-12 py-6 rounded-2xl font-black text-xl transition transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
              <span>💬</span>
              Hablar por WhatsApp
            </a>
            <a href="tel:+584120000000" className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 rounded-2xl font-black text-xl transition transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
              <span>📱</span>
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white">⚙️</div>
                <div>
                  <h3 className="text-2xl font-black text-white">FERRO<span className="text-orange-500">MAX</span></h3>
                  <p className="text-xs text-gray-500 tracking-widest">DESDE 1995</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6 max-w-md">
                La ferretería industrial más grande de Paraguaná. Calidad, precios bajos y asesoría experta.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 hover:bg-orange-500 text-white w-12 h-12 rounded-xl flex items-center justify-center transition text-xl">📘</a>
                <a href="#" className="bg-gray-800 hover:bg-pink-600 text-white w-12 h-12 rounded-xl flex items-center justify-center transition text-xl">📷</a>
                <a href="#" className="bg-gray-800 hover:bg-green-500 text-white w-12 h-12 rounded-xl flex items-center justify-center transition text-xl">💬</a>
              </div>
            </div>

            <div>
              <h4 className="font-black text-white text-lg mb-6">Categorías</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-orange-500 transition">Herramientas</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Eléctrico</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Fontanería</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Pinturas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white text-lg mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li>📍 Av. Principal, Punto Fijo</li>
                <li>📞 0412-000-0000</li>
                <li>✉️ ventas@ferromax.com</li>
                <li>🕒 Lun-Sab: 7AM-6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2026 Ferromax. Hecho con 💚 por Carlos Ávila
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
