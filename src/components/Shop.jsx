import React from 'react'
import { addToCart, removeFromCart } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

export default function Shop() {
    const dispatch = useDispatch()

    const items = [
        { img: "src/assets/headphone.webp", name: "Boat Headphone", cost: 1499 },
        {img: "src/assets/laptop.jpg", name:"HP Victus", cost: 59999},
        {img: "src/assets/lightsaber.webp", name:"Star wars Light Saber", cost: 7099},
        {img: "src/assets/mouse.jpg", name:"Gaming Mouse", cost: 1199},
        {img: "src/assets/phone.webp", name:"Boat Headphone", cost: 120099},
        { img: "src/assets/racket.jpg", name: "Badminton Racket", cost: 1599 },
        {img: "src/assets/macbook.webp", name:"MacBook pro", cost: 149990},      
        
    ]

    const Card = ({img, name, cost}) => {
        return (
            <div className='w-80 bg-zinc-600 rounded-lg shadow-xl'>
                <img className='w-full h-96 object-cover rounded-t-xl' src={img} alt={"not available"} />
                <div className='px-4 py-2'>
                    <h1 className='text-xl font-bold text-center'>{name}</h1>
                    <div className='flex justify-between mt-4'>
                        <h1 className='text-xl font-bold'>₹{cost}</h1>
                        <button
                            onClick={() => dispatch(addToCart({img: img, name: name, cost: cost, quantity: 1}))}
                            className='bg-yellow-600 px-2 py-1 rounded-md font-bold active:bg-yellow-700 transition-all'>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full max-w-[1300px] m-auto'>
            {items.map((eachItem, index) => {
                return <Card key={index} img={eachItem.img} name={ eachItem.name } cost={eachItem.cost} />
            })}
        </div>
    )
}
