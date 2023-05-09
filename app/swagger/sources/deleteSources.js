/**
 * @swagger
 * /api/source/{id}:
 *   delete:
 *     summary: Delete a source related to the source id given
 *     tags: [Sources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the source we want to delete
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about deleted source
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sourceDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
