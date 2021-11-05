# Phone Number API

A simple express application that stores/updates/deletes/gets phone numbers 

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Setup

Clone the project using:

```bash
git clone https://github.com/KarmaBlackshaw/phone-number-api.git
```

Change the current directory into the project's directory:

```bash
cd phone-number-api
```

Install project dependencies:

```bash
npm install
```

Create database named **signalytics** then change config in the `.env` file

```env
DB_NAME=signalytics
DB_HOST=[host]
DB_USERNAME=[username]
DB_PASSWORD=[password]

APP_PORT=3000
```

Migrate the tables

```bash
npm run migrate
```

Start the application

```bash
npm run start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
