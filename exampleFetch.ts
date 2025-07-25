import { config } from 'dotenv';
import { OpenAPI } from './sdk/index';
import { ShipmentsService } from './sdk/index';
import { sort_dir } from './sdk/models/sort_dir';
import { shipments_sort_by } from './sdk/models/shipments_sort_by';

config();

// Verify the API key is loaded correctly
if (!process.env.SS_API_KEY) {
    console.error('Error: SS_API_KEY environment variable is not set.');
    process.exit(1);
}

// Tell the client to send an API-Key header on every request
OpenAPI.HEADERS = { 'API-Key': process.env.SS_API_KEY };

async function fetchShipments() {
    try {
        // Fetch shipments with pagination and sorting
        const response = await ShipmentsService.listShipments({
            sortBy: shipments_sort_by.CREATED_AT,
            sortDir: sort_dir.DESC,
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