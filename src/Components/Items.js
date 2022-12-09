import { useEffect, useState } from "react";


const Items = ( { editItem, value, callback, index } ) => {

    // Need a click event to toggle edit
    const [text, setText] = useState(value); 
    const [edit, setEdit] = useState(value.length === 0 );

    useEffect(() => {
        
    },[edit])

    


    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = ( e ) => {
        if (e.keyCode === 13 && value === "") {
            callback(text);
            setText("")
            // setEdit(false);
        } else if (e.keyCode === 13) {
            callback(text, index);
            setEdit(false);
        }
    }

    const updateEdit = () => {
        setEdit(true)
    }

    if (edit) {
        return (
            <li>
                <input type="text" onChange={handleChange} value={text} onKeyDown={handleSubmit}/>
            </li>
    )
        

    } else {
        return (
            <li onClick={updateEdit}>{text}</li>
        )
    }

}
export default Items;