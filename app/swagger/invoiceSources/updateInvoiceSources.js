/**
 * @swagger
 * /api/invoice-source/update-multiple:
 *   put:
 *     summary: This request modify informations of multiple invoice-sources into MongoDB and returns ids linked to them
 *     tags: [InvoiceSources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateInvoiceSourcesReq'
 *     responses:
 *       201:
 *         description: Success response with ids of updated invoice-sources
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateMultipleInvoiceSourcesResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice-source:
 *   put:
 *     summary: This request modify informations of one invoice-source into MongoDB and returns id linked
 *     tags: [InvoiceSources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateInvoiceSourceReq'
 *     responses:
 *       201:
 *         description: Success response with the id of updated invoice-source
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
