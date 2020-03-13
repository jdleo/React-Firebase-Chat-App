// interface for styles dictionary
interface IStyles {
  [key: string]: any;
}

// export global styles dictionary
export const styles: IStyles = {
  container: {
    textAlign: "center",
    padding: 40
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    boxShadow: "22px 22px 44px #d9d9d9, -22px -22px 44px #ffffff"
  },
  h1: {
    display: 'block',
    fontSize: '2em',
    margintop: '0.67em',
    marginBottom: '0.67em',
    marginLeft: '0',
    marginRight: '0',
    fontWeight: 700
  }
};
