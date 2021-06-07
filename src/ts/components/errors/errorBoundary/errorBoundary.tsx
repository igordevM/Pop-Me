'use strict';

import React from 'react';

import { Error } from '../error/error';

interface IState {
    hasError: boolean;
}

interface IProps {
    children: React.ReactNode;
}

export class ErrorBoundary extends React.Component {
    public props: IProps;
    public state: IState = {
        hasError: false,
    };

    componentDidCatch(): void {
        this.setState({
            hasError: true,
        });
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return <Error />;
        }

        return this.props.children;
    }
}
