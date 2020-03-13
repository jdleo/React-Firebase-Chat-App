// interface for styles dictionary
interface IStyles {
    [key: string]: any;
}

// export global styles dictionary
export const styles: IStyles = {
    container: {
        textAlign: 'center',
        padding: 40
    },
    card: {
        backgroundColor: 'red',
        width: '80%',
        height: 40
    }
};