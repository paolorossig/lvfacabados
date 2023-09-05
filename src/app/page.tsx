import Hero from '@/components/hero'
import ProductsList from '@/components/products-list'

const irobotProducts = [
  {
    id: 1,
    brand: 'IRobot',
    name: 'Aspiradora Robot Roomba',
    price: 'S/ 100.00',
    image:
      'https://qidcfx1zbotbdw8uoij2kll.blob.core.windows.net/sys-master-images/h9c/h2d/9349816188958/111231_14_media_csl1200Wx1200H',
  },
  {
    id: 2,
    brand: 'IRobot',
    name: 'Aspiradora Robot I3',
    price: 'S/ 150.00',
    image:
      'https://qidcfx1zbotbdw8uoij2kll.blob.core.windows.net/sys-master-images/hb4/h44/9349816811550/111232_15_media_csl1200Wx1200H',
  },
  {
    id: 3,
    brand: 'IRobot',
    name: 'Aspiradora Robot I3 + Roomba',
    price: 'S/ 200.00',
    image:
      'https://qidcfx1zbotbdw8uoij2kll.blob.core.windows.net/sys-master-images/hb4/h44/9349816811550/111232_15_media_csl1200Wx1200H',
  },
  {
    id: 4,
    brand: 'IRobot',
    name: 'Aspiradora Robot J7',
    price: 'S/ 290.00',
    image:
      'https://qidcfx1zbotbdw8uoij2kll.blob.core.windows.net/sys-master-images/hfa/h92/9332556169246/111234_14_media_csl1200Wx1200H',
  },
]

const trevolProducts = [
  {
    id: 1,
    brand: 'Trevol',
    name: 'Monocomando Tempra Para Lavatorio Pico Bajo',
    price: 'S/ 399.90',
    image:
      'https://qidcfx1zbotbdw8uoij2kll.blob.core.windows.net/sys-master-images/h3b/h26/9271637803038/110308_15_media_csl1200Wx1200H',
  },
  {
    id: 2,
    brand: 'Trevol',
    name: 'Monocomando Tempra Para Lavatorio Pico Alto',
    price: 'S/ 549.90',
    image:
      'https://qidcfx1zbotbdw8uoij2kll.blob.core.windows.net/sys-master-images/h01/h5e/9376919388190/110309_15_media_csl1200Wx1200H',
  },
  {
    id: 3,
    brand: 'Trevol',
    name: 'Monocomando Tempra Para Ducha',
    price: 'S/ 625.90',
    image:
      'https://qidcfx1zbotbdw8uoij2kll.blob.core.windows.net/sys-master-images/h9a/hef/9271639506974/110310_01_media_csl1200Wx1200H',
  },
  {
    id: 4,
    brand: 'Trevol',
    name: 'Monocomando Tempra Para Lavatorio Pico Alto',
    price: 'S/ 290.00',
    image:
      'https://qidcfx1zbotbdw8uoij2kll.blob.core.windows.net/sys-master-images/h5a/hca/9271642062878/110311_15_media_csl1200Wx1200H',
  },
]

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsList
        title="Conoce los nuevos productos IRobot"
        products={irobotProducts}
      />
      <ProductsList
        title="Conoce los nuevos productos Trevol"
        products={trevolProducts}
      />
    </main>
  )
}
