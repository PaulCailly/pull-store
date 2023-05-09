/**
 * @swagger
 * /api/source-entry/:
 *   get:
 *     summary: Returns a list of all source-entries
 *     tags: [SourceEntries]
 *     responses:
 *       200:
 *         description: Success response with the list of source-entries information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleSourceEntryGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-entry/{id}:
 *   get:
 *     summary: Returns an source-entry related to the source-entry id given
 *     tags: [SourceEntries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the source-entry we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted source-entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SourceEntryGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-entry-summary/:
 *   get:
 *     summary: Returns a list of all source-entries but not with all data, for example without createdAt and updatedAt values
 *     tags: [SourceEntries]
 *     responses:
 *       200:
 *         description: Success response with the list of source-entries information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleSourceEntryGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-entry-summary/{id}:
 *   get:
 *     summary: Returns an source-entry related to the source-entry id given but not with all data, for example without createdAt and updatedAt values
 *     tags: [SourceEntries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the source-entry we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted source-entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SourceEntryGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
