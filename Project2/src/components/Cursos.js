import "./Cursos.css";


const Cursos = () => {
  return (
    <div className="container">
      <h1 className="title-curso">Cursos Disponíveis</h1>
      <br></br>
      <div className="courses-wrapper">
        <ul className="course-list">
          <li>
            <div className="course-info">
              <p>Formação</p>
              <br/>
              <h1>Marketing Digital</h1>
              <br/>
              <h4>12 meses</h4>
            </div>
          </li>
        </ul>
        <ul className="course-list2">
          <li>
            <div className="course-info2">
              <p>Formação</p>
              <br/>
              <h1>Design e Criação</h1>
              <br/>
              <h4>12 meses</h4>
            </div>
          </li>
        </ul>
        <ul className="course-list3">
          <li>
            <div className="course-info3">
              <p>Formação</p>
              <br/>
              <h1>Data Analytics</h1>
              <br/>
              <h4>12 meses</h4>
            </div>
          </li>
        </ul>
      </div>
      <div className="courses-wrapper2">
        <ul className="course-list4">
            <li>
              <div className="course-info4">
                <p>Intensivo</p>
                <br/>
                <h1>Storytelling</h1>
                <br/>
                <h4>2 semanas</h4>
              </div>
            </li>
          </ul>
          <ul className="course-list5">
            <li>
              <div className="course-info5">
                <p>Intensivo</p>
                <br/>
                <h1>Scrum</h1>
                <br/>
                <h4>2 semanas</h4>
              </div>
            </li>
          </ul>
          <ul className="course-list6">
            <li>
              <div className="course-info6">
                <p>Formação</p>
                <br/>
                <h1>Cibersegurança</h1>
                <br/>
                <h4>12 meses</h4>
              </div>
            </li>
          </ul>
      </div>
    </div>
    
  )
}

export default Cursos