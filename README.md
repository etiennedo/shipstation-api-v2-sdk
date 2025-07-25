# ShipStation SDK

A TypeScript SDK for interacting with the ShipStation API v2. This SDK provides a simple and efficient way to integrate ShipStation's features into your applications.

## Installation

Install the SDK using npm:

```bash
npm install @etiennedo/shipstation-sdk
```

## Usage

### Configuration

Before using the SDK, configure it with your API key:

```typescript
import { OpenAPI, LabelsService } from '@etiennedo/shipstation-sdk';

// Set your API key
OpenAPI.TOKEN = 'your-api-key-here';

// Use the SDK services
LabelsService.listLabels().then((labels) => {
    console.log(labels);
});
```

### Example

Import the SDK and use its services:

```typescript
import { LabelsService } from '@etiennedo/shipstation-sdk';

LabelsService.listLabels().then((labels) => {
    console.log(labels);
});
```

## Development

### Building the SDK

To build the SDK, run:

```bash
npm run build
```

This will compile the TypeScript files into JavaScript and output them to the `dist/` directory.

### Running Tests

To run tests, use:

```bash
npm test
```

### Linting

To lint the codebase, run:

```bash
npm run lint
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
