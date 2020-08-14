export function signIn() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
				user: {
					name: "Lucas Henrique",
					email: "lucashenriqueblemos@gmail.com"
				}
			});
		}, 1000);
	});
}
