import { useMemo, useState } from 'react'

const WHATSAPP_URL = 'https://wa.me/584120000000'

const categories = ['Todos', 'Construcción', 'Electricidad', 'Plomería', 'Herramientas', 'Pintura', 'Seguridad']

const products = [
  {
    name: 'Cemento UltraMix 42.5kg',
    category: 'Construcción',
    price: '$12.50',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=85&fit=crop',
    stock: '280 sacos',
    badge: 'Obra',
  },
  {
    name: 'Taladro Percutor Pro 750W',
    category: 'Herramientas',
    price: '$68',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&q=85&fit=crop',
    stock: '18 unidades',
    badge: 'Top',
  },
  {
    name: 'Cable THW #12 por metro',
    category: 'Electricidad',
    price: '$1.20',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=85&fit=crop',
    stock: '1.500 m',
  },
  {
    name: 'Tubería PVC presión 1/2”',
    category: 'Plomería',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&q=85&fit=crop',
    stock: '320 tubos',
  },
  {
    name: 'Pintura Acrílica Galón Pro',
    category: 'Pintura',
    price: '$18',
    image: 'https://images.unsplash.com/photo-1589939705384-5f4f84a22ea9?w=900&q=85&fit=crop',
    stock: '74 galones',
    badge: 'Oferta',
  },
  {
    name: 'Kit Seguridad Obra Básico',
    category: 'Seguridad',
    price: '$24',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777185?w=900&q=85&fit=crop',
    stock: '42 kits',
  },
]

