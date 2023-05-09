/**
 * @swagger
 * /api/invoice/:
 *   get:
 *     summary: Returns a list of all invoices
 *     tags: [Invoices]
 *     parameters:
 *       - in: query
 *         name: pdfCreationStatus
 *         schema:
 *           type: integer
 *           description: This number represents the status of the pdf creation, succeeded = 1, faile = 0, waiting process = 2
 *           example: 1
 *     responses:
 *       200:
 *         description: Success response with the list of invoices information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleInvoiceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice/{id}:
 *   get:
 *     summary: Returns an invoice related to the invoice id given
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the invoice we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted invoice
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvoiceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-summary/:
 *   get:
 *     summary: Returns a list of all invoices but not with all data, for example without createdAt and updatedAt values
 *     tags: [Invoices]
 *     parameters:
 *       - in: query
 *         name: pdfCreationStatus
 *         schema:
 *           type: integer
 *           description: This number represents the status of the pdf creation, succeeded = 1, faile = 0, waiting process = 2
 *           example: 1
 *     responses:
 *       200:
 *         description: Success response with the list of invoices information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleInvoiceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-summary/{id}:
 *   get:
 *     summary: Returns an invoice related to the invoice id given but not with all data, for example without createdAt and updatedAt values
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the invoice we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted invoice
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvoiceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
