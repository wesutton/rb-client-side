import React, {
    useState, 
    Route,
    Link,
    Switch} from 'react'
import './Navbar.scss'
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap'
import {IoMdBasketball} from 'react-icons/io'



const Sitebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    return (
        <Navbar className = "navbar-main" color = "faded" light expand = "md">
            <NavbarBrand id ="navbar-text" href = "/">
            <IoMdBasketball className = 'navbar-icon' />
            ScoreCard
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen = {isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem id= "logout-button">
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>

        </Navbar>
    )
}

export default Sitebar;