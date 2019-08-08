import meow from 'meow'

const cli = meow(`
	Usage
	  $ ppu [command] [args]
	Example
	  $ ppu --help
	  🦄  🎠  🐴  🐎  ❤  ✨  🌈
	Options
	  --help -h       Help!
`, {
    boolean: [
        'copy'
    ],
    alias: {
        c: 'copy',
        s: 'skinTone'
    }
})

if (cli) {
    console.log('Hello World!')
}
