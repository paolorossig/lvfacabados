import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'

import { db } from '@/lib/firebase'

export async function getProducts() {
  let q = query(collection(db, 'products'))

  const results = await getDocs(q)

  return results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })
}

export async function getProductById(productId: string) {
  if (!productId) {
    console.log('Error: Invalid ID received: ', productId)
    return
  }

  const docRef = doc(db, 'products', productId)
  const docSnap = await getDoc(docRef)

  return {
    ...docSnap.data(),
    timestamp: docSnap.data()?.timestamp.toDate(),
  }
}
