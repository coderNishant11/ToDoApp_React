/* eslint-disable react/prop-types */
const ToDo = ({ item, removeItem}) => {
    
    return <div className="kg-row">
                <div className="col5 ">
                    <p className="my-col">{item.itemName}</p>
                </div>
                <div className="col5">
                    <p className="my-col">{item.itemDate }</p>
                </div>
                <div className="col2">
                    <button type="button" className=" my-col my-btn red" onClick={()=>removeItem(item.id)}>Delete</button>
                </div>
            </div>
}


export default ToDo;