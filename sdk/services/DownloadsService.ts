/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DownloadsService {
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
    public static downloadFile(
        subdir: string,
        filename: string,
        dir: string,
        download?: string,
        rotation?: number,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
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
