type Props = { searchParams?: { [key: string]: string | string[] | undefined } }

export default function SearchPage({ searchParams }: Props) {
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
  )
}
