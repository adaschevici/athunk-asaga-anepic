import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
import '../prism-themes/themes/prism-nova.css';
import createTheme from 'spectacle-theme-nova';

const importSlides = [
  import('./slides/0'),
  import('./slides/0.5'),
  import('./slides/1'),
  import('./slides/1.5'),
  import('./slides/1.75'),
  import('./slides/2'),
  import('./slides/3'),
  import('./slides/3.25'),
  import('./slides/3.5'),
  import('./slides/3.75'),
  import('./slides/4'),
  import('./slides/5'),
  import('./slides/6'),
  import('./slides/7'),
  import('./slides/8'),
  import('./slides/9'),
];

const theme = createTheme({
  primary: "black",
});

export default class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(importSlides.length).fill(<Slide key="loading" />), // placeholder for slides once they're loaded
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(importSlides)
      .then(resolvedSlides => {
        resolvedSlides.forEach(slide => {
          importedSlides.push(slide.default);
        });
        this.setState({ slides: importedSlides });
      });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["fade", "zoom"]} transitionDuration={500} progress="pacman" theme={theme}>
        {slides.map((slide, index) => React.cloneElement(slide, { key: index }))}
      </Deck>
    );
  }
}
