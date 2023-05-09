/**
 * @swagger
 * /api/invoice-source/:
 *   get:
 *     summary: Returns a list of all invoice-sources
 *     tags: [InvoiceSources]
 *     parameters:
 *       - in: query
 *         name: invoiceCreationStatus
 *         schema:
 *           type: integer
 *           description: This number represents the status of the invoice creation, succeeded = 1, failed = 0, waiting process = 2
 *           example: 1
 *     responses:
 *       200:
 *         description: Success response with the list of invoice-sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleInvoiceSourceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-source/{id}:
 *   get:
 *     summary: Returns an invoice-source related to the invoice-source id given
 *     tags: [InvoiceSources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the invoice-source we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted invoice-source
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvoiceSourceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-source-summary/:
 *   get:
 *     summary: Returns a list of all invoice-sources but not with all data, for example without createdAt and updatedAt values
 *     tags: [InvoiceSources]
 *     parameters:
 *       - in: query
 *         name: invoiceCreationStatus
 *         schema:
 *           type: integer
 *           description: This number represents the status of the invoice creation, succeeded = 1, failed = 0, waiting process = 2
 *           example: 1
 *     responses:
 *       200:
 *         description: Success response with the list of invoice-sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleInvoiceSourceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-source-summary/{id}:
 *   get:
 *     summary: Returns an invoice-source related to the invoice-source id given but not with all data, for example without createdAt and updatedAt values
 *     tags: [InvoiceSources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the invoice-source we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted invoice-source
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvoiceSourceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
