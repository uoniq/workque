import React, { Component } from 'react';
import Newsfeed from "./Newsfeed";
export class News extends Component {
	render() {
		return (
			<div>
				<div className="container-custom">
					<div className="center-align container">
						<h1>Новости</h1>
						<h5>Интерактивный портал Центра занятости населения Республики Саха(Якутия)</h5>
					</div>
					<input placeholder="Начните поиск "/>
					<div className="row">
						<div className="col s12">
							<div className="col s8">
								<Newsfeed/>
								<Newsfeed/>
								<Newsfeed/>
								<Newsfeed/>
								<Newsfeed/>
								<Newsfeed/>
								<Newsfeed/>

							</div>
							<div className="col s4">
								<h5>Популярные новости</h5>
								<div className="row">
									<div className="col s12">
										<div className="col s4">
											<div className="popular"></div>
										</div>
										<div className="col s6">
											<p>Местные кадры с новой специальностью на промышленность</p>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col s12">
										<div className="col s4">
											<div className="popular"></div>
										</div>
										<div className="col s6">
											<p>Местные кадры с новой специальностью на промышленность</p>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col s12">
										<div className="col s4">
											<div className="popular"></div>
										</div>
										<div className="col s6">
											<p>Местные кадры с новой специальностью на промышленность</p>
										</div>
									</div>
								</div>
								<div className="adds col s8"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default News