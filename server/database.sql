
create TABLE admin{
	id SERIAL PRIMARY KEY,
	login VARCHAR(255),

}
create TABLE admin{
	id SERIAL PRIMARY KEY,
	title VARCHAR(255),
	content VARCHAR(255),
	img VARCHAR(255)
	user_id INTEGER,
	FOREIGN KEY (user_id) REFERENCES admin (id)
}