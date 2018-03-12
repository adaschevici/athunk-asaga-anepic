import React from 'react';
import { Slide, Heading, Text, Appear, Image, List, ListItem } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

import style from './style.scss';
import Handle from '../../utils/handle';

const notes = `Now our components sometimes call store.dispatch(syncActionCreator()), and sometimes call doSomeAsyncThing().`;

const notes2 = `The asyncLogin function isn't pure; it has a side effect (network call). Of course eventually
  we must make that call, and we'll see a solution
  soon. But side effects embedded in a component make that
  component harder to work with and reason about. For example,
  in unit testing, you may have to intercept or modify axios
  otherwise the component will make actual network calls.`;

const notes3 = `The asyncLogin function is tightly coupled to
  a specific store in scope. That isn't reusable; what if
  we wanted to use this action creator with more than one
  Redux store, e.g. for server-side rendering? Or no real
  store at all, e.g. using a mock for testing?`;

export default (
  <Slide
    transition={["zoom", "slide"]}
    className={style.slideSize}
  >
    <div>
      <Heading
        className={style.title}
      >
        Thunks
      </Heading>
      <Heading
				size={4}
        className={style.subtitle}
      >
        <i>(continued)</i>
      </Heading>
      <Heading
        className={style.subtitle}
      >
        <i>calling the action inside</i> <code>then</code>, <i className={style.reds}>slightly less wrong...</i>
      </Heading>
      <List>
				<Appear>
					<ListItem className={style.item}>
            <i>Con A: inconsistent API</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>Con B: Impurity</i>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem className={style.item}>
            <i>Con C: Tight Coupling</i>
					</ListItem>
				</Appear>
      </List>
      <Handle />
    </div>
  </Slide>
);
