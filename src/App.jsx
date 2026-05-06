import { useState } from 'react'

function App() {
  const categorias = [
    { name: 'Construcción', icon: '🏗️', color: 'from-yellow-500 to-orange-500' },
    { name: 'Electricidad', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
    { name: 'Plomería', icon: '🔧', color: 'from-green-500 to-emerald-500' },
    { name: 'Pintura', icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { name: 'Herramientas', icon: '🔨', color: 'from-red-500 to-orange-500' },
    { name: 'Agrícola', icon: '🌾', color: 'from-yellow-600 to-green-600' },
    { name: 'Automotriz', icon: '🚗', color: 'from-gray-600 to-gray-800' },
    { name: 'Seguridad', icon: '🦺', color: 'from-orange-500 to-yellow-500' },
  ]

  const productos = [
    { name: 'Cemento Gris 42.5 kg', img: 'https://images.unsplash.com/photo-1518709766653-a7b3dc68a297?w=500&q=80' },
    { name: 'Tubería PVC 1/2"', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=80' },
    { name: 'Pintura Profesional Galón', img: 'https://images.unsplash.com/photo-1589939705384-5f4f84a22ea9?w=500&q=80' },
    { name: 'Taladro Percutor 650W', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=80' },
    { name: 'Cable THW #12', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
    { name: 'Disco de corte 4 1/2"', img: 'https://images.unsplash.com/photo-1530124564045-248d32178a2d?w=500&q=80' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-3 px-6 lg:px-12 text-sm">
        <div className="max-w-[1920px] mx-auto flex flex-wrap justify-center lg:justify-between gap-4">
          <span>🏗️ Construimos contigo</span>
          <span>💬 Cotizaciones por WhatsApp</span>
          <span>🚚 Envíos locales</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-4 border-yellow-500">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🏪</span>
              <div>
                <span className="text-2xl font-black text-gray-900">ProObra</span>
                <p className="text-xs text-gray-500">Ferretería</p>
              </div>
            </div>

            <div className="hidden lg:flex flex-1 max-w-xl">
              <input type="text" placeholder="Buscar cemento, pintura, herramientas..." className="w-full bg-gray-100 border-2 border-gray-200 rounded-l-xl px-6 py-3 outline-none focus:border-yellow-500 transition" />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 rounded-r-xl font-bold transition">🔍</button>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#catalogo" className="text-sm font-bold hover:text-yellow-600 transition">Catálogo</a>
              <a href="#categorias" className="text-sm font-bold hover:text-yellow-600 transition">Categorías</a>
              <a href="#contacto" className="text-sm font-bold hover:text-yellow-600 transition">Contacto</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="#" className="hidden lg:block text-sm font-bold hover:text-yellow-600 transition">Iniciar sesión</a>
              <a href="https://wa.me/584120000000" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition flex items-center gap-2">
                <span>💬</span> Cotizar
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center bg-gradient-to-br from-yellow-500 via-orange-500 to-yellow-600">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777185?w=1600&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 py-24 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                Todo para tu proyecto<br/>
                <span className="text-black">en un solo lugar</span>
              </h1>
              <p className="text-xl text-white/90 mb-12">
                Materiales, herramientas y soluciones para construir, reparar y mejorar. Atención a contratistas y proyectos grandes.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href="#catalogo" className="bg-black text-white px-10 py-5 rounded-xl font-bold text-lg transition shadow-xl">
                  Ver catálogo
                </a>
                <a href="https://wa.me/584120000000" className="bg-white text-yellow-600 px-10 py-5 rounded-xl font-bold text-lg transition border-2 border-black hover:bg-gray-100">
                  Solicitar cotización
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categorías */}
        <section id="categorias" className="py-24 bg-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Categorías</h2>
              <p className="text-lg text-gray-600">Encuentra lo que necesitas</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {categorias.map((cat, i) => (
                <a key={i} href="#" className="group cursor-pointer">
                  <div className={`aspect-square rounded-3xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-7xl mb-6 transition transform group-hover:scale-105 group-hover:shadow-xl`}>
                    <span aria-hidden="true">{cat.icon}</span>
                  </div>
                  <h3 className="text-center font-bold text-xl text-gray-900">{cat.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Productos */}
        <section id="catalogo" className="py-24 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Productos destacados</h2>
              <p className="text-lg text-gray-600">Calidad y confianza</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {productos.map((prod, i) => (
                <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <div className="aspect-square overflow-hidden">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-xl mb-6">{prod.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black text-yellow-600">Consultar</span>
                      <a href="https://wa.me/584120000000" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-bold transition">
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
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: '👷', title: 'Atención a contratistas', desc: 'Precios especiales' },
                { icon: '💬', title: 'Cotizaciones rápidas', desc: 'Respuesta inmediata' },
                { icon: '📦', title: 'Amplio inventario', desc: 'Todo en un lugar' },
                { icon: '🚚', title: 'Despacho local', desc: 'Envíos a obra' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-8">
              ¿Tienes un proyecto?
            </h2>
            <p className="text-2xl text-gray-600 mb-12">Cotiza por WhatsApp y recibe atención personalizada</p>
            <a href="https://wa.me/584120000000" className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full font-bold text-2xl transition shadow-xl">
              <span>💬</span> Cotizar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-20 border-t-4 border-yellow-500">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🏪</span>
                <div>
                  <span className="text-2xl font-black">ProObra</span>
                  <p className="text-xs text-gray-400">Ferretería</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md text-lg">
                Ferretería y proveedor de materiales para construcción, hogar, agricultura y proyectos profesionales en Punto Fijo.
              </p>
            </div>

            <div>
              <h3 className="font-black text-xl mb-8">Categorías</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition">Construcción</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Electricidad</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Plomería</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Herramientas</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-xl mb-8">Contacto</h3>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li>💬 +58 412-000-0000</li>
                <li>📍 Punto Fijo, Falcón</li>
                <li>🕒 Lun-Sáb: 7AM - 6PM</li>
                <li>✉️ ventas@proobra.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2026 ProObra Ferretería. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
