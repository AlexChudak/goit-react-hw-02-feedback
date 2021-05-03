import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
    state = {
        visible: false,
    };
//Сделали кнопку переключения
    toggle = () => {
        this.setState(prevState => ({ visible: !prevState.visible }));
    }
    // show = () => {
    //     this.setState({ visible: true });
    // };
    // hide = () => {
    //     this.setState({ visible: false });
    // };


        render()  {
            return (
                <div className="Dropdown">
                    <button type="button" className="Dropdown__toggle" onClick={this.toggle}>
                        {this.state.visible? 'Hide':'Show'}
                </button>
                    {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
                        Hide
                </button> */}
                    
                    {this.state.visible && <div className="Dropdown__menu">Выпадающее меню</div>}
                    
                </div>
            )
        }
    };

export default Dropdown;