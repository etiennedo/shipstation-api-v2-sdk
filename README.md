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

```javascript
import * as ShipStation from "@etiennedo/shipstation-sdk";
import { config } from "dotenv";

config();

if (!process.env.SS_API_KEY) {
    console.error('Error: SS_API_KEY environment variable is not set.');
    process.exit(1);
}

// Tell the client to send an API-Key header on every request
ShipStation.OpenAPI.HEADERS = { 'API-Key': process.env.SS_API_KEY };
```

### Example: Fetching Shipments

Use the `ShipmentsService` to fetch shipments with pagination and sorting:

```javascript
import * as ShipStation from "@etiennedo/shipstation-sdk";
import { config } from "dotenv";

config();

if (!process.env.SS_API_KEY) {
    console.error('Error: SS_API_KEY environment variable is not set.');
    process.exit(1);
}

// Tell the client to send an API-Key header on every request
ShipStation.OpenAPI.HEADERS = { 'API-Key': process.env.SS_API_KEY };

async function fetchShipments() {
    try {
        // Fetch shipments with pagination and sorting
        const response = await ShipStation.ShipmentsService.listShipments({
            sortBy: ShipStation.shipments_sort_by.CREATED_AT,
            sortDir: ShipStation.sort_dir.DESC,
        });

        // Log the shipments
        console.log(`Fetched ${response.shipments.length} shipments:`);
        response.shipments.forEach((shipment, index) => {
            console.log(`${index + 1}. Shipment ID: ${shipment.shipment_id}, Status: ${shipment.shipment_status}`);
        });

        // Return the response for further processing if needed
        return response;
    } catch (error) {
        // Handle errors
        console.error('Error fetching shipments:', error);

        // Check if the error is an API error
        if (error.response) {
            console.error('API Error Response:', error.response.data);
        }

        throw error;
    }
}

fetchShipments()
    .then(response => {
        console.log('Shipments fetched successfully:', response);
    })
    .catch(error => {
        console.error('Failed to fetch shipments:', error);
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
