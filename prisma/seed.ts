import { PrismaClient } from '@prisma/client'
import products from '../data/products'

const prisma = new PrismaClient()

async function main() {
	await prisma.product.createMany({
		data: products,
	})
	console.log('Seeding complete')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
