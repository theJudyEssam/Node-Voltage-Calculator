

# Node-Voltage-Calculator

Node-Voltage-Calculator is a web application designed to calculate the voltages in a DC circuit using the node analysis by inspection method. It simplifies the process of analyzing circuit voltages by providing a user-friendly interface where users can input circuit parameters and obtain voltage calculations quickly.

## Features

- **Node Analysis by Inspection**: Utilizes the node analysis method to compute voltages within the circuit.
- **Easy Input**: Users only need to enter the conductances of the circuit and sources.
- **Express.js Backend**: Utilizes Express.js for the backend implementation.
- **Vanilla Frontend**: The frontend is built using vanilla JavaScript for simplicity and efficiency.
- **Under Development**: The project is actively being developed, with more features and improvements to come.

## Usage

1. **Input Circuit Parameters**: Enter number of nodes of the circuit then enter the conductances of the circuit and the sources into the provided fields.
2. **Compute**: Click on the submit button to initiate the voltage calculation process.
3. **View Results**: Obtain the calculated voltages for the circuit nodes.

## Installation

To run the Node-Voltage-Calculator locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/Node-Voltage-Calculator.git
    ```

2. Navigate into the project directory:

    ```bash
    cd Node-Voltage-Calculator
    ```

3. Install dependencies:

    ```bash
    npm install express
    npm install mathjs
    npm install nodemon
    ```

4. Run the application:

    ```bash
    npm run devStart
    ```

5. Access the application in your web browser at `http://localhost:5000`.

## Contributing

Contributions to the Node-Voltage-Calculator project are welcomed and appreciated. If you have suggestions for features, bug fixes, or general improvements, feel free to open an issue or submit a pull request.
