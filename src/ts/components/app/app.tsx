'use strict';

import React, { FC, ReactElement, useState, useEffect, LegacyRef, useRef } from "react";

import BubbleComponent from "../bubbleComponent/bubbleComponent";
import { connect, ConnectedProps } from "react-redux";
import { IAppState } from "../../reducers/ownReducers/appReducer";
import { setIsRestartAction, setPopEmAllAction } from "../../actions/appActions";

interface IPropsFromRedux {
    appState: IAppState;
}

const mapState = (state: IPropsFromRedux) => ({
    colors: state.appState.colors,
    points: state.appState.points,
    isRestart: state.appState.isRestart,
    isPopEmAll: state.appState.isPopEmAll,
});

const mapDispatch = (dispatch) => ({
    setIsRestart: (value: boolean): void => {
        dispatch(setIsRestartAction(value));
    },
    setPopEmAll: (value: boolean): void => {
        dispatch(setPopEmAllAction(value));
    },
});

const connector = connect(mapState, mapDispatch);

type TProps = ConnectedProps<typeof connector>;

const App: FC<TProps> = (props: TProps): ReactElement => {
    const mainBlock: LegacyRef<HTMLIFrameElement> = useRef(null);
    const [mainWidth, setMainWidth] = useState(0);
    const [mainHeight, setMainHeight] = useState(0);

    const { colors, setIsRestart, points, isRestart, setPopEmAll, isPopEmAll } = props;
    window.onresize = function(){
        setMainWidth(mainBlock.current.clientWidth);
        setMainHeight(mainBlock.current.clientHeight);
    }
    useEffect(() => {
        setMainWidth(mainBlock.current.clientWidth);
        setMainHeight(mainBlock.current.clientHeight);
    }, [mainBlock]);

    const getBubblesList = () => {
        let columnCount: number = Math.floor(mainWidth / 43);
        let rowCount: number = Math.floor(mainHeight / 43) - 1;
        let bubbleList: React.ReactNode[] = [];
        let k: number = 0;
        for (let i = 0; i < rowCount / 2 ; i++) {
            for (let j = 0; j < columnCount * 2; j++) {
                bubbleList.push(
                    <BubbleComponent
                        key={++k}
                        color={colors[i % colors.length]}
                        isRestart={isRestart}
                        isPopEmAll={isPopEmAll}
                    />)
            }
        }
        return bubbleList;
    }
    return (
        <div className="app">
            <div className="menu">
                <span>Pop points: <span className="menu-points">{points}</span> </span>
                <img src="resources/restart.svg" alt="restart" onClick={() =>  setIsRestart(true)} />
                {/*<div className="menu-pop" onClick={() => setPopEmAll(true)}>*/}
                {/*    <span>Pop'em all</span>*/}
                {/*</div>*/}
            </div>
            <div className="main">
                <div className="main-grid" ref={mainBlock}>
                    {getBubblesList()}
                </div>
            </div>
        </div>
    )
}

export default connector(App);
