import React from 'react';


function Navbar() {
    return (
        <nav>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9ZM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z"/>
        </svg>

        <div id='upper' className="upper--bar">
            {/* <button class="btn btn-light" id='menu' onclick=cleartable() >Clear</button>
            <button class="btn btn-light" id='my--id--button' onclick=insertid() >My ID</button>
            <button class="btn btn-light" id="themeToggle">Dark</button>
            <input type="email" class="steamid" id="steamid" onchange=sender() placeholder="Enter Steam id"> */}
            <button className="btn btn-light" id='menu' >Clear</button>
            <button className="btn btn-light" id='my--id--button' >My ID</button>
            <button className="btn btn-light" id="themeToggle">Dark</button>
            <input type="email" className="steamid" id="steamid" placeholder="Enter Steam id" />
        </div>
        </nav>
    );
}

export default Navbar;
