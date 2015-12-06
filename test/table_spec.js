import React from 'react/addons';
import {Table} from '../src/components/Table.jsx';
import {expect} from 'chai';
import {List} from 'immutable';
const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = React.addons.TestUtils;

describe('Table', () => {

    it('renders a list of cards', () => {
        const component = renderIntoDocument(
                <Table cards={["a", "b", "c", "d"]} selectedCards={List()}/>
                );
        const cards = scryRenderedDOMComponentsWithTag(component, 'h1');

        expect(cards.length).to.equal(4);
        expect(cards[0].textContent).to.equal('a');
        expect(cards[1].textContent).to.equal('b');
        expect(cards[2].textContent).to.equal('c');
        expect(cards[3].textContent).to.equal('d');
    });
    it('allows you to select cards by clicking', () => {
        let cardsToScoop;
        const scoop = (entry) => {
            cardsToScoop = entry;
        }

        const component = renderIntoDocument(
                <Table cards={["a", "b", "c", "d"]} selectedCards={List()} scoop={scoop} />
                );
        const cards = scryRenderedDOMComponentsWithTag(component, 'h1');
        Simulate.click(cards[0]);

        expect(cardsToScoop).to.equal(0);
    });
});
