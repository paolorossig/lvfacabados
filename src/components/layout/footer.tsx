/* eslint-disable @next/next/no-img-element */
const footerNavigation = [
  [
    {
      name: 'Atención al cliente',
      items: [
        { name: 'Preguntas Frecuentes', href: '#' },
        { name: 'Cambios y devoluciones', href: '#' },
        { name: 'Imformación de delivery', href: '#' },
        { name: '¿Cómo comprar?', href: '#' },
      ],
    },
    {
      name: 'Acerca de LVF Acabados',
      items: [
        { name: 'Nosotros', href: '#' },
        { name: 'Trabaja con nosotros', href: '#' },
        { name: 'Seguridad y salud en el trabajo', href: '#' },
      ],
    },
  ],
  [
    {
      name: 'Tiendas y Servicios',
      items: [
        { name: 'Nuestras Tiendas', href: '#' },
        { name: 'Certificaciones de garantía', href: '#' },
        { name: 'Zonas de Despacho', href: '#' },
      ],
    },
    {
      name: 'Contáctanos',
      items: [
        { name: 'Teléfono', href: '#' },
        { name: 'Email', href: '#' },
        { name: 'Facebook', href: '#' },
        { name: 'Instagram', href: '#' },
      ],
    },
  ],
]

type Section = {
  name: string
  items: {
    name: string
    href: string
  }[]
}

function FooterSection({ section }: { section: Section }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-300">{section.name}</h3>
      <ul role="list" className="mt-6 space-y-4">
        {section.items.map((item) => (
          <li key={item.name} className="text-sm">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto flex max-w-7xl flex-col px-8">
        <div className="mt-4 flex h-16 items-center justify-between">
          <a href="#">
            <img
              src="https://cassinelli.com/assets/cassinelli/logo-cassinelli-footer.svg"
              width={240}
              height={36}
              alt=""
            />
          </a>
        </div>
        <div className="my-8 grid grid-cols-2 gap-8 xl:col-span-2">
          {footerNavigation.map((group, idx) => {
            return (
              <div
                key={idx}
                className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0"
              >
                {group.map((section, idx) => (
                  <FooterSection key={idx} section={section} />
                ))}
              </div>
            )
          })}
        </div>
        <div className="flex h-16 items-center justify-between space-x-4 border-t border-gray-400 text-sm">
          <span>LVF Acabados - Copyright 2023</span>
          <div className="flex space-x-3">
            <a href="#">Términos y Condiciones</a>
            <a href="#">Políticas de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
