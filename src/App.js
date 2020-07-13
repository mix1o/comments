import React,{useState} from "react";
import "./App.css"
import Comment from './components/Comment';
import tiger from "./img/tiger.jpg";

const App = () => {

    const [value,setValue] = useState('');
    const [comments,setComments] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    

    const add = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if(month < 10){
          month = `0${month}`;
        }
        if(day < 10){
          day = `0${day}`;
        }
        if(hour < 10){
          hour = `0${hour}`;
        }
        if(minutes < 10){
          minutes = `0${minutes}`;
        }
        if(seconds < 10){
          seconds = `0${seconds}`;
        }


        let commentDate = `${year}-${month}-${day}  ${hour}:${minutes}:${seconds}`
        
        comments.push({
            id: currentIndex,
            name: value,
            date: commentDate
        });
        setValue('');
        setCurrentIndex(currentIndex+1)
  
        console.log(comments)
        
    }

    const remove = (id) => {
        const index = comments.findIndex((i)=>i.id===id)
        const newComments = [...comments];
        newComments.splice(index,1);
        setComments(newComments);
    }

    const [isEdit,setIsEdit] = useState(false);
    const [isInput,setIsInput] = useState(false);
    const edit = (id) => {
        setIsEdit(true);
        setIsInput(true);
    }

    const acceptEdit = (id)=> {

            console.log(id)
            comments[id].name = newValue;
            const newComments = [...comments];
            setComments(newComments);
    
        
        setIsEdit(false)
        setIsInput(false)
        setNewValue('')
    }

    const [newValue, setNewValue] = useState('');

    return (
        <div className="container">
          <img src={tiger} className="foto" alt="Tiger"/>
            <form className="form">
                
                <label className="comment-write">Napisz komentarz</label>    
                <input type="text" className="comment-area" value={value}  onChange={e => setValue(e.target.value)}/>
                <input type="button" className="comment-add" onClick={add} value="przeslij"/>
            </form>
            <div className="container-comments">
            
                

              {isEdit && <input type="text" className="newComment" value={newValue} onChange={e => setNewValue(e.target.value)}/>}
                {comments.map((comment)=>{
            return <Comment key={comment.id} date={comment.date} remove={remove} acceptEdit={acceptEdit} edit={edit} id={comment.id} text={comment.name} appear={isInput}/>
      })}
            </div>
        </div>
    )
}
export default App;