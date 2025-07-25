import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DownloadsService {
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
    static downloadFile(subdir: string, filename: string, dir: string, download?: string, rotation?: number): CancelablePromise<Blob>;
}
