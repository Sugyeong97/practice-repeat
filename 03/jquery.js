const URL = "https://fakerapi.it/api/v2/users?_quantity=100";
const getData = fetch(URL);

$(() => {
  getData
    .then((v) => v.json())
    .then((v) => v.data)
    .then((v) =>
      v.map(({ image, username, firstname, lastname, email }) => {
        $(".people").append(`
					<div class='card'>
						<div>
							<img src=${image} />
						</div>
						<div>💻 ${username}</div>
						<div>🧑🏻 ${firstname} ${lastname}</div>
						<div>✉️ ${email}</div>
					</div>
					`);
      })
    );
});
