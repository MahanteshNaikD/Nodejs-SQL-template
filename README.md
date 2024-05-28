# <center>***Project name***</center>

## Step by Step Guide to Clone and Configure the Repository

1. Clone the repository using the following command:
`git clone <repository_url>`

2. Install the required dependencies using the package manager of your choice (e.g., npm, yarn):

- `cd projectName`
- `npm install`


3. Create an environment file (`.env`) in the root directory of the project. Use the table guide below to set the required environment variables:

## Environment Variables

| Key        | Type     | Description                               |
|------------|----------|-------------------------------------------|
| VAR_NAME   | DataType | Description of the variable (optional).   |
| ANOTHER_VAR| DataType | Another description (optional).           |

Replace `VAR_NAME`, `DataType`, and the description with actual environment variable names, data types, and descriptions as required by your application.

## Configuration Files

Place all configuration files in the `config` folder:

- `config/file1.conf`
- `config/file2.json`

Include any relevant details or instructions within each configuration file.

## Hosting the Application in local

To host the application locally, run the following command:

`node index.js`

## Generating test report

To generate static analysis report run the following command

`npx eslint . --format html --output-file eslint-report.html`


