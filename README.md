

# Bounty Hunter - Part One

This project is a simple web application that allows users to manage bounties. It is built with a Node.js and Express backend, and a React frontend. The application supports creating, viewing, and managing bounty data.

## Features

- **Create Bounties**: Users can add new bounties to the system.
- **View Bounties**: All bounties are displayed in a list.
- **Delete Bounties**: Users can remove bounties from the system.
- **Edit Bounties**: Users can update existing bounty information.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: In-memory array (for development/testing purposes)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zacharybaca/bounty-hunter-part-one.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bounty-hunter-part-one
   ```

3. Install dependencies for both the client and server:

   ```bash
   npm install
   ```

### Running the Application

1. Start the server:

   ```bash
   node app.js
   ```

2. Start the React development server:

   ```bash
   npm start
   ```

The application will be running on `http://localhost:3000` by default, with the backend API available on `http://localhost:9000`.

## API Endpoints

- **GET /api/bounties**: Retrieve a list of all bounties.
- **POST /api/bounties**: Add a new bounty.
- **DELETE /api/bounties/:id**: Delete a bounty by ID.
- **PUT /api/bounties/:id**: Update a bounty by ID.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions, feel free to open an issue in this repository.

