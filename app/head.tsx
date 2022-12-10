const emojis = ['👻', '⚜', '🔱', '🧿', '🔮', '♥', '💻']

const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)]

export default function Head() {
	return (
		<>
			<title>{`Vyrek ${randomEmoji()}`}</title>

			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='description' content='Vyrek dev portafolio!' />
			<meta name='language' content='EN' />
			<meta name='url' content='https://vyrek.dev' />
			<meta httpEquiv='Cache-Control' content='no-cache' />

			<meta content={`Vyrek ${randomEmoji()}`} property='og:title' />
			<meta content='Vyrek dev portafolio!' property='og:description' />
			<meta content='Vyrek' property='og:site_name' />
			<meta content='/icon.png' property='og:image' />

			<link rel='icon' href='/favicon.ico' />
		</>
	)
}

