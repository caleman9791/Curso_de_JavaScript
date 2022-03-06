function booleanToSring(b) {
	let words =
		[
			b.toString()[0],
			b.toString()[1],
			b.toString()[2],
			b.toString()[3],
			b.toString()[4]
		];

	if (words[0] == "t") {
		for (let i in words)
			while (words[0] == "t")
				while (words[1] == "t")
					while (words[2] == "u")
						while (words[3] == "e")
							return words.slice(0, 20, "t", "r", "u", "e").join();
	}

	if (words[0] == "f") {
		for (let i in words)
			while (words[0] == "f")
				while (words[1] == "a")
					while (words[2] == "l")
						while (words[3] == "s")
							while (words[3] == "e")
								return words.slice(0, 20, "f", "a", "l", "s", "e").join();
	}
	if (words[0] == "d") {
		for (let i in words)
			while (words[0] == "d")
				while (words[1] == "u")
					while (words[2] == "d")
						while (words[3] == "e")

							return words.slice(0, 20, "d", "u", "d", "e").join();
	}

}

booleanToSring("t");