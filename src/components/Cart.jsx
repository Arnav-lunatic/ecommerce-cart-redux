import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../features/cartSlice";

export default function Cart() {
	const cart = useSelector((state) => state.cart.cart);
	const dispatch = useDispatch();

	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		let cost = 0;
		cart.map((eachItem) => (cost += eachItem.cost*eachItem.quantity));
		setTotalAmount(cost);
	}, [cart]);

	return (
		<div className="bg-zinc-400 py-16 fixed top-0 bottom-0 right-0 w-40 text-center ">
			<h1 className="text-2xl font-extrabold">Cart</h1>
			<div className="overflow-y-scroll flex items-center flex-col gap-4 h-full">
				{cart.length != 0 ? (
					cart.map((eachItem, index) => {
						return (
							<div key={index}>
								<div className="w-32 relative">
									<img
										className="w-full h-32 object-cover rounded-t-xl"
										src={eachItem.img}
										alt=""
									/>
									<h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-sm">
										{eachItem.name}
									</h1>
									<button
										onClick={() => {
											dispatch(removeFromCart(index));
										}}
										className="absolute top-1 right-1 px-2 bg-black bg-opacity-40 rounded-full"
									>
										x
									</button>
								</div>

                                <div className="bg-zinc-900 p-2 rounded-b-lg flex justify-between">
                                    <button
                                        onClick={() => dispatch(decreaseQuantity(index))}
                                    >-</button>
                                    <div>
                                        ₹{eachItem.cost}x{eachItem.quantity}
                                    </div>
                                    <button
                                        onClick={() => dispatch(increaseQuantity(index))}
                                    >+</button>
								</div>
							</div>
						);
					})
				) : (
					<h1 className="text-3xl text-center font-bold text-black">
						Empty
					</h1>
				)}
			</div>

			<div className="absolute bottom-0 right-0 left-0 text-lg bg-black opacity-80">
				₹{totalAmount}
			</div>
		</div>
	);
}
