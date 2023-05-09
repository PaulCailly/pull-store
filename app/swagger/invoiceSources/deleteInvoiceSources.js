/**
 * @swagger
 * /api/invoice-source/{id}:
 *   delete:
 *     summary: Delete a invoice-source related to the invoice-source id given
 *     tags: [InvoiceSources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the invoice-source we want to delete
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about deleted invoice-source
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/invoiceSourceDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
