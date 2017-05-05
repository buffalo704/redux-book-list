/**
 * Created by sso on 5/5/17.
 */
import React, { Component } from 'react';

export default class Booklist extends Component {
    renderList() {
        return this.props.book.map((book) => {
            return (
                <li key={book.title} className="list-group-item"> {book.title}</li>
            )
        });
    }

    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}