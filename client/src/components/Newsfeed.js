import React, { Component } from 'react';

export class Newsfeed extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s12">
					<div className="newsfeed col s4"></div>
					<div className="col s8">
						<h5>Реализация второго этапа проекта «ПУСК» в Усть-Алданском улусе</h5>
						<p>С 20 апреля 2022г. в Усть-Алданском улусе в рамках проекта «Передвижной учебно-строительный комбинат «Пуск»</p>
						<div className="row">
							<div className="col s12">
								<div className="col s6">
									Инна смит
								</div>
								<div className="col s6">
									12 мая 2022
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Newsfeed;