/**
 * @swagger
 * /api/invoice/{id}:
 *   delete:
 *     summary: Delete a invoice related to the invoice id given
 *     tags: [Invoices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the invoice we want to delete
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about deleted invoice
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/invoiceDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
