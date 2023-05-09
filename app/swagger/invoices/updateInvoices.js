/**
 * @swagger
 * /api/invoice/update-multiple:
 *   put:
 *     summary: This request modify informations of multiple invoices into MongoDB and returns ids linked to them
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateInvoicesReq'
 *     responses:
 *       201:
 *         description: Success response with ids of updated invoices
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateMultipleInvoicesResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/invoice:
 *   put:
 *     summary: This request modify informations of one invoice into MongoDB and returns id linked
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateInvoiceReq'
 *     responses:
 *       201:
 *         description: Success response with the id of updated invoice
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
