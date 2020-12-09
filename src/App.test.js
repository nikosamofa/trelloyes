import React from 'react';
import ReactDOM from 'react-dom'
import Card from './Card';
import List from './List'
import App from './App';
import renderer from 'react-test-renderer'


describe('Card component', ()=>{
  it('should render without crashing',()=>{
    const div = document.createElement('div');

    ReactDOM.render(<Card />, div);

    ReactDOM.unmountComponentAtNode(div);
  } );

  //snapshot test 
  it('should render UI as expected',()=>{
    const tree = renderer.create(<Card
      key={card.id}
      title={card.title}
      content={card.content}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  })
})


describe('List component', ()=>{

  it('should render without crashing', ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<list />, div);

    ReactDOM.unmountComponentAtNode(div)

  })

  it('should render UI without crashing', ()=>{
    const tree = renderer.create(<List
      key={list.id}
      header={list.header}
      cards={list.cardIds.map(id => store.allCards[id])}
    /> ).toJSON();

    expect(tree).toMatchSnapshot();
  })


})