/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: Delete a product related to the product id given
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the product we want to delete
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about deleted product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/productDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
