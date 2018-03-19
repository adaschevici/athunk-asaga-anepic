import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
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
  import('./slides/10'),
  import('./slides/11'),
  import('./slides/12'),
  import('./slides/12.25'),
  import('./slides/12.5'),
  import('./slides/13'),
  import('./slides/14'),
  import('./slides/15'),
  import('./slides/16'),
  import('./slides/17'),
  import('./slides/18'),
  import('./slides/19'),
  import('./slides/20'),
  import('./slides/21'),
  import('./slides/22'),
  import('./slides/23'),
  import('./slides/24'),
  import('./slides/25'),
  import('./slides/26'),
  import('./slides/27'),
  import('./slides/28'),
  import('./slides/29'),
  import('./slides/30'),
  import('./slides/31'),
  import('./slides/32'),
  import('./slides/33'),
  import('./slides/34'),
  import('./slides/35'),
  import('./slides/36'),
  import('./slides/37'),
  import('./slides/38'),
  import('./slides/39'),
  import('./slides/40'),
  import('./slides/41'),
  import('./slides/42'),
  import('./slides/43'),
  import('./slides/44'),
  import('./slides/45'),
  import('./slides/46'),
  import('./slides/47'),
  import('./slides/48'),
  import('./slides/49'),
  import('./slides/50'),
  import('./slides/51'),
  import('./slides/52'),
  import('./slides/53'),
  import('./slides/54'),
  import('./slides/55'),
  import('./slides/56'),
  import('./slides/57'),
  import('./slides/58'),
  import('./slides/59'),
  import('./slides/60'),
  import('./slides/61'),
  import('./slides/62'),
  import('./slides/63'),
  import('./slides/64'),
  import('./slides/65'),
  import('./slides/66'),
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
