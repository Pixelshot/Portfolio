import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Create & Inspire. It's Lama</h1>
        <p className="pl-desc">
          Pabst swag cornhole viral vexillologist. Hoodie green juice narwhal
          art party food truck cred ennui artisan iceland.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
