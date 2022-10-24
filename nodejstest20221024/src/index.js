import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


// import Simple from './Simple';
// import Customized from './Customized';
// import AddAndDelete from './AddAndDelete';
// import CrossArea from './CrossArea';
// import CrossAreaRestriction from './CrossArea-restriction';
// import List from './List';
// import NestedTags from './NestedTags';

import {DraggableArea} from 'react-draggable-tags';

import styles from './css/style.css';

const initialTags = [
    {id: 1, content: 'apple'}, {id: 2, content: 'olive'}, {id: 3, content: 'banana'},
    {id: 4,  content: 'lemon'}, {id: 5, content: 'orange'}, {id: 6, content: 'grape'},
    {id: 7, content: 'strawberry'}, {id: 8, content: 'cherry'}, {id: 9, content: 'peach'}];

export default class Main extends Component {
    render() {
        return (
            <div className="Simple">
                <DraggableArea
                    tags={initialTags}
                    render={({tag, index}) => (
                        <div className="tag">
                            {tag.content}
                        </div>
                    )}
                    onChange={tags => console.log(tags)}
                />
            </div>
        );
    }
}


const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(
    <Main />,
    root
);
