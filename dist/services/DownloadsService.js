"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class DownloadsService {
    /**
     * Download file
     * Download labels and other shipment-related documents.
     * @param subdir
     * @param filename
     * @param dir
     * @param download
     * @param rotation
     * @returns binary The request was a success
     * @throws ApiError
     */
    static downloadFile(subdir, filename, dir, download, rotation) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v2/downloads/{dir}/{subdir}/{filename}',
            path: {
                'subdir': subdir,
                'filename': filename,
                'dir': dir,
            },
            query: {
                'download': download,
                'rotation': rotation,
            },
            errors: {
                400: `The request contained errors.`,
                404: `The specified resource does not exist.`,
                500: `The request was successful.`,
            },
        });
    }
}
exports.DownloadsService = DownloadsService;
