import React, { Component } from 'react';
const logoF = require('./media/logoF.png')
export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="col s3">
                <img className = "responsive-img" alt="" src = {logoF}/>
                <h4>Workque</h4>
              </div>
              <div className="col s3">
                <h5>Соискатели</h5>
                <p>Топ профессий</p>
                <p>Рейтинг профессий в РС(Я)</p>
                <p>Видео-инструкция</p>
                <p>Статистика ваканций</p>
                <h5>Календарь</h5>
                <h5>Новости</h5>
              </div>
              <div className="col s3">
                <h5>Документы</h5>
                <p>Законы и нормативные акты</p>
                <p>Антикоррупционная деятельность</p>
                <p>Открытые данные </p>
                <p>Отчеты</p>
              </div>
              <div className="col s3">
                <h5>Полезные ресурсы</h5>
                <p>Роструд</p>
                <p>Минтруд России</p>
                <p>Портал госслужбы</p>
                <p>Онлайнинспекция.рф</p>
                <p>Соотечественники</p>
                <p>Торгово-промышленная палата РФ</p>
                <p>Роспотребнадзор</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © workque для вас старалась команда W
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer