import { NextResponse } from "next/server";

export const DATA_SOURCE_URL = "http://localhost:3004/products"

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)

  const products: Product[] = await res.json()

  return NextResponse.json(products)
}


export async function POST(request: Request) {
  const { brand, model, price, color, image }: Partial<Product> = await request.json()

  let date = new Date().toISOString().slice(0, 10);

  if (!brand || !model || !price || !color || !image) return NextResponse.json({
    "message": "Missing required information"
  })
  
  const res = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      date, brand, color, image, model, price
    })

  });

  const newProduct: Product = await res.json()

  return NextResponse.json(newProduct)

}


export async function PUT(request: Request) {
  const { id,  brand, image, price, color, model }: Product = await request.json()

  let date = new Date().toISOString().slice(0, 10);

  if (!id || !brand || !image || !price || !color || !model) return NextResponse.json({
    "message": "Missing required information"
  })
  
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
     brand, image, price, color, model, date
    })

  });

  const updatedProduct: Product = await res.json()

  return NextResponse.json(updatedProduct)

}



export async function DELETE(request: Request) {
  const { id }: Partial<Product> = await request.json()

  if (!id) return NextResponse.json({
    "message": "Product id required"
  })
  
   await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return NextResponse.json({ "message": `Product ${id} deleted`})

}