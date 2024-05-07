import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./WishModal.css";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { RxHeartFilled } from "react-icons/rx";
import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  color: "#1f1f1f",
  borderRadius: 3,
  boxShadow: 24,
  p: 3,
};

export default function WishModal({ handleOpen, handleClose, open, msg, id }) {
  const cartItem = useSelector((state) => state.cart.items);
  const [wish, setWish] = useState(false);
  const [likeditems, setLikedItems] = useState([]);

  const handleLike = (index) => {
    setLikedItems((prevLikedItems) => {
      const updatedLikedItems = [...prevLikedItems];
      updatedLikedItems[index] = !updatedLikedItems[index];
      return updatedLikedItems;
    });
  };

  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="wishBox">
            <div className="bagnavbarIcons">
              <div className="bagHeadIcons">
                {/* <IoMdSearch />
                <BsGrid1X2 /> */}
              </div>
              <div className="Wishclose">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  onClick={handleClose}
                >
                  <defs />
                  <path d="M26 0h12v64H26z" />
                  <path d="M0 38V26h64v12z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="wishHead">Mood boards</p>
            </div>
            <div className="Wishcards">
              {cartItem.length === 0 ? (
                <div className="emptyBag">
                  <h1> -- No Items in Bag -- </h1>
                  <p>No items in your cart yet. Start shopping!</p>
                </div>
              ) : (
                cartItem.map((value, index) => (
                  <div className="bagCards" key={index}>
                    <div className="wishImg" key={index}>
                      <img src={value.img} alt="" />
                    </div>
                    <div className="wishPera">
                      <p>
                        {value.quantity}x {value.name}
                      </p>
                      <span>60x70, Calligraphy Bird blue</span>
                    </div>
                    <div className="wishIcon" onClick={() => handleLike(index)}>
                      {likeditems[index] ? (
                        <IoHeartSharp color="#ed4956" size={24} />
                      ) : (
                        <IoHeartOutline size={24} />
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
