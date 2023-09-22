// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function testing() {
//     const notify = () => {
//         console.log("toast checking")
//         // Calling toast method by passing string
//         toast('Hello Geeks')
//     }
//     return (
//         <div className="GeeksforGeeks">
//             <button onClick={notify}>Click Me!</button>
//         </div>
//     )
// }

// export default testing
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function testing() {
    const notify = () => toast("Wow so easy!");

    return (
        <div>
            <button onClick={() => toast("Wow so easy!")}>Notify!</button>
            <ToastContainer />
        </div >
    );
}
export default testing