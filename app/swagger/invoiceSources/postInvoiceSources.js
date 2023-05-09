/**
 * @swagger
 * /api/invoice-source:
 *   post:
 *     summary: This request push an invoice-source into MongoDB and returns the id linked to it
 *     tags: [InvoiceSources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSimpleInvoiceSourceReq'
 *     responses:
 *       201:
 *         description: Success response with the id of the created invoice-source
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/simpleInvoiceSourceRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-source/create-multiple:
 *   post:
 *     summary: This request push multiple invoice-sources into MongoDB and returns ids linked to them
 *     tags: [InvoiceSources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createMultipleInvoiceSourceReq'
 *     responses:
 *       201:
 *         description: Success response with ids of created invoice-sources
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/multipleInvoiceSourceIdsResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-source/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested invoice-sources
 *     tags: [InvoiceSources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getInvoiceSourceByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested invoice-sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getInvoiceSourceByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-source-summary/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested invoice-sources but not with all data, for example without createdAt and updatedAt values
 *     tags: [InvoiceSources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getInvoiceSourceByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested invoice-sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getInvoiceSourceByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-source/delete-by-ids:
 *   post:
 *     summary: delete a list of invoice-sources by id
 *     tags: [InvoiceSources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/invoiceSourcesDeletedReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested invoice-sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/invoiceSourcesDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-source/get-selected-columns:
 *   post:
 *     summary: get the data from selected columns
 *     tags: [InvoiceSources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getInvoiceSourceSelectedColumnsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested invoice-sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getInvoiceSourceSelectedColumnsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-source/get-distinct-values:
 *   post:
 *     summary: For this request, we send a post request with a filter to select which invoice-sources we want to keep initially, and then request the distinct combined values taking into account the requested attributes.
 *     tags: [InvoiceSources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getInvoiceSourceDistinctValuesReq'
 *     responses:
 *       200:
 *         description: Success response with the list of distinct values
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getInvoiceSourceDistinctValuesRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
