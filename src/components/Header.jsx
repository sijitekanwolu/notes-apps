import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header className="header">
                <h2 className="header-title">Notes Apps<span>.</span></h2>
            </header>
        )
    }

}

export default Header;