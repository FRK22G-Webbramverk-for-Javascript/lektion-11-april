import './ProductItem.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';

function ProductItem(props) { // Tar emot props från App.jsx
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(addToCart(props.item)); // Skickar vald produkt till Redux store
    }

    return (
        <article className="product-item">
            <h2 className="product-item__title">{ props.item.title }</h2>
            <p className="product-item__desc">{ props.item.description }</p>
            <p className="product-item__price">Pris: { props.item.price } kr</p>
            <button className="product-item__button" onClick={ handleClick }>Lägg till i varukorg</button>
        </article>
    )
}

export default ProductItem;