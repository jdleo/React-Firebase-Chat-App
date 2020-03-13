import React, { ReactElement } from 'react'

// for styles
import { styles } from '../styles/global';

// interface for component
interface IProps {

}

function card(props: React.PropsWithChildren<IProps>): ReactElement {
    return (
        <div style={styles.card}>
            {props.children}
        </div>
    )
}

export default card;