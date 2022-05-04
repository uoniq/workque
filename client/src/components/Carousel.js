import React, { Component } from "react";
import M from "materialize-css";
const height = {
    height: '700px',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '40px'
}
const map = require('./media/map.png')
class Carousel extends Component {
  componentDidMount() {
    const options = {
      fullWidth: true,  
      duration: 300,

    };
    M.Carousel.init(this.Carousel, options);
    //let instance = M.Carousel.getInstance(this.Carousel);
    //instance.next(2);
  }

  render() {
    return (
    <div>
        <div ref={Carousel => {
              this.Carousel = Carousel;
            }} className="carousel-slider carousel" style = {height}> 
            <div className = "banner carousel-item">
                <div className = "banner-left hide-on-med-and-down">
                    <div className="icon1">Соискателю</div>
                    <h1>Найдите работу вашей мечты в любой точке Республики</h1> <p>Не знаешь с чего начать? Где искать работу если тебе +14?
                    Наше видео инструкция поможет вам разобраться как искать и выбирать работу вашей мечты</p>
                    <div className="icon1">3 минуты</div>
                </div>
                <div className = "banner-right hide-on-med-and-down">
                    
                </div>
                <div className = "banner-big show-on-medium-and-down">
                    <div className="icon1">Соискателю</div>
                    <h1>Найдите работу вашей мечты в любой точке Республики</h1> <p>Не знаешь с чего начать? Где искать работу если тебе +14?
                    Наше видео инструкция поможет вам разобраться как искать и выбирать работу вашей мечты</p>
                    <div className="icon1">3 минуты</div> 
                </div>
            </div>
            <div className = "banner carousel-item ">
                <div className = "banner-left hide-on-med-and-down">
                    <div className="icon1">Соискателю</div>
                    <h1>Найдите работу вашей мечты в любой точке Республики</h1> <p>Не знаешь с чего начать? Где искать работу если тебе +14?
                    Наше видео инструкция поможет вам разобраться как искать и выбирать работу вашей мечты</p>
                    <div className="icon1">3 минуты</div>     
                </div>
                <div className = "banner-right hide-on-med-and-down">
                          
                </div>
                <div className = "banner-big show-on-medium-and-down">
                    <div className="icon1">Соискателю</div>
                    <h1>Найдите работу вашей мечты в любой точке Республики</h1> <p>Не знаешь с чего начать? Где искать работу если тебе +14?
                    Наше видео инструкция поможет вам разобраться как искать и выбирать работу вашей мечты</p>
                    <div className="icon1">3 минуты</div> 
                </div>
            </div>
            <div className = "banner carousel-item">
                <div className = "banner-left hide-on-med-and-down">
                    <div className="icon1">Соискателю</div>
                    <h1>Найдите работу вашей мечты в любой точке Республики</h1> <p>Не знаешь с чего начать? Где искать работу если тебе +14?
                    Наше видео инструкция поможет вам разобраться как искать и выбирать работу вашей мечты</p>
                    <div className="icon1">3 минуты</div> 
                </div>
                <div className = "banner-right hide-on-med-and-down">
                          
                </div>
                <div className = "banner-big show-on-medium-and-down">
                    <div className="icon1">Соискателю</div>
                    <h1>Найдите работу вашей мечты в любой точке Республики</h1> <p>Не знаешь с чего начать? Где искать работу если тебе +14?
                    Наше видео инструкция поможет вам разобраться как искать и выбирать работу вашей мечты</p>
                    <div className="icon1">3 минуты</div> 
                </div>
            </div>
        </div>
        <div className="container-custom">
            <h2>Найдите работу вашей мечты в Якутске!</h2>
            <input placeholder="Начните поиск"/>
            <div className="searchemb">
                <p>Часто ищут:</p>
                <div>
                    <div className="searchelm">
                        <div className="searchelement">Свежие вакансии</div>
                        <div className="searchelement">Вакансии от работодателей</div>
                        <div className="searchelement">Работа без опыта</div>
                        <div className="searchelement">Работа для подростоков</div>
                    </div>
                    <div className="searchelm">
                        <div className="searchelement">Работа без опыта</div>
                        <div className="searchelement">Работа для подростоков</div>
                        <div className="searchelement">Работа для подростоков</div>
                        <div className="searchelement">Вакансии от работодателей</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="col s5 content-embed valign-wrapper">
                        Найти вакансии для студентов и выпускников вузов и ссузов
                    </div>
                    <div className="col s5 content-embed offset-s2 valign-wrapper">
                        Стажировки и практики для инвалидов. Вакансии с квотируемыми рабочими местами
                    </div>
                </div>
            </div>
            <div>
                <h2>Работа для всех</h2>
                <div className="row">
                    <div className="workhold col s12">
                        <div className="hide-on-med-and-down">
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s3">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                        </div>
                        <div className="show-on-medium-and-down workelem-big">
                            <div className="workelem col s12">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s12">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s12">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s12">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s12">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                            <div className="workelem col s12">
                                <div className="photo"></div>
                                <div>   
                                    <h5>Кондитер-технолог </h5>
                                    <p>Разрабатывает новейшие разновидности кондитерских изделий, улучшает имеющиеся технологические процессы, рецептуру их приготовления.</p>
                                    <h6 className="price">от 30 000 - 128 000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="prof center-align">
            <h1>Популярные профессии</h1>
            <div className="row">
                <div className="col s10 offset-s1">
                    <div className="col s2">
                        <div className="profelem"></div>
                    </div>
                    <div className="col s2">
                        <div className="profelem"></div>
                    </div>
                    <div className="col s2">
                        <div className="profelem"></div>
                    </div>
                    <div className="col s2">
                        <div className="profelem"></div>
                    </div>
                    <div className="col s2">
                        <div className="profelem"></div>
                    </div>
                    <div className="col s2">
                        <div className="profelem"></div>
                    </div>
                </div>
            </div>

        </div>
        <div className="container-custom">
            <h2>Рейтинг регионов</h2>
            <div className="row">  
                <div className="col s12">  
                    <div className="col s6">  
                        <img className = "responsive-img" alt="" src = {map}/>
                    </div>
                    <div className="col s6">  
                        <div className="container">
                            <div className="popup">
                                <h5>2 Регион</h5>
                                <p>по популярности вакансии электрика</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>О портале</h2>
            <div className="row">
                <div className="col s12">
                    <div className="col s8">
                        <h5>Центр занятости населения РС(Я) оказывает государственные услуги населению и работодателям в сфере содействия занятости, трудовой миграции</h5>
                    </div>
                    <div className="col s4">
                        <h5>Мобильное приложение</h5>
                        <p>Установите бесплатное приложение «Workque» на смартфон, чтобы оперативно узнавать о новых вакансиях и не пропускать отклики работодателей.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    );
  }
}

export default Carousel