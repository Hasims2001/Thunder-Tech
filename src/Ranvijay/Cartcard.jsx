import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { decreasequantityaction, incresequantityaction } from '../redux/cartRedux/action';




const Cartcard = ({ image, id, category,name , price, handledelete, quantity }) => {
    
    const dispatch = useDispatch()

    const handleincrease = () => {
        dispatch(incresequantityaction(id, quantity + 1))
    }


    const handledecrease = () => {
        dispatch(decreasequantityaction(id, quantity - 1))
    }

    const handleremove = () => {
        handledelete(id)
    }

    return (
        <>
            <div style={{ margin: "5px 0px", padding: "8px 0px 4px 23px", display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
                <div>
                    <img width="74px" height="65px" src={`https://source.unsplash.com/featured/600x600?${name},products`} alt="" />
                </div>
                <p style={{ fontWeight: "500", marginTop: "15px" }}>{` ${category}`}</p>
                <div>
                    <button onClick={handleincrease} id={"id"} value={"price"} style={{ marginRight: "8px", padding: "4px 10px ", marginLeft: "8%", marginTop: "13px" }}>+</button>
                    {quantity}
                    <button onClick={handledecrease} disabled={quantity === 1} id={"id"} style={{ marginLeft: "8px", padding: "4px 10px" }}>-</button>
                </div>
                <div style={{ position:"relative", top:"14px"}}>
                    <p style={{ marginLeft: "20%" }}>₹ {price * quantity}</p>

                </div>
                <div> <RiDeleteBin5Fill onClick={handleremove} id={"id"} style={{ cursor:"pointer", marginTop: "14px", color: "red", marginLeft: "20%", fontSize: "26px" }} /></div>

            </div>
            <hr />
        </>



    )
}


export default Cartcard