import React, {Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Route, Switch} from 'react-router-dom';
import {generatePalette} from './colorHelpers';
import Palette from './Palette';
import PaletteList from './paletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';

class App extends Component {

  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
    //this.state = { palettes:  seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  findPalette(id){
    return this.state.palettes.find(function(palette){
      return palette.id === id
    })
  }

  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }

  deletePalette = (id) => {
    this.setState(
      st => ({palettes : st.palettes.filter(Palette => Palette.id !== id)}),
      this.syncLocalStorage
    )
  }

  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render(){

    return (

      <Route
        render={({location}) => (

          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={(routeProps) =>
                <Page>
                  <NewPaletteForm
                    {...routeProps}
                    savePalette={this.savePalette}
                    palettes={this.state.palettes}
                  />
                </Page>
                  }
              />

              <Route
                exact
                path='/palette/:paletteId/:colorId'
                render={(routeProps) =>
                  <Page>
                    <SingleColorPalette
                    colorId={routeProps.match.params.colorId}
                    palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                    />
                  </Page>
                  }
                />

              <Route
                exact
                path="/"
                render={(routeProps) =>
                  <Page>
                    <PaletteList {...routeProps} palettes= {this.state.palettes} deletePalette={this.deletePalette} />
                  </Page>
                  }
              />

              <Route
                exact
                path="/palette/:id"
                render={(rootParams) =>
                  <Page>
                    <Palette
                      palette={generatePalette(this.findPalette(rootParams.match.params.id))}
                    />
                  </Page>
                  }
                />
                <Route
                  exact
                  render={() => <h1>ERORR 404</h1>}
                />

              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />

    );
  }
}

export default App;
