import React, { Component } from "react";
import Modal from "./components/Modal";
import "./App.css";
import { recipeLists } from "./Data/data";

class App extends Component {
  state = {
    showModal: false,
    recipes: recipeLists,
    title: undefined,
    instruction: undefined,
    ingredients: [],
    search: "",
    mode: false,
    reci:{title:'', ingredients:[], instruction:''}
  };

  handleModal = () => {
    this.setState({ showModal: true });
  };

  handleCancel = () => {
    this.setState({ showModal: false, mode: false });
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //add recipe

  handleAdd = (e) => {
    // e.preventDefault();
    if(this.state.title===undefined || this.state.ingredients===[] || this.state.instruction===undefined){
      return
    }

    this.setState((prev) => ({
       recipes: [
        ...prev.recipes,
        {
        
          title: this.state.title,
          ingredients:this.state.ingredients.split(","),
          instruction:this.state.instruction 
        },
      ],
    }));



    this.setState({
      title: "",
      ingredients: "",
      instruction: "",
    });

    this.handleCancel();
   
    
  };

  //view recipe
  handleView = (item) => {
   
    this.setState({ mode: true });

   this.setState({
     reci:{
       title:item.title,
       ingredients:item.ingredients,
       instruction:item.instruction

     }
   })

   
    
  };

  render() {
    // console.log({
    //   title: this.state.title,
    //   ingredients: this.state.ingredients,
    //   instruction: this.state.instruction,
    // });

    return (
      <div>
        <div className="headContent">
          <h1 className="title">Recipe Book</h1>
          <input
            className="searchBar"
            name="search"
            type="text"
            onChange={this.handleOnChange}
          />
          <button className="addbutton" onClick={this.handleModal.bind(this)}>
            Add Recipe
          </button>
        </div>
        {/* //display the recipe cards */}
        <div className="recipeContainer">
          {this.state.recipes
            .filter((reci) => reci.title.includes(this.state.search))
            .map((reci, index) => (
              <div className="recipeCard" key={index} comp={reci}>
                <h2>{reci.title}</h2>
                <button onClick={this.handleView.bind(this, reci)}>View more</button>
              </div>
            ))}
        </div>
        <div>
          {this.state.showModal && (
            <Modal stop={this.handleCancel.bind(this)}>
              <div className="pop">
               
                  <h1>Add Your Recipe</h1>
                  
                    <h2>Title</h2>
              
                  <input
                    className="inputFields"
                    name="title"
                    onChange={this.handleOnChange.bind(this)}
                    type="text"
                    value={this.state.title}
                  />
                 
                    <h2>Ingredients</h2>
              
                  <input
                    className="inputFields"
                    name="ingredients"
                    onChange={this.handleOnChange.bind(this)}
                    type="text"
                    value={this.state.ingredients}
                  />
                  <p>please separate your value by coma</p>
                 
                    <h2>Instruction</h2>
                  
                  <textarea
                    className="textarea"
                    name="instruction"
                    onChange={this.handleOnChange.bind(this)}
                    type="text"
                    value={this.state.instruction}
                  />
                  <button className="add" type="submit" onClick={this.handleAdd.bind(this)}>
                    Add
                  </button>
                  <button
                    className="add"
                    type="button"
                    onClick={this.handleCancel.bind(this)}
                  >
                    Cancel
                  </button>
             
              </div>
            </Modal>
          )}
        </div>
        <div>
          {this.state.mode && (
            <Modal stop={this.handleCancel.bind(this)}>
              <div className="pop">
                <h1>{this.state.reci.title}</h1>
                <h2>Ingredients</h2>
                <ul>
                  {this.state.reci.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))}
                </ul>
                <h2>Instruction</h2>
                <p>{this.state.reci.instruction}</p>

                <button
                  className="add"
                  type="button"
                  onClick={this.handleCancel.bind(this)}
                >
                  Cancel
                </button>
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default App;
