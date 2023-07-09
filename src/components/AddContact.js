import React from "react";

class AddContact extends React.Component {

    state = {
        name:"",
        email:"",
    };
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "") {
            alert("All Fields are Mandatory");
            return;
        }
        this.props.AddContactHandler(this.state);
        this.setState({name:"",email:""});
        //console.log(this.state);
        
    };
    render() {
        return(
            <div className="col-3 container addForm">
                <h2>Add Contact</h2>
                <form onSubmit={this.add}>
                    <div>
                        
                        <label>Name</label>
                        <input className="form-control" type="text" name="name" placeholder="Name"
                        value={this.state.name}
                        onChange={ (e) => this.setState({name: e.target.value})}/>
                        
                        <label>Email</label>
                        <input className="form-control" type="text" name="Email" placeholder="Email"
                        value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value})}/>
                        
                    </div>
                    <button className="btn btn-primary" style={{padding:'8px 25px 8px 25px',marginTop:'15px'}}>Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;