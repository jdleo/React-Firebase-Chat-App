// interface for styles dictionary
interface IStyles {
  [key: string]: any;
}

// export global styles dictionary
export const styles: IStyles = {
  container: {
    textAlign: "center",
    paddingTop: 40
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
  },
  h2: {
    display: 'block',
    fontSize: '1.5em',
    margintop: '0.83em',
    marginBottom: '0.83em',
    marginLeft: '0',
    marginRight: '0',
    fontWeight: 700
  },
  h3: {
    display: 'block',
    fontSize: '1.17em',
    margintop: '1em',
    marginBottom: '0.67em',
    marginLeft: '0',
    marginRight: '0',
    fontWeight: 700
  },
  h4: {
    display: 'block',
    fontSize: '1em',
    margintop: '1.33em',
    marginBottom: '1.33em',
    marginLeft: '0',
    marginRight: '0',
    fontWeight: 700
  },
  input: {
      width: '100%',
      borderRadius: 10,
      border: 'solid',
      borderWidth: 2,
      outline: 'none', 
      padding: 10,
      backgroundClip: 'padding-box'
  },
  leftAdjustedTextCol: {
      textAlign: 'left'
  },
  button: {
      backgroundColor: '#5D6EE4',
      border: 'none',
      width: '100%',
      padding: 10,
      borderRadius: 10,
      boxShadow: '2px 2px 4px #4f5ec2, -2px -2px 4px #ccccff'
  },
  buttonTitle: {
      fontWeight: 700,
      color: '#fff'
  }
};
