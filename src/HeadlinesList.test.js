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
});
