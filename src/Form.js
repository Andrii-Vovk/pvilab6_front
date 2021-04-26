import Avatar from "./Avatar"

const Form = () => {
    return (
        <div style={{ width: '25em', margin: 'auto' }}>
            <form className="formStyle" id="signin" action="" method="get">
                <div class="form-group avatar">
                <Avatar />
                </div>
                <div class="form-group">
                    <label for="usermail">Пошта</label>
                    <input type="email" class="form-control" id="usermail" name="usermail" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div class="form-group">
                    <label for="userpwd">Пароль</label>
                    <input type="password" class="form-control" id="userpwd" name="userpwd" placeholder="Password" required />
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

export default Form;