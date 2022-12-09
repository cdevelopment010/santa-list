import { useEffect, useState } from "react";
import Items from "./Items";

const Notepad = () => {

    const [items, setItems] = useState([]); 
    const title ="Dear Santa..."; 
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        let textWrite = setInterval(() => {
            animateTitle();
        }, 150); 
        return () => {
            clearInterval(textWrite);
        }
    }, [])
    useEffect(() => {

    },[items])

    function animateTitle() {
        let h1 = document.querySelector('h1'); 
        h1.innerText = title.split('').slice(0,counter).join('');
        setCounter(counter++)        
    }


    // callback function?? This will run on enter, out blur for input
    const addItems = (pText, index) => {
        let vItems = [...items]; 
        if (index !== undefined ){
            vItems[index] = pText;
        } else {
            vItems.push(pText);
        }
        setItems(vItems);
    }

    return (
        <div className="notepad">
            <h1>
                
            </h1>
            <ul>
                {items.map((item, index) => {
                    return <Items key={`item-${index}`} value={item} callback={addItems} editItem="false" index={index}/>
                })}
                <Items  callback={addItems} value="" editItem="true"/>
            </ul>
        </div>
    )
}

export default Notepad;