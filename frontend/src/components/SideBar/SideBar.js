import React from 'react'
import './SideBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAddressBook,faTicketAlt,faHistory } from '@fortawesome/free-solid-svg-icons'
import { faDashcube } from '@fortawesome/free-brands-svg-icons'


class SideBar extends React.Component{

    render(){
        return(
            <div className="sideBar Compact">
                {/* <FontAwesomeIcon className="Tes t" icon={faCoffee} /> */}
                <div className="User">
                <FontAwesomeIcon className="Icon" icon={faAddressBook} />
                <div className="Name">
                    DisplayName
                </div>
                </div>
                
                <div className="Navigation">
                    <li>
                    <FontAwesomeIcon className="Icon" icon={faDashcube} />
                        <p>Dashboard</p>
                            </li>
                            <li>
                    <FontAwesomeIcon className="Icon" icon={faTicketAlt} />
                        <p>Tickets</p>
                            </li>
                            <li>
                    <FontAwesomeIcon className="Icon" icon={faHistory} />
                        <p>History</p>
                            </li>
                            <li>
                    <FontAwesomeIcon className="Icon" icon={faDashcube} />
                        <p>Boards</p>
                            </li>
                </div>
                <div className="Footer">
                    <div className="TextContainer">

                    <p>
                        Made by IamBlluee (:
                        </p>
                    </div>
                </div>

            </div> 
        );
    }
}
export default SideBar;