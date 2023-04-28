import React, { useState } from 'react';
import css from "./form.module.css"

export const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(query);
        setQuery('');
    };

    return (
        <header className={css.searchform} onSubmit={handleSubmit}>
            <form className={css.form}>

                <input
                    className={css.input}
                    type="text"
                    value={query}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    onChange={handleChange}
                />
                <button type="submit" className={css.button}>
                    Search
                </button>
            </form>
        </header>
    );
};