import Hero from '@/components/hero'
import ProductsList from '@/components/products-list'
import { irobotProducts, trevolProducts } from '@/data/products'

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
