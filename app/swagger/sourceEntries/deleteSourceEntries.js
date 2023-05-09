/**
 * @swagger
 * /api/source-entry/{id}:
 *   delete:
 *     summary: Delete a source-entry related to the source-entry id given
 *     tags: [SourceEntries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the source-entry we want to delete
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about deleted source-entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sourceEntryDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
