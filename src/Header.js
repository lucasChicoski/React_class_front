
function Header(props){
    return(
        //sempre que quiser colocar um conteúdo javascript dentro
        //de uma tag HTML usa-se {}
      <h1>{props.title}</h1>
    );
  }

  export default Header;