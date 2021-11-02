import './product.css';

const Product = ({ img, link }) => {
  return (
    <div>
      <div className="pdt">
        <div className="pdt-browser">
          <div className="pdt-circle"></div>
          <div className="pdt-circle"></div>
          <div className="pdt-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="pdt-img">
          <img src={img} alt="" className="pdt-img" />
        </a>
      </div>
    </div>
  );
};

export default Product;
