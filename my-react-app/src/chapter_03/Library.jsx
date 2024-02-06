import React from "react";
import Book from "./Book"
function Library(props) {

    return (
        <div>
            <Book name='first steps of python' numOfPage={300}/>
            <Book name='first steps of AWS' numOfPage={400}/>
            <Book name='first steps of react' numOfPage={500}/>
        </div>
    )
}

export default Library;
