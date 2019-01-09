import React from 'react';
import ReactDOM from 'react-dom';
import HeadlinesList from './HeadlinesList';
import { render, cleanup, fireEvent, waitForElement } from 'react-testing-library';
import 'jest-dom';

describe('<HeadlinesList />', () => {
    afterEach(cleanup);
    it('should render no lis if given an empty list of articles', () => {
        const renderResult = render(<HeadlinesList articles={[]} />);
        const { container } = renderResult;
        const result = container.querySelector('li');
        expect(result).toBeNull();
    });

    it('should render 3 lis if given a list of 3 articles', () => {
        const dummyArticles = [
            { url: 'abc', title: 'abc' },
            { url: 'abcd', title: 'abc' },
            { url: 'abcde', title: 'abc' },
        ];
        const renderResult = render(<HeadlinesList articles={dummyArticles}/>);
        const { container } = renderResult;
        const result = container.querySelectorAll('li');
        expect(result.length).toBe(3);
    });
});
