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
import { config } from 'dotenv';
import { OpenAPI } from '@etiennedo/shipstation-sdk';

config();

// Verify the API key is loaded correctly
if (!process.env.SS_API_KEY) {
    console.error('Error: SS_API_KEY environment variable is not set.');
    process.exit(1);
}

// Set your API key
OpenAPI.HEADERS = { 'API-Key': process.env.SS_API_KEY };
```

### Example: Fetching Shipments

Use the `ShipmentsService` to fetch shipments with pagination and sorting:

```typescript
import { ShipmentsService } from '@etiennedo/shipstation-sdk';
import { sort_dir } from '@etiennedo/shipstation-sdk/models/sort_dir';
import { shipments_sort_by } from '@etiennedo/shipstation-sdk/models/shipments_sort_by';

async function fetchShipments() {
    try {
        const response = await ShipmentsService.listShipments({
            sortBy: shipments_sort_by.CREATED_AT,
            sortDir: sort_dir.DESC,
        });

        console.log(`Fetched ${response.shipments.length} shipments:`);
        response.shipments.forEach((shipment, index) => {
            console.log(`${index + 1}. Shipment ID: ${shipment.shipment_id}, Status: ${shipment.shipment_status}`);
        });
    } catch (error) {
        console.error('Error fetching shipments:', error);
    }
}

fetchShipments();
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
