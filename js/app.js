

function App(props) {

  return (
    <header>
      <h1>{props.headerTitulo}</h1>
    </header>
    <div>
      <p>{props.nombre}</p>
      <p>{props.mainSectionTitulo}</p>
      {props.articles.map((article, index) => {
        return (
          <div key={index}>
            <p>{index}</p>
            <h1>{article.titulo}</h1>
            <p>{article.descripcion}</p>
          </div>
        );
      })}
    </div>
  );
 }


ReactDOM.render(
  <Header
    headerTitulo={data.headerTitulo}
    otraCosa={data.headerDescripcion}
    mainSectionTitulo={data.mainSectionTitulo}
    articles={data.articles}
    links={data.links}
    isLoggedIn={false}
  />,
  document.getElementById("react-container")
);
