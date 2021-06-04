# Tic-tac-toe

A server-side rendered game of Tic-tac-toe in Javascript using nodeJS, Express, Handlebars and Tailwind.

## Installation

Use [git](https://git-scm.com/downloads) to clone the [repo](https://github.com/bosh-code/tic-tac-toe)

```bash
git clone https://github.com/bosh-code/tic-tac-toe.git
```

Use [node](https://nodejs.org/en/download/) and npm to install dependancies Tic-tac-toe.

```bash
cd tic-tac-toe && npm i
```

## Running

There are a few ways to run the project. The tailwind.css file needs to be generated first using:

```bash
tailwindcss build ./src/tailwind.css -o ./public/tailwind.css
```

After generating the tailwind.css file, the project can be run using:

```bash
nodemon index
```
Alternatively, the tailwind.css file can be generator and the server started using the node script

```bash
npm run dev
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors
This project was developed at [EDA](https://devacademy.co.nz/) for a one-day group development project. The authors of the project are [Ryan Bosher](https://github.com/bosh-code/), [Joshua Lake](https://github.com/joshua-lake), [Dylan Toomey](https://github.com/dylan-toomey) and [Meli Waigant](https://github.com/Melina-w)

## License
[MIT](https://choosealicense.com/licenses/mit/)
