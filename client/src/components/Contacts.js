import React, { Component } from 'react';

export class Contacts extends Component {
	render() {
		return (
			<div>
				<div className="container-custom">
					<div className="center-align container">
						<h1>Контакты</h1>
						<h5>Интерактивный портал Центра занятости населения Республики Саха(Якутия)</h5>
					</div>
					<div className="row">
						<div className="col s12">
							<div className="col s6 banner-c valign-wrapper">
								<div>
									<h3>Центр занятости населения Республики Саха(Якутия)</h3>
									<p>ул. Петра Алексеева, 19/3, Якутск, Респ. Саха (Якутия)</p>
									<h4>Время работы:</h4>
									<div className="row">
										<div className="col s12">
											<div className="col s6">
												ПН-ПТ
												09:00-17:00
											</div>
											<div className="col s6">
												 СБ-ВС
												Выходной
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col s6 padding">
								<div className="streetview">
									<iframe title="street" src="https://www.google.com/maps/embed?pb=!4v1651627518942!6m8!1m7!1sXlM2JzrZ7Y1V9uF7Iirtqw!2m2!1d62.03596004116272!2d129.7377747691462!3f267.2643638380504!4f-6.945722241207676!5f0.7820865974627469"/>
								</div>
							</div>
						</div>
					</div>
					<h1>Филиал</h1>
					<div className="row">
						<div className="col s12">
							<div className="col s3">
								<div className="filial">
									<div className="filialemb">
										<p>ул. Петра Алексеева, 19/3, Якутск, Респ. Саха (Якутия)</p>
									</div>
								</div>
							</div>
							<div className="col s3">
								<div className="filial">
									<div className="filialemb">
										<p>ул. Петра Алексеева, 19/3, Якутск, Респ. Саха (Якутия)</p>
									</div>
								</div>
							</div>
							<div className="col s3">
								<div className="filial">
									<div className="filialemb">
										<p>ул. Петра Алексеева, 19/3, Якутск, Респ. Саха (Якутия)</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h1>Адрес</h1>
					<div className="map">
						<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.72344158201514!2d129.73568842936092!3d62.035978300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5bf64a4492e3267b%3A0x95f9d2f4509bb15f!2z0KbQtdC90YLRgCDQt9Cw0L3Rj9GC0L7RgdGC0Lgg0L3QsNGB0LXQu9C10L3QuNGPINCzLiDQr9C60YPRgtGB0LrQsA!5e0!3m2!1sru!2sru!4v1651628860842!5m2!1sru!2sru"/>
					</div>
					<div className="row">
						<div className="col s12">
							<div className="col s4">
								<div className="feedback"></div>
							</div>
							<div className="col s8">
								<h1>Обратная связь</h1>
								<div>
									{/*я умер*/}
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default Contacts