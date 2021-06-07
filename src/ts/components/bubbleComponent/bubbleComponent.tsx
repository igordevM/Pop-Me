'use strict';

import React, { FC, ReactElement, useState, useRef, LegacyRef } from "react";
import { IAppState } from "../../reducers/ownReducers/appReducer";
import { incPointsAction, setIsRestartAction, setPopEmAllAction } from "../../actions/appActions";
import { connect, ConnectedProps } from "react-redux";

interface IPropsFromRedux {
    appState: IAppState;
}

interface IOwnProps {
    color: string,
    isRestart: boolean,
    isPopEmAll: boolean,
}

const mapState = (state: IPropsFromRedux) => ({
    soundSrc: state.appState.soundSrc,
});

const mapDispatch = (dispatch) => ({
    setIsRestart: (value: boolean): void => {
        dispatch(setIsRestartAction(value));
    },
    incPoints: (): void => {
        dispatch(incPointsAction());
    },
    setPopEmAll: (value: boolean): void => {
        dispatch(setPopEmAllAction(value));
    },
});

const connector = connect(mapState, mapDispatch);

type TProps = ConnectedProps<typeof connector> & IOwnProps;

const BubbleComponent: FC<TProps> = (props: TProps): ReactElement => {
    const audioEl: LegacyRef<HTMLAudioElement> = useRef(null);
    const [isPopped, setIsPopped] = useState(false);
    const { color, isRestart, soundSrc, setIsRestart, incPoints, isPopEmAll, setPopEmAll } = props;
    // if (isPopEmAll === true && isPopped === false) {
    //     setIsPopped(true);
    //     incPoints();
    //     setPopEmAll(false);
    // }

    if (isRestart === true && isPopped === true) {
        setIsPopped(false);
        setTimeout(() =>setIsRestart(false), 0);
    }
    return (
        <div
            className={isPopped && !isRestart ? "bubble bubble-popped" : "bubble"}
            style={{backgroundColor: color }}
            onMouseMove={() => {
                if (isPopped === false) {
                    setIsPopped(true);
                    incPoints();
                    audioEl.current.play();
                };
            }}
        >
            <audio src={soundSrc} ref={audioEl}></audio>
        </div>
    )
}

export default connector(BubbleComponent);
