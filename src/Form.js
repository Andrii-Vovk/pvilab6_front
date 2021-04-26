import Avatar from "./Avatar"
import React from 'react';
/* 
const Form = () => {

    return (
        <div style={{ width: '25em', margin: 'auto' }}>
            <form className="formStyle" id="signin" action="" method="get">
                <div class="form-group avatar">
                <Avatar />
                </div>
                <div class="form-group">
                    <label for="usermail">Пошта</label>
                    <input type="email" class="form-control" id="usermail" name="usermail" aria-describedby="emailHelp" placeholder="Enter email"  />
                </div>
                <div class="form-group">
                    <label for="userpwd">Пароль</label>
                    <input type="password" class="form-control" id="userpwd" name="userpwd" placeholder="Password"  />
                </div>
                <div class="form-group form-check" style={{ textAlign: 'justify' }}>
                    <input type="radio" class="form-check-input" id="europe" name='region' value='europe' />
                    <label class="form-check-label" for="europe">Європа</label>
                    <br />
                    <input type="radio" class="form-check-input" id="America" name='region' value='america' />
                    <label class="form-check-label" for="America">Америка</label>
                    <br />
                    <input type="radio" class="form-check-input" id="Africa" name='region' value='Africa' />
                    <label class="form-check-label" for="Africa">Африка</label>
                </div>
                <div class="form-group">
                    <label for="about">Про себе</label>
                    <textarea class="form-control" id="about" rows="3"></textarea>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button type="submit" class="btn btn-primary" style={{ border: "1px solid black" }}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form; */

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            rank: 'novice',
            region: 'usa',
            about: '',
            result: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let result;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                rank: this.state.rank,
                region: this.state.region,
                about: this.state.about
            })
        };

        fetch('http://127.0.0.1:8000/api/gamers', requestOptions)
            .then(response => response.json())
            .then(data => {
                let errs = [];
                if ('errors' in data) {
                    for(var prop in data.errors) {
                        alert(data.errors[prop]);
                    }
                    console.log(errs);
                }
                else {
                    alert(data['message'])
                }
            });

        
    }

    render() {
        return (
            <div style={{ width: '25em', margin: 'auto' }}>
                <form className="formStyle" id="signin" action="" method="get">
                    <div className="form-group avatar">
                        <Avatar />
                    </div>
                    <div className="form-group">
                        <label for="email">Пошта</label>
                        <input type="text" className="form-control" id="email" name="email" onChange={this.handleInputChange} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label for="username">Ім'я користувача</label>
                        <input type="username" className="form-control" id="username" name="username" onChange={this.handleInputChange} placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label for="password">Пароль</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="region">Регіон</label>
                        <select className="form-control" value={this.state.region} name="region" id="region" onChange={this.handleInputChange}>
                            <option value="usa">Америка</option>
                            <option value="europe">Європа</option>
                            <option value="asia">Азія</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="rank">Ранг</label>
                        <select className="form-control" value={this.state.rank} name="rank" id="rank" onChange={this.handleInputChange}>
                            <option value="novice">Новачок</option>
                            <option value="average">Середній</option>
                            <option value="expert">Експерт</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="about">Про себе</label>
                        <textarea className="form-control" id="about" name="about" rows="3" value={this.state.about} onChange={this.handleInputChange}></textarea>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary" style={{ border: "1px solid black" }}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;