import React from 'react';
import meImage from './me.jpeg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayState = (this.state.show)? 'flex' : 'none';
  }
  state = {
   Person: {
      fullName: "Aïssatou Diallo",
      bio: "I am a student in GoMyCode as an junior software developer",
      imgSrc: meImage,
      profession: "Student"
    },
    show: true,
   interval: null,
   elapsedTime: 0,
  };

  changeShowState = () => {
    (this.state.show)? this.setState({show: false}) : this.setState({show: true});
  }
  //Reglage d'une intervalle qui incremenete l'heure chaque seconde
componentDidMount() {
    const interval = setInterval(() => {this.setState({ elapsedTime: this.state.elapsedTime + 1 })}, 1000);
    this.setState({ interval });
  }

  //L'intervalle est effacé  a chaque fois qu'on raffraichit la page
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    this.displayState = (this.state.show)? 'flex' : 'none';

    return (
      <div style={{width: '500px'}}>
        <div className='App'>
          <div style={{display: this.displayState,flexDirection: 'column', justifyContent: 'space-around'}}>
            <img src = {this.state.Person.imgSrc} alt="presentation" style={{borderRadius: '10%', width: '400px' , height: '500px' , margin: 'auto'}}></img> 
            <h1 style={{margin: '20px' , fontSize:'50px' }}>{this.state.Person.fullName}</h1>
            <h2 style={{margin: '6px' , fontSize:'30px' }}>{this.state.Person.profession}</h2>
            <p style = {{textAlign: 'justify' , textIndent: '40px', color: 'black' , margin: '6px'}}>{this.state.Person.bio}</p>
          </div>
          <button onClick= {this.changeShowState} style={{borderRaduis: '10px' , padding:'10px' , border: 'none', backgroundColor:'orange' , color:'black', cursor: 'pointer'}}>Change View</button>
        </div>
        <div className = "intervalwatcher">
          <label htmlFor="intervalDisplay">Time elapsed since the component was last mounted: <br/><br/> <input readOnly id = "intervalDisplay" value = {this.state.elapsedTime} type="text"></input></label>

        </div>
      </div>
    );
  }

}
export default App;