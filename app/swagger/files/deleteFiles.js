/**
 * @swagger
 * /api/file/{id}:
 *   delete:
 *     summary: Delete a file related to the file id given
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the file we want to delete
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about deleted file
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fileDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
