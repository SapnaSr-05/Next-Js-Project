'use client'; 
import React, { useState, useEffect } from 'react';
import { FaCalendar, FaCcMastercard, FaComment, FaDashcube, FaDeskpro, FaMailBulk, FaMap, FaMusic, FaPhone, FaPhotoVideo, FaSearchLocation, FaShoppingCart, FaSpeakap, FaTicketAlt, FaTools, FaUser, FaVideo } from 'react-icons/fa';
import NavigationBar from '../../components/Navbar';


function Webdevelopment() {
    const framesData = [
        { id: 1, name: 'Mail Service', icon: <FaMailBulk size={35} />, price: 35 },
        { id: 2, name: 'Phone Support', icon: <FaPhone size={35} />, price: 15 },
        { id: 3, name: 'Desktop Development', icon: <FaDeskpro size={35} />, price: 20 },
        { id: 6, name: 'Photo Gallery', icon: <FaPhotoVideo size={35} />, price: 25 },
        { id: 7, name: 'Presentation Tools', icon: <FaTools size={35} />, price: 30 },
        { id: 10, name: 'Music Player', icon: <FaMusic size={35} />, price: 20 },
        { id: 11, name: 'Video Player', icon: <FaVideo size={35} />, price: 28 },
        { id: 12, name: 'Speakers', icon: <FaSpeakap size={35} />, price: 30 },
        { id: 13, name: 'Geo Location', icon: <FaSearchLocation size={35} />, price: 70 },
        { id: 15, name: 'Dashboard', icon: <FaDashcube size={35} />, price: 63 },
        { id: 16, name: 'User Administration', icon: <FaUser size={35} />, price: 50 },
        { id: 17, name: 'Feedback System', icon: <FaComment size={35} />, price: 22 },
        { id: 18, name: 'Map', icon: <FaMap size={35} />, price: 24 },
        { id: 19, name: 'ShoppingCart', icon: <FaShoppingCart size={35} />, price: 24 },
        { id: 20, name: 'Ticketing System', icon: <FaTicketAlt size={35} />, price: 29 },
        { id: 21, name: 'CMS', icon: <FaCcMastercard size={35} />, price: 59 },
        { id: 22, name: 'Calendar Integration', icon: <FaCalendar size={35} />, price:33 },
        
        // ... Add more frames with their respective icons, names, and prices as needed
    ];
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedFrames, setSelectedFrames] = useState({});
    const [loading, setLoading] = useState(false)
  

    useEffect(() => {
        let totalPriceSum = 0;
        cart.forEach((item) => {
            totalPriceSum += item.totalPrice;
        });
        setTotalPrice(totalPriceSum);
    }, [cart]);

    const handleFrameClick = (frameId, price) => {
        const frameIndex = cart.findIndex((item) => item.id === frameId);
        if (frameIndex !== -1) {
            const updatedCart = [...cart];
            const updatedItem = { ...updatedCart[frameIndex] };
            if (updatedItem.quantity === 1) {
                updatedCart.splice(frameIndex, 1);
            } else {
                updatedItem.quantity -= 1;
                updatedItem.totalPrice -= price;
                updatedCart[frameIndex] = updatedItem;
            }
            setCart(updatedCart);
            setTotalItems(totalItems - 1);
        } else {
            const newCart = [...cart, { id: frameId, quantity: 1, totalPrice: price }];
            setCart(newCart);
            setTotalItems(totalItems + 1);
        }

        //Toggle selected state for the clicked frame
        setSelectedFrames((prevState) => ({
            ...prevState,
            [frameId]: !prevState[frameId],
        }));
    };

    return (
        <div>
            <NavigationBar/>
        <div className="Container-fluid1">
            <div className="web-development-left">
                    <h2>Web Development Services</h2>
                <p>Please choose the features you need for your web app to get an idea of the estimated cost.</p>
                <div className="web-frames-container">
                    {framesData.map((frame) => (
                        <div
                            className={`web-frame  ${selectedFrames[frame.id] ? 'selected' : ''}`}
                            key={frame.id}
                            onClick={() => handleFrameClick(frame.id, frame.price)}
                        >
                            <div className="web-icon">{frame.icon}</div>
                            <p style={{ fontSize: '16px', textAlign: 'center' }}>{frame.name}</p>

                                {/* <p>Price: ${frame.price}</p> */}
                            {selectedFrames[frame.id] && <span>✔️</span>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="web-development-right">
                <div className="shopping-cart">
                    <h2>Shopping Cart</h2>
                    <div className="cart-info">
                        <p>Total items: {totalItems}</p>
                    </div>
                    <div className="cart-details">
                        <h3>Cart Details:</h3>
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                {/* <label htmlFor={`item-${item.id}`}></label> */}
                                <input
                                    type="text"
                                    id={`item-${item.id}`}
                                    value={`${framesData.find((frame) => frame.id === item.id)?.name || ''} $${item.totalPrice}`}
                                    onChange={(e) => handleItemChange(e, item.id)}
                                />
                            </div>
                        ))}
                    </div>
               </div>
                <div className="total-price-container"> {/* Added container for Total Price */}
                        <div className="total-price" style={{ color: 'white', backgroundColor: '#494848', height: '35px', }}> {/* Blue background color */}
                            <p>Total Price: ${totalPrice}</p>
                        </div>
                    </div>
                <div className='fr'>
                    <h5>Let's Bulid Your App</h5>
                    <p>Based on your feedback,we’ll give you a call to discuss your app’s requirements and provide a proposal.</p>
                    <form>
                        <input type="text" name="first name" placeholder='First Name' />
                        <input type="text" name="Last Nmae" placeholder='Last Name' />
                        <input type="email" name="Last Nmae" placeholder='Enter a Email' />
                        <input type="number" name="phone" placeholder="Enter a Phone Number" />
                        <textarea name="msg" placeholder="Message"></textarea>
                        <div className="checkbox-container">
                            <label>
                                <input type="checkbox" name="terms" required />
                                I agree to the <a href="#">Terms and Conditions</a>.
                            </label>
                        </div>
                            <button type="submit" class="submit-btn">Submit Now!</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Webdevelopment;