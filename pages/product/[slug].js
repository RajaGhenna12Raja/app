import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className='py-2'>
        <h1 className='font-bold'>{product.name}</h1>
        <Link href='/'>Back to Products</Link>
      </div>
      <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            Layout='responsive'
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className='text-lg font-bold'>{product.name}</h1>
            </li>
            <li>
              <h3>Category: {product.name}</h3>
            </li>
            <li>
              <h3>Brand: {product.name}</h3>
            </li>
            <li>
              <h3>
                {product.rating} of {product.numReview} reviews
              </h3>
            </li>
            <li>
              <h3>Description: {product.description}</h3>
            </li>
          </ul>
        </div>
        <div>
          <div className='card p-5'>
            <div className='mb-2 flex justify-between'>
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className='mb-2 flex justify-between'>
              <div>Status</div>
              <div>{product.countInStock > 0? 'In-Stock': 'Unavailable'}</div>
            </div>
            <button className='primary-button w-full' >Add to Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
