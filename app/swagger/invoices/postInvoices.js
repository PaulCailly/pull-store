/**
 * @swagger
 * /api/invoice:
 *   post:
 *     summary: This request push an invoice into MongoDB and returns the id linked to it
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSimpleInvoiceReq'
 *     responses:
 *       201:
 *         description: Success response with the id of the created invoice
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/simpleInvoiceRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice/create-multiple:
 *   post:
 *     summary: This request push multiple invoices into MongoDB and returns ids linked to them
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createMultipleInvoiceReq'
 *     responses:
 *       201:
 *         description: Success response with ids of created invoices
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/multipleInvoiceIdsResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested invoices
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getInvoiceByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested invoices information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getInvoiceByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-summary/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested invoices but not with all data, for example without createdAt and updatedAt values
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getInvoiceByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested invoices information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getInvoiceByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice/delete-by-ids:
 *   post:
 *     summary: delete a list of invoices by id
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/invoicesDeletedReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested invoices information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/invoicesDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice/get-selected-columns:
 *   post:
 *     summary: get the data from selected columns
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getInvoiceSelectedColumnsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested invoices information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getInvoiceSelectedColumnsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice/get-distinct-values:
 *   post:
 *     summary: For this request, we send a post request with a filter to select which invoices we want to keep initially, and then request the distinct combined values taking into account the requested attributes.
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getInvoiceDistinctValuesReq'
 *     responses:
 *       200:
 *         description: Success response with the list of distinct values
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getInvoiceDistinctValuesRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
