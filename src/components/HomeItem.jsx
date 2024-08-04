import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  // console.log(item.id, elementFound);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button
            type="button"
            className="btn btn-add-bag btn-danger"
            onClick={handleRemove}
          >
            <div className="outer">
              <div className="icon">
                <IoMdRemoveCircle />
              </div>
              <div className="text">Remove</div>
            </div>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-add-bag btn-success"
            onClick={handleAddToBag}
          >
            <div className="outer">
              <div className="icon">
                <IoIosAddCircle />
              </div>
              <div className="text">Add to Bag</div>
            </div>
          </button>
        )}
      </div>
    </>
  );
};
export default HomeItem;
