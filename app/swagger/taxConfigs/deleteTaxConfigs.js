/**
 * @swagger
 * /api/tax-config/{id}:
 *   delete:
 *     summary: Delete a tax-config related to the tax-config id given
 *     tags: [TaxConfigs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the tax-config we want to delete
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about deleted tax-config
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/taxConfigDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
