import React,{useState} from 'react';

const Comment = ({text,id,date,remove,edit,acceptEdit,isInput,appear}) => {

    return (
        <>
    <div className="single-comment"><p className="date">{date}</p><p className="text">{text}</p> <button className="remove btn" onClick={() => remove(id)}>usuń</button><button className="edit btn" onClick={()=> edit(id)}>edytuj</button></div>
    {appear &&<button className="accept" onClick={()=> acceptEdit(id)}>Potwierdź</button>}
    
    </>
    )
}
export default Comment;