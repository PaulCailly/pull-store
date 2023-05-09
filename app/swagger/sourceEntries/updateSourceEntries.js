/**
 * @swagger
 * /api/source-entry/update-multiple:
 *   put:
 *     summary: This request modify informations of multiple source-entries into MongoDB and returns ids linked to them
 *     tags: [SourceEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateSourceEntriesReq'
 *     responses:
 *       201:
 *         description: Success response with ids of updated source-entries
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateMultipleSourceEntriesResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-entry:
 *   put:
 *     summary: This request modify informations of one source-entry into MongoDB and returns id linked
 *     tags: [SourceEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateSourceEntryReq'
 *     responses:
 *       201:
 *         description: Success response with the id of updated source-entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/simpleSourceEntryRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