const departments = [
  ['Construcción', 'Cemento, arena, cabillas, bloques y químicos para obra.', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&fit=crop'],
  ['Electricidad', 'Cables, breakers, canaletas, luminarias y tableros.', 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=85&fit=crop'],
  ['Plomería', 'PVC, grifería, conexiones, bombas y tanques.', 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&q=85&fit=crop'],
  ['Herramientas', 'Manual, eléctrica, medición, corte y accesorios.', 'https://images.unsplash.com/photo-1530124564045-248d32178a2d?w=900&q=85&fit=crop'],
]

const projectPacks = [
  {
    title: 'Kit Remodelación Baño',
    desc: 'Tuberías, pega, grifería base, silicón, pintura antihongos y accesorios.',
    price: 'Desde $89',
  },
  {
    title: 'Kit Electricista Residencial',
    desc: 'Cableado, breakers, tomas, canaletas, cinta, tester y consumibles.',
    price: 'Desde $64',
  },
  {
    title: 'Kit Obra Gris 20m²',
    desc: 'Cemento, cabilla, arena, discos, guantes y despacho coordinado.',
    price: 'Cotizar',
  },
]

const brands = ['Truper', 'DeWalt', 'Stanley', 'Pavco', 'Sika', '3M', 'Bticino', 'Sherwin']

const services = [
  ['Cotización por lista', 'Envía tu lista de materiales y te devolvemos precio, stock y alternativas.'],
  ['Despacho a obra', 'Coordinamos entrega por zona, volumen y horario de recepción.'],
  ['Atención a contratistas', 'Precios por volumen, facturación y reposición recurrente.'],
  ['Asesoría técnica', 'Te ayudamos a elegir calibre, medida, rendimiento y compatibilidad.'],
]

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-[#eef0ed] text-[#141613] antialiased">
      <div className="bg-[#141613] text-xs font-black uppercase tracking-[0.18em] text-yellow-300/85">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-3 md:justify-between">
          <span>Materiales para obra y mantenimiento</span>
          <span>Despacho local coordinado</span>
          <span>Cotizaciones por WhatsApp</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b-4 border-yellow-400 bg-[#eef0ed]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="ObraMax inicio">
            <span className="grid h-12 w-12 place-items-center bg-[#141613] text-lg font-black text-yellow-300 shadow-xl shadow-black/10">OM</span>
            <span>
              <span className="block text-xl font-black uppercase tracking-[-0.02em]">ObraMax Supply</span>
              <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#6b7068]">Ferretería industrial</span>
            </span>
          </a>

          <div className="hidden flex-1 items-center border-2 border-[#d7dbd2] bg-white px-4 py-2.5 transition focus-within:border-yellow-400 lg:flex">
            <span className="text-[#6b7068]">⌕</span>
            <input className="w-full bg-transparent px-3 text-sm font-bold outline-none placeholder:text-[#899085]" placeholder="Buscar cemento, cable, tubería, taladro..." />
            <button className="bg-[#141613] px-5 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:bg-yellow-400 hover:text-[#141613]">
              Buscar
            </button>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-black text-[#555b52] lg:flex">
            <a href="#catalogo" className="transition hover:text-[#141613]">Catálogo</a>
            <a href="#paquetes" className="transition hover:text-[#141613]">Paquetes</a>
            <a href="#servicios" className="transition hover:text-[#141613]">Servicios</a>
          </nav>

          <a href={WHATSAPP_URL} className="ml-auto bg-yellow-400 px-5 py-3 text-sm font-black uppercase tracking-wide text-[#141613] transition hover:bg-[#141613] hover:text-white lg:ml-0">
            Cotizar
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-[#141613] text-white">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1900&q=85&fit=crop"
            alt="Construcción e industria"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,#141613_0%,rgba(20,22,19,.96)_46%,rgba(20,22,19,.42)_100%)]" />
          <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-[repeating-linear-gradient(135deg,rgba(250,204,21,.22)_0_14px,transparent_14px_28px)] lg:block" />

          <div className="mx-auto grid min-h-[740px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
            <div className="max-w-3xl pt-8">
              <div className="mb-7 inline-flex border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-yellow-300">
                Proveedor técnico · stock realista demo
              </div>
              <h1 className="text-balance text-6xl font-black uppercase leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                Materiales listos para obra seria
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl">
                Ferretería industrial ficticia con catálogo, cotización por lista, despacho a obra y atención para contratistas, técnicos y mantenimiento.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#catalogo" className="inline-flex items-center justify-center bg-yellow-400 px-8 py-4 text-base font-black uppercase tracking-wide text-[#141613] transition hover:bg-white">
                  Ver catálogo
                </a>
                <a href={WHATSAPP_URL} className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-8 py-4 text-base font-black uppercase tracking-wide text-white transition hover:bg-white/10">
                  Enviar lista
                </a>
              </div>
              <div className="mt-12 grid max-w-xl grid-cols-3 border border-white/10 bg-white/[0.04]">
                {[
                  ['3.200+', 'productos'],
                  ['45min', 'cotización'],
                  ['24h', 'despacho'],
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-white/10 p-5 last:border-r-0">
                    <strong className="block text-3xl font-black text-yellow-300">{value}</strong>
                    <span className="text-[11px] font-black uppercase tracking-wide text-white/42">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
              <div className="space-y-4 pt-20">
                <div className="bg-yellow-400 p-7 text-[#141613] shadow-2xl shadow-black/30">
                  <p className="text-xs font-black uppercase tracking-[0.2em] opacity-70">Cotización rápida</p>
                  <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.05em]">Lista de obra</h2>
                  <p className="mt-4 text-sm font-bold leading-6 opacity-70">Envía una foto o archivo por WhatsApp. Respondemos con disponibilidad y sustitutos.</p>
                </div>
                <div className="border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">Despacho hoy</p>
                  <div className="mt-4 space-y-3 text-sm font-bold text-white/60">
                    <div className="flex justify-between"><span>Centro</span><span>$3</span></div>
                    <div className="flex justify-between"><span>Judibana</span><span>$6</span></div>
                    <div className="flex justify-between"><span>Puerta Maraven</span><span>$5</span></div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden border-8 border-white bg-white shadow-2xl shadow-black/30">
                <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777185?w=1000&q=90&fit=crop" alt="Equipo de seguridad industrial" className="h-[520px] w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-yellow-400 py-6 text-[#141613]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-sm font-black uppercase tracking-wide lg:px-8">
            {brands.map((brand) => <span key={brand}>{brand}</span>)}
          </div>
        </section>

        <section id="catalogo" className="bg-[#eef0ed] py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8a6900]">Catálogo técnico</p>
                <h2 className="mt-3 max-w-3xl text-5xl font-black uppercase tracking-[-0.065em] sm:text-6xl">Compra por rubro de trabajo</h2>
              </div>
              <p className="max-w-md text-base font-medium leading-7 text-[#555b52]">Productos ficticios con precio, stock y categoría para simular una ferretería lista para clientes reales.</p>
            </div>

            <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 border-2 px-5 py-2.5 text-sm font-black uppercase tracking-wide transition ${activeCategory === category ? 'border-[#141613] bg-[#141613] text-white' : 'border-[#cfd4ca] bg-white text-[#555b52] hover:border-yellow-400'}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article key={product.name} className="group overflow-hidden border border-[#cfd4ca] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#141613]">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" />
                    {product.badge && <span className="absolute left-4 top-4 bg-yellow-400 px-3 py-1.5 text-xs font-black uppercase text-[#141613]">{product.badge}</span>}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4 text-xs font-black uppercase tracking-[0.18em] text-[#6b7068]">
                      <span>{product.category}</span>
                      <span>{product.stock}</span>
                    </div>
                    <h3 className="mt-3 min-h-16 text-2xl font-black uppercase leading-tight tracking-[-0.04em]">{product.name}</h3>
                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#e0e4dc] pt-5">
                      <strong className="text-3xl font-black">{product.price}</strong>
                      <a href={WHATSAPP_URL} className="bg-[#141613] px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-yellow-400 hover:text-[#141613]">
                        Cotizar
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8a6900]">Departamentos</p>
              <h2 className="mt-3 text-5xl font-black uppercase tracking-[-0.065em] sm:text-6xl">Rutas rápidas para comprar</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {departments.map(([title, desc, image]) => (
                <article key={title} className="group relative min-h-[360px] overflow-hidden bg-[#141613]">
                  <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141613] via-[#141613]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-3xl font-black uppercase tracking-[-0.04em]">{title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/58">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="paquetes" className="bg-[#141613] py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-300">Paquetes de proyecto</p>
              <h2 className="mt-3 text-5xl font-black uppercase tracking-[-0.065em] sm:text-6xl">Soluciones armadas por necesidad</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projectPacks.map((pack) => (
                <article key={pack.title} className="border border-white/10 bg-white/[0.04] p-7 transition hover:border-yellow-400/60 hover:bg-white/[0.07]">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">Pack</p>
                  <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em]">{pack.title}</h3>
                  <p className="mt-4 min-h-20 text-sm font-semibold leading-6 text-white/55">{pack.desc}</p>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <strong className="text-2xl font-black text-yellow-300">{pack.price}</strong>
                    <a href={WHATSAPP_URL} className="bg-yellow-400 px-5 py-3 text-sm font-black uppercase tracking-wide text-[#141613] transition hover:bg-white">
                      Pedir
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-[#eef0ed] py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8a6900]">Servicio B2B</p>
                <h2 className="mt-3 text-5xl font-black uppercase tracking-[-0.065em]">Más que vender: resolvemos la compra</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map(([title, desc]) => (
                  <article key={title} className="border border-[#cfd4ca] bg-white p-6">
                    <h3 className="text-xl font-black uppercase tracking-[-0.03em]">{title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-[#555b52]">{desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-yellow-400 px-5 py-20 text-[#141613] lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] opacity-70">Cotización especial</p>
              <h2 className="mt-3 max-w-3xl text-5xl font-black uppercase leading-none tracking-[-0.065em]">¿Tienes una lista de materiales?</h2>
              <p className="mt-4 max-w-xl text-base font-bold opacity-70">Mándala por WhatsApp y convertimos tu lista en presupuesto organizado.</p>
            </div>
            <a href={WHATSAPP_URL} className="shrink-0 bg-[#141613] px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#141613]">
              Enviar lista
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#141613] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center bg-yellow-400 text-sm font-black text-[#141613]">OM</span>
              <div>
                <span className="block text-lg font-black uppercase">ObraMax Supply</span>
                <span className="text-xs font-semibold text-white/45">Ferretería industrial demo</span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/50">Ferretería ficticia con catálogo técnico, paquetes de obra, marcas, despacho y cotización por WhatsApp.</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Catálogo</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/50">
              <li><a href="#catalogo" className="hover:text-yellow-300">Construcción</a></li>
              <li><a href="#catalogo" className="hover:text-yellow-300">Electricidad</a></li>
              <li><a href="#catalogo" className="hover:text-yellow-300">Herramientas</a></li>
              <li><a href="#paquetes" className="hover:text-yellow-300">Paquetes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Contacto</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/50">
              <li>Punto Fijo, Falcón</li>
              <li><a href={WHATSAPP_URL} className="hover:text-yellow-300">WhatsApp: +58 412-000-0000</a></li>
              <li>Lun-Sáb: 7:30 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-7 text-center text-xs font-semibold text-white/30 lg:px-8">
          © 2026 ObraMax Supply. Demo creada por Carlos Avila - Developer 🇻🇪
        </div>
      </footer>
    </div>
  )
}

export default App
